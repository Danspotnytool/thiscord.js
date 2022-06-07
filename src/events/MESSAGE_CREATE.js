
module.exports = {
    event: 'MESSAGE_CREATE',
    handler: (client, { d: data }) => {
        const Message = require('../classes/structures/Message.js');
        const message = new Message(data, client);
        client.emit('messageCreate', message);
    }
}