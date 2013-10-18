function Bit ( radius ) {

    THREE.Object3D.call(this);

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

    this.state = null;  // null: neutral, true: yes, false: no
    this.animationStart = -1;

    this.shapes = {
        compound: new THREE.Mesh(
            new THREE.CompoundDodecahedronIcosahedronGeometry( radius, 0 ),
            neutralMaterial),
        triambic: new THREE.Mesh(
            new THREE.SmallTriambicIcosahedronGeometry( radius, 0 ),
            neutralMaterial),
        octahedron: new THREE.Mesh(
            new THREE.OctahedronGeometry(5, 0),
            yesMaterial)
    };


    this.add( this.shapes.compound );
    this.add( this.shapes.triambic );
    this.add( this.shapes.octahedron );
}

Bit.prototype = Object.create( THREE.Object3D.prototype );

Bit.prototype.changeState = function ( state ) {
    this.animationStart = -1;
    this.state = state;
};

Bit.prototype.animate = function ( t ) {
    var TURN_RATE = 0.02;
    var SCALE_RATE = Math.PI * 3;

    this.shapes.compound.rotation.x += TURN_RATE;
    this.shapes.compound.rotation.y += TURN_RATE;
    this.shapes.triambic.rotation.x += TURN_RATE;
    this.shapes.triambic.rotation.y += TURN_RATE;

    if ( this.state === null ) {
        var compoundScale = Math.sin(t / SCALE_RATE) / 10 + 9 / 10;
        var triambicScale = 0.92 * (Math.sin(t / SCALE_RATE + Math.PI) / 10 + 9 / 10);
        this.shapes.compound.scale.set(compoundScale, compoundScale, compoundScale);
        this.shapes.triambic.scale.set(triambicScale, triambicScale, triambicScale);
        this.shapes.octahedron.scale.set(0.1, 0.1, 0.1);  
    }

    if ( this.state === true ) {
        if ( this.animationStart < 0 ) {
            this.animationStart = t;
        }
        var animationTime = t - this.animationStart;
        var theta = animationTime / SCALE_RATE / 1.5;

        var octahedronScale = 1.25 * (Math.sin(theta) / 2 + 1 / 2);
        var triambicScale = 0.92 * (-Math.sin(theta) / 2 + 1 / 2);
        var compoundScale = (-Math.sin(theta) / 2 + 1 / 2);

        this.shapes.octahedron.scale.set(octahedronScale, octahedronScale, octahedronScale);
        this.shapes.compound.scale.set(compoundScale, compoundScale, compoundScale);
        this.shapes.triambic.scale.set(triambicScale, triambicScale, triambicScale);

        if ( theta > Math.PI )
            this.changeState( null );
    }
};