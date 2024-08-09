document.querySelector("body").addEventListener("mousemove", eyeball);

function eyeball(event) {
    var eye = document.querySelectorAll('.eye');



    eye.forEach(function(eye) {
        
        let x = (eye.getBoundingClientRect().left) + (eye.clientWidth / 2);
        let y = (eye.getBoundingClientRect().top) + (eye.clientHeight / 2);

        let radian = Math.atan2(event.pageX - x, event.pageY - y);

        let rot = (radian * (180 / Math.PI) * -1) + 270;

        eye.style.transform = "rotate(" + rot + "deg)";
    });
}





//8.       Iterating Over Each Eye Element

//10,11.   Calculating the Center of Each Eye Element

// eye.getBoundingClientRect().left gets the distance from the left edge of the viewport to the left edge of the eye element.
// eye.clientWidth / 2 finds the horizontal center of the eye element.
// Similarly, eye.getBoundingClientRect().top gets the distance from the top edge of the viewport to the top edge of the eye element.
// eye.clientHeight / 2 finds the vertical center of the eye element.



 //13.     Calculating the Angle Between the Mouse Pointer and the Center of the Eye

//  Math.atan2(y, x) returns the angle in radians between the positive x-axis and the point (x, y).
// event.pageX - x and event.pageY - y calculate the horizontal and vertical distances between the mouse pointer and the center of the eye element.



 //15.     Converting the Angle from Radians to Degrees and Adjusting it

//  radian * (180 / Math.PI) converts the angle from radians to degrees.
// Multiplying by -1 inverts the angle.
// Adding 270 degrees adjusts the rotation so that the eye element correctly follows the mouse movement.


// 17. Rotating the Eye Element by the calculated rot degrees.

