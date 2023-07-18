import * as THREE from "./three.module.js"
import {GLTFLoader} from "./GLTFLoader.js"
import { OrbitControls } from "./OrbitControls.js";

let canvas, ID_home
let scene, camera, renderer, controls;
let modul_tayquay,xilanh_day,Phoi_cao_Mau_do_day, Phoi_cao_Mau_do_quay,Tram_trung_chuyen_Base
let done_load_3D = false;
let speed_quay = 8;
let speed_capPhoi = 5;
let diChuyenCaHe = 0.4;
const element = document.getElementById("_3dTram4_HW");
// let text = "clientHeight: " + element.clientHeight + "px<br>";
// text += "clientWidth: " + element.clientWidth + "px";
function changeColorObject( Object, colorObject ) {
    Object.traverse(function (child) {
        if (child instanceof THREE.Mesh) {
            // set the object color
            child.material.color.setHex(colorObject);
        }
    });
}
async function init() {
    // độ rộng khung hình chứa
    var sizes = {
        width: element.clientWidth,
        height: element.clientWidth
    }
    // Scene: Component này sẽ chứa mọi thứ, giống như là 'vũ trụ thu nhỏ' vậy, là nơi mà các 3D object tồn tại
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x9a9a9a);

    // gần xa camera
    camera = new THREE.PerspectiveCamera(80, sizes.width / sizes.height, 0.01, 10000)
    //vị trí camera
    camera.position.x = 0.2;
    camera.position.y = 0.6;
    camera.position.z = 0.5;
    scene.add(camera)
    
    controls = new OrbitControls(camera,canvas);
    controls.addEventListener('change', renderer);

    // const light5 = new THREE.DirectionalLight(0xffffff, 0.5)
    // light5.position.set(500,0,0)
    // scene.add(light5)
    // const light6 = new THREE.DirectionalLight(0xffffff, 0.5)
    // light6.position.set(-500,0,0)
    // scene.add(light6)
    // const light1 = new THREE.DirectionalLight(0xffffff, 0.5)
    // light1.position.set(0,0,500)
    // scene.add(light1)
    // const light2 = new THREE.DirectionalLight(0xffffff, 0.5)
    // light2.position.set(0,500,0)
    // scene.add(light2)

    const light1 = new THREE.DirectionalLight(0xffffff, 0.8);
    light1.position.set(0, 500, 0);
    scene.add(light1);
    const positionLight1 = new THREE.DirectionalLightHelper(light1);
    scene.add(positionLight1);

    const light2 = new THREE.DirectionalLight(0xffffff, 0.5);
    light1.position.set(0, 500, 500);
    scene.add(light2);
    //const positionLight2 = new THREE.DirectionalLightHelper(light1);
    //scene.add(positionLight2);
    // Tạo renderer
    // renderer = new THREE.WebGLRenderer({antialias:true});
    renderer = new THREE.WebGLRenderer({
        canvas: canvas,
    }) 

    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)) // liên quan đến chi tiết vật
    renderer.shadowMap.enabled = true
    renderer.gammaOutput = true

    let loader = new GLTFLoader();

    await Promise.all([
        await loader.load('render3D/3D_Tram6/Base06.glb', function (glb) {
            // ///////////////////////////////////////////////////////////////////////////////////////
            // ///////////////////////////////////////////////////////////////////////////////////////
            // document.getElementById("hiden-loading").style.display = "none";
            // ///////////////////////////////////////////////////////////////////////////////////////
            // ///////////////////////////////////////////////////////////////////////////////////////
            // tỉ lệ
            Tram_trung_chuyen_Base = glb.scene // gán thuộc tính cảnh của đối tượng cho biến
            Tram_trung_chuyen_Base.scale.set(1, 1, 1);
            // vị trí vật
            Tram_trung_chuyen_Base.position.x = 0;
            Tram_trung_chuyen_Base.position.y = 0;
            Tram_trung_chuyen_Base.position.z = 0;
            scene.add(Tram_trung_chuyen_Base); // thêm vào màn hình
            done_load_3D = true;
        }),
        await loader.load('render3D/3D_Tram6/Xylanh_gat.glb', function (glb) {
            xilanh_day = glb.scene
            // tỉ lệ
            xilanh_day.scale.set(1, 1, 1);
            // vị trí vật
            xilanh_day.position.x = -0.0017972477273100000;
            xilanh_day.position.y = 0.3574858541225700000;
            xilanh_day.position.z = -0.0662633139718140000;
            //xilanh_day.rotation.y = Math.PI;
            scene.add(xilanh_day); // thêm vào màn hình
        }),
        await loader.load('render3D/3D_Tram6/Tay_gat.glb', async function (glb) {
            modul_tayquay = glb.scene;
            // tỉ lệ
            modul_tayquay.scale.set(1, 1, 1);
            // vị trí vật
            modul_tayquay.position.x = -0.043;//DO
            modul_tayquay.position.y = 0.3945;//XANHLA
            modul_tayquay.position.z = -0.0416;//XANHDUONG
            //modul_tayquay.rotation.y = Math.PI / 2;
            //modul_tayquay.rotation.z = Math.PI / 2;
            changeColorObject(modul_tayquay, 0x8B4513)
            scene.add(modul_tayquay); // thêm vào màn hình
        }),
    ])
    const axesHelper = new THREE.AxesHelper( 1 );
    scene.add( axesHelper ); // thêm vào màn hình
    animate();
}
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene,camera);
    if (done_load_3D == true){
        if ( _6_3PV1 == true) 
        {
            // if ( modul_tayquay.rotation.y < Math.PI/3 & xilanh_day.position.x < 1 )
            // {
                modul_tayquay.rotation.y = Math.PI / 3;
                //modul_tayquay.position.x = -0.0215;//DO
                // modul_tayquay.position.y = 0.3945;//XANHLA
                // modul_tayquay.position.z = -0.0578366994720600000;//XANHDUONG
            // }
        }
        else
                modul_tayquay.rotation.y = 0
        // if ( _6_3PV2 == true)
        // {
        //     if ( modul_tayquay.rotation.z > 5*(Math.PI/180))
        //         {
        //             modul_tayquay.rotation.z = (modul_tayquay.rotation.z-(Math.PI/180)* speed_quay)%(2*Math.PI);
        //             xilanh_day.rotation.y = (xilanh_day.rotation.y-(Math.PI/180)* speed_quay)%(2*Math.PI);
        //             // Phoi_cao_Mau_do_quay.visible = false
        //         }
        // }
        // if ( _3PV5 == true )
        // {
        //     if ( xilanh_day.position.x > -0.0845 + diChuyenCaHe)
        //     {
        //         // thu phôi vào
        //         xilanh_day.position.x = xilanh_day.position.x -0.001* speed_capPhoi;
        //         Phoi_cao_Mau_do_day.position.x = Phoi_cao_Mau_do_day.position.x -0.001* speed_capPhoi; 
        //         Phoi_cao_Mau_do_day.visible = false; 
        //     }
        // }
        // if ( _3PV4 == true) {
        //     if ( xilanh_day.position.x < -0.0845 + 0.077 + diChuyenCaHe)
        //     {
        //         // đẩy phôi ra
        //         xilanh_day.position.x = xilanh_day.position.x +0.001* speed_capPhoi;
        //         Phoi_cao_Mau_do_day.position.x = Phoi_cao_Mau_do_day.position.x +0.001* speed_capPhoi; 
        //         Phoi_cao_Mau_do_day.visible = true; 
        //     }
        // }
        // if ( _3PV3 == true) {
        //     Phoi_cao_Mau_do_quay.visible = true; 
        // }
        // else if ( _3PV3 == false) {
        //     Phoi_cao_Mau_do_quay.visible = false; 
        // }  
    }
}
// phải viết các hàm đọc sự kiện đứng trước {init (hàm lặp vô tận)}
document.getElementById("ban_dau").onclick = function() {
    // ban đầu
    camera.position.set(0.2, 0.6, 0.5);
    controls.update();  
};
ID_home = '._3dTram4'
canvas = document.querySelector(ID_home)
init();


