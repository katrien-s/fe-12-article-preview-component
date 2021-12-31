const shareButtonElement = document.getElementById('share-btn');
const shareSocialMediaElement = document.getElementById('share-social-media');

function shareSocialMedia() {
  shareSocialMediaElement.classList.toggle('active');
}

shareButtonElement.addEventListener('click', shareSocialMedia);
