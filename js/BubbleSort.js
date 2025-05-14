async function bubbleSort(){
  bub=true;
  DisableBut();
  speed();
    do{
      var swapped = false;
      for(let i=0; i<array.length; i++){
        for(let j=0; j<(array.length-i-1); j++){
          if(array[j]>array[j+1]){
            await sleep(t);
            swapped = true;          
            [array[j],array[j+1]] = [array[j+1],array[j]];
            animatebub(j);
          }
        }
      }
    }while(swapped);
  await sleep(300);
  allC();
  inableBut();
}

function animatebub(j){
  let a = 'elem'+j;
  let b = 'elem'+(j+1);
  let e1 = document.getElementById(a);
  let e2 = document.getElementById(b);
  let h1 = e1.clientHeight;
  let h2 = e2.clientHeight;
  
  e1.style.height = h2+"px";
  e2.style.height = h1+"px";
  e1.innerHTML=array[j];
  e2.innerHTML=array[j+1];
  e1.style.backgroundColor="red";
  e2.style.backgroundColor="#2ecc71";

}

function allC() {
  for(let i=0;i<array.length;i++){
  let a = 'elem'+i;
  let e1 = document.getElementById(a);
  e1.style.backgroundColor="#2ecc71";
  }
}