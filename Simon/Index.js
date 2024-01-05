var buttoncolours = ["red","green","blue","yellow"]
var gamepattern = []
var started =false
var level = 1
var userclickedpattern = []
function nextsequence(){
    var sequence = Math.floor((Math.random()*4))
    console.log(buttoncolours[sequence]) 
    var randomchosencolour = buttoncolours[sequence]
    gamepattern.push(randomchosencolour)
    $("#"+ randomchosencolour).fadeIn(100).fadeOut(100).fadeIn(100)
    playsound(randomchosencolour)
    console.log(("Sounds/" + randomchosencolour + ".mp3"))
   // level++
    //userclickedpattern=[]
}
$(".btn").click(function(){
    var userchosencolor = $(this).attr("id")
    userclickedpattern.push(userchosencolor)
    console.log(userclickedpattern)
    playsound(userchosencolor)
    animatepress(userchosencolor)
    checkanswer(userclickedpattern.length-1)
})
function playsound(name){
    var audio =new Audio("Sounds/" + name + ".mp3")
    audio.play();
}
function animatepress(currentcolor){
   $("#"+currentcolor).addClass("pressed")
   setTimeout(function(){
   $("#"+currentcolor).removeClass("pressed")
   },100)
}
$(document).keypress(function(){
    if(!started){
    $("#level-title").text("Level " + level)
    nextsequence()
    started=true
    }
})
function checkanswer(currentlevel){
    if(gamepattern[currentlevel] === userclickedpattern[currentlevel]){
     if(userclickedpattern.length === gamepattern.length){
        setTimeout(function(){
            nextsequence()
        },1000)
     }
}else{
    playsound("wrong")
    $("body").addClass("game-over")
    $("#level-title").text("Game Over. Press any key to restart.")
    setTimeout(function(){
        $("body").removeClass("game-over")    }
        ,200)
    restart()
}console.log(gamepattern)}
function restart(){
    level=0
    gamepattern=[]
    started=false
    keypress()
}