var _6_2B1, _6_2B2,_6_2B3, _6_2B4, _6_2B5, _6_3PV1, _6_3M1;
// Bring up a socket.io connection
var socket = io.connect()
socket.on('connect', function () {
    // document.getElementById("hiden-loading").style.display = "none";
})

//đồng ý subcriber topicSub
socket.emit('subscribe', { 'topic': topicSub });

// thông điệp trả ra từ MQTT server
socket.on('mqtt', async function(msg) {
    // document.getElementById("hiden-loading").style.display = "none";
    // chuyển stringJson sang object
    var obj = JSON.parse(msg.payload);

    [_6_2B1, _6_2B2, _6_2B3, _6_2B4, _6_2B5, _6_3PV1, _6_3M1] = await Promise.all([
        await scanDot(obj,Tram6_2B1, "6_2B1"),
        await scanDot(obj,Tram6_2B2, "6_2B2"),
        await scanDot(obj,Tram6_2B3, "6_2B3"),
        await scanDot(obj,Tram6_2B4, "6_2B4"),
        await scanDot(obj,Tram6_2B5, "6_2B5"),
        await scanDot(obj,Tram6_3PV1, "6_3PV1"),
        await scanDot(obj,Tram6_3M1, "6_3M1"),
    ])
})