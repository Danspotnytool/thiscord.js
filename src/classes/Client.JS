// @ts-check

const WebSocket = require('ws');
const EventEmitter = require('node:events');

class Client extends EventEmitter {
    /**
     * The Client class
     * 
     * @class Client
     * @description The base class for the client
     * @param {Object} options - The options for the client
     * @param {any} options.intents - The intents of the client (see https://discordapp.com/developers/docs/topics/gateway#gateway-intents) (Optional the bot is not an application)
     * @param {object} options.browser - The browser object (Optional)
     * @param {string} options.browser.os - The OS of the browser (Optional)
     * @param {string} options.browser.name - The name of the browser (Optional)
     * @param {string} options.browser.device - The device of the browser (Optional)
     * 
     * @example
     * const ThisCord = require('@danspotnytool/thiscord.js');
     * const client = new ThisCord.Client();
     * 
     * client.on('ready', () => {
     *     console.log('Ready!');
     * });
     * 
     * client.on('messageCreate', (msg) => {
     *     console.log(`${msg.author.username}: ${msg.content}`);
     * });
     * 
     * client.login('TrustMeThisTokenIsLegit');
     */
    constructor(options) {
        super();
        // this.intents = options.intents || null;
        // this.browser = options.browser || {};

        this.ws = null;
    };

    /**
     * To login the client
     * @param {string} token - The token of the bot
     */
    async login(token) {
        this.token = token;
        this.ws = new WebSocket('wss://gateway.discord.gg/?encoding=json&v=9');

        this.ws.on('open', () => {
            this.ws.send(JSON.stringify({
                op: 2,
                d: {
                    token: this.token,
                    properties: {
                        $os: 'windows',
                        $browser: 'chrome',
                        $device: 'pc'
                    }
                }
            }));

            this.ws.on('message', (message) => {
                const payload = JSON.parse(message.toString('utf8'));
                switch (payload.op) {
                    case 10: {
                        const { heartbeat_interval } = payload.d;
                        setInterval(() => {
                            this.ws.send(JSON.stringify({
                                op: 1,
                                d: null
                            }));
                        }, heartbeat_interval);
                        break;
                    };
                };

                // Event emitters
                switch (payload.t) {
                    case 'READY': {
                        require('../events/READY.js').handler(this, payload);
                        return this;
                    };
                    case 'MESSAGE_CREATE': {
                        require('../events/MESSAGE_CREATE.js').handler(this, payload);
                        return this;
                    };
                };
            });
        });
    };
};

module.exports = Client;