imagen=["cris.jpg","insta.jpg","cora.jpg","discord.jpg","tik.jpg","was.jpg"];
let container= document.querySelector(".container");


i=0;
setInterval(()=>{
 i++;
container.style.backgroundImage = "url(" + imagen[i] + ")";
console.log(imagen[i])
if (i>4){
    i=0
}
},3000)