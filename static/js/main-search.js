'use strict';

$(document).ready(function() {
    $('.th-container-social').height($('article').height());
    $('#th-panel-social').stick_in_parent({offset_top: 35});

    $('#tipue_search_input').tipuesearch({
        'show': 10,
        'mode': 'json',
        'showURL': false,
        'descriptiveWords': 75,
        'highlightEveryTerm': true,
        'contentLocation': '/tipue_search.json'
    });
});
