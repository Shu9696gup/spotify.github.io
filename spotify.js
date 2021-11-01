console.log("Welcome to Spotify");

let songIndex=0;
let audioElement = new Audio("songs/1.mp3");
let masterPlay = document.getElementById('masterPlay');
let progressBar=document.getElementById('progressBar');
let gif= document.getElementsByClassName('gifPlay')[0];


let sons = [
    { songName: "Let us Love You", filePath: "songs/1.mp3", coverPath: "covers/1.jpg" },
    { songName: "Let us Love You", filePath: "songs/2.mp3", coverPath: "covers/2.jpg" },
    { songName: "Let us Love You", filePath: "songs/3.mp3", coverPath: "covers/3.jpg" },
    { songName: "Let us Love You", filePath: "songs/4.mp3", coverPath: "covers/4.jpg" },
    { songName: "Let us Love You", filePath: "songs/5.mp3", coverPath: "covers/5.jpg" }
]





// console.log("Shubham")
// audioElement.play()
masterPlay.addEventListener('click',()=> {
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle')  
        masterPlay.classList.add('fa-pause-circle')
        // play.classList.remove('fa-play-circle')  
        // play.classList.add('fa-pause-circle')
        gif.style.opacity=1;        
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove ('fa-pause-circle')  
        masterPlay.classList.add('fa-play-circle') 
        // play.classList.remove('fa-play-circle')  
        // play.classList.add('fa-pause-circle')
        gif.style.opacity=0;
    }
})
audioElement.addEventListener('timeupdate', ()=>{
    // console.log('timeupdate');
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    console.log(progress)
    progressBar.value=progress;
})

 progressBar.addEventListener('change',()=>{
     audioElement.currentTime=progressBar.value*audioElement.duration/100;
 })
 