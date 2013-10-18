function BitNeutral ( radius ) {

    THREE.Object3D.call(this);

    var neutralMaterial = new THREE.MeshLambertMaterial({
        color: 0x6cd5ff,
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

BitNeutral.prototype = Object.create( THREE.Object3D.prototype );

BitNeutral.prototype.animate = function ( t ) {
    this.shapes.compound.rotation.x += TURN_RATE;
    this.shapes.compound.rotation.y += TURN_RATE;

    this.shapes.triambic.rotation.x += TURN_RATE;
    this.shapes.triambic.rotation.y += TURN_RATE;

    if (this.shapes.triambic.rotation.x >= 2 * Math.PI) {
        this.shapes.triambic.rotation.x = 0;
        this.shapes.triambic.rotation.y = 0;
    }

    if (this.shapes.compound.rotation.x >= 2 * Math.PI) {
        this.shapes.compound.rotation.x = 0;
        this.shapes.compound.rotation.y = 0;
    }

    var compoundScale = Math.sin(t / SCALE_RATE) / 10 + 9 / 10;
    var triambicScale = 0.92 * (Math.sin(t / SCALE_RATE + Math.PI) / 10 + 9 / 10);
    this.shapes.compound.scale.set(compoundScale, compoundScale, compoundScale);
    this.shapes.triambic.scale.set(triambicScale, triambicScale, triambicScale);
};