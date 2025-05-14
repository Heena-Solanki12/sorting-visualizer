async function insertionSort() 
{ 
    ins=true;
    DisableBut();
    speed();
    let i, key, j; 
    for (i = 1; i < n; i++)
    { 
        key = array[i]; 
        await sleep(t+500);
        let k = 'elem'+(i);
        let k1 = document.getElementById(k);
        let h = k1.clientHeight;
        k1.style.backgroundColor="red";
        j = i - 1;
   
        while (j >= 0 && array[j] > key)
        { 
            array[j + 1] = array[j]; 
            await sleep(t);
            let a = 'elem'+j;
            let b = 'elem'+(j+1);
            let e1 = document.getElementById(a);
            let e2 = document.getElementById(b);
            let h1 = e1.clientHeight;
            e2.style.backgroundColor = "green";
            e2.style.height = h1+"px";
            e2.innerHTML=array[j];
            j = j - 1; 
        } 
        array[j + 1] = key; 
        await sleep(t);
        let b = 'elem'+(j+1);
        let e2 = document.getElementById(b);
        e2.style.backgroundColor = "#2ecc71";
        e2.style.height = h+"px";
        e2.innerHTML=key;
    } 
    await sleep(t);
    allC();
    inableBut();
} 
