const myVideo = document.getElementById('myVideo');
const vidNumOut = document.getElementById('vidNum');
let timer = null;

btnNext.addEventListener('click',nextVideo);
myVideo.addEventListener('click',vidEnded);

const vids = ["3D Works 1.mp4", "3D Works 2.mp4", "3D Works 3.mp4", "3D Works 4.mp4"];
let vidPlaying = 0;

function playVideo() {
    myVideo.play();
    timer = setInterval(update, 100);
}

function update() {
    timeOut.innerHTML = "Time: " + myTime(Myvideo.currentTime) + "/" + myTime(myVideo.duration);
}

function myTime(time) {
    var hr = ~~(time / 3600);
    var min = ~~((time % 3600) / 60);
    var sec = time % 60;
    var sec_min = "";
    if (hr > 0) {
        sec_min += "" + hrs + ":" + (min < 10 ? "0" : "");
    }
    sec_min += "" + min + ":" + (sec < 10 ? "0" : "");
    sec_min += "" + Math.round(sec);
    return sec_min;
}

 function vidEnded() {
     clearInterval(timer);
 }

 function nextVideo() {
     if(vidPlaying < 3) {
         vidPlaying++;
     } else {
         vidPlaying = 0;
     }
     myVideo.src = "3D Videos/" + vids[vidPlaying];
     vidNum.innerHTML = (vidPlaying + 1) + "/4";
 }