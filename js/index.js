var submenu = document.querySelector('.submenu');
submenu.style.display = 'none';

var downloadButton = document.querySelector('.btn');

var link1 = document.querySelector(".link1");

var link2 = document.querySelector(".link2");

downloadButton.addEventListener('click', ()=>{
    setTimeout(() => {
        submenu.style.display = 'block';

    }, 400);

})

link1.addEventListener('click', ()=>{
    submenu.style.display = 'none';
})
   
    

link2.addEventListener('click', ()=>{
    submenu.style.display = 'none';
})



