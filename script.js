console.log("Welcome to Spotify");

let songIndex = 0;
let audioElement = new Audio("songs/1.mp3");
let masterPlay = document.getElementById("masterPlay");
let myProgressbar = document.getElementById("myprogressbar");
let masterSongNamae = document.getElementById("masterSongName");
let songItems = Array.from(document.getElementsByClassName("songitem"));
let gif = document.getElementById('gif');

let songs = [
  { songName: "Humdard", filePath: "songs/1.mp3", coverPath: "covers/1.jpg" },
  { songName: "295 - Sdhu MooseWala", filePath: "songs/2.mp3", coverPath: "covers/2.jpg" },
  {
    songName: "Let ME Down Slowly ",
    filePath: "songs/3.mp3",
    coverPath: "covers/3.jpg",
  },
  {
    songName: "Baarishein- Anuv Jain",
    filePath: "songs/4.mp3",
    coverPath: "covers/4.jpg",
  },
  { songName: "Beliya", filePath: "songs/5.mp3", coverPath: "covers/5.jpg" },
  {
    songName: "Galliyan",
    filePath: "songs/6.m4a",
    coverPath: "covers/6.jpg",
  },
  {
    songName: "Tu Jaane Na - ATIF ASLAM",
    filePath: "songs/1.mp3",
    coverPath: "covers/7.jpg",
  },
  {
    songName: "King - Tu Ake Dekhle",
    filePath: "songs/2.mp3",
    coverPath: "covers/8.jpg",
  },
  { songName: "Na ji na- Hardy Sandu", filePath: "songs/3.mp3", coverPath: "covers/9.jpg" },
];

songItems.forEach((element, i) => {
  console.log(element, i);
  element.getElementsByTagName("img")[0].src = songs[i].coverPath;
  element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});

// let audioElement = new Audio ('1.mp3');
masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");
    gif.style.opacity=1;
  } else {
    audioElement.pause();
    masterPlay.classList.remove("fa-circle-pause");
    masterPlay.classList.add("fa-play-circle");
    gif.style.opacity=0;
  }
});

audioElement.addEventListener("timeupdate", () => {
  console.log("timeupdate");

  progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
  console.log(progress);
  myProgressbar.value = progress;
});

myProgressbar.addEventListener("change", () => {
  audioElement.currentTime =
    (myProgressbar.value * audioElement.duration) / 100;
});

const makeallPlays = () => {
  Array.from(document.getElementsByClassName("songitemplay")).forEach(
    (element) => {
      element.classList.remove("fa-play-circle");
      element.classList.add("fa-play-circle");
    }
  );
};
Array.from(document.getElementsByClassName("songitemplay")).forEach(
  (element) => {
    element.addEventListener("click", (e) => {
      makeallPlays();
      gif.style.opacity=1;
     
      songIndex = parseInt(e.target.id);
      e.target.classList.remove("fa-play-circle");
      e.target.classList.add("fa-pause-circle");
      audioElement.src = `songs/${songIndex+1}.mp3`;
      masterSongNamae.innerText = songs[songIndex].songName;
      audioElement.currentTime = 0;
      audioElement.play();
      masterPlay.classList.remove("fa-play-circle");
      masterPlay.classList.add("fa-pause-circle");
    })
  }
)

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>9){
        songIndex=0;
    }
    else{
        songIndex+=1
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongNamae.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");

})
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0;
    }
    else{
        songIndex-=1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongNamae.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");

})