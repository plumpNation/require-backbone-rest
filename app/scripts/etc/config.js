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
        'jquery'              : '../components/jquery/jquery',
        'backbone'            : '../components/backbone-amd/backbone',
        'underscore'          : '../components/lodash/lodash',
        'underscore.string'   : '../components/underscore.string/lib/underscore.string'
    }
};
