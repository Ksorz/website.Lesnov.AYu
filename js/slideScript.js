
/*
function stopSliding(slider) {
    var sliderCurrent = document.getElemenById("slider".concat(slider));
    var sliderAbove = document.getElemenById("slider".concat(slider + 1));
    var sliderBelow;
    if (slider == 1) {
        sliderBelow = sliderCurrent;
    } else {
        sliderBelow = document.getElemenById("slider".concat(slider - 1));
    }

    var left = window.getComputedStyle(sliderCurrent).getPropertyValue("left");
    sliderCurrent.classList.remove("animate");
    sliderCurrent.style.left = left;
    var width = window.getComputedStyle(sliderCurrent).getPropertyValue("width");
    var leftBelow = parseInt(window.getComputedStyle(sliderBelow).getPropertyValue("left"));
    left = parseInt(left);
    var difference = left - leftbelow;
    var absDifference = Math.abs(difference);

    if (difference > 0) {
        left = left + absDifference;
    } else {
        left = left - difference;
        sliderCurrent.style.left = left.toString().concat("px");
    }
    var offset = (width - absDifference).toString().concat("px");
    sliderCurrent.style.width = offset;
    sliderAbove.style.width = offset;
    sliderAbove.style.visibility = "visible";
    var onclick = "stopSliding(" + (slider+1) + ")";
    document.getElemenById("btn").setAttribute("onclick", onclick);
}*/
