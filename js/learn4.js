jQuery(document).ready(function () {

    // // set a variable for the anchor link which is the location.hash
    // var anchorLink = $(window.location.hash);
    // // test to see if the link is a anchor link, if not the length will have no value, this is done to avoid js errors on non anchor links
    // if ( anchorLink.length ) {
    //     // set an element as the fixed entity, header in this case and get its height
    //     var offsetSize = $("#top-bar").innerHeight();
    //     // fire the animation from the top of the page to the anchor link offsetting by the fixed elements height, the number is the speed of the animation
    //     $("html, body").animate({scrollTop: anchorLink.offset().top - offsetSize }, 500);
    // }



    // jQuery('[data-sidebar-toggle]').on('click', function () {
    //     jQuery(document.body).toggleClass('sidebar-hidden');
    //     sidebarStatus = (jQuery(document.body).hasClass('sidebar-hidden') ? 'closed' : 'open');
    //
    //     return false;
    // });

    jQuery('.toc-toggle').on('click', function() {
        jQuery('.page-toc').toggleClass('toc-closed');
    });

    jQuery('[data-clear-history-toggle]').on('click', function () {
        sessionStorage.clear();
        location.reload();
        return false;
    });

    // jQuery('[data-search-toggle]').on('click', function () {
    //     if (sidebarStatus == 'closed') {
    //         jQuery('[data-sidebar-toggle]').trigger('click');
    //         jQuery(document.body).removeClass('searchbox-hidden');
    //         searchStatus = 'open';
    //
    //         return false;
    //     }
    //
    //     jQuery(document.body).toggleClass('searchbox-hidden');
    //     searchStatus = (jQuery(document.body).hasClass('searchbox-hidden') ? 'closed' : 'open');
    //
    //     return false;
    // });

    var ajax;
    jQuery('[data-search-input]').on('input', function () {
        var input = jQuery(this),
            value = input.val(),
            items = jQuery('[data-nav-id]');

        items.removeClass('search-match');
        if (!value.length) {
            $('ul.topics').removeClass('searched');
            items.css('display', 'block');
            sessionStorage.removeItem('search-value');
            $(".highlightable").unhighlight({element: 'mark'})
            return;
        }

        sessionStorage.setItem('search-value', value);
        $(".highlightable").unhighlight({element: 'mark'}).highlight(value, {element: 'mark'});

        if (ajax && ajax.abort) ajax.abort();
        ajax = jQuery.ajax({
            url: input.data('search-input') + ':' + value
        }).done(function (data) {
            if (data && data.results && data.results.length) {
                items.css('display', 'none');
                $('ul.topics').addClass('searched');
                data.results.forEach(function (navitem) {
                    jQuery('[data-nav-id="' + navitem + '"]').css('display', 'block').addClass('search-match');
                    jQuery('[data-nav-id="' + navitem + '"]').parents('li').css('display', 'block');
                });
            }
            ;

        });
        jQuery('[data-search-clear]').on('click', function () {
            jQuery('[data-search-input]').val('').trigger('input');
            sessionStorage.removeItem('search-input');
            $(".highlightable").unhighlight({element: 'mark'})
        });
    });

    if (sessionStorage.getItem('search-value')) {
        jQuery(document.body).removeClass('searchbox-hidden');
        jQuery('[data-search-input]').val(sessionStorage.getItem('search-value'));
        jQuery('[data-search-input]').trigger('input');
    }

    // allow keyboard control for prev/next links
    jQuery(function () {
        jQuery('.nav-prev').click(function () {
            location.href = jQuery(this).attr('href');
        });
        jQuery('.nav-next').click(function () {
            location.href = jQuery(this).attr('href');
        });
    });

    jQuery(document).keydown(function (e) {
        // prev links - left arrow key
        if (e.which == '37') {
            jQuery('.nav.nav-prev').click();
        }

        // next links - right arrow key
        if (e.which == '39') {
            jQuery('.nav.nav-next').click();
        }
    });

});

jQuery(window).on('load', function () {

    // store this page in session
    sessionStorage.setItem(jQuery('body').data('url'), 1);

    // loop through the sessionStorage and see if something should be marked as visited
    for (var url in sessionStorage) {
        if (sessionStorage.getItem(url) == 1) jQuery('[data-nav-id="' + url + '"]').addClass('visited');
    }

    $(".highlightable").highlight(sessionStorage.getItem('search-value'), {element: 'mark'});
});


jQuery.extend({
    highlight: function (node, re, nodeName, className) {
        if (node.nodeType === 3) {
            var match = node.data.match(re);
            if (match) {
                var highlight = document.createElement(nodeName || 'span');
                highlight.className = className || 'highlight';
                var wordNode = node.splitText(match.index);
                wordNode.splitText(match[0].length);
                var wordClone = wordNode.cloneNode(true);
                highlight.appendChild(wordClone);
                wordNode.parentNode.replaceChild(highlight, wordNode);
                return 1; //skip added node in parent
            }
        } else if ((node.nodeType === 1 && node.childNodes) && // only element nodes that have children
            !/(script|style)/i.test(node.tagName) && // ignore script and style nodes
            !(node.tagName === nodeName.toUpperCase() && node.className === className)) { // skip if already highlighted
            for (var i = 0; i < node.childNodes.length; i++) {
                i += jQuery.highlight(node.childNodes[i], re, nodeName, className);
            }
        }
        return 0;
    }
});

jQuery.fn.unhighlight = function (options) {
    var settings = {
        className: 'highlight',
        element: 'span'
    };
    jQuery.extend(settings, options);

    return this.find(settings.element + "." + settings.className).each(function () {
        var parent = this.parentNode;
        parent.replaceChild(this.firstChild, this);
        parent.normalize();
    }).end();
};

jQuery.fn.highlight = function (words, options) {
    var settings = {
        className: 'highlight',
        element: 'span',
        caseSensitive: false,
        wordsOnly: false
    };
    jQuery.extend(settings, options);

    if (!words) {
        return;
    }

    if (words.constructor === String) {
        words = [words];
    }
    words = jQuery.grep(words, function (word, i) {
        return word != '';
    });
    words = jQuery.map(words, function (word, i) {
        return word.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
    });
    if (words.length === 0) {
        return this;
    }

    var flag = settings.caseSensitive ? "" : "i";
    var pattern = "(" + words.join("|") + ")";
    if (settings.wordsOnly) {
        pattern = "\\b" + pattern + "\\b";
    }
    var re = new RegExp(pattern, flag);

    return this.each(function () {
        jQuery.highlight(this, re, settings.element, settings.className);
    });
};

var h = document.documentElement,
    b = document.body,
    st = 'scrollTop',
    sh = 'scrollHeight',
    progress = document.querySelector('.progress'),
    scroll;

document.addEventListener('scroll', function() {
    scroll = (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 100;
    progress.style.setProperty('--scroll', scroll + '%');
});
