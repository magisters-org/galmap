function initEvents() 
{
    var elem = $("canvas");
    elem.unbind();
    var sxy = 1;
    //Прокрутка мыши
    var onWheel = function (e) {
        e = e || window.event;

        if(e.deltaY !== undefined)
        	var delta = -e.deltaY;
        else
        	var delta =  e.wheelDelta;
        camera.scale.x = camera.scale.y -= delta*0.00008;
        sxy -= delta*0.00008;
        xyz.scale.x = xyz.scale.y = sxy;
        if (camera.scale.y > 1.52) {
                camera.scale.x = camera.scale.y = 1.52;
            }
        if(camera.scale.x < 0.0037) {
                camera.scale.x = camera.scale.y = 0.0037;
            }

        e.preventDefault ? e.preventDefault() : (e.returnValue = false);
    };
    var mouseDown = function (e) {
        isMove = true;
      	oldX = e.pageX;
        oldY = e.pageY;
    };

    var mouseUp = function (e) {
        isMove = false; 
    };
    var xyz = {};
    var mouseMove = function (e) {

        var projector = new THREE.Projector();
	    var vector = new THREE.Vector3(
	    ( e.pageX / window.innerWidth ) * 2 - 1,
	    - ( e.pageY / window.innerHeight ) * 2 + 1,
	    0.5 );

	    var pos = projector.unprojectVector( vector, camera );
	    sceneNames = new THREE.Scene();
        var items = tree.nearest({x:pos.x,y:pos.y}, 1, 100);
        for (var i = 0; i < items.length; i++) {
            xyz = createLabel(items[i][0].name,vector.x, vector.y + 0.01, 0, 50, "white", 60)
        	sceneNames.add(xyz);
        };

        if (!isMove) {
            return;
        }

        x = e.pageX;
        y = e.pageY;
        camera.position.x -= (x - oldX) / 4;
        camera.position.y += (y - oldY) / 4;



        cameraText.position.x -= (x - oldX) / 1;
        cameraText.position.y += (y - oldY) / 1;


        oldX = x;
        oldY = y;

    };
    if (elem[0].addEventListener) {
        if ('onwheel' in document) {
            elem[0].addEventListener("wheel", onWheel, false);
        }
        else if ('onmousewheel' in document) {
            elem[0].addEventListener("mousewheel", onWheel, false);
        }

    }
    elem.bind("mousedown", mouseDown);
    elem.bind("mouseup", mouseUp);
    elem.bind("mousemove", mouseMove);
}