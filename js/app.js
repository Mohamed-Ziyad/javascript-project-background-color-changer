const colors=['yellow','green','blue','red','grey','#f15025','rgba(125,125,125,0.5)'];

const btn = document.getElementById('btn');

//add event listner
btn.addEventListener('click',()=>{
    let random = Math.floor(Math.random()* colors.length);
    const body = document.body;
    body.style.backgroundColor= colors[random];
    console.log(random);
})