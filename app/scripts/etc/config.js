/*jshint -W079, unused:false */
var _serviceUrl = 'http://localhost/dev/API/',
    Config = {
        Books: {
            Api: _serviceUrl + 'books/'
        }
    },

    App = {},

    require = {
        baseUrl: './scripts',
        shim: {
            'underscore.string': {
                deps: ['underscore']
            }
        },
        waitSeconds: 5,
        paths: {
            'q'                   : '../components/q/q',
            'text'                : '../components/requirejs-text/text',
            'jquery'              : '../components/jquery/jquery',
            'mustache'            : '../components/mustache/mustache',
            'backbone'            : '../components/backbone-amd/backbone',
            'underscore'          : '../components/lodash/lodash',
            'underscore.string'   : '../components/underscore.string/lib/underscore.string'
        }
    };
