for(var i=1;i<101;i++){
    if(i%2==0){
        $(".ele-"+i)[0].style.backgroundColor="red";
    }
}
function ladder(pos){
if(pos == 38 ){
    return 64;
}
if(pos == 46){
    return 74;
}
if(pos == 14){
    return 48;
}
return 0;
}
function snake(pos1){
    if(pos1 == 98){
        return 7;
    }
    if(pos1 == 94){
        return 72;
    }
    if (pos1 == 75){
        return 53;

    }
    if (pos1 == 30){
        return 15;
    }
    return 0;
}
function move(player,number){
    if(player+number>100){
        return player;
    }
    else if(snake(player))
    {
       return snake(player); 
    }
    else if(ladder(player)){
        return ladder(player);
    }
    else{
        return player+number;
    }
}
function checkwinner(player){
    if(player==100){
        return 1;
    }
    else{
        return 0;
    }
}
var player1=1;
var player2=1;
var count=0;
function play(){
player1img='<img src="coin1.png" alt="" class="coin1">'
player2img='<img src="coin2.png" alt="" class="coin2">';
count+=1;

if(count%2!==0){
    let rand=Math.floor(Math.random()*5)+1;
    console.log(rand);
    let x=move(player1,rand);
    var a = document.querySelector(".ele-"+player1);
    if (player1==player2){
        a.innerHTML=player1+'<br/>';
        a.innerHTML+=player2img;
    }
    else{
        a.innerHTML=player1+'<br/>';
    }
    var b = document.querySelector(".ele-"+x);
    player1=x;
    b.innerHTML+=player1img;
    var n = checkwinner(x);
    if(n==1){
        alert("player1 won the match");
        location.reload();
    }
    var t=document.querySelector(".player");
    t.innerHTML="player: player-1";
    var s = document.querySelector('.randomno');
    s.innerHTML="Dice:"+ rand;

}
else{
    let rand=Math.floor(Math.random()*5)+1;
    console.log(rand);
    let x=move(player2,rand);
    var a = document.querySelector(".ele-"+player2);
    if (player1==player2){
        a.innerHTML=player1+'<br/>';
        a.innerHTML+=player1img;
    }
    else{
        a.innerHTML=player2+'<br/>';
    }
    var b = document.querySelector(".ele-"+x);
    player2=x;
    b.innerHTML+=player2img;
    var n = checkwinner(x);
    if(n==1){
        alert("player2 won the match");
        location.reload();
    }
    var t=document.querySelector(".player");
    t.innerHTML="player: player-2";
    var s = document.querySelector('.randomno');
    s.innerHTML="Dice:"+ rand;
}
}


