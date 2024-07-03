const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const picname = ['pic1.jpg','pic2.jpg','pic3.jpg','pic4.jpg','pic5.jpg'];
/* Declaring the alternative text for each image file */
const picntext = ['pic1.jpg','pic2.jpg','pic3.jpg','pic4.jpg','pic5.jpg'];
/* Looping through images */
for (var i = 0 ; i < picname.length; i ++){
    const newImage = document.createElement('img');
    newImage.setAttribute('src', `images/${picname[i]}`);
    newImage.setAttribute('alt', picntext[i]);
    thumbBar.appendChild(newImage);
}
thumbBar.addEventListener('click',(e)=>{
    displayedImage.src=e.target.src;
    console.log(e.target.src);
});
/* Wiring up the Darken/Lighten button */
btn.addEventListener('click',()=>{ 
    if (btn.getAttribute("class") === "light"){
        btn.setAttribute("class", "dark");
        btn.textContent = "Darken";
        overlay.style.backgroundColor = "rgba(0,0,0,0)";
    }else{
        btn.setAttribute("class", "light");
        btn.textContent = "Lighten";
        overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
    }
});
