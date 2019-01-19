### Requirements
Node.js 8.10.0 or higher and npm

### Installation and configuration
Install dependencies and copy .env file

```sh
$ git clone https://github.com/leepeuker/standesamt-discord-notifyer.git
$ cd standesamt-discord-notifyer/
$ npm install
$ cp .env.dist .env
```

### Run
```sh
$ node app.js
```

### Configuration (.env):
- WEBHOOK_CHANNEL_LOG: Discord Bot webhhook url for log channel (for logging responses without a bookable appointment)
- WEBHOOK_CHANNEL_NOTIFY: Discord Bot webhhook url for notify channel (for notifying about bookable appointment)
- STANDESAMT_URL: Standesamt appointment url (go to https://service.berlin.de/standort/327795/ and press button "Termin buchen" at the bottom of the page to generate it)
- STANDESAMT_COOKIE: Standesamt "Zmsappointment" cookie value from active browser session
