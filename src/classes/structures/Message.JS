
// {
//     type: 0,
//     tts: false,
//     timestamp: '2022-06-07T03:04:33.503000+00:00',
//     referenced_message: null,
//     pinned: false,
//     nonce: '983567111651590144',
//     mentions: [],
//     mention_roles: [],
//     mention_everyone: false,
//     member: {
//       roles: [
//         '970634132218609664',
//         '970823627857596466',
//         '982209955258060820',
//         '982191413913600040',
//         '981744353103974491',
//         '970631154816385035',
//         '982997707029372958'
//       ],
//       premium_since: null,
//       pending: false,
//       nick: 'Rodugh',
//       mute: false,
//       joined_at: '2022-05-03T02:27:34.305083+00:00',
//       hoisted_role: '970634132218609664',
//       flags: 0,
//       deaf: false,
//       communication_disabled_until: null,
//       avatar: null
//     },
//     id: '983567112876486756',
//     flags: 0,
//     embeds: [],
//     edited_timestamp: null,
//     content: 'HAHAHA',
//     components: [],
//     channel_id: '981564056026636318',
//     author: {
//       username: 'Rodnill G.',
//       public_flags: 64,
//       id: '836056627563069441',
//       discriminator: '4964',
//       avatar_decoration: null,
//       avatar: 'a_c9f2257723de7210331c6e201b16c14f'
//     },
//     attachments: [],
//     guild_id: '970483236646031410'
// }

class Message {
    /**
     * @param {object} message - The message data
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
        this.type = message.type;
        this.tts = message.tts;
        this.timestamp = new Date(message.timestamp).getTime();
        this.referencedMessage = message.referencedMessage ? new Message(message.referencedMessage, client) : null;
        this.pinned = message.pinned;
        this.nonce = message.nonce;
        this.mentions = message.mentions;
        this.mentionRoles = message.mention_roles;
        this.mentionEveryone = message.mention_everyone;

        this.member = {
            roles: message.member.roles,
            premiumSince: message.member.premium_since,
            pending: message.member.pending,
            nick: message.member.nick,
            mute: message.member.mute,
            joinedAt: new Date(message.member.joined_at).getTime(),
            hoistedRole: message.member.hoisted_role,
            flags: message.member.flags,
            deaf: message.member.deaf,
            communicationDisabledUntil: new Date(message.member.communication_disabled_until).getTime(),
            avatar: message.member.avatar
        };

        this.id = message.id;
        this.flags = message.flags;
        this.embeds = message.embeds;
        this.editedTimestamp = message.edited_timestamp;
        this.content = message.content;
        this.components = message.components;
        this.channelId = message.channel_id;

        this.author = {
            username: message.author.username,
            publicFlags: message.author.public_flags,
            id: message.author.id,
            discriminator: message.author.discriminator,
            avatarDecoration: message.author.avatar_decoration,
            avatar: message.author.avatar
        };

        this.attachments = message.attachments;
        this.guildId = message.guild_id;
    };
};

module.exports = Message;