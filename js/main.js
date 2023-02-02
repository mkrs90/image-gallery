const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imageArray = [
    'pic1.png', 
    'pic2.png', 
    'pic3.png', 
    'pic4.png', 
    'pic5.png'
];
/* Declaring the alternative text for each image file */
const altTestArray = {
    'pic1.png' : 'My cat Panther in the sun',
    'pic2.png' : 'My cat Neville sleeping in a basket', 
    'pic3.png' : 'My cat Kyro laying like Jaba the hut', 
    'pic4.png' : 'My cat Tux guarding the couch', 
    'pic5.png' : 'Panther playing in his play cube'
}
/* Looping through images Loop through the array of filenames, 
    and for each one, insert an <img> element inside the thumb-bar <div>
    that embeds that image in the page along with its alternative text. */
for (const image of imageArray) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', `/css/img/${image}`);
    newImage.setAttribute('alt', altTestArray[image]);
    thumbBar.appendChild(newImage);
    /*Add Event listener to newImage that when clicked the corresponding image
    and alt text are displayed in the displayed-img <img> element - must be done
    in this for loop to gain access to newImage element*/
    newImage.addEventListener('click', function(element) {
        displayedImage.src = element.target.src;
        displayedImage.alt = element.target.alt;
    });
}
/* Wiring up the Darken/Lighten button */
/* Add a click event listener to the <button> so that when 
it is clicked, a darken effect is applied to the full-size image.
 When it is clicked again, the darken effect is removed again. */
btn.addEventListener('click', () => {
    //get button class
    const btnClass = btn.getAttribute('class');
    //checks if current class is name is set on the <button>
    if (btnClass === 'dark') {
        btn.setAttribute('class', 'light');
        btn.textContent = 'Lighten';
        overlay.style.backgroundColor = 'rgba(0,0,0, 0.5)';
    } else {
        btn.setAttribute('class', 'dark');
        btn.textContent = 'Darken';
        overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    };
});


