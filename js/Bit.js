var TURN_RATE = 0.02;
var SCALE_RATE = Math.PI * 2;

function Bit ( radius ) {

    THREE.Object3D.call(this);

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
        neutral: new BitNeutral( radius ),
        yes: new THREE.Mesh(
            new THREE.OctahedronGeometry( radius, 0 ),
            yesMaterial),
        no: new THREE.Mesh(
            new THREE.SecondStellationIcosahdronGeometry( radius, 0 ),
            noMaterial)
    };

    this.add( this.shapes.neutral );
    this.add( this.shapes.yes );
    this.add( this.shapes.no );
}

Bit.prototype = Object.create( THREE.Object3D.prototype );

Bit.prototype.yes = function () {
    this.animationStart = -1;
    this.state = true;
    return this.state;
};

Bit.prototype.no = function () {
    this.animationStart = -1;
    this.state = false;
    return this.state;
}

Bit.prototype.null = function () {
    this.animationStart = -1;
    this.state = null;
    return this.state;
}

Bit.prototype.animate = function ( t ) {

    this.shapes.neutral.animate( t );

    if ( this.state === null ) {
        this.shapes.neutral.scale.set( 1, 1, 1 );
        this.shapes.yes.scale.set( 0.001, 0.001, 0.001 );
        this.shapes.no.scale.set( 0.001, 0.001, 0.001 );
    }

    if ( this.state === true ) {
        if ( this.animationStart < 0 ) {
            this.animationStart = t;
        }
        var animationTime = t - this.animationStart;
        var theta = animationTime / SCALE_RATE;

        var TRIG_SCALAR = 4;

        var yesScale = 1.35 * Math.pow(Math.min((Math.sin(theta) / 2 + 1 / 2), 1.0), 0.5);
        var neutralScale = (Math.cos(theta) / 6 + 5 / 6);

        this.shapes.no.scale.set( 0.001, 0.001, 0.001 );
        this.shapes.yes.scale.set(yesScale, yesScale, yesScale);
        this.shapes.neutral.scale.set(neutralScale, neutralScale, neutralScale);

        if ( theta >= 1.8 * Math.PI )
            this.null();
    }

    if ( this.state === false) {
        if ( this.animationStart < 0 ) {
            this.animationStart = t;
        }
        var animationTime = t - this.animationStart;
        var theta = animationTime / SCALE_RATE;

        var TRIG_SCALAR = 4;

        var noScale = 1.9 * Math.pow(Math.min((Math.sin(theta) / 2 + 1 / 2), 1.0), 0.6);
        var neutralScale = (Math.cos(theta) / 4 + 3 / 4);

        this.shapes.yes.scale.set( 0.001, 0.001, 0.001 );
        this.shapes.no.scale.set(noScale, noScale, noScale);
        this.shapes.neutral.scale.set(neutralScale, neutralScale, neutralScale);

        if ( theta >= 1.8 * Math.PI )
            this.null();
    }
};