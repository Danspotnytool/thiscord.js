
// This type should extend './user.js/
/**
 * @typedef {Object} client_user_infos
 * 
 * @property {Boolean} verified
 * 
 * @property {Boolean} premium
 * @property {String} phone
 * @property {Boolean} nsfw_allowed
 * @property {Boolean} mobile
 * @property {Boolean} mfa_enabled
 * 
 * @property {Number} flags
 * @property {String} email
 * 
 * @property {Boolean} desktop
 * @property {String} bio
 * @property {String} banner_color
 * @property {String} banner
 * 
 * @property {Number} accent_color
 */

/**
 * @typedef {import("./user").user & client_user_infos} client_user
 */

module.exports = null;