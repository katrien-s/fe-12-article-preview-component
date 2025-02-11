const shareButtonElement = document.getElementById('share-btn');
const shareSocialMediaElement = document.getElementById('share-social-media');

function shareSocialMedia() {
	shareSocialMediaElement.classList.toggle('active');

	const isExpanded = shareSocialMediaElement.classList.contains('active');
	shareButtonElement.setAttribute('aria-expanded', isExpanded);
}

shareButtonElement.addEventListener('click', shareSocialMedia);
