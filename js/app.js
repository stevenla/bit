(function() {
    var scene, camera, renderer;

    var bit;

    init();
    animate();

    function init() {
        var audio = new AudioPlayer();

        // Create the scene and set the scene size.
        scene = new THREE.Scene();
        var WIDTH = window.innerWidth,
            HEIGHT = window.innerHeight;

        renderer = new THREE.WebGLRenderer({antialias: true});
        renderer.setSize(WIDTH, HEIGHT);
        document.body.appendChild(renderer.domElement);

        camera = new THREE.PerspectiveCamera(45, WIDTH / HEIGHT, 0.1, 10000);
        camera.position.set(0, 0, 30);
        var scale = 60;
        //camera = new THREE.OrthographicCamera( WIDTH / - scale, WIDTH / scale, HEIGHT / scale, HEIGHT / - scale, -10, 10000 );
        scene.add(camera);

        renderer.setClearColor(0x00262a, 1);

        var light = new THREE.PointLight(0xffffff);
        light.position.set(10, 50, 130);
        scene.add(light);

        bit = new Bit( 5 );
        scene.add(bit);

        // Bind events
        document.getElementById('yes').onclick = function() {
            bit.yes();
            audio.yes();
        };
        document.getElementById('no').onclick = function() {
            bit.no();
            audio.no();
        };
    }

    var t = 0;

    function animate() {
        requestAnimationFrame(animate);

        t += 1;
        bit.animate(t);

        renderer.render(scene, camera);
    }


})();