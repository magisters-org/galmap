function createLabel(text, x, y, z, size, color)
{
		var geometry = new THREE.Geometry();

	var sprite = THREE.ImageUtils.loadTexture( "im/ship.png" );
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
	vertex.x = x;
	vertex.y = y;
	vertex.z = 0;

	geometry.vertices.push( vertex );

	material = new THREE.ParticleBasicMaterial( { size: 85, sizeAttenuation: true, map: texture1, transparent: true } );
	

	particles = new THREE.ParticleSystem( geometry, material );
	particles.sortParticles = true;
	return particles;
}