console.log("Welcome to Tic Tac Toe")
let song = new Audio("slow-trap-18565.mp3")
let turnOver = new Audio("decidemp3-14575.mp3")
let turn = "X"
let isgameOver = false;
const changeTurn = ()=>{
    return turn === "X"?"0":"X"
}
const checkWin = ()=>{
    let boxtexts = document.getElementsByClassName('boxtext')
    let wins = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]
    wins.forEach(e =>{
        if((boxtexts[e[0]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[2]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[0]].innerText !== "")){
            document.querySelector('.info').innerText = boxtexts[e[0]].innerText + " Won"
            isgameOver = true
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px"
        }
    })
}
song.addEventListener('play', () => {
    console.log("Song is playing.");
});

song.addEventListener('error', (e) => {
    console.error("Error playing song:", e);
});

// Do the same for the "turnOver" audio element.
song.addEventListener('canplaythrough', () => {
    song.play();
});
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxtext')
    element.addEventListener('click', ()=>{
        if(boxtext.innerText === ''){
            boxtext.innerText = turn;
            turn = changeTurn();
            turnOver.play();
            checkWin();
            if(!isgameOver)
            {
                document.getElementsByClassName("info")[0].innerText = "Turn for "+turn;
            }
        }
    })
})

reset.addEventListener('click',()=>{
    let boxT = document.querySelectorAll('.boxtext');
    Array.from(boxT).forEach(e =>{
        e.innerText = ""
    });
    turn = "X";
    isgameOver = false;
    document.getElementsByClassName("info")[0].innerText = "Turn for "+turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px"
})