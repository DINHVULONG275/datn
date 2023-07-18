var _5_2B1, _5_2B2,_5_2B3, _5_2B5, _5_3PV1, _5_3PV2, _5_3DCM1;
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

    [_5_2B1, _5_2B2, _5_2B3, _5_2B5, _5_3PV1, _5_3PV2, _5_3DCM1] = await Promise.all([
        await scanDot(obj,Tram5_2B1, "5_2B1"),
        await scanDot(obj,Tram5_2B2, "5_2B2"),
        await scanDot(obj,Tram5_2B3, "5_2B3"),
        await scanDot(obj,Tram5_2B5, "5_2B5"),
        await scanDot(obj,Tram5_3PV1, "5_3PV1"),
        await scanDot(obj,Tram5_3PV2, "5_3PV2"),
        await scanDot(obj,Tram5_3DCM1, "5_3DCM1"),
    ])
})