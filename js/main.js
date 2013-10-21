var galaxyMap = {};
$(document).ready(function main() {

	//Создаем рендер
	if(Detector.webgl)
    	var renderer = new THREE.WebGLRenderer();
    else
    {
    	alert("Увы, ваш браузер не поддерживает WebGL.")
    	return;
    }
    renderer.setClearColor(0x000000);
    renderer.setSize( window.innerWidth - 25, window.innerHeight - 25 );
	renderer.sortObjects = false;
	renderer.autoClear = false;

    document.body.appendChild( renderer.domElement );

    galaxyMap = new galaxymap(renderer);

    var draw = function() 
    {

        requestAnimationFrame( draw );
        
        renderer.clear();

        galaxyMap.draw.bind(galaxyMap).call(galaxyMap, {});
    }
    draw();
});
