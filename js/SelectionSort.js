async function SelectionSort()
{   
    sel=true;
    DisableBut();
    speed();
    for (let i = 0; i < array.length-1; i++)
    {
        min_idx = i;
        for (let j = i + 1; j < array.length; j++)
        if (array[j] < array[min_idx])
            min_idx = j;
        swap(array,min_idx,i);
        await sleep(t);
        console.log(t);
        animatesel(array,min_idx,i);
    }
    await sleep(t);
    allC();
    inableBut();
}

function swap(arr,m,i)
{
    var temp = arr[m];
    arr[m] = arr[i];
    arr[i] = temp;
}

function animatesel(array,m,i){
    let a = 'elem'+m;
    let b = 'elem'+i;
    let e1 = document.getElementById(a);
    let e2 = document.getElementById(b);
    let h1 = e1.clientHeight;
    let h2 = e2.clientHeight;
    
    e1.style.height = h2+"px";
    e2.style.height = h1+"px";
    e1.innerHTML=array[m];
    e2.innerHTML=array[i];
    e1.style.backgroundColor="red";
    e2.style.backgroundColor="green";
}