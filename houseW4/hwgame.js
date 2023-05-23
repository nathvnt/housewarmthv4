const gamecanvas = document.getElementById('hwcanvas');
let grctx = gamecanvas.getContext('2d');
gamecanvas.width = 480;
gamecanvas.height = 480;

let theme_song = document.querySelector('#theme_song') 
let teleport = document.querySelector('#teleport') 
let collision = document.querySelector('#collision') 

function play_music(){
    theme_song.play()

}
function collision_sound(){
    collision.play()
}
function teleport_sound(){
    teleport.play()
}

//booleans to guide which room player is in 
let ingreenroom = false;
let inredroom = true;
let rrfireframe1 = true;
let inyellowroom = false;
let inblueroom = false;
let indungeon = false;
let inlab = false; 

//if image is being displayed
let itembagis = false;
// let showbookshelftxt = false;
let showtoolboxtxt = false;
let showwindowtext = false;
let nothinghere = false;
let showsearchedtxt = false;
let shownote1text = false;
let showcantleave = false;
let showfireplacetxt = false;
let showArlText = false;
let showArlText2 = false;

//if collision is happening 
let inveswindow = false;
let invesbs = false;
let invescouch = false; 

let bookshelfcolide = false;
let windowview = false;
let note1collide = false;
let fireplacecontact = false;

//if object now exist
let grnote = false;

//if object has been located
let foundtoolbox = false;
let foundnote1 = false;
let foundobj1 = false

//showing items in item bag
// let showtb = false;
let shownote = false;

let showoptions1 = false;
let showoptions2 = false;
let showtb = false;
let showtbopt1 = false;
let showtbopt2 = false;
let note1gone = false;

let Arlup = false;
let Arldown = true;
let stopArl = false;
let arlContact = false;

let catgcontact = false;
let showcatgtxt = false;
let showcatgtxt2 = false;
let talked2catg = false;
let unlockyellow = false;



const player = {
    x: 240,
    y: 240,
    width: 32,
    height: 48,
    frameX: 0,
    frameY: 0,
    speed: 3,
    moving: false
}; 
const arl = {
    x: 100,
    y: 340,
    width: 32,
    height: 49,
    frameX: 0,
    frameY: 0,
    speed: 3,
    moving: false
}; 
const drag = {
    x: 180,
    y: 210,
    width: 96,
    height: 96,
    frameX: 0,
    frameY: 0,
    speed: 3,
    moving: false
}; 
const cgirl = {
    x: 215,
    y: 170,
    width: 32,
    height: 48,
    frameX: 0,
    frameY: 0,
    speed: 3,
    moving: false
}; 
dungustair = {
    x: 0,
    y: 170,
    width: 10,
    height: 20
}
labustair = {
    x: 465,
    y: 366,
    width: 15,
    height: 17
}
labdstair={
    x: 465,
    y: 450,
    width: 15,
    height: 30
}
charblock1 = {
    x: 100,
    y: 380,
    width: 40,
    height: 10
}
charblock2 = {
    x: 100,
    y: 200,
    width: 40,
    height: 10
}
////objects for collision detection
//green room down stairs trigger
grdstair = {
    x: 470,
    y: 184,
    width: 10,
    height: 30
}
//blocking couch
grcouch = {
    x: 38,
    y: 238,
    width: 45,
    height: 120
}
couchtxttop = {
    x: 45,
    y: 235,
    width: 30,
    height: 10
}
// couchtxtleft = {
//     x: 45,
//     y: 260,
//     width: 10,
//     height: 80
// }
couchtxtright = {
    x: 80,
    y: 260,
    width: 10,
    height: 80
}
//object to trigger finding the first note 
note1location = {
    x: 40,
    y: 360,
    width: 40,
    height: 10
}
//block book shelf
grbookshelf = {
    x: 0,
    y: 135,
    width: 115,
    height: 20
}
//object to trigger bookshelf search
grbookshelfsearch = {
    x: 25,
    y: 160,
    width: 80,
    height: 10
}
//object to trigger window message
grwindow = {
    x: 205,
    y: 135,
    width: 80,
    height: 10
}

//red room up stairs trigger
rrustair = {
    x: 0,
    y: 170,
    width: 10,
    height: 20
}
//red room downstairs trigger
rrdstair = {
    x: 460,
    y: 450,
    width: 15,
    height: 30
}
//red room doorway trigger
rrdoor = {
    x: 220,
    y: 127,
    width: 35,
    height: 10
}
//block fire place
fireplaceblock = {
    x: 355,
    y: 135,
    width: 65,
    height: 20
}
//object for triggering interaction with fire place
fireplace = {
    x: 365,
    y: 155,
    width: 50,
    height: 10
}
//yelloow room doorway trigger
yrdoor = {
    x: 130,
    y: 127,
    width: 35,
    height: 10
}
//yellow room up stairs trigger
yrustair = {
    x: 0,
    y: 170,
    width: 10,
    height: 20
}
//yellow room downstairs trigger
yrdstair = {
    x: 0,
    y: 250,
    width: 10,
    height: 20
}
//blue room up stairs trigger right
brdstair1 = {
    x: 460,
    y: 450,
    width: 15,
    height: 30
}
//blue room downstairs trigger left
brdstair2 = {
    x: 00,
    y: 450,
    width: 15,
    height: 30
}

//importing image to draw player character
const playerSprite = new Image();
playerSprite.src = "game_art/jael.png";

const note1Sprite = new Image();
note1Sprite.src = "game_art/arlington.png";

const dragon = new Image();
dragon.src = "game_art/bahamut.png";

const catg = new Image();
catg.src = "game_art/blacklady.png";


//importing images to draw backgrounds
const grbg = new Image();
grbg.src = "game_art/greenroom.png";

const rrbg = new Image();
rrbg.src = "game_art/redroom.png";

const rrbg2 = new Image();
rrbg2.src = "game_art/redroom2.png";

const yrbg = new Image();
yrbg.src = "game_art/yellowroom.png";

const brbg = new Image();
brbg.src = "game_art/blueroom.png";

const dungbg = new Image();
dungbg.src = "game_art/dungeon.png";

const labbg = new Image();
labbg.src = "game_art/laboratory.png";



//image to display basic instructions on screen in game
const inventorytxt = new Image();
inventorytxt.src = "game_art/inventorytxt.png";

//image to displaying users item bag when it is open
const itembag = new Image();
itembag.src = "game_art/itembag.png";

//images of items in item bag when they are found
const note1 = new Image();
note1.src = "game_art/note1.png";

const toolbox = new Image();
toolbox.src = "game_art/toolbox.png";

const tbopts = new Image();
tbopts.src = "game_art/tbopts.png";

const tbopt1 = new Image();
tbopt1.src = "game_art/tboption1.png";

const tbopt2 = new Image();
tbopt2.src = "game_art/tboptions2.png";

const obj1 = new Image();
obj1.src = "game_art/obj1.png";

//text displayed when interacting with areas that have items 
const bookshelftxt = new Image();
bookshelftxt.src = "game_art/bookshelftxt.png";

//img to display information about note1 in item bag
const note1text = new Image();
note1text.src = "game_art/note1text.png";

const shownoteopt1 = new Image();
shownoteopt1.src = "game_art/showoptions1.png";
const shownoteopt2 = new Image();
shownoteopt2.src = "game_art/showoptions2.png";

const fireplacetxt = new Image();
fireplacetxt.src = "game_art/fireplacetxt.png";


function drawSprite(img, sX, sY, sW, sH, dX, dY, dW, dH){
    grctx.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH);
};

function closeEverything(){

    showfireplacetxt = false;
    // showbookshelftxt = false;
    showtoolboxtxt = false; 
    showsearchedtxt = false;
    showwindowtext = false;
    shownote1text = false;
    showcantleave = false;
    showArlText = false;
    showArlText2 = false;
    showoptions1 = false;
    // showoptions2 = false;
    showtb = false;
    showtbopt1 = false;
    showtbopt2 = false;
    invesbs = false;
    invescouch = false; 

}

//assigning arrow keys to control player movement
document.body.onkeydown = function(e){
    //north
    if (e.keyCode == 38 && player.y > 135){
        player.y -= player.speed;
        player.frameY = 3;
        player.moving = true;
        arlContact = false;
    }
    //west
    if (e.keyCode == 37 && player.x > 0){
        player.x -= player.speed;
        player.frameY = 1;
        player.moving = true;
        arlContact = false;
    }
    //south
    if (e.keyCode == 40 && player.y < 480 - player.height){
        player.y += player.speed;
        player.frameY = 0;
        player.moving = true;
        arlContact = false;
    }
    //east
    if (e.keyCode == 39 && player.x < 480 - player.width){
        player.x += player.speed;
        player.frameY = 2;
        player.moving = true;
        arlContact = false;
    }
    //display item bag
    if (e.keyCode == 51){
       itembagis = true;
    }
    //stop displaying item bag
    if (e.keyCode == 27){
        itembagis = false;
        shownote = false;
        showoptions1 = false;
        showoptions2 = false;
        showtbopt1 = false;
        showtbopt2 = false;
        closeEverything();
    }
    //investigate green room window
    if (e.keyCode == 13){
        if(windowview){
            closeEverything();
            showwindowtext = true;
            grnote = true;
            inveswindow = false;
            play_music();
        }
    }
    //finding note 1
    if(invescouch){
        if(e.keyCode == 13){
            if(player.frameY != 3){
                nothinghere = true;
            }
        }
    }
    if(grnote){
        if (e.keyCode == 13){
            if(note1collide){
                if(foundnote1){
                    closeEverything();
                    showsearchedtxt = true;
                }else{ 
                    closeEverything();
                    shownote1text = true;
                    foundnote1 = true;
                }
            }
        }
    }

    //investigate green room book shelf
    if (e.keyCode == 13){
        if(bookshelfcolide){
            if(foundnote1){
                if(foundtoolbox){
                    closeEverything();
                    showsearchedtxt = true;
                }else {
                    closeEverything();
                    showtoolboxtxt = true; 
                    foundtoolbox = true;
                }
            }
        }
    }

    ////red room
    //fireplace
    if (e.keyCode == 13){
        if(fireplacecontact){
            closeEverything();
            showfireplacetxt = true;
        }
    }

    if(itembagis){
        // if(e.keyCode == 49 && foundtoolbox){
        //     showtb = true;
        // }
        if(showtb){
            if(e.keyCode == 49){
                showtbopt1 = true;
            }
        }
        if(!showtb){
            if(!shownote){
                if(e.keyCode == 49){
                    if(foundtoolbox){
                        showtb = true;
                    }
                }
            }
        }

        if(e.keyCode == 50){
            if(foundnote1){
                showtb = false;
                shownote = true;
            }
        }
    
        if(!fireplacecontact){
            if(e.keyCode == 49){
                if(shownote){
                    showoptions1 = true;
                }
            }
        }
        if(fireplacecontact){
            if(e.keyCode == 49){
                if(shownote){
                    showoptions2 = true;
                }
            }
        }
        if(fireplacecontact){
            if(e.keyCode == 13){
                if(showoptions2){
                    note1gone = true;
                    itembagis = false;
                }
            }
        }
    }

    if(catgcontact && foundobj1){
        if(e.keyCode == 13){
            if(talked2catg){
                closeEverything();
                showcatgtxt2 = true
            }
            else{
                unlockyellow = true;
                cgirl.y += 70;
                cgirl.frameY = 0;
                closeEverything();
                showcatgtxt = true;
                talked2catg = true;
            }
        }
    }

    if(arlContact && note1gone){
        if(e.keyCode == 13){
            if(foundobj1){
                closeEverything();
                showArlText2 = true
            }
            else{
                foundobj1 = true;
                closeEverything();
                showArlText = true;
            }
        }
    }
    
};
document.body.onkeyup = function(e){
    player.moving = false;
}

function HandlePlayerFrame(){
    if(player.frameX < 3 && player.moving){ 
        player.frameX++
    }else {
        player.frameX = 0;
    }
}
function HandleNote1CharFrame(){
    if(arl.frameX < 3 && arl.moving){ 
        arl.frameX++
    }else {
        arl.frameX = 0;
    }
}

//function for checking if two objects make contact 
function check_collision(rect1, rect2) {
    let x_overlap = Math.max(0, Math.min(rect1.x + rect1.width, rect2.x + rect2.width) - Math.max(rect1.x, rect2.x))
    let y_overlap = Math.max(0, Math.min(rect1.y + rect1.height, rect2.y + rect2.height) - Math.max(rect1.y, rect2.y))
    let overlapArea = x_overlap * y_overlap
    return overlapArea != 0
}

function dontshowrooms(){
    inredroom = false;
    ingreenroom = false;
    inyellowroom = false;
    inblueroom = false;
    indungeon = false;
    inlab = false;
}

function roomchange_collision_checks(){
    //green room collision switches
    //going downstairs to red room
    if(foundnote1){
        if(ingreenroom && player.frameY == 2){
            if(check_collision(player, grdstair)){
                player.x = 15;
                player.y = 150;
                stopArl = false;
                dontshowrooms();
                inredroom = true;
            }
        }
    }else{
        if(ingreenroom && player.frameY == 2){
            if(check_collision(player, grdstair)){
                player.x -= 120
                closeEverything();
                showcantleave = true;  
                teleport_sound()            
            }
        }
    }
    //red room collision switches
    //going upstairs to green room
    if(inredroom && player.frameY == 1){
        if(check_collision(player, rrustair)){
            player.x = 400;
            player.y = 150;
            dontshowrooms()
            ingreenroom = true;
        }
    }
    //going through door to yellow room
    if(inredroom && player.frameY == 3){
        if(check_collision(player, rrdoor)){
            if(unlockyellow){
                            // player.y += 220
                player.frameY = 0
                player.x = 128
                player.y = 185
                closeEverything();
                // showcantleave = true;
                // teleport_sound()   
                dontshowrooms()
                inyellowroom = true;

            }

        }
    }

    if(inredroom && player.frameY == 2){
        if(check_collision(player, rrdstair)){
            player.x -= 120
            closeEverything();
            showcantleave = true;
            teleport_sound();   
            // dontshowrooms();
            // indungeon = true;
 
        }
    }
    //yellow room collision switches
    //going through door to red room
    if(inyellowroom && player.frameY == 3){
        if(check_collision(player, yrdoor)){
            player.y += 220
            player.x = 215;
            player.y = 185;
            player.frameY = 0
            dontshowrooms()
            inredroom = true;
            // showcantleave = true();
        }
    }
    //going upstairs to blue room
    if(inyellowroom && player.frameY == 1){
        if(check_collision(player, yrustair)){
            // player.x = 400;
            // player.y = 410;
            // dontshowrooms()
            // inblueroom = true;
        }
    }
    //going downstairs to blue room
    if(inblueroom && player.frameY == 2){
        if(check_collision(player, brdstair1)){
            player.x = 15;
            player.y = 150;
            dontshowrooms()
            inyellowroom = true;

        }
    }
    if(inblueroom && player.frameY == 1){
        if(check_collision(player, brdstair2)){
            player.x = 428;
            player.y = 360;
            dontshowrooms()
            inlab = true;

        }
    }
    if(inlab && player.frameY == 2){
        if(check_collision(player, labustair)){
            player.x = 25;
            player.y = 415;
            dontshowrooms()
            inblueroom = true;
            player.frameY = 2;

        }
    }
    if(inlab && player.frameY == 2){
        if(check_collision(player, labdstair)){
            player.x = 15;
            player.y = 150;
            dontshowrooms()
            indungeon = true;
            player.frameY = 0;

        }
    }
    if(indungeon && player.frameY == 1){
        if(check_collision(player, dungustair)){
            player.x = 400;
            player.y = 410;
            dontshowrooms()
            inlab = true;
        }
    }
}


function object_collisions(){

    if(ingreenroom && note1gone){
        if(check_collision(player, arl)){
            stopArl = true;
            arl.moving = false;
            arlContact = true;
            if(player.frameY == 0){
                arl.frameY = 3
                player.y -= 3
                collision_sound()
            }
            if(player.frameY == 1){
                arl.frameY = 2
                player.x += 3
                collision_sound()
            }
            if(player.frameY == 3){
                arl.frameY = 0
                player.y += 3
                collision_sound()
            }
            
        }
    }

    if(inredroom && foundobj1){
        if(check_collision(player, cgirl)){
            catgcontact = true;
            if(player.frameY == 0){
                cgirl.frameY = 3
                player.y -= 3
                collision_sound()
            }
            if(player.frameY == 1){
                cgirl.frameY = 2
                player.x += 3
                collision_sound()
            }
            if(player.frameY == 3){
                cgirl.frameY = 0
                player.y += 3
                collision_sound()
            }
            
        }
    }

    if(inredroom && foundobj1){
        if(check_collision(player, cgirl)){
            // stopArl = true;
            // arl.moving = false;
            // arlContact = true;
            if(player.frameY == 0){
                cgirl.frameY = 3
                player.y -= 3
                collision_sound()
            }
            if(player.frameY == 1){
                cgirl.frameY = 2
                player.x += 3
                collision_sound()
            }
            if(player.frameY == 2){
                cgirl.frameY = 1
                player.x -= 3
                collision_sound()
            }
            if(player.frameY == 3){
                cgirl.frameY = 0
                player.y += 3
                collision_sound()
            }
            
        }
    }

    if(indungeon){
        if(check_collision(player, drag)){
            // stopArl = true;
            // drag.moving = false;
            // arlContact = true;
            if(player.frameY == 0){
                drag.frameY = 3
                player.y -= 5
                collision_sound()
            }
            if(player.frameY == 1){
                drag.frameY = 2
                player.x += 5
                collision_sound()
            }
            if(player.frameY == 2){
                drag.frameY = 1
                player.x -= 5
                collision_sound()
            }
            if(player.frameY == 3){
                drag.frameY = 0
                player.y += 40
                collision_sound()
            }
            
        }
    }

    if(ingreenroom){
        if(check_collision(player, grcouch) || check_collision(player, grbookshelf)){
            if(player.frameY == 0){
                player.y -= 2
                collision_sound()
            }
            if(player.frameY == 1){
                player.x += 3
                collision_sound()
            }
            if(player.frameY == 2){
                player.x -= 2
                collision_sound()
            }
            if(player.frameY == 3){
                player.y += 3
                collision_sound()
            }
        }
    }
    if(ingreenroom){
        if(check_collision(player, couchtxtright)){
            if(player.frameY == 1){
                invescouch = true;
                showcantleave = false;
            }else{
                invescouch = false;
                nothinghere = false;
            }
        }

        if(check_collision(player, couchtxttop)){
            if(player.frameY == 0){
                invescouch = true;
                showcantleave = false;
            }else{
                invescouch = false;
                nothinghere = false;
            }
        }
        if(check_collision(player, grbookshelfsearch)){
            if(player.frameY == 3){
                invesbs = true;
                showcantleave = false;
            }else{
                invesbs = false;
                showsearchedtxt = false;
                showtoolboxtxt = false;
            }
        }
    }

    if(ingreenroom && player.frameY == 3){
        if(check_collision(player, grbookshelfsearch)){
            bookshelfcolide = true;

        }
    }

    if(ingreenroom && player.frameY != 3){
        if(check_collision(player, grbookshelfsearch)){
            bookshelfcolide = false;

        }
    }

    if(ingreenroom){
        if(check_collision(player, grwindow)){
            if(player.frameY == 3){
                windowview = true;
                inveswindow = true;
                showcantleave = false;
            }else{
                inveswindow = false;
                showwindowtext = false;
                windowview = false;
            }
        }
    }

    if(ingreenroom){
        if(check_collision(player, note1location)){
            if(player.frameY == 3){
                note1collide = true;
                invescouch = true;
                showcantleave = false;
             }else{
                note1collide = false;
                invescouch = false;
                showsearchedtxt = false;
                shownote1text = false;
            }
        }
    }

    if(inredroom){
        if(check_collision(player, fireplaceblock)){
            if(player.frameY == 0){
                player.y -= 3
                collision_sound()
            }
            if(player.frameY == 1){
                player.x += 3
                collision_sound()
            }
            if(player.frameY == 2){
                player.x -= 3
                collision_sound()
            }
            if(player.frameY == 3){
                player.y += 3
                collision_sound()
            }
            
        }
    }
    if(inredroom){
        if(check_collision(player, fireplace)){
            if(player.frameY == 3){
                fireplacecontact = true;
            }else{
                fireplacecontact = false;
                showfireplacetxt = false;
            }
        }
    }
}

function moveArl(){
    if(Arldown){
        arl.moving = true;
        arl.y += arl.speed;
        arl.frameY = 0;
    }
    if(Arlup){
        arl.moving = true;
        arl.y -= arl.speed;
        arl.frameY = 3;
    }

    if(check_collision(arl, charblock1)){
        Arlup = true;
        Arldown = false
    }
    if(check_collision(arl, charblock2)){
        Arlup = false;
        Arldown = true
    }
    
}

//needed collision with objects to run faster than sprite animation does
function drawcollisions(){
    roomchange_collision_checks();
    object_collisions();
    requestAnimationFrame(drawcollisions);
}
drawcollisions();

let fps, fpsInterval, startTime, now, then, elapsed;

function startAnimation(fps){
    fpsInterval = 1000/fps;
    then = Date.now();
    startTime = then;
    animate();
}

function animate(){
    requestAnimationFrame(animate);
    now = Date.now();
    elapsed = now - then;
    if(elapsed > fpsInterval){
        then = now - (elapsed % fpsInterval);
        grctx.clearRect(0, 0, gamecanvas.width, gamecanvas.height);
        
        //debug setting to draw images that player can collide with 
        let debug = false;

        //if player is in green room
        if(ingreenroom){

            grctx.drawImage(grbg, 0, 0, gamecanvas.width, gamecanvas.height);

            if(player.y > arl.y){
                if(note1gone){
                    drawSprite(note1Sprite, arl.width * arl.frameX, arl.height * arl.frameY, arl.width, arl.height, arl.x, arl.y, 40, 60);
                }
                drawSprite(playerSprite, player.width * player.frameX, player.height * player.frameY, player.width, player.height, player.x, player.y, 40, 60);
            }
            else if(player.y < arl.y){
                drawSprite(playerSprite, player.width * player.frameX, player.height * player.frameY, player.width, player.height, player.x, player.y, 40, 60);
                if(note1gone){
                    drawSprite(note1Sprite, arl.width * arl.frameX, arl.height * arl.frameY, arl.width, arl.height, arl.x, arl.y, 40, 60);
                }
            }

            if(inveswindow){
                grctx.font = "15px Monaco";
                grctx.fillStyle = "white";
                grctx.textAlign = "center";
                grctx.fillText("investigate the window (enter)", gamecanvas.width/2, 430); 
            }

            if(invescouch){
                grctx.font = "15px Monaco";
                grctx.fillStyle = "white";
                grctx.textAlign = "center";
                grctx.fillText("investigate the couch (enter)", gamecanvas.width/2, 430); 
            }

            if(invesbs){
                grctx.font = "15px Monaco";
                grctx.fillStyle = "white";
                grctx.textAlign = "center";
                grctx.fillText("investigate the bookshelf (enter)", gamecanvas.width/2, 430); 
            }
            if(showtoolboxtxt){
                grctx.font = "15px Monaco";
                grctx.fillStyle = "white";
                grctx.textAlign = "center";
                grctx.fillText("you found a locked toolbox hidden behind some books... (esc)", gamecanvas.width/2, 445); 
            }
   
            if(showwindowtext){
                grctx.font = "15px Monaco";
                grctx.fillStyle = "white";
                grctx.textAlign = "center";
                grctx.fillText("it's a beautiful day outside... (esc)", gamecanvas.width/2, 445); 
            }

            if(nothinghere){
                grctx.font = "15px Monaco";
                grctx.fillStyle = "white";
                grctx.textAlign = "center";
                grctx.fillText("there's nothing here... (esc)", gamecanvas.width/2, 445); 
            }

            if(showsearchedtxt){
                grctx.font = "15px Monaco";
                grctx.fillStyle = "white";
                grctx.textAlign = "center";
                grctx.fillText("you have already searched here (esc)", gamecanvas.width/2, 445); 
            }

            if(shownote1text){
                grctx.font = "15px Monaco";
                grctx.fillStyle = "white";
                grctx.textAlign = "center";
                grctx.fillText("you found a mysterious note hidden underneath the couch... (esc)", gamecanvas.width/2, 445); 
            }
            if(showcantleave){
                grctx.font = "15px Monaco";
                grctx.fillStyle = "white";
                grctx.textAlign = "center";
                grctx.fillText("you can't enter the next room yet (esc)", gamecanvas.width/2, 445); 
            }
            if(showArlText){
                grctx.font = "15px Monaco";
                grctx.fillStyle = "white";
                grctx.textAlign = "center";
                grctx.fillText("please take this item for all your troubles (esc)", gamecanvas.width/2, 445); 
            }
            if(showArlText2){
                grctx.font = "15px Monaco";
                grctx.fillStyle = "white";
                grctx.textAlign = "center";
                grctx.fillText("... (esc)", gamecanvas.width/2, 445); 
            }
            
            grctx.drawImage(inventorytxt, 5, 5, 140, 40);

       

            if(itembagis){
                grctx.drawImage(itembag, 120, 120, 240, 240);
                if(foundtoolbox){
                    grctx.drawImage(toolbox, 120, 160, 60, 60);
                }
           
        
                if(!note1gone){
                    if(foundnote1){
                        grctx.drawImage(note1, 180, 160, 60, 60);
                    }
                    if(shownote){
                        grctx.drawImage(note1text, 120, 140, 240, 200);
                    }
                    if(showoptions1){
                        grctx.drawImage(shownoteopt1, 120, 140, 240, 200);
                    }
             
                }
                if(showtb){
                    grctx.drawImage(tbopts, 120, 140, 240, 200);
                }
                if(showtbopt1){
                    grctx.drawImage(tbopt1, 120, 140, 240, 200);
                }
                if(foundobj1){
                    grctx.drawImage(obj1, 180, 160, 60, 60);
                }
            }

            let objects = [grdstair, grcouch, couchtxtright, couchtxttop, grbookshelf, grbookshelfsearch, grwindow, note1location, charblock1, charblock2];
          
            if (debug){
                for(let i=0; i<objects.length; ++i){
                    grctx.fillStyle = 'rgba(188,143,143,0.7)';
                    grctx.fillRect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
                }
            }
        }
         //if player is in red room
        if(inredroom){
            if(rrfireframe1){
                grctx.drawImage(rrbg, 0, 0, gamecanvas.width, gamecanvas.height);
                rrfireframe1 = false;
            }
            else if(!rrfireframe1){
                grctx.drawImage(rrbg2, 0, 0, gamecanvas.width, gamecanvas.height);
                rrfireframe1 = true;
            }

            if(player.y > cgirl.y){
                if(foundobj1){
                    drawSprite(catg, cgirl.width * cgirl.frameX, cgirl.height * cgirl.frameY, cgirl.width, cgirl.height, cgirl.x, cgirl.y, 40, 60);
                }
                drawSprite(playerSprite, player.width * player.frameX, player.height * player.frameY, player.width, player.height, player.x, player.y, 40, 60);
            }
            else if(player.y < cgirl.y){
                drawSprite(playerSprite, player.width * player.frameX, player.height * player.frameY, player.width, player.height, player.x, player.y, 40, 60);
                if(foundobj1){
                    drawSprite(catg, cgirl.width * cgirl.frameX, cgirl.height * cgirl.frameY, cgirl.width, cgirl.height, cgirl.x, cgirl.y, 40, 60);
                }
            }

            if(showcatgtxt){
                grctx.font = "15px Monaco";
                grctx.fillStyle = "white";
                grctx.textAlign = "center";
                grctx.fillText("i really need your help", gamecanvas.width/2, 445);
            }
            if(showcatgtxt2){
                grctx.font = "15px Monaco";
                grctx.fillStyle = "white";
                grctx.textAlign = "center";
                grctx.fillText("thank you", gamecanvas.width/2, 445);
            }
            
            if(showfireplacetxt){
                grctx.font = "15px Monaco";
                grctx.fillStyle = "white";
                grctx.textAlign = "center";
                grctx.fillText("it is warm by the fire place (esc)", gamecanvas.width/2, 445);
            }
            if(nothinghere){
                grctx.font = "15px Monaco";
                grctx.fillStyle = "white";
                grctx.textAlign = "center";
                grctx.fillText("there's nothing here... (esc)", gamecanvas.width/2, 445); 
            }

            if(showsearchedtxt){
                grctx.font = "15px Monaco";
                grctx.fillStyle = "white";
                grctx.textAlign = "center";
                grctx.fillText("you have already searched here (esc)", gamecanvas.width/2, 445); 
            }
            if(showcantleave){
                grctx.font = "15px Monaco";
                grctx.fillStyle = "white";
                grctx.textAlign = "center";
                grctx.fillText("you can't enter the next room yet (esc)", gamecanvas.width/2, 445); 
            }
        
            grctx.drawImage(inventorytxt, 5, 5, 140, 40);

            if(itembagis){
                grctx.drawImage(itembag, 120, 120, 240, 240);
                if(foundtoolbox){
                    grctx.drawImage(toolbox, 120, 160, 60, 60);
                }
    
                if(!note1gone){
                    if(foundnote1){
                        grctx.drawImage(note1, 180, 160, 60, 60);
                    }
                    if(shownote){
                        grctx.drawImage(note1text, 120, 140, 240, 200);
                    }
                    if(showoptions1){
                        grctx.drawImage(shownoteopt1, 120, 140, 240, 200);
                    }
                    if(showoptions2){
                        grctx.drawImage(shownoteopt2, 120, 140, 240, 200);
                    }
                }
                if(showtb){
                    grctx.drawImage(tbopts, 120, 140, 240, 200);
                }
                if(showtbopt1){
                    grctx.drawImage(tbopt1, 120, 140, 240, 200);
                }
                if(foundobj1){
                    grctx.drawImage(obj1, 180, 160, 60, 60);
                }
            }

            let objects = [rrustair, rrdstair, rrdoor, fireplace, fireplaceblock];
            // let debug = true;
            if (debug){
                for(let i=0; i<objects.length; ++i){
                    grctx.fillStyle = 'rgba(188,143,143,0.7)';
                    grctx.fillRect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
                }
            }
        }
        //if player is in yellow room
        if(inyellowroom){

            grctx.drawImage(yrbg, 0, 0, gamecanvas.width, gamecanvas.height);

            drawSprite(playerSprite, player.width * player.frameX, player.height * player.frameY, player.width, player.height, player.x, player.y, 40, 60);

            if(nothinghere){
                grctx.font = "15px Monaco";
                grctx.fillStyle = "white";
                grctx.textAlign = "center";
                grctx.fillText("there's nothing here... (esc)", gamecanvas.width/2, 445); 
            }
            if(showsearchedtxt){
                grctx.font = "15px Monaco";
                grctx.fillStyle = "white";
                grctx.textAlign = "center";
                grctx.fillText("you have already searched here (esc)", gamecanvas.width/2, 445); 
            }
            if(showcantleave){
                grctx.font = "15px Monaco";
                grctx.fillStyle = "white";
                grctx.textAlign = "center";
                grctx.fillText("you can't enter the next room yet (esc)", gamecanvas.width/2, 445); 
            }

            grctx.drawImage(inventorytxt, 5, 5, 140, 40);

            if(itembagis){
                grctx.drawImage(itembag, 120, 120, 240, 240);
                if(foundtoolbox){
                    grctx.drawImage(toolbox, 120, 160, 60, 60);
                }
                if(!note1gone){
                    if(foundnote1){
                        grctx.drawImage(note1, 180, 160, 60, 60);
                    }
                    if(shownote){
                        grctx.drawImage(note1text, 120, 140, 240, 200);
                    }
                    if(showoptions1){
                        grctx.drawImage(shownoteopt1, 120, 140, 240, 200);
                    }
                }
                if(foundobj1){
                    grctx.drawImage(obj1, 180, 160, 60, 60);
                }
            }

            let objects = [yrdoor, yrustair, yrdstair];
            // let debug = true;
            if (debug){
                for(let i=0; i<objects.length; ++i){
                    grctx.fillStyle = 'rgba(188,143,143,0.7)';
                    grctx.fillRect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
                }
            }
        }
       //if player is in blue room
        if(inblueroom){

            grctx.drawImage(brbg, 0, 0, gamecanvas.width, gamecanvas.height);

            drawSprite(playerSprite, player.width * player.frameX, player.height * player.frameY, player.width, player.height, player.x, player.y, 40, 60);
           
            if(nothinghere){
                grctx.font = "15px Monaco";
                grctx.fillStyle = "white";
                grctx.textAlign = "center";
                grctx.fillText("there's nothing here... (esc)", gamecanvas.width/2, 445); 
            }
            if(showsearchedtxt){
                grctx.font = "15px Monaco";
                grctx.fillStyle = "white";
                grctx.textAlign = "center";
                grctx.fillText("you have already searched here (esc)", gamecanvas.width/2, 445); 
            }
            if(showcantleave){
                grctx.font = "15px Monaco";
                grctx.fillStyle = "white";
                grctx.textAlign = "center";
                grctx.fillText("you can't enter the next room yet (esc)", gamecanvas.width/2, 445); 
            }

            grctx.drawImage(inventorytxt, 5, 5, 140, 40);

            if(itembagis){
                grctx.drawImage(itembag, 120, 120, 240, 240);
                if(foundtoolbox){
                    grctx.drawImage(toolbox, 120, 160, 60, 60);
                }
                if(!note1gone){
                    if(foundnote1){
                        grctx.drawImage(note1, 180, 160, 60, 60);
                    }
                    if(shownote){
                        grctx.drawImage(note1text, 120, 140, 240, 200);
                    }
                    if(showoptions1){
                        grctx.drawImage(shownoteopt1, 120, 140, 240, 200);
                    }
                }
                if(foundobj1){
                    grctx.drawImage(obj1, 180, 160, 60, 60);
                }
            }

            let objects = [brdstair1, brdstair2];
            // let debug = true;
            if (debug){
                for(let i=0; i<objects.length; ++i){
                    grctx.fillStyle = 'rgba(188,143,143,0.7)';
                    grctx.fillRect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
                }
            }
        }
        if(indungeon){
            grctx.drawImage(dungbg, 0, 0, gamecanvas.width, gamecanvas.height);

            if(player.y > drag.y){
                drawSprite(dragon, drag.width * drag.frameX, drag.height * drag.frameY, drag.width, drag.height, drag.x, drag.y, 140, 140);
                
                drawSprite(playerSprite, player.width * player.frameX, player.height * player.frameY, player.width, player.height, player.x, player.y, 40, 60);
            }
            else if(player.y < drag.y){
                drawSprite(playerSprite, player.width * player.frameX, player.height * player.frameY, player.width, player.height, player.x, player.y, 40, 60);
               
                drawSprite(dragon, drag.width * drag.frameX, drag.height * drag.frameY, drag.width, drag.height, drag.x, drag.y, 140, 140);
            }
        
           
            if(nothinghere){
                grctx.font = "15px Monaco";
                grctx.fillStyle = "white";
                grctx.textAlign = "center";
                grctx.fillText("there's nothing here... (esc)", gamecanvas.width/2, 445); 
            }
            if(showsearchedtxt){
                grctx.font = "15px Monaco";
                grctx.fillStyle = "white";
                grctx.textAlign = "center";
                grctx.fillText("you have already searched here (esc)", gamecanvas.width/2, 445); 
            }
            if(showcantleave){
                grctx.font = "15px Monaco";
                grctx.fillStyle = "white";
                grctx.textAlign = "center";
                grctx.fillText("you can't enter the next room yet (esc)", gamecanvas.width/2, 445); 
            }

            grctx.drawImage(inventorytxt, 5, 5, 140, 40);

       

            if(itembagis){
                grctx.drawImage(itembag, 120, 120, 240, 240);
                if(foundtoolbox){
                    grctx.drawImage(toolbox, 120, 160, 60, 60);
                }
           
        
                if(!note1gone){
                    if(foundnote1){
                        grctx.drawImage(note1, 180, 160, 60, 60);
                    }
                    if(shownote){
                        grctx.drawImage(note1text, 120, 140, 240, 200);
                    }
                    if(showoptions1){
                        grctx.drawImage(shownoteopt1, 120, 140, 240, 200);
                    }
             
                }
                if(showtb){
                    grctx.drawImage(tbopts, 120, 140, 240, 200);
                }
                if(showtbopt1){
                    grctx.drawImage(tbopt1, 120, 140, 240, 200);
                }
                if(foundobj1){
                    grctx.drawImage(obj1, 180, 160, 60, 60);
                }
            }
            let objects = [dungustair];
            // let debug = true;
            if (debug){
                for(let i=0; i<objects.length; ++i){
                    grctx.fillStyle = 'rgba(188,143,143,0.7)';
                    grctx.fillRect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
                }
            }
        }
        if(inlab){
            grctx.drawImage(labbg, 0, 0, gamecanvas.width, gamecanvas.height);

            drawSprite(playerSprite, player.width * player.frameX, player.height * player.frameY, player.width, player.height, player.x, player.y, 40, 60);

            if(nothinghere){
                grctx.font = "15px Monaco";
                grctx.fillStyle = "white";
                grctx.textAlign = "center";
                grctx.fillText("there's nothing here... (esc)", gamecanvas.width/2, 445); 
            }
            if(showsearchedtxt){
                grctx.font = "15px Monaco";
                grctx.fillStyle = "white";
                grctx.textAlign = "center";
                grctx.fillText("you have already searched here (esc)", gamecanvas.width/2, 445); 
            }
            if(showcantleave){
                grctx.font = "15px Monaco";
                grctx.fillStyle = "white";
                grctx.textAlign = "center";
                grctx.fillText("you can't enter the next room yet (esc)", gamecanvas.width/2, 445); 
            }
            grctx.drawImage(inventorytxt, 5, 5, 140, 40);

       

            if(itembagis){
                grctx.drawImage(itembag, 120, 120, 240, 240);
                if(foundtoolbox){
                    grctx.drawImage(toolbox, 120, 160, 60, 60);
                }
           
        
                if(!note1gone){
                    if(foundnote1){
                        grctx.drawImage(note1, 180, 160, 60, 60);
                    }
                    if(shownote){
                        grctx.drawImage(note1text, 120, 140, 240, 200);
                    }
                    if(showoptions1){
                        grctx.drawImage(shownoteopt1, 120, 140, 240, 200);
                    }
             
                }
                if(showtb){
                    grctx.drawImage(tbopts, 120, 140, 240, 200);
                }
                if(showtbopt1){
                    grctx.drawImage(tbopt1, 120, 140, 240, 200);
                }
                if(foundobj1){
                    grctx.drawImage(obj1, 180, 160, 60, 60);
                }
            }
            let objects = [labustair, labdstair];
            // let debug = true;
            if (debug){
                for(let i=0; i<objects.length; ++i){
                    grctx.fillStyle = 'rgba(188,143,143,0.7)';
                    grctx.fillRect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
                }
            }


        }
        if(!stopArl){
            moveArl()
        }
        
        HandleNote1CharFrame();
        HandlePlayerFrame();
        requestAnimationFrame(animate);
    }
}
startAnimation(10);
