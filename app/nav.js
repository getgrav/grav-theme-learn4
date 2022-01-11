import $ from 'jquery';

// allow keyboard control for prev/next links
$(document).on('click', '.nav-prev, .nav-next', (event) => {
    const target = $(event.currentTarget);
    window.location.href = target.attr('href');
});

$(document).on('keydown', (event) => {
    const isAlgoliaOpen = !$('[data-algolia-pro][style="display: none;"]').length;

    if (!isAlgoliaOpen) {
        const item = event.which === 37 ? $('a.nav-prev') : (event.which === 39 ? $('a.nav-next') : null);
        if (item) {
            item.click();
        }
    }
});
