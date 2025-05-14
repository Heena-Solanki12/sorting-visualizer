var n ;
var t = 0;
var array = [];
var copy = [];
var bub=false;
var sel=false;
var ins=false;
var mer=false;
var red=false;

init();

//Generate new array
function init(){
  n = document.getElementById('arraysize').value;
  array = [];
  copy = []
  for(let i=0; i<n; i++){
    array[i]=Math.floor(Math.random() * 0.5*(140 - 1)) + 10;
  }
  console.log(array.length);
  for(let i=0; i<array.length; i++){
    copy[i]=array[i];
  }
  console.log(copy.length);
  showBars(array);
}

//unsort the array
function unsort(){
  console.log(copy);
  array=[...copy];
  console.log(copy);
  showBars(array);
}

//Display the bars
function showBars(arr){
  container.innerHTML="";
  for(let i=0; i<arr.length; i++){
    const bar = document.createElement("div");
    bar.style.height = arr[i]+"vh";
    bar.setAttribute('id','elem'+i);
    bar.classList.add("bar");
    bar.innerHTML=arr[i];
    container.appendChild(bar);
  }
}

//Disable the buttons
function DisableBut(){
  document.getElementById('init').disabled = true;
  document.getElementById('unsort').disabled = true;
  document.getElementById('bub').disabled = true;
  document.getElementById('sel').disabled = true;
  document.getElementById('marg').disabled = true;
  document.getElementById('ins').disabled = true;
  document.getElementById('red').disabled = true;
}

//Inable the Buttons
function inableBut(){
  document.getElementById('init').disabled = false;
  document.getElementById('unsort').disabled = false;
  document.getElementById('bub').disabled = false;
  document.getElementById('sel').disabled = false;
  document.getElementById('marg').disabled = false;
  document.getElementById('ins').disabled = false;
  document.getElementById('red').disabled = false;
}

//Set the speed of animation
function speed(){
  var speed = document.getElementById('speed').value;
  if(speed == 1){
    t = 500;
    console.log(t);
  }else if(speed == 2){
    t = 300;
    console.log(t);
  }else if(speed == 3){
    t = 100;
    console.log(t);
  }
}

var sleep = (time) => {
  return new Promise(resolve => setTimeout(resolve,time))
}

const popupLink = document.getElementById('popup-link');
const bubpopup = document.getElementById('bub-popup');
const selpopup = document.getElementById('sel-popup');
const inspopup = document.getElementById('ins-popup');
const merpopup = document.getElementById('mer-popup');
const redpopup = document.getElementById('red-popup');
const closebubPopup = document.getElementById('close-bubpopup');
const closeselPopup = document.getElementById('close-selpopup');
const closeinsPopup = document.getElementById('close-inspopup');
const closemerPopup = document.getElementById('close-merpopup');
const closeredPopup = document.getElementById('close-redpopup');

//For popupbox
popupLink.addEventListener('click', (e) => {
  e.preventDefault();
  if(bub==true){
    bubpopup.style.display = 'block';
  }if(sel==true){
    selpopup.style.display = 'block';
  }if(ins==true){
    inspopup.style.display = 'block';
  }if(mer==true){
    merpopup.style.display = 'block';
  }if(red==true){
    redpopup.style.display = 'block';
  }
});

//Close the popupbox
closebubPopup.addEventListener('click', () => {
  bubpopup.style.display = 'none';
});

closeselPopup.addEventListener('click', () => {
  selpopup.style.display = 'none';
});

closeinsPopup.addEventListener('click', () => {
  inspopup.style.display = 'none';
});

closemerPopup.addEventListener('click', () => {
  merpopup.style.display = 'none';
});

closeredPopup.addEventListener('click', () => {
  redpopup.style.display = 'none';
});