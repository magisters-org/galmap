function initStars()
{
    particle_system_geometry = new THREE.Geometry();

	var x = 0, y = 0;
	var NUM_STARS = 16000;

	var A = 1.1;
	var B = 0.17;
	var WINDINGS = 3.7;
	var T_MAX = 2.0 * Math.PI * WINDINGS;		
	var DRIFT = 0.3

	for (var i = 0; i < 1800; i++) 
	{
		setStar(Math.sRandom(-1.7, 1.7), Math.sRandom(-1.7,1.7), GenShortName());
	}
	for (var i = 0; i < NUM_STARS; i++) 
	{

	
	  var t = T_MAX * Math.random();
	  var x = A * Math.exp(B * t) * Math.cos(t);
	  x = x + (DRIFT*x*Math.random()) - (DRIFT*x*Math.random());
	  var y = A * Math.exp(B * t) * Math.sin(t);
	  y = y + (DRIFT*y*Math.random()) - (DRIFT*y*Math.random())

	  if (Math.random() > 0.5)
	  {
	    setStar(x, y, GenShortName());

	  }
		  else
		  {
	    setStar(-x, -y, GenShortName());

	  }
	}

    var distance = function(a, b) {
        var dx = a.x-b.x;
        var dy = a.y-b.y;
        return dx*dx + dy*dy;
    }

	tree = new kdTree(points, distance, ["x", "y","name"]);

	var particle_system_material = new THREE.ParticleBasicMaterial({
          color: 0xeeeeee,
          size: 3
    });
	
    particleSystem = new THREE.ParticleSystem(
          particle_system_geometry,
            particle_system_material
    );
    scene.add(particleSystem);

}

function setStar(x, y, name)
{
	var v = new THREE.Vector3();
    v.x = x * 10;
    v.y = y * 10;
    v.z = 10;

	points.push({x:v.x,y:v.y,name:name});

	particle_system_geometry.vertices.push(v);
	
}