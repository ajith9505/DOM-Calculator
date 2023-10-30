const allClear = document.getElementById("clear");
const display = document.getElementById("result");
const del = document.getElementById("delete");
const equal = document.getElementById("equal");
const input = document.querySelectorAll('[inputs]');

allClear.addEventListener('click', () => {
    display.value = '';
});

del.addEventListener('click', () => {
    display.value = display.value.toString().slice(0, -1);
});

equal.addEventListener('click', () => {
    try {
        display.value = eval(display.value)
    }
    catch (error){
        display.value = "syntax error";
    }
});

input.forEach(button => {
    button.addEventListener('click', () => {
        display.value += button.innerText;
        console.log(button.innerText);
    });
})

function validate(e) {
    let keycode = e.keycode || e.which;
    if ((keycode >= 48 && keycode <= 57 || keycode >= 42 && keycode <= 47)) {
        return true;
    }
    else{
        alert('Number only allowed.')
        return false;
    }
}
