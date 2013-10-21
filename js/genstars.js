galaxymap.prototype.stars = function() {

	//Добавить звезду
	var addStar = function(x, y) {
		var v = new THREE.Vector3();
	    v.x = x * 10;
	    v.y = y * 10;

		geometry.vertices.push(v);	
	}

	//Поворачиваем вектора на угл
	var VectorRot = function(dir, angle) {
		var vecRes = {x:0,y:0};
	 	vecRes.x = dir.x * Math.cos(angle) - dir.y * Math.sin(angle);
	    vecRes.y = dir.x * Math.sin(angle) + dir.y * Math.cos(angle);
	    return vecRes;
	}

	//геометрия
    var geometry = new THREE.Geometry();
    //константы для построения логорифмической спирали
	var countStars = 16000;
	var a = 1.1;
	var b = 0.17;
	var windings = 3.7;
	var tMax = 2.0 * Math.PI * windings;		
	var drift = 0.3
	//Двумя циклами исправляем проблему с некрасивым центром спирали
	for (var i = 0; i < 4000; i++) {
		var vec = {x:Math.sRandom(0.8, 1.7),y:0};
		var angle = Math.sRandom(0, Math.PI*2.5);
		vec = VectorRot(vec, angle);
		addStar(vec.x, vec.y);	
	}
	for (var i = 0; i < 4000; i++) {
		var vec = {x:Math.sRandom(0.001, 0.8),y:0};
		var angle = Math.sRandom(0, Math.PI*2.5);
		vec = VectorRot(vec, angle);
		addStar(vec.x, vec.y);	
	}
	//Строим логарифмическую спираль
	for (var i = 0; i < countStars; i++) {
		var t = tMax * Math.random();
		var x = a * Math.exp(b * t) * Math.cos(t);
	    x = x + (drift*x*Math.random()) - (drift*x*Math.random());
		var y = a * Math.exp(b * t) * Math.sin(t);
		y = y + (drift*y*Math.random()) - (drift*y*Math.random())
		

		if (Math.random() > 0.5) {
			addStar(x , y);
		}
		else { //Отражение спирали
			addStar(-x, -y);
		}
	}
	//Материал системы частиц
	var material = new THREE.ParticleBasicMaterial({
          color: 0xeeeeee,
          size: 3
    });
	//Система частиц
    var particleSystem = new THREE.ParticleSystem(
          geometry,
            material
    );

    this.scene.add(particleSystem);

}