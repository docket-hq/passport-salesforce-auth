[![CircleCI](https://circleci.com/gh/jnbarlow/passport-salesforce-auth.svg?style=shield)](https://circleci.com/gh/jnbarlow/passport-salesforce-auth)

# passport-salesforce-auth
Passport strategy for Salesforce that includes request object passthrough.

## Installation
```bash
npm install passport-salesforce-auth
```

## Usage
Aside from the standard required fields, this module allows to optionally have passport include the express request object into the verification function (through the first variable).

**Parameters:**
- **clientID** - Salesforce consumer key
- **clientSecret** - Salesforce consumer secret
- **callbackURL** - oauth callback url

**Optional Parameters:**
- **passReqToCallback** (default false) - directs passport to send the request object to the verfication callback

## Examples

**With request**
```javascript
const strategy = new SalesforceStrategy(
    {
        clientID: '<clientID>',
        clientSecret: '<clientSecret>',
        callbackURL: '<callbackURL>',
        passReqToCallback: true
    },
    async (request, accessToken, refreshToken, profile, done) => {
        
        done(null, <user.id>);
    }
);
```
## Profile Response:
```javascript
{
    provider: 'salesforce',
    sub: 'https://login.salesforce.com/id/<id>/<id>',
    user_id: '<id>',
    organization_id: '<org_id>',
    preferred_username: '<email>',
    nickname: 'john',
    name: 'John Barlow',
    email: '<email>',
    email_verified: true,
    given_name: 'John',
    family_name: 'Barlow',
    zoneinfo: 'America/Los_Angeles',
    photos: {
        picture: 'https://c.na172.content.force.com/profilephoto/005/F',
        thumbnail: 'https://c.na172.content.force.com/profilephoto/005/T'
    },
    profile: 'https://na172.salesforce.com/<id>',
    picture: 'https://c.na172.content.force.com/profilephoto/005/F',
    address: { country: 'US' },
    urls: {
        enterprise: 'https://na172.salesforce.com/services/Soap/c/{version}/<id>',
        metadata: 'https://na172.salesforce.com/services/Soap/m/{version}/<id>',
        partner: 'https://na172.salesforce.com/services/Soap/u/{version}/<id>',
        rest: 'https://na172.salesforce.com/services/data/v{version}/',
        sobjects: 'https://na172.salesforce.com/services/data/v{version}/sobjects/',
        search: 'https://na172.salesforce.com/services/data/v{version}/search/',
        query: 'https://na172.salesforce.com/services/data/v{version}/query/',
        recent: 'https://na172.salesforce.com/services/data/v{version}/recent/',
        tooling_soap: 'https://na172.salesforce.com/services/Soap/T/{version}/<id>',
        tooling_rest: 'https://na172.salesforce.com/services/data/v{version}/tooling/',
        profile: 'https://na172.salesforce.com/<id>',
        feeds: 'https://na172.salesforce.com/services/data/v{version}/chatter/feeds',
        groups: 'https://na172.salesforce.com/services/data/v{version}/chatter/groups',
        users: 'https://na172.salesforce.com/services/data/v{version}/chatter/users',
        feed_items: 'https://na172.salesforce.com/services/data/v{version}/chatter/feed-items',
        feed_elements: 'https://na172.salesforce.com/services/data/v{version}/chatter/feed-elements'
    },
    active: true,
    user_type: 'STANDARD',
    language: 'en_US',
    locale: 'en_US',
    utcOffset: -28800000,
    updated_at: '2020-05-29T21:39:24Z',
    is_app_installed: true
    }
```
