(function() {
    var scene, camera, renderer;

    init();
    animate();

    var bit, octahedron, second;

    function init() {
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

        var normalMaterial = new THREE.MeshNormalMaterial({
            color: 0xCC0000
        });

        var neutralMaterial = new THREE.MeshLambertMaterial({
            color: 0x6cd5ff,
            shading: THREE.FlatShading
        });

        var yesMaterial = new THREE.MeshLambertMaterial({
            color: 0xffcf00,
            shading: THREE.FlatShading
        });

        var noMaterial = new THREE.MeshLambertMaterial({
            color: 0xea2100,
            shading: THREE.FlatShading
        });

        /*
        triambic = new THREE.Mesh(
            new THREE.SmallTriambicIcosahedronGeometry(5, 0),
            neutralMaterial);
        scene.add(triambic);

        compound = new THREE.Mesh(
            new THREE.CompoundDodecahedronIcosahedronGeometry(5, 0),
            neutralMaterial);
        scene.add(compound);
        */

        bit = new Bit( 5 );
        scene.add(bit);

        octahedron = new THREE.Mesh(
            new THREE.OctahedronGeometry(5, 0),
            yesMaterial);
        octahedron.position.set(10, 0, 0);
        scene.add(octahedron);

        second = new THREE.Mesh(
            new THREE.SecondStellationIcosahdronGeometry(5, 0),
            noMaterial);
        second.position.set(-10, 0, 0);
        scene.add(second);

        /* Reference for doing a small triambic icosahedron
         * http://mathworld.wolfram.com/SmallTriambicIcosahedron.html

        var ico = new THREE.Mesh(
            new THREE.IcosahedronGeometry(3 * 0.9379624, 0),
            normalMaterial);
        ico.position.set(0, 8, 0);
        scene.add(ico);

        var dodec = new THREE.Mesh(
            new THREE.DodecahedronGeometry(3, 0),
            normalMaterial);
        dodec.position.set(0, 8, 0);
        scene.add(dodec);

         */

    }

    var t = 0;

    function animate() {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);

        var TURN_RATE = 0.02;
        var SCALE_RATE = Math.PI * 3;

        t += 1;
        bit.animate(t);

        octahedron.rotation.y += TURN_RATE;
        second.rotation.z += TURN_RATE;

    }


})();