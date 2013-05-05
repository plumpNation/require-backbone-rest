var Config = {
    Service: {
        url: 'http://localhost/dev/API/'
    }
};

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
