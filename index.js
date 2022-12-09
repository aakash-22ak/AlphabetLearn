var numofButt= document.querySelectorAll(".letter").length;
// on click
for(i=0;i<numofButt;i++){
    document.querySelectorAll(".letter")[i].addEventListener("click",function(){
        var buttinnerHtml = this.innerHTML;
        playSound(buttinnerHtml);
        buttonAnimate(buttinnerHtml);
    })
}
//onkey press
document.addEventListener("keypress",function(event){
    playSound(event.key)
    buttonAnimate(event.key)
})
//onmouse over
// for(i=0;i<numofButt;i++){
//     document.querySelectorAll(".letter")[i].addEventListener("mouseover",function(){
//         var buttinnerHtml = this.innerHTML;
//         playSound(buttinnerHtml)
//     })
// }
//function for animation
// function buttonAnimate(currentKey){
//     var activeButt=document.querySelectorAll("." + currentKey);
//     activeButt.classList.add("pressed")
//     setTimeout(() => {
//         activeButt.classList.remove("pressed")
//     }, 300);
// }


//function for playing sound
function playSound(key){
    switch(key){
        case 'A':
            var a = new Audio("sound/a.mp3")
            a.play();
            break;
        case 'B':
            var b= new Audio("sound/b.mp3")
            b.play();
            break;
        case 'C':
            var c= new Audio("sound/c.mp3")
            c.play();
            break;
        case 'D':
            var d= new Audio("sound/d.mp3")
            d.play();
            break;
        case 'E':
            var e= new Audio("sound/e.mp3")
            e.play();
            break;
        case 'F':
            var f= new Audio("sound/f.mp3")
            f.play();
            break;
        case 'G':
            var g= new Audio("sound/g.mp3")
            g.play();
            break;
        case 'H':
            var h= new Audio("sound/h.mp3")
            h.play();
            break;
        case 'I':
            var i= new Audio("sound/i.mp3")
            i.play();
            break;
        case 'J':
            var j= new Audio("sound/j.mp3")
            j.play();
            break;
        case 'K':
            var k= new Audio("sound/k.mp3")
            k.play();
            break;
        case 'L':
            var l= new Audio("sound/l.mp3")
            l.play();
            break;
        case 'M':
            var m= new Audio("sound/m.mp3")
            m.play();
            break;
        case 'N':
            var n= new Audio("sound/n.mp3")
            n.play();
            break;
        case 'O':
            var o= new Audio("sound/o.mp3")
            o.play();
            break;
        case 'P':
            var p= new Audio("sound/p.mp3")
            p.play();
            break;
        case 'Q':
            var q= new Audio("sound/q.mp3")
            q.play();
            break;
        case 'R':
            var r= new Audio("sound/r.mp3")
            r.play();
            break;
        case 'S':
            var s= new Audio("sound/s.mp3")
            s.play();
            break;
        case 'T':
            var t= new Audio("sound/t.mp3")
            t.play();
            break;
        case 'U':
            var u= new Audio("sound/u.mp3")
            u.play();
            break;
        case 'V':
            var v= new Audio("sound/v.mp3")
            v.play();
            break;
        case 'W':
            var w= new Audio("sound/w.mp3")
            w.play();
            break;
        case 'X':
            var x= new Audio("sound/x.mp3")
            x.play();
            break;
        case 'Y':
            var y= new Audio("sound/y.mp3")
            y.play();
            break;
        case 'Z':
            var z= new Audio("sound/z.mp3")
            z.play();
            break;
    }
}


