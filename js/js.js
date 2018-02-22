function showToggle(element) {
    var x = document.getElementById(element);
    var f = document.getElementById('footer');
    if (x.className === "show") {
        x.className = "hide";
    }
    else {
        x.className = "show";
        f.style.marginTop = "200px";


    }
}
function completedAssignment(){
    var x = document.getElementsByClassName('code-topic-item');
    var i;
    for (i = 0; i < x.length; i++) {
        var el = x[i];
        if(el.firstChild.tagName == 'BUTTON'){
            el.style.backgroundColor = "lightgreen";
            el.style.padding = "1vw";


        };
    }
}

function change(item){
    var bod = document.getElementsByClassName('body');
    var h = document.getElementById('nav');
    var f = document.getElementById('footer');
    var link = document.getElementsByClassName('nav-link');
    var i;
    if(item == 1) {
        for (i = 0; i < bod.length; i++) {
            var el = bod[i];
            el.style.display = "none";
        }

    }
    if(item == 2) {
        for (i = 0; i < bod.length; i++) {
            var el = bod[i];
            el.style.backgroundColor = "red";
            el.style.color = "white";
        }
        h.style.backgroundColor = "blue";
        h.style.color = "white";
    }
    if(item == 3) {
        for (i = 0; i < bod.length; i++) {
            var el = bod[i];
            el.style.backgroundColor = "black";
            el.style.color = "white";
        }
        for (i = 0; i < link.length; i++) {
            var el = link[i];
            el.style.color = "white";
        }
        h.style.backgroundColor = "black";
        h.style.color = "white";
        f.style.backgroundColor = "black";
        f.style.color = "white";

    }
}

var slider = document.getElementById('fontSlider');

slider.addEventListener('input', function () {
    var size = slider.value;
    var box = document.getElementById('fontBox');

    box.style.fontSize = size + "px";
    
});

//Moving Box controlled by JavaScript
var box = document.getElementsByClassName('box')[0];

document.getElementsByClassName('toggleButton')[0].onclick = function () {
    if(this.innerHTML === 'Play'){
        this.innerHTML = 'Pause';
        box.classList.add('horizTranslate');
    }else{
        this.innerHTML = 'Play';
        var computedStyle = window.getComputedStyle(box);
        var marginLeft = computedStyle.getPropertyValue('margin-left');
        box.style.marginLeft = marginLeft;
        box.classList.remove('horizTranslate');
    }
    
}

function resetLogo() {
    var box = document.getElementsByClassName('box')[0];

    box.classList.remove('horizTranslate');
    box.classList.remove('box');
    box.style.marginLeft = "0px";
}

