const scriptURL = 'https://script.google.com/macros/s/AKfycbwEO9mT2bLWYi9hIEKRFnYJoEITL1SMcwiqxdB0ZlXajuPjkC2X--o0INo3q90Eda3XYQ/exec'
const form = document.forms['submit-to-google-sheet']
let msg = document.querySelector(".msg");

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerText = "tnak you fro subscribing !"
         setInterval( function(){
            msg.innerText = ""
         },4000)
         form.reset();
    })
    .catch(error => console.error('Error!', error.message))
});