document.getElementById('audio-upload').addEventListener('change', function(event) {
  const file = event.target.files[0];
  if (file) {
    const objectURL = URL.createObjectURL(file);
    const audioPlayer = document.getElementById('audio-player');
    const audioSource = document.getElementById('audio-source');
    audioSource.src = objectURL;
    audioPlayer.load();
    audioPlayer.play();
  }
});
