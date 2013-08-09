navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia
window.URL = window.URL || window.webkitURL
video = document.getElementById('primaryCam');

var constraints =  {video: true}
if (navigator.getUserMedia) {
	console.log('Hi')
	document.getElementById("one").innerHTML = "Hi!" 
	window.navigator.getUserMedia(
		constraints,
		function (stream){
			if (navigator.mozGetUserMedia){
				console.log('Firefox go')
				video.mozSrcObject = stream
			} else {
				console.log('Chrome')
				video.src = window.URL.createObjectURL(stream)
			}
			console.log('Object created')
		},

		function(err){
			document.getElementById("one").innerHTML = "Something went wrong"
			console.log('Problem getting Stream')
		}
)} else {
    console.log('No getUserMedia')
}

