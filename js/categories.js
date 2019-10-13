$(document).ready(function () {
    $(".budgetslider").each(function () {
        var $this = $(this);
        var myID = $this.attr("id");
        var $low = $this.parent('div').find('.low').attr("id");
        var $high = $this.parent('div').find('.high').attr("id");
        initRangeSlider($this, myID, 0, 500000, $low, $high);
    });
    $(".budgetslider_small").each(function () {
        var $this = $(this);
        var myID = $this.attr("id");
        var $low = $this.parent('div').find('.low').attr("id");
        var $high = $this.parent('div').find('.high').attr("id");
        initRangeSlider($this, myID, 0, 500000, $low, $high);
    });

    $(".ordersnumber").each(function () {
        var $this = $(this);
        var myID = $this.attr("id");
        var $low = $this.parent('div').find('.low').attr("id");
        var $high = $this.parent('div').find('.high').attr("id");
        initRangeSlider($this, myID, 1, 100000, $low, $high);
    });
    $(".ordersnumber_small").each(function () {
        var $this = $(this);
        var myID = $this.attr("id");
        var $low = $this.parent('div').find('.low').attr("id");
        var $high = $this.parent('div').find('.high').attr("id");
        initRangeSlider($this, myID, 1, 100000, $low, $high);
    });
});
function initRangeSlider(myClass, myID, startValue, maxValue, myLow, myHigh) {
    console.log(myID);
    var mySlider = new Slider("#" + myID, {
        min: startValue,
        max: maxValue,
        value: [startValue, maxValue],
        labelledby: [myLow, myHigh]
    });
}
function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("morelessBtn");

    if (dots.style.display === "none") {
        dots.style.display = "block";
        btnText.innerHTML = "VIEW MORE";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "VIEW LESS";
        moreText.style.display = "block";
    }
}
function myFunction2() {
    var dots2 = document.getElementById("dots2");
    var moreText2 = document.getElementById("more2");
    var btnText2 = document.getElementById("morelessBtn2");

    if (dots2.style.display === "none") {
        dots2.style.display = "block";
        btnText2.innerHTML = "VIEW MORE";
        moreText2.style.display = "none";
    } else {
        dots2.style.display = "none";
        btnText2.innerHTML = "VIEW LESS";
        moreText2.style.display = "block";
    }
}
function myFunction3() {
    var dots3 = document.getElementById("dots3");
    var moreText3 = document.getElementById("more3");
    var btnText3 = document.getElementById("morelessBtn3");

    if (dots3.style.display === "none") {
        dots3.style.display = "block";
        btnText3.innerHTML = "VIEW MORE";
        moreText3.style.display = "none";
    } else {
        dots3.style.display = "none";
        btnText3.innerHTML = "VIEW LESS";
        moreText3.style.display = "block";
    }
}
function myFunction4() {
    var dots4 = document.getElementById("dots4");
    var moreText4 = document.getElementById("more4");
    var btnText4 = document.getElementById("morelessBtn4");

    if (dots4.style.display === "none") {
        dots4.style.display = "block";
        btnText4.innerHTML = "VIEW MORE";
        moreText4.style.display = "none";
    } else {
        dots4.style.display = "none";
        btnText4.innerHTML = "VIEW LESS";
        moreText4.style.display = "block";
    }
}