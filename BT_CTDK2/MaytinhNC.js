let view= document.getElementById('view');
function inputvalue(value){
    view.value += value;
}
function result() {
    let result = eval(view.value);
    view.value = result
}
function xoa() {
    view.value = '';
}