
var timer = 60
var score = 0
var newHit = 0


function makehit() {
    newHit = Math.floor(Math.random() * 10)
    document.querySelector("#hitval").textContent = newHit
}

function makebubble() {
    let clutter = "";

    for (let i = 1; i <= 1000; i++) {
        let rn = Math.floor(Math.random() * 10)
        clutter += `<div class="bubble">${rn}</div>`;

    }

    document.querySelector("#pbtm").innerHTML = clutter;

} 
 

function maketimer() {
    var runtimer = setInterval(function () {
        if (timer > 0) {
            timer--
            document.querySelector("#Timerval").textContent = timer
        }
        else {
            clearInterval(runtimer)
            document.querySelector("#pbtm").innerHTML = `<h1>Game Over <br/> score: ${score}  😅😎🎉✨</h1>`
            
        }

    }, 1000)
}



function removeclass() {
    var glass = document.getElementById("main-glass")
        document.querySelector(".glass-button")
        .addEventListener("click", function () {
            glass.style.display = "none"
        })    
}

function start() {
    document.querySelector(".glass-button")
        .addEventListener("click", function () {
            setTimeout(() => {
                makehit()
                maketimer()
                makebubble()
                removeclass()
            }, 500);
        })
}





function incscore() {
    score += 10
    document.querySelector("#scoreval").textContent = score
}

document.querySelector("#pbtm").addEventListener("click", function (dets) {
    var clickdNo = Number(dets.target.textContent)

    if (clickdNo === newHit) {
        incscore()
        makehit();
        makebubble();
        removeclass()
    }
})

removeclass()
makehit();
makebubble();
maketimer();








































// document.querySelector("#pbtm").addEventListener("click", function (dets) {
//     var clickdNo = Number(dets.target.textContent)
//     if (clickdNo === newHit) {
//         incscore()
//         makehit();
//         makebubble();
//         maketimer();
//     }
// })