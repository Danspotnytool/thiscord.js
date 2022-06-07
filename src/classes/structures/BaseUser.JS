
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

        if (data.verified) this.verified = data.verified;
        this.username = data.username;
        this.discriminator = data.discriminator;
        this.id = data.id;
        this.tag = `${this.username}#${this.discriminator}`;

        if (data.purchased_flags) this.purchasedFlags = data.purchased_flags;
        if (data.public_flags) this.publicFlags = data.public_flags;
        if (data.premium_usage_flags) this.premiumUsageFlags = data.premium_usage_flags;
        if (data.premium_type) this.premiumType = data.premium_type;
        if (data.premium) this.premium = data.premium;

        if (data.phone) this.phone = data.phone;
        if (data.nsfw_allowed) this.nsfwAllowed = data.nsfw_allowed;
        if (data.mobile) this.mobile = data.mobile;
        if (data.mfa_enabled) this.mfaEnabled = data.mfa_enabled;
        if (data.flags) this.flags = data.flags;

        if (data.email) this.email = data.email;
        if (data.desktop) this.desktop = data.desktop;

        if (data.bio) this.bio = data.bio;
        if (data.banner_color) this.bannerColor = data.banner_color;
        if (data.banner) this.banner = data.banner;
        if (data.avatar_decoration) this.avatarDecoration = data.avatar_decoration;
        if (data.avatar) this.avatar = data.avatar;
        if (data.accent_color) this.accentColor = data.accent_color;
    };
};

module.exports = BaseUser;