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

//FIBONACCI FUNCTION
function fibonacci(){
    var input = document.getElementById('fibNum').value;

    var output = document.getElementById('output');

    output.innerHTML = fib(input);
}
function fib(n){
    if (n < 2){
        return n;
    }
    else{
        return (fib(n-1) + fib(n-2));
    }
}

//ARRAY Manipulation
function arrayManipulation() {
    var array = [1,2,3,4,5,6,7];

    document.getElementById('output2').innerHTML = array.reverse();

}


function loopthrough(){
    var colors = ['red', 'yellow', 'blue'];
for(i=0; i<=colors.length-1; i++){
    alert(colors[i]);
}

}

//JS OBJECT

function superHero(name, origin, superPower){
    this.name = name;
    this.origin = origin;
    this.superPower = superPower;
    this.stats = function () { return "Hero's Name: " + this.name + ", From: " + this.origin + ", Super-powers: " + this.superPower;
    }
}

var superMan = new superHero("Super man", "krypton", "flight, speed, invincibility, x-ray vision, laser-vision");
var batMan = new superHero("Batman", "Gotham", "Ingenuity, courage, kung-fu, having a great butler");
var spiderman = new superHero("Spider-man", "New-York", "Spider-like abilities");

function getHero(id, hero){
        document.getElementById(id).innerHTML = hero.stats();
}

function newHero(){
    var name = document.getElementById('newHeroName').value;
    var origin = document.getElementById('newHeroOrigin').value;
    var power = document.getElementById('newHeroPowers').value;

    var newHero = new superHero(name, origin, power);


    localStorage.setItem("newHero", JSON.stringify(newHero));

    var node = document.createElement("LI");
    var textNode = document.createTextNode("Super-Hero");
    node.appendChild(textNode);
    node.setAttribute("id", "newHero");
    node.setAttribute("onclick", 'getLocalHero()');
    document.getElementById('heroList').appendChild(node);



}
function getLocalHero(){
    var heroInfo = localStorage.getItem('newHero');
    var hero = JSON.parse(heroInfo);
    document.getElementById("newHero").innerHTML = "Name: " + hero.name + ", From: " + hero.origin + ", Super-powers: " + hero.superPower;
}

function loadHero(){
    if(localStorage.getItem('newHero')){
        console.log("OH YEAH!");
        var node = document.createElement("LI");
        var textNode = document.createTextNode("Super-Hero");
        node.appendChild(textNode);
        node.setAttribute("id", "newHero");
        node.setAttribute("onclick", 'getLocalHero()');
        document.getElementById('heroList').appendChild(node);
        var node2 = document.createElement("p");
        var node3 = document.createElement("span")
        var node2Text = document.createTextNode("You can see your hero by clicking 'super-hero' above. Click Here to hide this.");
        node2.setAttribute("onClick", "removeThis()");
        node2.setAttribute('id','clearText')
        node3.appendChild(node2Text);
        node2.appendChild(node3);

        var heroList = document.getElementById('heroList');
            heroList.insertBefore(node2, heroList.childNodes[8]);
        document.getElementById('heroForm').style.display = "none";


    }

}

function removeThis() {
    document.getElementById('clearText').removeChild(document.getElementById('clearText').firstChild);

}
function clearLocalStorage(){
    localStorage.clear();
    location.reload();
}


