
class BaseUser {
    /**
     * @param {boolean} me - If the user is the client
     * 
     * @param {object} data - The data of the user
     * @param {boolean} data.verified - If the user is verified
     * @param {string} data.username - The username of the user
     * @param {string} data.discriminator - The discriminator of the user
     * @param {string} data.id - The ID of the user
     * 
     * @param {number} data.purchasedFlags - The purchased flags of the user
     * @param {number} data.publicFlags - The public flags of the user
     * @param {number} data.premiumUsageFlags - The premium usage flags of the user
     * @param {number} data.premiumType - The premium type of the user
     * @param {boolean} data.premium - If the user is premium
     * 
     * @param {string} data.phone - The phone of the user
     * @param {boolean} data.nsfwAllowed - If the user is allowed to use NSFW
     * @param {boolean} data.mobile - If the user is on a mobile device
     * @param {boolean} data.mfaEnabled - If the user has MFA enabled
     * @param {number} data.flags - The flags of the user
     * 
     * @param {string} data.email - The email of the user
     * @param {boolean} data.desktop - If the user is on a desktop device
     * 
     * @param {string} data.bio - The bio of the user
     * @param {string} data.bannerColor - The banner color of the user
     * @param {string} data.banner - The banner of the user
     * @param {string} data.avatarDecoration - The avatar decoration of the user
     * @param {string} data.avatar - The avatar of the user
     * @param {number} data.accentColor - The accent color of the user
     * 
     */
    constructor(me, data, client) {
        this.me = me;

        this.verified = data.verified;
        this.username = data.username;
        this.discriminator = data.discriminator;
        this.id = data.id;
        this.tag = `${this.username}#${this.discriminator}`;

        this.purchasedFlags = data.purchased_flags;
        this.publicFlags = data.public_flags;
        this.premiumUsageFlags = data.premium_usage_flags;
        this.premiumType = data.premium_type;
        this.premium = data.premium;

        this.phone = data.phone;
        this.nsfwAllowed = data.nsfw_allowed;
        this.mobile = data.mobile;
        this.mfaEnabled = data.mfa_enabled;
        this.flags = data.flags;

        this.email = data.email;
        this.desktop = data.desktop;

        this.bio = data.bio;
        this.bannerColor = data.banner_color;
        this.banner = data.banner;
        this.avatarDecoration = data.avatar_decoration;
        this.avatar = data.avatar;
        this.accentColor = data.accent_color;
    };
};

module.exports = BaseUser;