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

	for (var v = 0; v < 4000; v++) {
		

		var vec = {x:Math.sRandom(0.8, 1.7),y:0};
		var angle = Math.sRandom(0, Math.PI*2.5);
		vec = VectorRot(vec, angle);
		setStar(vec.x, vec.y, GenShortName());	

			

	}
	for (var v = 0; v < 4000; v++) {
		var vec = {x:Math.sRandom(0.001, 0.8),y:0};
		var angle = Math.sRandom(0, Math.PI*2.5);
		vec = VectorRot(vec, angle);
		setStar(vec.x, vec.y, GenShortName());	
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
	    setStar(x , y, GenShortName());

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

//Поворачиваем вектора на угл
function VectorRot(dir, angle){
	var vecRes = {x:0,y:0};
 	vecRes.x = dir.x * Math.cos(angle) - dir.y * Math.sin(angle);
    vecRes.y = dir.x * Math.sin(angle) + dir.y * Math.cos(angle);
    return vecRes;
}

function setStar(x, y, name)
{
	var v = new THREE.Vector3();
    v.x = x * 10;
    v.y = y * 10;
    v.z = 10;
	points.push({x:v.x,y:v.y,name:name});

    //sceneNames.add(createLabel(name,v.x, v.y, 0, 30, "white"));
	

	particle_system_geometry.vertices.push(v);
	
}