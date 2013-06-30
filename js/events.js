function initEvents() 
{
    var elem = $("canvas");
    elem.unbind();
    //Прокрутка мыши
    var onWheel = function (e) {
        e = e || window.event;

        if(e.deltaY !== undefined)
        	var delta = -e.deltaY;
        else
        	var delta =  e.wheelDelta;

        if (delta < 0) {
            camera.scale.x = camera.scale.y += 0.04;

            //showStarNames = (camera.scale.x > 0.666 ? false : true);

            if (camera.scale.y > 1.52) {
                camera.scale.x = camera.scale.y = 1.52;
            }
        }
        else if (delta > 0) {
            camera.scale.x = camera.scale.y -= 0.04;

            //showStarNames = (camera.scale.x < 0.666 ? true : false)

            if(camera.scale.x < 0.015) {
                camera.scale.x = camera.scale.y = 0.015;
            }
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
        	sceneNames.add(createLabel(items[i][0].name,vector.x, vector.y, 0, 30, "white"));
        };

        if (!isMove) {
            return;
        }

        x = e.pageX;
        y = e.pageY;
        camera.position.x -= (x - oldX) / 1;
        camera.position.y += (y - oldY) / 1;

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