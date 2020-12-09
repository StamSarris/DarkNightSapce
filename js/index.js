console.log('test');
//select the nav
//add event click
//addeffect

const cl = document.querySelector('.navopen');


cl.addEventListener('click', () => {
    document.querySelector('.nav_mobile').style.display = 'flex';

}
);

document.querySelector('.nav_mobile_title').addEventListener('click',()=>{
    document.querySelector('.nav_mobile').style.display = 'none';
   
})