
const OAuthStrategy = require('passport-oauth').OAuth2Strategy;

/**
 * Salesforce strategy
 * 
 * Options:
 *  - clientID
 *  - clientSecret
 *  - callbackURL
 *  - scope
 *  <optional>
 *  - passReqToCallback (default false) - directs passport to send the request object 
 *                                        to the verfication callback

 * 
 * Examples:
 * 
 
 */
class Strategy extends OAuthStrategy{
    constructor(options, verify) {
        options = options || {};
        options.tokenURL = 'https://login.salesforce.com/services/oauth2/token';
        options.authorizationURL = 'https://login.salesforce.com/services/oauth2/authorize';
        options.userAuthorizationURL = 'https://login.salesforce.com/services/oauth2/userinfo';
        super(options, verify);
        this.name = 'salesforce';
        this._passReqToCallback = options.passReqToCallback || false;
        //this._oauth2.useAuthorizationHeaderforGET(true);
    }

    /**
     * returns user profile for passport
     * @param {*} accessToken 
     * @param {*} done 
     */
    async userProfile(accessToken, done) {
        this._oauth2.get('https://login.salesforce.com/services/oauth2/userinfo', accessToken, (err, body, res) => {
            if (err) {
                return done(new InternalOAuthError('failed to fetch user profile', err));
            }

            try {
                const json = JSON.parse(body);
                const profile = { 
                    ...{provider: 'salesforce'},
                    ...json,
                };

                return done(null, profile);
            } catch (e) {
                return done(new InternalOAuthError('failed to fetch user profile', err));
            }
            
        });
    }
}

module.exports = Strategy;