var _4_2B1, _4_2B2,_4_2B3, _4_2B4, _4_2B5, _4_2B6, _4_2B7, _4_3PV1, _4_3PV2, _4_3PV3, _4_3PV4, _4_H1, _4_H2;
var _5_2B1, _5_2B2,_5_2B3, _5_2B5, _5_3PV1, _5_3PV2, _5_3M1;
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

    [_4_2B1, _4_2B2, _4_2B3, _4_2B4, _4_2B5, _4_2B6, _4_2B7, _2B8, _4_3PV1, _4_3PV2, _4_3PV3, _4_3PV4, _4_3PV5, _5_2B1, _5_2B2, _5_2B3, _5_2B5, _5_2B5, _5_3PV1, _5_3PV2, _5_3M1, _6_2B1, _6_2B2, _6_2B3, _6_2B4, _6_2B5, _6_3PV1, _6_3M1] = await Promise.all([
        await scanDot(obj,Tram4_2B1, "4_2B1"),
        await scanDot(obj,Tram4_2B2, "4_2B2"),
        await scanDot(obj,Tram4_2B3, "4_2B3"),
        await scanDot(obj,Tram4_2B4, "4_2B4"),
        await scanDot(obj,Tram4_2B5, "4_2B5"),
        await scanDot(obj,Tram4_2B6, "4_2B6"),
        await scanDot(obj,Tram4_2B7, "4_2B7"),
        await scanDot(obj,Tram4_3PV1, "4_3PV1"),
        await scanDot(obj,Tram4_3PV2, "4_3PV2"),
        await scanDot(obj,Tram4_3PV3, "4_3PV3"),
        await scanDot(obj,Tram4_3PV4, "4_3PV4"),
        await scanDot(obj,Tram4_H1, "4_H1"),
        await scanDot(obj,Tram4_H2, "4_H2"),

        await scanDot(obj,Tram5_2B1, "5_2B1"),
        await scanDot(obj,Tram5_2B2, "5_2B2"),
        await scanDot(obj,Tram5_2B3, "5_2B3"),
        await scanDot(obj,Tram5_2B5, "5_2B5"),
        await scanDot(obj,Tram5_3PV1, "5_3PV1"),
        await scanDot(obj,Tram5_3PV2, "5_3PV2"),
        await scanDot(obj,Tram5_3M1, "5_3M1"),

        await scanDot(obj,Tram6_2B1, "6_2B1"),
        await scanDot(obj,Tram6_2B2, "6_2B2"),
        await scanDot(obj,Tram6_2B3, "6_2B3"),
        await scanDot(obj,Tram6_2B4, "6_2B4"),
        await scanDot(obj,Tram6_2B5, "6_2B5"),
        await scanDot(obj,Tram6_3PV1, "6_3PV1"),
        await scanDot(obj,Tram6_3M1, "6_3M1"),
    ])
})