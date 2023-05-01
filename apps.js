let openBtn=document.getElementById('open-btn');
let boxContent=document.getElementById('box-content');
let closeBtn=document.getElementById('box-close');
openBtn.addEventListener('click',function(){
    boxContent.style.display='block';
});
closeBtn.addEventListener('click',function(){
    boxContent.style.display='none';
});
window.addEventListener('click',function(e){
    if(e.target===boxContent){
        boxContent.style.display='none';
    }
})