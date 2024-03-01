const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// promt the user to select a videostream and then pass to video element then play
async function selectMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    };
  } catch (error) {}
}

button.addEventListener('click', async () => {
  // disable button when we click on it
  button.disabled = true;
  //start picture in picture
  await videoElement.requestPictureInPicture();
  // reset button
  button.disabled = false;
});

//on load

selectMediaStream();
