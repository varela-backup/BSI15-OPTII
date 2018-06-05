var app = require('http').createServer(handler)
var io = require('socket.io')(app);

app.listen(80);

function handler(req, res) {
    res.writeHead(200);
    res.write('tô vivo!');
    res.end(data);
}


io.on('connection', socket => {
    socket.on('xyz-server', data => {
        console.log(data);
        socket.emit('xyz-client', {
            msg: data.msg.toUpperCase() + "!!!!!!!!!"
        });
    });

    socket.on('disconnect', data => {
        console.log('desconectou-se!')
    })

    setInterval(() => {
        socket.emit('xyz-client', {
            msg: "!!!!!!!!!"
        });
    }, 1000 * 3)

});