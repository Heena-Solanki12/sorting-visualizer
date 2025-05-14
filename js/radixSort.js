function getMax(arr,n)
{
    let mx = arr[0];
        for (let i = 1; i < n; i++)
            if (arr[i] > mx)
                mx = arr[i];
        return mx;
}

function countingSort(arr, size, place){
  
    let output = new Array(size + 1).fill(0);
    let max = getMax(arr, n);
    let freq = new Array(max + 1).fill(0);

    for (let i = 0; i < size; i++){
        const num = Math.floor(arr[i] / place) % 10;
        freq[num]++;
    }
    
    for (let i = 1; i < 10; i++){
        freq[i] += freq[i - 1];
    }
  
    for (let i = size - 1; i >= 0; i--) {
        const num = Math.floor(arr[i] / place) % 10;
        output[freq[num] - 1] = arr[i];
        freq[num]--;
    }
    
    for (let i = 0; i < size; i++){
        arr[i] = output[i];
    }
}

async function radixsort(arr,n)
{   
    red=true;
    DisableBut();
    let m = getMax(arr, n);
    console.log(m);

    for(let i = 1; parseInt(m / i) > 0; i *= 10){
        countingSort(arr, n, i);
        await sleep(1000);
        showBars(arr);
        await sleep(1000);
    }
    allC();
    inableBut();
}
