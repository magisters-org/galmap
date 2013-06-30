function initMap()
{
 	var material = new THREE.LineBasicMaterial({
        color: 0xaaaaaa
    });
 	var sectorMaterial = new THREE.LineBasicMaterial({
        color: 0x555555
    });

    var w = 1500;
    var h = 1500;

    var geometryHor = new THREE.Geometry();
	geometryHor.vertices.push(new THREE.Vector3(w / -2, h / 4, 0));
	geometryHor.vertices.push(new THREE.Vector3(w / 2, h / 4, 0));

	geometryHor.vertices.push(new THREE.Vector3(w / -2, h / -4, 0));
	geometryHor.vertices.push(new THREE.Vector3(w / 2, h / -4, 0));

	geometryHor.vertices.push(new THREE.Vector3(w / -2, 0, 0));
	geometryHor.vertices.push(new THREE.Vector3(w/ 2, 0, 0));

	var sectorGeometryHor = new THREE.Geometry();
	sectorGeometryHor.vertices.push(new THREE.Vector3(w / -2, (h / 4) + (h / 8), 0));
	sectorGeometryHor.vertices.push(new THREE.Vector3(w / 2, (h / 4) + (h / 8), 0));

	sectorGeometryHor.vertices.push(new THREE.Vector3(w / -2, (h / -4)  + (h / -8), 0));
	sectorGeometryHor.vertices.push(new THREE.Vector3(w / 2, (h / -4)  + (h / -8), 0));

	sectorGeometryHor.vertices.push(new THREE.Vector3(w / -2, 0 + (h / 8) , 0));
	sectorGeometryHor.vertices.push(new THREE.Vector3(w/ 2, 0 + (h / 8), 0));

	sectorGeometryHor.vertices.push(new THREE.Vector3(w / -2, 0 + (h / -8) , 0));
	sectorGeometryHor.vertices.push(new THREE.Vector3(w/ 2, 0 + (h / -8), 0));

	var geometryVert = new THREE.Geometry();
	geometryVert.vertices.push(new THREE.Vector3(w / -4, h / 2, 0));
	geometryVert.vertices.push(new THREE.Vector3(w / -4, h / -2, 0));

	geometryVert.vertices.push(new THREE.Vector3(w / 4, h / 2, 0));
	geometryVert.vertices.push(new THREE.Vector3(w / 4, h / -2, 0));

	geometryHor.vertices.push(new THREE.Vector3(0, h / -2, 0));
	geometryHor.vertices.push(new THREE.Vector3(0, h / 2, 0));

	var sectorGeometryVert = new THREE.Geometry();
	sectorGeometryVert.vertices.push(new THREE.Vector3((w / -4) + (w / -8), h / 2, 0));
	sectorGeometryVert.vertices.push(new THREE.Vector3(w / -4 + (w / -8), h / -2, 0));

	sectorGeometryVert.vertices.push(new THREE.Vector3(w / 4 + (w / 8), h / 2, 0));
	sectorGeometryVert.vertices.push(new THREE.Vector3(w / 4 + (w / 8), h / -2, 0));

	sectorGeometryVert.vertices.push(new THREE.Vector3(0 + (w / 8) , h / -2, 0));
	sectorGeometryVert.vertices.push(new THREE.Vector3(0 + (w / 8), h / 2, 0));

	sectorGeometryVert.vertices.push(new THREE.Vector3(0 + (w / -8) , h / -2, 0));
	sectorGeometryVert.vertices.push(new THREE.Vector3(0 + (w / -8), h / 2, 0));

	var lineHor = new THREE.Line(geometryHor, material, THREE.LinePieces);
	var sectorLineHor = new THREE.Line(sectorGeometryHor, sectorMaterial, THREE.LinePieces);
	
	var lineVert = new THREE.Line(geometryVert, material, THREE.LinePieces);
	var sectorLineVert = new THREE.Line(sectorGeometryVert, sectorMaterial, THREE.LinePieces);

	scene.add(lineHor);
	sceneSectors.add(sectorLineHor);
	scene.add(lineVert);
	sceneSectors.add(sectorLineVert);

	for (var x = 0; x <= 4; x++) {
		if(x == 0) px = (w / -2);
		if(x == 1) px = (w / -4);
		if(x == 2) px = 0;
		if(x == 3) px = (w / 4);
		if(x == 4) px = (w / 2);
		for (var y = 0; y <= 4; y++) {
			if(y == 0) py = (h / 2);
			if(y == 1) py = (h / 4);
			if(y == 2) py = 0;
			if(y == 3) py = (h / -4);
			if(y == 4) py = (h / -2);


			scene.add(createLabel("#"+x+"-"+y, px - 20, py + 13, 0, 26, "white"));

			if(x == 4) continue;
			if(y == 0) continue;
			sceneSectors.add(createLabel("("+(0)+"-"+(0)+")", px + (w/8) - 70 , py + (h/8) + 13, 0, 26, "#555"));
			sceneSectors.add(createLabel("("+(1)+"-"+(0)+")", px + (w/8)*2 - 70 , py + (h/8) + 13, 0, 26, "#555"));
			sceneSectors.add(createLabel("("+(0)+"-"+(1)+")", px + (w/8) - 70 , h/-2 + 13, 0, 26, "#555"));
			sceneSectors.add(createLabel("("+(1)+"-"+(1)+")", px + (w/8)*2 - 70 , h/-2 + 13, 0, 26, "#555"));
			sceneSectors.add(createLabel("("+(0)+"-"+(1)+")", px + (w/8) - 70 , py + (h/8)*2 + 13, 0, 26, "#555"));
			sceneSectors.add(createLabel("("+(1)+"-"+(1)+")", px + (w/8)*2 - 70 , py + (h/8)*2 + 13, 0, 26, "#555"));

		}			
	}

}