var form = document.getElementById('post');
var input = document.getElementById('msg');
var feedback = document.querySelector('.error');
var msg = document.getElementById('msg').value;
var third = document.getElementById('third_post');
var text = document.getElementById('msg');
var warning = document.querySelector('.warning');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    var msg = input.value;
    console.log(msg)
    if(msg) {
        input.textContent = msg;
        form.reset();
    } else {
        feedback.classList.add('show')
        input.classList.add('show')
        setTimeout(function() {
			feedback.classList.remove('show');
            input.classList.remove('show')
		}, 2000);
    } 
})

third.addEventListener('submit', function(e) {
    e.preventDefault();
    var msg = text.value;

    if(msg) {
        text.textContent = msg;
        form.reset();
    } else {
        warning.classList.add('show');
        text.classList.add('show');
        setTimeout(function() {
			warning.classList.remove('show');
            text.classList.remove('show')
		}, 2000);
    }
})