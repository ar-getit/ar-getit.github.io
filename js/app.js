//variables for setup

let container
let camera
let renderer
let scene
let house

function init() {
    container = document.querySelector('.scene');


    //create scene
    scene = new THREE.Scene();
    const fov = 35;
    const aspect = container.clientWidth /container.clientHeight;
    const near = 0.1;
    const far = 500;

    //camera Setup
    camera = new THREE.PerspectiveCamera(fov,aspect,near,far);
    camera.position.set(-8,3,25);

    const ambient = new THREE.AmbientLight(0x404040,5);
    scene.add(ambient);

    //renderer
    renderer = new THREE.WEbGLRenderer({antialias:true, alpha:true});
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);

    container.appendChild(renderer.domElement);

    //load model
    let loader = new THREE.GLTFLoader();
    loader.load('./assets/3d/atik_name.gltf', function(gltf){
        scene.add(gltf.scene);
        house = gltf.scene.children[0];
        animate();

    });
}
function animate(){
    requestAnimationFrame(animate);
    house.rotation.z += 0.005;
    renderer.render(scene, camera);
}

init()