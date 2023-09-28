const items = document.querySelectorAll(".question");
items.forEach(item => {
    const titles = item.querySelector(".title");
    const contents = item.querySelector(".content");

    titles.addEventListener('click',() => {
        for(let i=0;i<items.length;i++){
            if(items[i] != item){
                items[i].classList.remove('active');
            }else{
                item.classList.toggle('active');
            }
        }
    });
});