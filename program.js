




var circle;
function getMousePos(canvas, evt){
    return {
        x : evt.clientX,
        y : evt.clientY
    }    
}
var canvas = document.getElementById("miCanvitas");
var context = canvas.getContext("2d");

canvas.addEventListener("mousemove", function(evt){
    var mousePos = getMousePos(canvas, evt);
    var Message = "Coordenadas:  x:" + mousePos.x + ", y: " + mousePos.y;
    console.log(Message);
    circle.beginPath(); 
    circle.arc(mousePos.x, mousePos.y,10,0, Math.PI * 2, true);
    circle.fill(); 
});

(function(){
    circle = canvas.getContext('2d');
    circle.fillStyle = "rgba(135,200,150,0.4)";
})
