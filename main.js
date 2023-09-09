
var time=60;
var score = 0;
var hitrn = 0;


function makebubble(){
    var clutter="";
    for(var i = 1; i<=140; i++){
        var x = Math.floor(Math.random()*10) //math.floor -->finish the values after the point in integer
                                             //math.random -->generate the random number between 0 to 1 
    
        clutter+= `<div class="bubble">${x}</div>`;
    }
    
    document.getElementById("lowerbox").innerHTML = clutter;
}
function realtime(){
    var timeline = setInterval(function(){
        time--;
        if (time >= 0) {
            document.getElementById("timer").innerHTML=time;
        }
        else{
            clearInterval(timeline);
            document.getElementById("lowerbox").innerHTML= "<h1> GAME OVER</h1>";
        }
        

    },1000);
    


}
function newhit(){
     hitrn = Math.floor(Math.random()*10)
    document.getElementById("hitno").innerHTML= hitrn;

}
function scorecount(){
    score += 1;
    document.getElementById("scoreno").innerHTML = score;

}
document.querySelector("#lowerbox").addEventListener("click",function(details){
   var content =  Number((details.target.textContent));
   if (content == hitrn) {
    
    scorecount();
    newhit();
    makebubble();
    
   }
 
});
realtime();
makebubble();
newhit();

