"use strict";

var fs = require('fs');
var path = require('path');
var assert = require('assert');
var Promise = require('bluebird');

var helpers = require('./helpers');

describe('router -', function () {
    var testRoute = helpers.RouteTester('fixtures/basic');

    it('route can be defined with just a path and a single adapter', function (done) {
        var route = {
            path: '/bar',
            adapters: [ function () { return Promise.resolve({}); }]
        };
        testRoute(route, function (response) {
            assert.equal(response.statusCode, 200);
            done();
        });
    });

});
