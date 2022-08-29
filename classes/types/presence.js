
/**
 * @typedef {Object} presence
 * 
 * @property {import("./user").user} user
 * 
 * @property {'online' | 'idle' | 'dnd' | 'offline'} status
 * @property {Number} last_modified
 * @property {{
 *      desktop: 'online' | 'idle' | 'dnd' | 'offline'
 *      mobile: 'online' | 'idle' | 'dnd' | 'offline'
 *      web: 'online' | 'idle' | 'dnd' | 'offline'
 * }} client_status
 * 
 * @property {import("./activity").activity[]} activities
 */

module.exports = null;