AOS.init({
  duration: 1500
});
function myFunction() {
var x = document.getElementById("myTopnav");
if (x.className === "topnav") {
  x.className += " responsive";
} else {
  x.className = "topnav";
}
}
const scriptURL ='https://script.google.com/macros/s/AKfycbzZ4KACmVIo4NgFEdwLGkFjFt6koA3zWb67MO6ABailhgtFIGXAw3XjjX25RdwN637h6A/exec'
const form = document.forms['google-sheet']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, {
            method: 'POST',
            body: new FormData(form)
        })
        .then(response => alert(
            "Thanks for you valuable feedback!!!"))
        .catch(error => console.error('Error!', error.message))
})

document.getElementById("input").required = true;
