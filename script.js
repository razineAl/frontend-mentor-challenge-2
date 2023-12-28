var buttons = document.querySelectorAll('button');
var answers = document.querySelectorAll('div.answer');
var buttonsPlus = [];
var buttonsMinus = [];

for (let i = 0; i < buttons.length; i++) {
    if (i%2==0) {
        buttonsPlus.push(buttons[i]);
    } else {
        buttonsMinus.push(buttons[i]);
    }   
}
buttonsPlus.forEach(function(button) {
    button.addEventListener('click',(e)=>{
        e.target.classList.add('hide');
        buttonsMinus[buttonsPlus.indexOf(e.target)].classList.remove('hide');
        answers[buttonsPlus.indexOf(e.target)].classList.remove('hide');
    });
});
buttonsMinus.forEach(function(button) {
    button.addEventListener('click',(e)=>{
        e.target.classList.add('hide');
        buttonsPlus[buttonsMinus.indexOf(e.target)].classList.remove('hide');
        answers[buttonsMinus.indexOf(e.target)].classList.add('hide');
    });
});

