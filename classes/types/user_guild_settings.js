
/**
 * @typedef {{
 *      version: Number
 *      suppress_roles: Boolean
 *      suppress_everyone: Boolean
 *      notify_highlights: Number
 *      muted: Boolean
 *      mute_scheduled_events: Boolean
 *      mute_config: *
 *      mobile_push: boolean
 *      message_notifications: Number
 *      hide_muted_channels: Boolean
 *      guild_id: import("./globals").ID | Null
 *      flags: number
 *      channel_overrides: {
 *          muted: Boolean
 *          mute_config: {
 *              selected_time_window: Number
 *              end_time: Date
 *          }
 *          message_notifications: Number
 *          collapsed: Boolean
 *          channel_id: import("./globals").ID
 *      }[]
 * }[]} user_guild_settings
 */

module.exports = null;