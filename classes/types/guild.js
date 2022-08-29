
/**
 * @typedef {Object} guild
 * 
 * @property {String} name
 * @property {String} vanity_url_code
 * @property {String} icon
 * @property {Number} max_members
 * @property {Number} afk_timeout
 * @property {String} preferred_locale
 * 
 * @property {import("./channel").channel[]} channels
 * 
 * @property {import("./member").member[]} members
 * 
 * @property {import("./emoji").emoji[]} emojis
 * 
 * @property {import("./emoji").emoji[]} emojis
 * 
 * @property {String[]} features
 * @property {Number | Null} hub_type
 * @property {*[]} stage_instances
 * @property {Boolean} premium_progress_bar_enabled
 * @property {Number} premium_tier
 * @property {String} joined_at
 * @property {String} rules_channel_id
 * @property {String} splash
 * @property {Number} explicit_content_filter
 * @property {Number} verification_level
 * 
 * @property {import("./voice_state").voice_state[]} voice_states
 * 
 * @property {Number} nsfw_level
 * @property {Number} default_message_notifications
 * 
 * @property {"depricated"} region
 * 
 * @property {import("./globals").ID} application_id
 * 
 * @property {import("./globals").ID} system_channel_id
 * 
 * @property {Boolean} nsfw
 * @property {Number} member_count
 * @property {{
 *      1: Number
 *      2: Number
 *      3: Number
 * }} application_command_counts
 * @property {import("./globals").ID} afk_channel_id
 * @property {Boolean} large
 * @property {String} discovery_splash
 * @property {Number} mfa_level
 * 
 * @property {import("./presence").presence[]} presences
 * 
 * @property {*[]} threads
 * @property {Number} max_stage_video_channel_users
 * 
 * @property {import("./guild_scheduled_event").guild_scheduled_event[]} guild_scheduled_events
 * 
 * @property {Number} premium_subscription_count
 * 
 * @property {import("./globals").ID} owner_id
 * 
 * @property {import("./globals").ID} id
 * 
 * @property {Number} system_channel_flags
 * @property {String} description
 * @property {*[]} embedded_activities
 * @property {Number} max_video_channel_users
 * @property {String} banner
 * 
 * @property {import("./role").role[]} roles
 * 
 * @property {import("./sticker").sticker[]} stickers
 * 
 * @property {import("./globals").ID} public_updates_channel_id
 * 
 * @property {{
 *      version: Number
 *      roles: {
 *          omitted: Boolean   
 *          hash: String
 *      }
 *      metadata: {
 *          omitted: Boolean   
 *          hash: String
 *      }
 *      channels: {
 *          omitted: Boolean   
 *          hash: String
 *      }
 * }} guild_hashes
 * 
 * @property {Boolean} lazy
 */

module.exports = null;