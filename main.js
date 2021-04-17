var canvas=new fabric.Canvas('myCanvas');
block_width=30;
block_heigth=30;
player_x=10;
player_y=10;
var player_object="";
var block_image_object="";
function player_update(){
    fabric.image.fromURL("player.png",function (img){
        player_object=img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_y,left:player_x
        });
        canvas.add(player_object);
    });
}
function new_image(get_image){
    fabric.image.fromURL(get_image,function(img){
        block_image_object=img;
        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_width);
        block_image_object.set({
            top:player_y, left:player_x
        });
        canvas.add(block_image_object);
    });
}
window.addEventListener("keydown", my_keydown)

function my_keydown(e){
    keyPressed=e.keyCode;
    console.log(keyPressed);
    if(e.shiftKey==true && keyPressed == '80'){
        console.log("p and shift pressed together");
        block_width= block_width + 10;
        block_heigth= block_heigth + 10;
        document.getElementById("current_width").innerHTML=block_width;
        document.getElementById("current_heigth").innerHTML=block_heigth;
    }
    if(e.shiftKey && keyPressed=='77'){
        console.log("m and shift pressed together");
        block_width= block_width - 10;
        block_heigth= block_heigth - 10;
        document.getElementById("current_width").innerHTML=block_width;
        document.getElementById("current_heigth").innerHTML=block_heigth;
    }
    if(keyPressed=='67'){
        new_image('cloud.jpg');
        console.log("c");
    }
    if(keyPressed=='68'){
        new_image('dark_green.png');
        console.log("d");
    }
    if(keyPressed=='71'){
        new_image('ground.png');
        console.log("g");
    }
    if(keyPressed=='76'){
        new_image('light_green.png');
        console.log("L");
    }
    if(keyPressed=='84'){
        new_image('trunk.jpg');
        console.log("t");
    }
    if(keyPressed=='85'){
        new_image('unique.png');
        console.log("u");
    }
    if(keyPressed=='87'){
        new_image('wall.jpg');
        console.log("w");
    }
    if(keyPressed=='89'){
        new_image('yellow_wall.png');
        console.log("y");
    }
}