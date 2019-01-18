### Installation and configuration
Install dependencies and copy .env file

```sh
$ npm install
$ cp .env.dist .env
```

### Configuration (.env):
- WEBHOOK_CHANNEL_LOG: Discord API webhhook url log channel (for logging request without bookable appointment)
- WEBHOOK_CHANNEL_LOG: Discord API webhhook url notify channel (for notifying about bookable appointment)
- STANDESAMT_URL: Standesamt appointment url (Go to https://service.berlin.de/standort/327795/ and press button "Termin buchen" at the bottom of the page to generate it)
- STANDESAMT_COOKIE: Standesamt "Zmsappointment" cookie value from active browser session