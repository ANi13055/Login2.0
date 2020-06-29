// TODO: Move eyes with mouse movement
$("body").mousemove(function (event) {
    var eye = $(".eye");
    var x = eye.offset().left + eye.width() / 2.5;
    var y = eye.offset().top + eye.height() / 2.5;
    var rad = Math.atan2(event.pageX - x, event.pageY - y);
    var rot = rad * (180 / Math.PI) * -1 + 180;
    eye.css({
        "-webkit-transform": "rotate(" + rot + "deg)",
        "-moz-transform": "rotate(" + rot + "deg)",
        "-ms-transform": "rotate(" + rot + "deg)",
        transform: "rotate(" + rot + "deg)",
    });
});

// TODO: Hide and Show password
const pass = document.querySelector("#passwd");
const show = document.querySelector(".fa-eye");
show.addEventListener("click", () => {
    if (passwd.type === "password") {
        passwd.type = "text";
        show.classList.add("hide");
    } else {
        passwd.type = "password";
        show.classList.remove("hide");
    }
});

// TODO: Form Validation
function logIn() {
    var name = document.querySelector("#name");
    var email = document.querySelector("#email");
    var passwd = document.querySelector("#passwd");

    if (name.value.trim() == "") {
        document.querySelector(".label-1").style.visibility = "visible";
        name.style.border = "1px solid #ff5e5e";
        return false;
    }
    else if (email.value.trim() == "") {
        document.querySelector(".label-2").style.visibility = "visible";
        email.style.border = "1px solid #ff5e5e";
        return false;
    }
    else if (passwd.value.trim() == "") {
        document.querySelector(".label-3").style.visibility = "visible";
        passwd.style.border = "1px solid #ff5e5e";
        return false;
    }
    else {
        true;
    }
}

$(".detail").mousedown(function (event) {
    var inputBox = $(".detail");
    var label = $("label");

    inputBox.css({
        'border': 'inherit',
        'borderBottom': '1px solid #ffc300'
    })
    label.css({
        'visibility': "hidden"
    });
});