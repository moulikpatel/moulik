let img=document.getElementById("heroimg");
let arr=["hero.webp","hero2.jfif","hero3.jfif","hero4.jfif"];
let left=document.getElementById("left");
let right=document.getElementById("right");
let con=0;
left.addEventListener('click',()=>{
    con-=1;
    if(con < 0){
        con=3
    }
    if(con==0){
        img.src=arr[con];
    }
    else if(con==1){
        img.src=arr[con];
    }
    else if(con==2){
        img.src=arr[con];
    }
    else if(con==3){
        img.src=arr[con];
    }
})
right.addEventListener('click',()=>{
    con+=1;
    if(con >3){
        con=0
    }
    if(con==0){
        img.src=arr[con];
    }
    else if(con==1){
        img.src=arr[con];
    }
    else if(con==2){
        img.src=arr[con];
    }
    else if(con==3){
        img.src=arr[con];
    }
})
setInterval(()=>{
    con+=1;
    if(con >3){
        con=0
    }
    if(con==0){
        img.src=arr[con];
    }
    else if(con==1){
        img.src=arr[con];
    }
    else if(con==2){
        img.src=arr[con];
    }
    else if(con==3){
        img.src=arr[con];
    }
},2000);
let sections=document.querySelectorAll('section');
window.onscroll = () => {
    sections.forEach(sec => {
        let top=window.scrollY;
        let offset=sec.offsetTop-150;
        let height=sec.offsetHeight;
        if(top >= offset && top < offset+height){
            sec.classList.add('show-animate');
        }
        else{
            sec.classList.remove('show-animate');

        }
    })
}
