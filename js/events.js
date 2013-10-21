galaxymap.prototype.events = function() 
{
    var isMove = false; //Двигаем ли камеру
    var oldX = 0; var oldY = 0;

    var elem = $("canvas");
    elem.unbind();

    //Прокрутка мыши
    elem.bind("mousewheel", {camera:this.camera}, function (e) {
    	var delta =  e.originalEvent.wheelDelta;

        e.data.camera.scale.x = e.data.camera.scale.y -= delta*0.00008;

        if (e.data.camera.scale.y > 1.52) {
            e.data.camera.scale.x = e.data.camera.scale.y = 1.52;
        }
        if(e.data.camera.scale.y < 0.0037) {
            e.data.camera.scale.x = e.data.camera.scale.y = 0.0037;
        }

        e.preventDefault ? e.preventDefault() : (e.returnValue = false);
    });
    elem.bind("mousedown", function (e) {
        isMove = true;

      	oldX = e.pageX;
        oldY = e.pageY;
    });

    elem.bind("mouseup", function (e) {
        isMove = false; 
    });

    elem.bind("mousemove", {camera:this.camera}, function (e) {

        if (!isMove) {
            return;
        }

        x = e.pageX;
        y = e.pageY;

        e.data.camera.position.x -= (x - oldX) / 4;
        e.data.camera.position.y += (y - oldY) / 4;

        oldX = x;
        oldY = y;

    });

}