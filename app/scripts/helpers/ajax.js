define(['jquery', 'underscore.string'], function ($, _) {
    'use strict';

    var serviceUrl = 'http://localhost/dev/API/%s/',

        get = function (controller) {
            return $.getJSON(_.sprintf(serviceUrl, controller));
        };

    return {
        'get': get
    };
});
