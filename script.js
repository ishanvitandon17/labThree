
const ship = "images/ship.jpg";
const onboard = "images/onboard.jpg";
const sunset = "images/sunset.jpg";


const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");
const image3 = document.getElementById("image3");


const story = document.getElementById("story");

const sequence1 = document.getElementById("sequence1");
const sequence2 = document.getElementById("sequence2");

function showSequence(first, second, third, text) {

    image1.src = first;
    image2.src = second;
    image3.src = third;

    story.textContent = text;
}

sequence1.addEventListener("click", function() {

    showSequence(
        ship,
        onboard,
        sunset,
        "A ship begins its journey across the water, travels through the open ocean and salty wind, and ends the day with a beautiful sunset."
    );

});

sequence2.addEventListener("click", function() {

    showSequence(
        sunset,
        onboard,
        ship,
        "A beautiful sunset brings back a memory of being at sea. You remember the salty wind, the water and taste of freedom. The ship disappears from your mind into the distance, carrying the sweet memories inside."
    );

});
