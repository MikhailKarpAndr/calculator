document.querySelector('.add').onclick = function () {
    let num1 = parseInt(document.querySelector('#num1').value);
    let num2 = parseInt(document.querySelector('#num2').value);
    alert(num1 + num2);
}