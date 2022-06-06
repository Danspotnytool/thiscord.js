
module.exports = {
    event: 'READY',
    handler: (client, { d: data }) => {
        client.emit('ready', data);
    }
}