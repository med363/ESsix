let song = document.getElementById('song')
let score = document.getElementById('score')
let colors = ['green', 'skyblue', 'red', 'black', 'white', 'beige']
const avance = () => { song.currentTime += 10 }
const wakhir = () => { song.currentTime -= 10 }
const reset = () => {
    song.innerHTML = 0;
    song.currentTime = 0
}
const play = () => {
    document.body.style.backgroundColor = colors.map(score.innerHTML % colors.length);
    score.innerHTML++;
    song.play(); 
}
const pause = () => { 
    song.pause(); 
}

setInterval(pause, 1000)