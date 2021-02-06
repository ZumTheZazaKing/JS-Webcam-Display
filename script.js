//
//
//The following code allows the computer to use the webcam
//
//

var video = document.querySelector('.player');

if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {

    console.log("getUserMedia() not supported.");

}

function getVideo() {
    
    navigator.mediaDevices.getUserMedia({ audio: false, video: true })

        .then(function(stream) {

            if ("srcObject" in video) {

                video.srcObject = stream;

            } else {

                video.src = window.URL.createObjectURL(stream);

            }

            video.onloadedmetadata = function() {

                video.play();

            };
        
        })

        .catch(function(err) {

              console.log(err.name + ": " + err.message);

        });
        
};

getVideo();