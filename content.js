var title =document.querySelector('title').innerText
document.querySelector('title').innerText=`${title} by Priyam`
console.log('CONTENT SCRIPT IS WORKING')

const videoTitleElement = document.querySelectorAll(' div#title')[-1];
console.log(videoTitleElement)

if (videoTitleElement) {
  videoTitleElement.textContent = "New Video Title";
}