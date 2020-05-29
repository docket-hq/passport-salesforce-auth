const mocha = require('mocha');
const should = require('should');
const SalesforceStrategy = require('../index').Strategy;

describe( 'passport-dropbox-auth', function() {
    describe('module', function() {  
        it('should export class', function() {
            SalesforceStrategy.Strategy.should.be.an.instanceOf(Object);
        })
    })
  });

describe('SalesforceStrategy', function() {
    describe('strategy param tests', function () {
        it('should return false for passReqToCallback', function () {
            const strategy = new SalesforceStrategy({
                clientID: 'ABC123',
                clientSecret: 'secret'
            }, function () { });

            strategy._passReqToCallback.should.equal(false);
        });

        it('should return true for passReqToCallback', function () {
            const strategy = new SalesforceStrategy({
                clientID: 'ABC123',
                clientSecret: 'secret',
                passReqToCallback: true
            }, function () { });

            strategy._passReqToCallback.should.equal(true);
        });
    });
})