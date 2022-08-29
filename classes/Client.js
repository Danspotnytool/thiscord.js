
const WebSocket = require('ws');
const { TypedEmitter } = require("tiny-typed-emitter");
const fs = require('fs');
/**
 * @typedef {Object} ClientOptions
 * 
 * @property {Object} api - Options for the API
 * @property {String} api.version - The version of the API to use
 * 
 * @property {Any} intents - The intents of the client (see https://discordapp.com/developers/docs/topics/gateway#gateway-intents) (Optional if the bot is an a account bot)
 * 
 * @property {Object} browser - The browser object (Optional)
 * @property {String} browser.os - The OS of the browser (Optional)
 * @property {String} browser.name - The name of the browser (Optional)
 * @property {String} browser.device - The device of the browser (Optional)
 */

/**
 * @extends {TypedEmitter<{
        'ready': (value: Client) => void
        'messageCreate': (message: string) => void
   }> & ClientProperties}
 * 
 * @property {String} token - The token of the client
 * @property {ClientOptions} options
 */
class Client extends TypedEmitter {
    /**
     * @param {ClientOptions} options
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
        if (options) {
            if (typeof options !== 'object') {
                throw new Error('Options must be an object');
            };
        };

        /**
         * @type {ClientOptions}
         */
        this.options = options ? {
            api: {
                version: options.api ? options.api.version : '6'
            },
            browser: {
                os: options.browser ? options.browser.os : 'windows',
                name: options.browser ? options.browser.name : 'chrome',
                device: options.browser ? options.browser.device : 'pc'
            },
            intents: options.intents ? options.intents : 131071
        } : {
            api: {
                version: '6'
            },
            browser: {
                os: 'windows',
                name: 'chrome',
                device: 'pc'
            }
        };

        this.ws = {};

        /** @type {Number} */
        this.v = null;
        /** @type {String} */
        this.user_settings_proto = null;
        /** @type {import("./types/user_guild_settings").user_guild_settings} */
        this.user_settings = null;
        /** @type {import("./types/user_guild_settings").user_guild_settings} */
        this.user_guild_settings = null;
        /** @type {import("./types/client_user").client_user} */
        this.user = null;
        /** @type {*} */
        this.tutorial = null;
        /** @type {import("./types/session").session[]} */
        this.sessions = null;
        /** @type {String} */
        this.session_type = null;
        /** @type {String} */
        this.session_id = null;
        /** @type {String} */
        this.resume_gateway_url = null;
        /** @type {import("./types/relationship").relationship[]} */
        this.relationships = null;
        /** @type {import("./types/read_state").read_state[]} */
        this.read_state = null;
        /** @type {import("./types/private_channel").private_channel[]} */
        this.private_channels = null;
        /** @type {import("./types/presence").presence[]} */
        this.presences = null;

        /**
         * I have no idea what to do with this, the gateway just returns a list and not an Array of notes
         * 
         * @example
         * {
         *      "userID": "A note for this user",
         *      "anotherUserID": "Also a note for this user",
         *      ...
         * }
         * 
         * @type {Object}
         */
        this.notes = null;

        /** @type {import("./types/guild").guild[]} */
        this.guilds = null;
        /** @type {import("./types/guild_join_request").guild_join_request[]} */
        this.guild_join_requests = null;

        /**
         * What the heck is this?
         * 
         * @type {*[]}
         */
        this.guild_experiments = null;

        /** @type {String[]} */
        this.geo_ordered_rtc_regions = null;
        /** @type {Number} */
        this.friend_suggestion_count = null;
        /** @type {Number[][]} */
        this.experiments = null;
        /** @type {String} */
        this.country_code = null;
        /** 
         * @type {{
         *      personalization: {
         *          consented: Boolean
         *      }
         * }}
         */
        this.consents = null;
        /** @type {import("./types/connected_account").connected_account[]} */
        this.connected_accounts = null;
        /** @type {String} */
        this.auth_session_id_hash = null;
        /** @type {{}} */
        this.audio_context_settings = null;
        /** @type {String[]} */
        this._trace = null;
    };

    /**
     * @param {String} token
     * @returns {Promise<void>}
     */
    async login(token) {
        this.token = token;
        this.ws = new WebSocket(`wss://gateway.discord.gg/?v=${this.options.api.version}&encoding=json`);

        this.ws.on('open', () => {
            this.ws.send(JSON.stringify({
                op: 2,
                d: {
                    token: this.token,
                    intents: this.options.intents,
                    properties: {
                        os: this.options.browser.os,
                        browser: this.options.browser.name,
                        device: this.options.browser.device
                    }
                }
            }));
        });

        this.ws.on('message', (message) => {
            const payload = JSON.parse(message.toString('utf8'));
            switch (payload.op) {
                case 10: {
                    const { heartbeat_interval } = payload.d;
                    console.log(`Heartbeat interval: ${heartbeat_interval}`);
                    setInterval(() => {
                        this.ws.send(JSON.stringify({
                            op: 1,
                            d: null
                        }));
                    }, heartbeat_interval);
                    break;
                };
            };

            switch (payload.t) {
                case 'READY': {
                    for (const key of Object.keys(this)) {
                        if (payload.d[key]) {
                            this[key] = payload.d[key];
                        };
                    };
                    this.emit('ready', this);
                    break;
                };
                case 'MESSAGE_CREATE': {
                    // this.emit('messageCreate', payload.d);
                    break;
                };
            };
        });
    };
};
module.exports = Client;