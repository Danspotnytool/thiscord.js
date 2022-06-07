
const BaseUser = require('./BaseUser.js');


class GuildMember {
    /**
     * @param {boolean} me - If the member is the client
     * @param {object} data - The member object
     * @param {string[]} data.roles - The roles of the member
     * @param {number} data.premiumSince - The premium since of the member in milliseconds
     * @param {boolean} data.pending - If the member is pending
     * @param {string} data.nick - The nick of the member
     * @param {boolean} data.mute - If the member is mute
     * @param {number} data.joinedAt - The joined at of the member in milliseconds
     * @param {string} data.hoistedRole - The hoisted role of the member
     * @param {number} data.flags - The flags of the member
     * @param {boolean} data.deaf - If the member is deaf
     * @param {number} data.communicationDisabledUntil - The communication disabled until of the member in milliseconds
     * @param {string} data.avatar - The avatar of the member
     */
    constructor(me, data, user, client) {
        this.me = me;

        if (data.roles) this.roles = data.roles;
        if (data.premiumSince) this.premiumSince = data.premiumSince;
        if (data.pending) this.pending = data.pending;
        if (data.nick) this.nick = data.nick;
        this.mute = data.mute;
        this.deaf = data.deaf;
        this.joinedAt = data.joinedAt;
        if (data.hoistedRole) this.hoistedRole = data.hoistedRole;
        this.flags = data.flags;
        this.communicationDisabledUntil;
        if (data.avatar) this.avatar = data.avatar;

        this.user = user;
    };
};

module.exports = GuildMember;