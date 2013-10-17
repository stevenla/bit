/**
 * @author stevenla / https://github.com/stevenla
 */

THREE.DodecahedronGeometry = function ( radius, detail ) {

    this.radius = radius;
    this.detail = detail;

    var p = ( 1 + Math.sqrt( 5 ) ) / 2;
    var q = 1 / p;

    var vertices = [
        [ -q,  0,  p ],
        [  q,  0,  p ],
        [ -1,  1,  1 ],
        [ -1, -1,  1 ],
        [  1,  1,  1 ],
        [  1, -1,  1 ],
        [ -p,  q,  0 ],
        [  0,  p,  q ],
        [  0, -p,  q ],
        [ -p, -q,  0 ],
        [  p,  q,  0 ],
        [  p, -q,  0 ],
        [ -1,  1, -1 ],
        [  0,  p, -q ],
        [  0, -p, -q ],
        [ -1, -1, -1 ],
        [  1,  1, -1 ],
        [  1, -1, -1 ],
        [ -q,  0, -p ],
        [  q,  0, -p ],
     ];

   var faces = [ 
        [ 0, 1, 4 ],
        [ 0, 4, 7 ],
        [ 0, 7, 2 ],
        [ 0, 2, 6 ],
        [ 0, 6, 9 ],
        [ 0, 9, 3 ],
        [ 0, 3, 8 ],
        [ 0, 8, 5 ],
        [ 0, 5, 1 ],
        [ 1, 5, 11 ],
        [ 1, 11, 10 ],
        [ 1, 10, 4 ],
        [ 2, 7, 13 ],
        [ 2, 13, 12 ],
        [ 2, 12, 6 ],
        [ 3, 9, 15 ],
        [ 3, 15, 14 ],
        [ 3, 14, 8 ],
        [ 4, 10, 16 ],
        [ 4, 16, 13 ],
        [ 4, 13, 7 ],
        [ 5, 8, 14 ],
        [ 5, 14, 17 ],
        [ 5, 17, 11 ],
        [ 6, 12, 18 ],
        [ 6, 18, 15 ],
        [ 6, 15, 9 ],
        [ 10, 11, 17 ],
        [ 10, 17, 19 ],
        [ 10, 19, 16 ],
        [ 12, 13, 16 ],
        [ 12, 16, 19 ],
        [ 12, 19, 18 ],
        [ 14, 15, 18 ],
        [ 14, 18, 19 ],
        [ 14, 19, 17 ],
    ]; 

    THREE.PolyhedronGeometry.call( this, vertices, faces, this.radius, this.detail );

};

THREE.DodecahedronGeometry.prototype = Object.create( THREE.Geometry.prototype )