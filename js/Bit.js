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


    this.shapes = {
        compound: new THREE.Mesh(
            new THREE.CompoundDodecahedronIcosahedronGeometry( radius, 0 ),
            neutralMaterial),
        triambic: new THREE.Mesh(
            new THREE.SmallTriambicIcosahedronGeometry( radius, 0 ),
            neutralMaterial)
    };

    this.add( this.shapes.compound );
    this.add( this.shapes.triambic );
}

Bit.prototype = Object.create( THREE.Object3D.prototype );

Bit.prototype.animate = function ( dt ) {
    var TURN_RATE = 0.02;
    var SCALE_RATE = Math.PI * 3;

    this.shapes.compound.rotation.x += TURN_RATE;
    this.shapes.compound.rotation.y += TURN_RATE;
    this.shapes.triambic.rotation.x += TURN_RATE;
    this.shapes.triambic.rotation.y += TURN_RATE;

    var compoundScale = Math.sin(dt / SCALE_RATE) / 10 + 9 / 10;
    var triambicScale = 0.92 * (Math.sin(dt / SCALE_RATE + Math.PI) / 10 + 9 / 10);
    this.shapes.compound.scale.set(compoundScale, compoundScale, compoundScale);
    this.shapes.triambic.scale.set(triambicScale, triambicScale, triambicScale);
};