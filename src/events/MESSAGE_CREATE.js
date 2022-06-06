
module.exports = {
    event: 'MESSAGE_CREATE',
    handler: (client, { d: data }) => {
        client.emit('messageCreate', data);
    }
}