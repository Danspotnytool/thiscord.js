
module.exports = {
    event: 'READY',
    handler: (client, { d: data }) => {
        const User = require('../classes/structures/BaseUser.js');
        client.user = new User(true, data.user, client);
        client.emit('ready', client);
    }
}