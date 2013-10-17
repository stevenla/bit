/**
 * @author stevenla / https://github.com/stevenla
 */

THREE.CompoundDodecahedronIcosahedronGeometry = function ( radius, detail ) {
    var dodeca = new THREE.DodecahedronGeometry(radius/1.096, detail);
    var icosa2 = new THREE.IcosahedronGeometry(radius, detail);

    THREE.Geometry.call(this);

    THREE.GeometryUtils.merge(this, dodeca);
    THREE.GeometryUtils.merge(this, icosa2);
};

THREE.CompoundDodecahedronIcosahedronGeometry.prototype = Object.create( THREE.Geometry.prototype )