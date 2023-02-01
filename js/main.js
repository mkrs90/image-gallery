const displayedImage = document.querySelector('displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imageArray = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];
/* Declaring the alternative text for each image file */
const altTestArray = {
    'pic1.jpg' : 'closeup of a human eye',
    'pic2.jpg' : 'arial view of the dessert', 
    'pic3.jpg' : 'closeup of purple and white flowers', 
    'pic4.jpg' : 'ancient Egyptian hieroglyphics', 
    'pic5.jpg' : 'closeup of moth on a leaf'
};
/* Looping through images Loop through the array of filenames, 
    and for each one, insert an <img> element inside the thumb-bar <div>
    that embeds that image in the page along with its alternative text. */
for (const image of imageArray) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', `/css/img/${image}`);
    newImage.setAttribute('alt', altTestArray[image]);
    thumbBar.appendChild(newImage);
}


const newImage = document.createElement('img');
newImage.setAttribute('src', xxx);
newImage.setAttribute('alt', xxx);
thumbBar.appendChild(newImage);

/* Wiring up the Darken/Lighten button */