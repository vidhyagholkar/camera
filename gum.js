navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia
window.URL = window.URL || window.webkitURL
video = document.getElementById('me');

var constraints =  {video: true}
if (navigator.getUserMedia) {
	console.log('Hi')
	document.getElementById("one").innerHTML = "Hi!"; 
	window.navigator.getUserMedia(
		constraints,
		function (stream){
			console.log('Chrome')
			video.src = window.URL.createObjectURL(stream)
		}, 
		function(err){
			document.getElementById("one").innerHTML = "something went wrong"
		}
)} else {
    console.log('There is a problem')
}

