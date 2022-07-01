const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelectorAll('.navbar__menu')

menu.addEventListener('click',function(){
    menu.classList.toggle('is-active');
});
function dodawanie(){
    var pod = document.getElementById('pod').value;
var typ = document.getElementById('typ').value;

var op1 =''
if(typ ==1){
    op1 = (parseInt(pod)*2)*100;
}
else if(typ ==2){
    op1 = (parseInt(pod)*1.5)*100;
}
else if(typ ==3){
    op1 = (parseInt(pod)*5)*100;
}
//var sum = document.getElementById('sum').innerHTML = op1;
document.getElementById('sum').value = op1

}
