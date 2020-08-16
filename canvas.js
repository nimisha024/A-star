var cols=10;
var row=10;

function setup() {
    createCanvas(300,300);
    
}


function draw(){
    background(51);

    for (var i=0;i<cols;i++){
        for(var j=0;j<rows;j++){
            var x=i+30;
            var y=j+30;

            fill(colors[i][j]);
            stroke(0);
            fill(225);
            rect(x,y,30,30);

        }
    }
}
console.log("ello");