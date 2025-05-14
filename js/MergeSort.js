let temp = [];
 async function mergeSort(array, start, end) {
  if (start< end) {
    let mid = parseInt((start + end)/2);
    await mergeSort(array, start, mid);
    await mergeSort(array, mid + 1, end);
    await merge(array, start, end);
  }
}

async function merge(array, start, end) {
  mer=true;
  DisableBut();
  speed();
  let mid = parseInt((start + end)/2);
  let iLeft = start,
      iRight = mid + 1,
      endLeft = mid,
      endRight = end;

  let iMain = start;

  while(iLeft <= endLeft && iRight <= endRight) {
    if (array[iLeft] < array[iRight]) {
       temp[iMain++] = array[iLeft++];
    } else {
      temp[iMain++] = array[iRight++];
    }
  }

  while(iLeft <= endLeft) {
    temp[iMain++] = array[iLeft++];
  }

  while(iRight <= endRight) {
    temp[iMain++] = array[iRight++];
  }

  iMain = start;
  while(iMain <= end) {
    array[iMain] = temp[iMain++];
    await sleep(t);
    showBarsM(array, iMain);
  }
  inableBut();
}

function showBarsM(arr,iMain){
  showBars(arr);
  for(let i=0;i<iMain;i++){
    let a = 'elem'+i;
    let e1 = document.getElementById(a);
    e1.style.backgroundColor="#2ecc71";
  }
}