function galaxymap(renderer)
{
    //Создаем сцены
    this.scene = new THREE.Scene(); //Звезды и деления квадрантов
    this.sceneSectors = new THREE.Scene(); //Деления секторов
    this.sceneNames = new THREE.Scene(); //Название звезд

    //Камера
    this.camera = new THREE.OrthographicCamera( window.innerWidth / - 2, window.innerWidth / 2, window.innerHeight / 2, window.innerHeight / - 2, 1, 100000000 );
    this.camera.position.set( 0, 0, 1000 );
    this.camera.scale.x = this.camera.scale.y = 1.52;

	this.events.bind(this).call(this, {}); //events.js
	this.stars.bind(this).call(this, {}); //stars.js
	this.gridmap.bind(this).call(this, {}); //map.js

    this.draw = function() {
        renderer.render(this.sceneSectors, this.camera );
        renderer.render(this.scene, this.camera );
        
        if(this.camera.scale.x < 0.0430)
		{
			renderer.render( this.sceneNames, this.camera );   
		}
    }
}
