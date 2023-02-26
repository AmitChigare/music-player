let playlist = document.querySelector('.playlist');
let options = document.querySelector('.options');
var audioPlayer = document.getElementById("audio-player");
var currentSongTitle = document.getElementById('currentSongTitle')
var currentSongArtist = document.getElementById('currentSongArtist')
var currentSongImage = document.getElementById('currentSongImage')
var progressBar = document.getElementById('progress-bar');
var currentTime = document.getElementById('current-time');
var duration = document.getElementById('duration');

const outputContainer = document.getElementById('volume-output');
const volumeSlider = document.getElementById('volume-slider');
var playBtn = document.getElementById('play-btn');
var songs = [
    {% for song in all_songs %}
{
    url: '{{ song.audio_file.url }}',
        title: '{{ song.title }}',
            artist: '{{ song.artist }}',
                image: '{{ song.image.url }}',
},
{% endfor %}
];
var currentSongIndex = 0;
var prevBtn = document.getElementById('prev-btn');
var nextBtn = document.getElementById('next-btn');

function open_p() {
    playlist.classList.toggle('active');
}

function sidebar() {
    options.classList.toggle('active2');
}


function playSong(url, title, artist, image) {
    audioPlayer.src = url;
    audioPlayer.play();
    playBtn.querySelector('i').classList.remove('fa-play');
    playBtn.querySelector('i').classList.add('fa-pause');
    // if (audioPlayer.src == url) {
    //     if (audioPlayer.paused) {
    //         audioPlayer.play();
    //     } else {
    //         audioPlayer.pause();
    //     }
    // } else {
    //     audioPlayer.src = url;
    //     audioPlayer.play();
    // }
    currentSongTitle.innerHTML = title
    currentSongArtist.innerHTML = artist
    currentSongImage.src = image;
    playlist.classList.toggle('active')
}

playBtn.addEventListener('click', function () {
    if (audioPlayer.paused) {
        audioPlayer.play();
        playBtn.querySelector('i').classList.remove('bx-play');
        playBtn.querySelector('i').classList.add('bx-pause');
    } else {
        audioPlayer.pause();
        playBtn.querySelector('i').classList.remove('bx-pause');
        playBtn.querySelector('i').classList.add('bx-play');
    }
});


audioPlayer.addEventListener('timeupdate', function () {
    var progress = audioPlayer.currentTime / audioPlayer.duration;
    progressBar.style.width = (progress * 100) + '%';
});

prevBtn.addEventListener('click', function () {
    playlist.classList.toggle('active')
    currentSongIndex--;
    if (currentSongIndex < 0) {
        currentSongIndex = songs.length - 1;
    }
    playSong(songs[currentSongIndex].url, songs[currentSongIndex].title, songs[currentSongIndex].artist, songs[currentSongIndex].image);
});

nextBtn.addEventListener('click', function () {
    playlist.classList.toggle('active')
    currentSongIndex++;
    if (currentSongIndex >= songs.length) {
        currentSongIndex = 0;
    }
    playSong(songs[currentSongIndex].url, songs[currentSongIndex].title, songs[currentSongIndex].artist, songs[currentSongIndex].image);
});

volumeSlider.addEventListener('input', (e) => {
    const value = e.target.value;
    outputContainer.textContent = value;
    audioPlayer.volume = value / 100;
});

audioPlayer.addEventListener('timeupdate', function () {
    var progress = audioPlayer.currentTime / audioPlayer.duration;
    progressBar.style.width = (progress * 100) + '%';
    var minutes = Math.floor(audioPlayer.currentTime / 60);
    var seconds = Math.floor(audioPlayer.currentTime % 60);
    if (seconds < 10) {
        seconds = '0' + seconds;
    }
    currentTime.textContent = minutes + ':' + seconds;
});

audioPlayer.addEventListener('loadedmetadata', function () {
    var minutes = Math.floor(audioPlayer.duration / 60);
    var seconds = Math.floor(audioPlayer.duration % 60);
    if (seconds < 10) {
        seconds = '0' + seconds;
    }
    duration.textContent = minutes + ':' + seconds;
});
