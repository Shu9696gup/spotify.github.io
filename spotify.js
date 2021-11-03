console.log("Welcome to Spotify");

let songIndex=0;
let audioElement = new Audio("songs/1.mp3");
let masterPlay = document.getElementById('masterPlay');
let progressBar=document.getElementById('progressBar');
let gif= document.getElementsByClassName('gifPlay')[0];
let songItems= Array.from(document.getElementsByClassName('songItem'));


let songs = [
    { songName: "Let us Love You1", filePath: "songs/1.mp3", coverPath: "covers/1.jpg" ,duration:"3:15", gif: "./playing.gif"},

    { songName: "Let us Love You2", filePath: "songs/2.mp3", coverPath: "covers/2.jpg" ,duration:"2:17",gif:"./playing.gif"},
    { songName: "Let us Love You3", filePath: "songs/3.mp3", coverPath: "covers/3.jpg" ,duration:"3:50",gif:"./playing.gif"},
    { songName: "Let us Love You4", filePath: "songs/4.mp3", coverPath: "covers/4.jpg" ,duration:"2:35",gif:"./playing.gif"},
    { songName: "Let us Love You5", filePath: "songs/5.mp3", coverPath: "covers/5.jpg" ,duration:"3:30",gif:"./playing.gif"},
    { songName: "Let us Love You6", filePath: "songs/6.mp3", coverPath: "covers/6.jpg" ,duration:"3:15",gif:"./playing.gif"},
    { songName: "Let us Love You7", filePath: "songs/7.mp3", coverPath: "covers/7.jpg" ,duration:"2:15",gif:"./playing.gif"},
    { songName: "Let us Love You8", filePath: "songs/8.mp3", coverPath: "covers/8.jpg" ,duration:"2:50",gif:"./playing.gif"},
    { songName: "Let us Love You9", filePath: "songs/9.mp3", coverPath: "covers/9.jpg" ,duration:"4:15",gif:"./playing.gif"},
    { songName: "Let us Love You10", filePath: "songs/10.mp3", coverPath: "covers/10.jpg" ,duration:"3:25",gif:"./playing.gif"}
]
songItems.forEach((element,i)=>{
    console.log(element,i);
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText=songs[i].songName;
    element.getElementsByClassName("time")[0].innerText=songs[i].duration;
    element.getElementsByClassName("gifPlay")[0].src=songs[i].gif;
})




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
 