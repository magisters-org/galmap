galaxymap.prototype.label = function(text, x, y, size, color)
{
    //Создаем канвас
    var canvas = document.createElement('canvas');
    //Задаем хар-ки текста и рисуем
    var context = canvas.getContext('2d');
    context.font = "Normal "+size+"px Tahoma";
    context.fillStyle = "rgba(255,255,255,1)";
	context.textAlign = "center";
	context.fillStyle = color;
	context.textBaseline = "middle";
    context.fillText(text, canvas.width / 2, canvas.height / 2);
    //Создаем текстуру на основе канваса
    var texture = new THREE.Texture(canvas) 
    texture.needsUpdate = true;

    var material = new THREE.MeshBasicMaterial( {map: texture} );
    material.transparent = true;
    //создаем меш и геометрию - плоскость
    //размер плоскости делим на 5
    //для того чтобы сохранить качество текста при приближении камеры. 
    var mesh = new THREE.Mesh(
        new THREE.PlaneGeometry(canvas.width/5, canvas.height/5),
        material
      );

    mesh.position.x = x;
    mesh.position.y = y;
    mesh.position.z = 0;

    return mesh;
}
