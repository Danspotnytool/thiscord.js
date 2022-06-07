
const GuildMember = require('./GuildMember');
const BaseUser = require('./BaseUser');

class Message {
    /**
     * @param {object} message - The message data
     * 
     * @param {string} message.webhook_id - The webhook id of the message (if it is a webhook)
     * 
     * @param {number} message.type - The type of the message
     * @param {boolean} message.tts - If the message is TTS
     * @param {number} message.timestamp - The timestamp of the message in milliseconds
     * @param {object} message.referencedMessage - The referenced message
     * @param {boolean} message.pinned - If the message is pinned
     * @param {string} message.nonce - The nonce of the message
     * @param {object[]} message.mentions - The mentions of the message
     * @param {object[]} message.mentionRoles - The mention roles of the message
     * @param {boolean} message.mentionEveryone - If the message mentions everyone
     * 
     * @param {object} message.member - The member of the message
     * @param {string[]} message.member.roles - The roles of the member
     * @param {string} message.member.premiumSince - The premium since of the member
     * @param {boolean} message.member.pending - If the member is pending
     * @param {string} message.member.nick - The nick of the member
     * @param {boolean} message.member.mute - If the member is muted
     * @param {number} message.member.joinedAt - The joined at of the member in milliseconds
     * @param {string} message.member.hoistedRole - The hoisted role of the member
     * @param {number} message.member.flags - The flags of the member
     * @param {boolean} message.member.deaf - If the member is deaf
     * @param {number} message.member.communicationDisabledUntil - The communication disabled until of the member in milliseconds
     * @param {string} message.member.avatar - The avatar of the member
     * 
     * @param {string} message.id - The id of the message
     * @param {number} message.flags - The flags of the message
     * @param {object[]} message.embeds - The embeds of the message
     * @param {number} message.editedTimestamp - The edited timestamp of the message in milliseconds
     * @param {string} message.content - The content of the message
     * @param {object[]} message.components - The components of the message
     * @param {string} message.channelId - The id of the channel
     * 
     * @param {object} message.author - The author of the message
     * @param {string} message.author.username - The username of the author
     * @param {number} message.author.publicFlags - The public flags of the author
     * @param {string} message.author.id - The id of the author
     * @param {string} message.author.discriminator - The discriminator of the author
     * @param {string} message.author.avatarDecoration - The avatar decoration of the author
     * @param {string} message.author.avatar - The avatar of the author
     * 
     * @param {object[]} message.attachments - The attachments of the message
     * @param {string} message.attachments.id - The id of the attachment
     */
    constructor(message, client) {
        if (message.webhook_id) this.webhookId = message.webhook_id;

        this.type = message.type;
        this.tts = message.tts;
        this.timestamp = new Date(message.timestamp).getTime();
        this.referencedMessage = message.referencedMessage ? new Message(message.referencedMessage, client) : null;
        this.pinned = message.pinned;
        this.nonce = message.nonce;
        if (message.nonce) this.nonce = message.nonce;
        this.mentions = message.mentions;
        this.mentionRoles = message.mention_roles;
        this.mentionEveryone = message.mention_everyone;

        if (message.member) {
            this.member = new GuildMember(
                (client.user.id === message.author.id),
                {
                    roles: message.member.roles ? message.member.roles : [],
                    premiumSince: message.member.premium_since,
                    pending: message.member.pending,
                    nick: message.member.nick,
                    mute: message.member.mute,
                    deaf: message.member.deaf,
                    joinedAt: new Date(message.member.joined_at).getTime(),
                    hoistedRole: message.member.hoisted_role,
                    flags: message.member.flags,
                    communicationDisabledUntil: new Date(message.member.communication_disabled_until).getTime(),
                    avatar: message.member.avatar
                },
                new BaseUser(
                    (client.user.id === message.author.id),
                    {
                        username: message.author.username,
                        publicFlags: message.author.public_flags,
                        id: message.author.id,
                        discriminator: message.author.discriminator,
                        avatarDecoration: message.author.avatar_decoration,
                        avatar: message.author.avatar
                    },
                    client
                ),
                client
            );
        };

        this.id = message.id;
        this.flags = message.flags;
        this.embeds = message.embeds;
        this.editedTimestamp = message.edited_timestamp;
        this.content = message.content;
        this.components = message.components;
        this.channelId = message.channel_id;

        this.author = new BaseUser(
            (client.user.id === message.author.id),
            {
                username: message.author.username,
                publicFlags: message.author.public_flags,
                id: message.author.id,
                discriminator: message.author.discriminator,
                avatarDecoration: message.author.avatar_decoration,
                avatar: message.author.avatar
            },
            client
        );

        this.attachments = message.attachments;
        this.guildId = message.guild_id;
    };
};

module.exports = Message;