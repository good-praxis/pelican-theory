/*
Part of "mg" by Luca Chiricozzi.
mg is released under the MIT License
https://github.com/lucachr/pelican-mg
*/

'use strict';

$(document).ready(function() {
    $('.mg-container-social').height($('article').height());
    $('#mg-panel-social').stick_in_parent({offset_top: 35});
});
