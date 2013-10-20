function createLabel(text, x, y, z, size, color, mod)
{
	var mod = mod | 5;
    var canvas1 = document.createElement('canvas');
    var context1 = canvas1.getContext('2d');
    context1.font = "Normal "+size+"px Tahoma";
    context1.fillStyle = "rgba(255,255,255,1)";
	context1.textAlign = "center";
	context1.fillStyle = color;
	context1.textBaseline = "middle";
    context1.fillText(text, canvas1.width / 2, canvas1.height / 2);
    console.log(canvas1.width);
    console.log(canvas1.height);
    
    // canvas contents will be used for a texture
    var texture1 = new THREE.Texture(canvas1) 
    texture1.needsUpdate = true;
      
    var material1 = new THREE.MeshBasicMaterial( {map: texture1} );
    material1.transparent = true;

    mesh1n = new THREE.Mesh(
        new THREE.PlaneGeometry(canvas1.width/mod, canvas1.height/mod),
        material1
      );
    mesh1n.position.x = x;
    mesh1n.position.y = y;
    mesh1n.position.z = z;

    return mesh1n;
	/*var geometry = new THREE.Geometry();

	var backgroundMargin = 50;
	var canvas1 = document.createElement('canvas');
	var context1 = canvas1.getContext('2d');

	var textWidth = context1.measureText(text).width;

	canvas1.width = textWidth + backgroundMargin;
	canvas1.height = size + backgroundMargin;

	context1.font = size + "px Arial";
	context1.textAlign = "center";
	context1.textBaseline = "middle";
	context1.fillStyle = color;
	context1.fillText(text, canvas1.width / 2, canvas1.height / 2);
    

	texture1 = new THREE.Texture(canvas1) 
	texture1.needsUpdate = true;


	var vertex = new THREE.Vector3();
	vertex.x = x + 100;
	vertex.y = y;
	vertex.z = 0;

	var vertex2 = new THREE.Vector3();
	vertex.x = 111;
	vertex.y = 11;
	vertex.z = 0;

	geometry.vertices.push( vertex );
	geometry.vertices.push( vertex2 );

	material = new THREE.ParticleBasicMaterial( { size: 85, sizeAttenuation: true, map: texture1, transparent: true } );
	

	particles = new THREE.ParticleSystem( geometry, material );
	particles.sortParticles = true;
	return particles;
	*/
}

function addText(text, x, y)
{
    var canvas1 = document.createElement('canvas');
    var context1 = canvas1.getContext('2d');
    context1.font = "Normal 27px Tahoma";
    context1.fillStyle = "rgba(255,255,255,1)";
	context1.textAlign = "center";
	context1.textBaseline = "middle";
    context1.fillText(text, canvas1.width / 2, canvas1.height / 2);
    
    // canvas contents will be used for a texture
    var texture1 = new THREE.Texture(canvas1) 
    texture1.needsUpdate = true;
      
    var material1 = new THREE.MeshBasicMaterial( {map: texture1} );
    material1.transparent = true;

    mesh1n = new THREE.Mesh(
        new THREE.PlaneGeometry(canvas1.width, canvas1.height),
        material1
      );
    mesh1n.position.x = x;
    mesh1n.position.y = y;
    mesh1n.position.z = 0;
    scene.add( mesh1n );

    return mesh1n;
}