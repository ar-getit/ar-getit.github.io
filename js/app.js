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
    camera.position.set(-50,40,50);

    //renderer
    renderer = new THREE.WEbGLRenderer({antialias:true, alpha:true});
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);

    container.appendChild(renderer.domElement);

    //load model
    let loader = new THREE.GLTFLoader();
    loader.load('./assets/3d/atik_name.gltf', function(gltf){
        scene.add(gltf.scene);
        renderer.render(scene, camera)

    });
}

init()