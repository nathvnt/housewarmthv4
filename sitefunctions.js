$(window).on('load', function() {
    $("#can1").css("display","flex");
    document.getElementById("switch").checked = true;
    
    setTimeout(function() {
      $("#can1").css("display","none");
      document.getElementById("switch").checked = false;
    }, 10000);
    
    $("#switch").on('change', function() {
      if ($("#switch").is(":checked")) {
        $("#can1").css("display", "flex");
      } else {
        $("#can1").css("display", "none");
      }
    });
});



const pickr = Pickr.create({
    el: '.color-picker',
    theme: 'classic', // or 'monolith', or 'nano'

    swatches: [
        'rgba(244, 67, 54, 1)',
        'rgba(233, 30, 99, 0.95)',
        'rgba(156, 39, 176, 0.9)',
        'rgba(103, 58, 183, 0.85)',
        'rgba(63, 81, 181, 0.8)',
        'rgba(33, 150, 243, 0.75)',
        'rgba(3, 169, 244, 0.7)',
        'rgba(0, 188, 212, 0.7)',
        'rgba(0, 150, 136, 0.75)',
        'rgba(76, 175, 80, 0.8)',
        'rgba(139, 195, 74, 0.85)',
        'rgba(205, 220, 57, 0.9)',
        'rgba(255, 235, 59, 0.95)',
        'rgba(255, 193, 7, 1)'
    ],

    components: {

        // Main components
        preview: true,
        opacity: true,
        hue: true,

        // Input / output Options
        interaction: {
            hex: true,
            rgba: true,
            hsla: true,
            hsva: true,
            cmyk: true,
            input: true,
            clear: true,
            save: true
        }
    }
});

let rgbaColorOut = '';

pickr.on('change', (color, instance) => {
    const rgbaColor = color.toRGBA().toString();

    document.getElementById("navi").style.borderColor = rgbaColor; 
    document.getElementById("navlower").style.borderColor = rgbaColor; 
    document.getElementById("main").style.borderColor = rgbaColor; 

    const checkedInput = document.querySelector('input:checked');
    if (checkedInput) {
      const label = checkedInput.nextElementSibling;
      if (label && label.tagName === 'LABEL') {
        label.style.backgroundColor = rgbaColor;
      }
    }

    rgbaColorOut = rgbaColor;
})

//change color on mouseover title
document.getElementById("title").onmouseenter = MouseEnterTitle;
document.getElementById("title").onmouseleave = MouseLeaveTitle;

function MouseEnterTitle() {
    document.getElementById("title").style.color = rgbaColorOut;
}

function MouseLeaveTitle() {
    if(darkthemeis){
        document.getElementById("title").style.color = 'rgba(255,255,240, .85)';
    }else{
        document.getElementById("title").style.color = 'rgba(0,0,0, 1)';
    }
}

    //change color on mouseover home button
document.getElementById("homebtn").onmouseenter = MouseEnterHomeBtn;
document.getElementById("homebtn").onmouseout = MouseLeaveHomeBtn;

function MouseEnterHomeBtn() {
    
    document.getElementById("homebtn").style.backgroundColor = rgbaColorOut;
}
function MouseLeaveHomeBtn() {
    document.getElementById("homebtn").style.backgroundColor = "rgba(0,0,0,.6)";
}

    //change color on mouseover menu button
document.getElementById("menubtnhov").onmouseenter = MouseEnterMenu;
document.getElementById("menubtnhov").onmouseout = MouseLeaveMenu;

function MouseEnterMenu() {
    document.getElementById("menubtnhov").style.backgroundColor = rgbaColorOut;
}
function MouseLeaveMenu() {
    document.getElementById("menubtnhov").style.backgroundColor = "";
}

//change color on mouseover game button
document.getElementById("gamebtnhov").onmouseenter = MouseEnterGame;
document.getElementById("gamebtnhov").onmouseout = MouseLeaveGame;

function MouseEnterGame() {
    document.getElementById("gamebtnhov").style.backgroundColor = rgbaColorOut;
}
function MouseLeaveGame() {
    document.getElementById("gamebtnhov").style.backgroundColor = "";
}

//change color on mouseover Resume button
document.getElementById("resumebtnhov").onmouseenter = MouseEnterRes;
document.getElementById("resumebtnhov").onmouseout = MouseLeaveRes;

function MouseEnterRes() {
    document.getElementById("resumebtnhov").style.backgroundColor = rgbaColorOut;
}
function MouseLeaveRes() {
    document.getElementById("resumebtnhov").style.backgroundColor = "";
}

//change color on mouseover astar button
document.getElementById("starbtnhov").onmouseenter = MouseEnterStar;
document.getElementById("starbtnhov").onmouseout = MouseLeaveStar;

function MouseEnterStar() {
    document.getElementById("starbtnhov").style.backgroundColor = rgbaColorOut;
}
function MouseLeaveStar() {
    document.getElementById("starbtnhov").style.backgroundColor = "";
}

//change color on mouseover settings button
document.getElementById("setbtnhov").onmouseenter = MouseEnterSet;
document.getElementById("setbtnhov").onmouseout = MouseLeaveSet;

function MouseEnterSet() {
    document.getElementById("setbtnhov").style.backgroundColor = rgbaColorOut;
}
function MouseLeaveSet() {
    document.getElementById("setbtnhov").style.backgroundColor = "";
}

//change color on mouseover gallery button
document.getElementById("gallerybtnhov").onmouseenter = MouseEnterGal;
document.getElementById("gallerybtnhov").onmouseout = MouseLeaveGal;

function MouseEnterGal() {
    document.getElementById("gallerybtnhov").style.backgroundColor = rgbaColorOut;
}
function MouseLeaveGal() {
    document.getElementById("gallerybtnhov").style.backgroundColor = "";
}

//light and dark theme toggle
let darkthemeis = true;
let lightthemeis = false;

document.getElementById("darktheme").onclick = toggleDT;
document.getElementById("lighttheme").onclick = toggleLT;

function toggleDT(){
    lightthemeis = false;
    darkthemeis = true;
    document.body.style.backgroundColor = 'rgba(0,0,0, 1)';
    document.getElementById("can1").style.backgroundColor = 'rgba(0,0,0, 1)';
    document.getElementById("navi").style.backgroundColor = 'rgba(255,255,240, .2)';
    document.getElementById("navlower").style.backgroundColor =  'rgba(255,255,240, .35)';
    document.getElementById("main").style.backgroundColor = 'rgba(255,255,240, .2)';
    document.getElementById("navi").style.borderColor = 'rgba(255,255,255,1)'; 
    document.getElementById("navlower").style.borderColor = 'rgba(255,255,255,1)'; 
    document.getElementById("main").style.borderColor = 'rgba(255,255,255,1)'; 
    document.getElementById("title").style.color = 'rgba(255,255,240, .85)'; 
    document.getElementById("vers").style.color = 'rgba(255,255,240, 1)'; 
    document.getElementById("darktheme").style.textDecoration = 'underline'; 
    document.getElementById("lighttheme").style.textDecoration = 'none'; 
}

function toggleLT(){
    lightthemeis = true;
    darkthemeis = false;
    document.body.style.backgroundColor = 'rgba(255,255,240, 1)';
    document.getElementById("can1").style.backgroundColor = 'rgba(255,255,240, 1)';
    document.getElementById("navi").style.backgroundColor = 'rgba(0,0,0, .29)';
    document.getElementById("navlower").style.backgroundColor =  'rgba(255,255,240, .82)';
    document.getElementById("main").style.backgroundColor = 'rgba(0,0,0, .49)';
    document.getElementById("navi").style.borderColor = 'rgba(0,0,0,1)'; 
    document.getElementById("navlower").style.borderColor = 'rgba(0,0,0,1)'; 
    document.getElementById("main").style.borderColor = 'rgba(0,0,0,1)'; 
    document.getElementById("title").style.color = 'rgba(0,0,0,1)'; 
    document.getElementById("vers").style.color = 'rgba(0,0,0,1)'; 
    document.getElementById("lighttheme").style.textDecoration = 'underline'; 
    document.getElementById("darktheme").style.textDecoration = 'none'; 
}

if (lightthemeis) {
    document.body.style.backgroundColor = 'rgba(255,255,240, 1)';
    document.getElementById("can1").style.backgroundColor = 'rgba(255,255,240, 1)';
    document.getElementById("navi").style.backgroundColor = 'rgba(0,0,0, .29)';
    document.getElementById("navlower").style.backgroundColor =  'rgba(255,255,240, .82)';
    document.getElementById("main").style.backgroundColor = 'rgba(0,0,0, .49)';
    document.getElementById("navi").style.borderColor = 'rgba(0,0,0,1)'; 
    document.getElementById("navlower").style.borderColor = 'rgba(0,0,0,1)'; 
    document.getElementById("main").style.borderColor = 'rgba(0,0,0,1)'; 
    document.getElementById("title").style.color = 'rgba(0,0,0,1)'; 
    document.getElementById("vers").style.color = 'rgba(0,0,0,1)'; 
    document.getElementById("lighttheme").style.textDecoration = 'underline'; 
    document.getElementById("darktheme").style.textDecoration = 'none'; 
} else {
    document.body.style.backgroundColor = 'rgba(0,0,0, 1)';
    document.getElementById("can1").style.backgroundColor = 'rgba(0,0,0, 1)';
    document.getElementById("navi").style.backgroundColor = 'rgba(255,255,240, .2)';
    document.getElementById("navlower").style.backgroundColor =  'rgba(255,255,240, .35)';
    document.getElementById("main").style.backgroundColor = 'rgba(255,255,240, .2)';
    document.getElementById("navi").style.borderColor = 'rgba(255,255,255,1)'; 
    document.getElementById("navlower").style.borderColor = 'rgba(255,255,255,1)'; 
    document.getElementById("main").style.borderColor = 'rgba(255,255,255,1)'; 
    document.getElementById("title").style.color = 'rgba(255,255,240, .85)'; 
    document.getElementById("vers").style.color = 'rgba(255,255,240, 1)'; 
    document.getElementById("darktheme").style.textDecoration = 'underline'; 
    document.getElementById("lighttheme").style.textDecoration = 'none'; 
}

//button click events to change pages 
$(document).ready(function() {
    $("#homebtn").click(function(){
        $("#can3").css("display","none");
        $("#astar").css("display","none");
        $("#game").css("display","none");
        $("#hwcanvas").css("display","none");
        $("#resume").css("display","none");
        $("#main").css("display","flex");
        $("#home").css("display","flex");
        $("#settings").css("display","none");
        $("#gallery").css("display","none");
        $("#game-wrapper").css("display","none");
        $("#main").css("padding-top","0%");
        $("#main").css("padding-bottom","2%");
    });  
});

$(document).ready(function() {
    $("#portbtn").click(function(){
        $("#can3").css("display","none");
        $("#astar").css("display","none");
        $("#game").css("display","flex");
        $("#pathfinder").css("display","none");
        $("#flashpdf").css("display","none");
        $("#hwcanvas").css("display","flex");
        $("#resume").css("display","none");
        $("#main").css("display","flex");
        $("#home").css("display","none");
        $("#settings").css("display","none");
        $("#gallery").css("display","none");
        $("#game-wrapper").css("display","block");
        $("#main").css("padding-top","1%");
        $("#main").css("padding-bottom","1%");
    });  
});
$(document).ready(function() {
    $("#hwgame").click(function(){
        $("#can3").css("display","none");
        $("#astar").css("display","none");
        $("#game").css("display","flex");
        $("#pathfinder").css("display","none");
        $("#flashpdf").css("display","none");
        $("#hwcanvas").css("display","flex");
        $("#resume").css("display","none");
        $("#main").css("display","flex");
        $("#home").css("display","none");
        $("#settings").css("display","none");
        $("#gallery").css("display","none");
        $("#game-wrapper").css("display","block");
        $("#main").css("padding-top","1%");
        $("#main").css("padding-bottom","1%");
    });  
});

$(document).ready(function() {
    $("#hwastar").click(function(){
        $("#can3").css("display","none");
        $("#astar").css("display","none");
        $("#game").css("display","none");
        $("#pathfinder").css("display","flex");
        $("#flashpdf").css("display","none");
        $("#hwcanvas").css("display","flex");
        $("#resume").css("display","none");
        $("#main").css("display","flex");
        $("#home").css("display","none");
        $("#settings").css("display","none");
        $("#gallery").css("display","none");
        $("#game-wrapper").css("display","block");
        $("#main").css("padding-top","1%");
        $("#main").css("padding-bottom","1%");
    });  
});

$(document).ready(function() {
    $("#hwflashpdf").click(function(){
        $("#can3").css("display","none");
        $("#astar").css("display","none");
        $("#game").css("display","none");
        $("#pathfinder").css("display","none");
        $("#flashpdf").css("display","flex");
        $("#hwcanvas").css("display","flex");
        $("#resume").css("display","none");
        $("#main").css("display","flex");
        $("#home").css("display","none");
        $("#settings").css("display","none");
        $("#gallery").css("display","none");
        $("#game-wrapper").css("display","block");
        $("#main").css("padding-top","1%");
        $("#main").css("padding-bottom","1%");
    });  
});

$(document).ready(function() {
    $("#setbtn").click(function(){
        $("#home").css("display","none");
        $("#can3").css("display","none");
        $("#astar").css("display","none");
        $("#game").css("display","none");
        $("#hwcanvas").css("display","none");
        $("#main").css("display","flex");
        $("#resume").css("display","none");
        $("#settings").css("display","block");
        $("#gallery").css("display","none");
        $("#game-wrapper").css("display","none");
        $("#main").css("padding-top","0%");
        $("#main").css("padding-bottom","2%");
    });  
});

$(document).ready(function() {
    $("#title").click(function(){
        $("#can3").css("display","none");
        $("#astar").css("display","none");
        $("#game").css("display","none");
        $("#hwcanvas").css("display","none");
        $("#resume").css("display","none");
        $("#main").css("display","flex");
        $("#home").css("display","flex");
        $("#settings").css("display","none");
        $("#gallery").css("display","none");
        $("#game-wrapper").css("display","none");
        $("#main").css("padding-top","0%");
        $("#main").css("padding-bottom","2%");
    });  
});

$(document).ready(function() {
    $("#gallerybtn").click(function(){
        $("#home").css("display","none");
        $("#can3").css("display","none");
        $("#astar").css("display","none");
        $("#game").css("display","none");
        $("#hwcanvas").css("display","none");
        $("#main").css("display","flex");
        $("#resume").css("display","none");
        $("#settings").css("display","none");
        $("#gallery").css("display","block");
        $("#game-wrapper").css("display","none");
        $("#main").css("padding-top","0%");
        $("#main").css("padding-bottom","2%");
    });  
});

//dropdown menu animation
$(function(){
    $(".dropmenu li").hover(
        function(){
            $('>ul.sub:not(:animated)', this).slideDown(500);
        },
        function(){
            $('>ul.sub',this).slideUp(300);
        }
    );
});

//tooltips

tippy('#homebtn', {
    content: "Home",
    // placement: 'bottom',
    theme: 'dark',
    arrow: true,
});

tippy('#menubtnhov', {
    content: "Menu",
    // placement: 'right',
    theme: 'dark',
    arrow: true,
});

tippy('#setbtnhov', {
    content: "Settings",
    placement: 'right',
    theme: 'dark',
    arrow: true,
});

tippy('#switchLabel', {
    content: "Toggle Animated Background",
    placement: 'right',
    theme: 'dark',
    arrow: true,
});


