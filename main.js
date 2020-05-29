// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const errorModal = document.querySelector("#modal");
const errorMessage = errorModal.querySelector("#modal-message");
errorModal.className = "hidden";
const likableElements = document.querySelectorAll(".like-glyph");
likableElements.forEach(likableElement => {
  likableElement.addEventListener("click", () => {
    mimicServerCall()
    //.then(response => response.json())
    //.then(json => toggleLiked(json))
    .then(() => function(){
      if (likeableElement.className = "activated-heart"){
        likeableElement.innerHTML = ? FULL_HEART : EMPTY_HEART;
      else{
        likeableElement.innerHTML = FULL_HEART;
        likeableElement.className = "activated-heart";
      }
    })
    .catch(error => renderError(error));
  })
});

function toggleLiked(json){
  //const likableElement =
  console.log(json);
}

function renderError(error){
  errorMessage.innerHTML = error.message;
  errorModal.classList.remove("hidden");
  //hide the error modal after 5 seconds:
  setTimeout(function(){ errorModal.className = "hidden"; }, 5000);
}

//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
