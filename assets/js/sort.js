//TODO
    //selection sort
    //insertion sort
    //merge sort
    //quick sort
(function(){
    console.log('sort script ran');
    const container = document.getElementById('array');
    let colorProcessing = "#FF4949";
    let colorDefault = "#6b5b95";
    let colorProcessed = "#13CE66";
    function generateArray(){
        for(let i=0;i<20;i++){
            let value = Math.ceil(Math.random() * 100);
            let array_ele = document.createElement('div');
            array_ele.classList.add('block');
            array_ele.style.height = `${value*3}px`;
            array_ele.style.transform = `translate(${i*30}px)`;
            let array_ele_label = document.createElement('label');
            array_ele_label.classList.add("block_id");
            array_ele_label.innerText = value;
            array_ele.appendChild(array_ele_label);
            container.appendChild(array_ele);
        }
    }
     function swap(ele1,ele2){
        return  new Promise((resolve)=>{
            //console.log('swap call on ',ele1,ele2);
            var tempHeight = ele1.style.height;
            var tempVal = ele1.childNodes[0].innerHTML;
            ele1.style.height = ele2.style.height;
            ele1.childNodes[0].innerHTML = ele2.childNodes[0].innerHTML;
            ele2.style.height = tempHeight;
            ele2.childNodes[0].innerHTML = tempVal;
            setTimeout(() => {
                resolve();
            }, 250);
        });
    }
    function setValue(ele1,ele2){
        return  new Promise((resolve)=>{
            //console.log('swap call on ',ele1,ele2);
            ele1.style.height = ele2.style.height;
            ele1.childNodes[0].innerHTML = ele2.childNodes[0].innerHTML;
            setTimeout(() => {
                resolve();
            }, 250);
        });
    }
    function emptyArray(){
        let blocks = document.querySelectorAll('.block');
        return blocks.length == 0;
    }
    async function insertionSortVisualization(){
        // TODO insetion sort not working 

        // if(emptyArray())
        //     return;
        
        // let blocks = document.querySelectorAll('.block');
        // for(let i=1;i<blocks.length;i++){
        //     let key = blocks[i];
        //     // key.style.backgroundColor = colorProcessing;
        //     let j=i-1;
        //     while(j>=0&&Number(blocks[j].childNodes[0].innerHTML)>Number(key.childNodes[0].innerHTML)){
        //         blocks[j+1].style.backgroundColor = colorProcessing;
        //         blocks[j].style.backgroundColor = colorProcessing;
        //         console.log('idxj idxi j,j+1',j,i,Number(blocks[j].childNodes[0].innerHTML),Number(blocks[j+1].childNodes[0].innerHTML))
        //         await swap(blocks[j+1],blocks[j]);
                
        //         blocks[j+1].style.backgroundColor = colorDefault;
        //         blocks[j].style.backgroundColor = colorDefault;
                
        //         j--;
        //     }
        //     await swap(blocks[j+1],key);
        //     // key.style.backgroundColor=colorProcessed;
        // }
    }
    async function selectionSortVisualization(delay=300){
        if(emptyArray())
            return;
        
        let blocks = document.querySelectorAll('.block');
        for(let i=0;i<blocks.length;i++){
            let maxVal = Number(blocks[0].childNodes[0].innerHTML);
            let maxValBlock = blocks[0];
            for(let j=0;j<blocks.length - i;j++){
                blocks[j].style.backgroundColor = colorProcessing;
                await new Promise((resolve)=>{
                    setTimeout(()=>{
                        resolve();
                    },delay);
                });
                let curVal = Number(blocks[j].childNodes[0].innerHTML);
                let curBlock = blocks[j];
                if(curVal>maxVal){
                    maxVal=curVal;
                    maxValBlock=curBlock;
                }
                blocks[j].style.backgroundColor = colorDefault;
            }
            await swap(maxValBlock,blocks[blocks.length-i-1]);
            //blocks = document.querySelectorAll('.block');
            blocks[blocks.length-i-1].style.backgroundColor = colorProcessed;
        }
    }
    async function bubbleSortVisualization(delay = 100){
        if(emptyArray())
            return;
        
        let blocks = document.querySelectorAll('.block');
        for(let i=0;i<blocks.length;i++){
            for(let j=0;j<blocks.length - i - 1;j++){
                blocks[j].style.backgroundColor = colorProcessing;
                blocks[j+1].style.backgroundColor = colorProcessing;
                await new Promise((resolve)=>{
                    setTimeout(()=>{
                        resolve();
                    },delay);
                });
                let value1 = Number(blocks[j].childNodes[0].innerHTML);
                let value2 = Number(blocks[j+1].childNodes[0].innerHTML);
                if(value1>value2){
                    await swap(blocks[j],blocks[j+1]);
                    //blocks = document.querySelectorAll('.block');
                }
                blocks[j].style.backgroundColor = colorDefault;
                blocks[j+1].style.backgroundColor = colorDefault;
            }
            blocks[blocks.length-1-i].style.backgroundColor = colorProcessed;
        }
    }
    
   async function mergeSortVisualization(delay=100){
    // !TODO correct merge sort
    //!its not working properly for odd size arrays in merging    
    // async function merge(array,si,mid,ei){
        //  let tempArr = [];
        //  let tempL = si;
        //  let tempR = mid+1;
        //  let arr=[];
        //  for(let i=si;i<=ei;i++){
        //     arr.push(array[i].childNodes[0].innerHTML);
        // }
        // console.log('arr before sorting ',arr);
        //  while(tempL<=mid&&tempR<=ei){
        //     array[tempL].style.backgroundColor = colorProcessing;
        //     array[tempR].style.backgroundColor = colorProcessing;
        //     if(Number(array[tempL].childNodes[0].innerHTML)<Number(array[tempR].childNodes[0].innerHTML)){
        //         tempArr.push(array[tempL]);
        //         // await new Promise((resolve)=>{
        //         //     setTimeout(()=>{
        //         //         resolve();
        //         //     },delay);
        //         // });
        //         array[tempL].style.backgroundColor = colorDefault;
        //         tempL++;
        //     }else{
        //         tempArr.push(array[tempR]);
        //         // await new Promise((resolve)=>{
        //         //     setTimeout(()=>{
        //         //         resolve();
        //         //     },delay);
        //         // });
        //         array[tempR].style.backgroundColor = colorDefault;
        //         tempR++;
        //     }
            
        //  }
        //  while(tempL<=mid)
        //     {
        //         console.log('left while ran');
        //         array[tempL].style.backgroundColor = colorProcessing;
        //         tempArr.push(array[tempL]);
        //         await new Promise((resolve)=>{
        //             setTimeout(()=>{
        //                 resolve();
        //             },delay);
        //         });
        //         array[tempL].style.backgroundColor = colorDefault;
        //         tempL++;
        //     }
        // while(tempR<=ei){
        //     console.log('right while ran');
        //         array[tempR].style.backgroundColor = colorProcessing;
        //         tempArr.push(array[tempR]);
        //         await new Promise((resolve)=>{
        //             setTimeout(()=>{
        //                 resolve();
        //             },delay);
        //         });
        //         array[tempR].style.backgroundColor = colorDefault;
        //         tempR++;
        //     }
        // let tIdx=0;
        
        // let tArr=[];
        // // for(let i=si;i<=ei;i++){
        // //     arr.push(array[i].childNodes[0].innerHTML);
        // // }
        
        // for(let a of tempArr){
        //     tArr.push(a.childNodes[0].innerHTML);
        // }
        // console.log('after sorting tarr',tArr);
        // for(let i=si;i<=ei;i++){
        //     //array[i].style.height = tempArr[tIdx].style.height;
        //     //array[i].childNodes[0].innerHTML= tempArr[tIdx].childNodes[0].innerHTML;
        //     await swap(array[i],tempArr[tIdx]);
        //     array[i].style.backgroundColor=colorProcessed;
        //     tIdx++;
        //     // await new Promise((resolve)=>{
        //     //     setTimeout(()=>{
        //     //         resolve();
        //     //     },100)
        //     // })
        //     //await swap(array[i],tempArr[tIdx]);
            
        // }
        // // for(let i=si;i<=ei;i++){
        // //     arr.push(array[i].childNodes[0].innerHTML);
        // // }
        
        // // for(let a of tempArr){
        // //     tArr.push(a.childNodes[0].innerHTML);
        // // }
        // // console.log('after swap arr',arr,'tarr',tArr);
        // }
        // async function mergeSort(array,si,ei){
        //     if(si>=ei)
        //         return ;
        //     let mid = (si + Math.floor((ei-si)/2));
        //     await mergeSort(array,si,mid);
        //     await mergeSort(array,mid+1,ei);
        //     await merge(array,si,mid,ei);
        
        // }
        // let blocks = document.querySelectorAll('.block');
        // mergeSort(blocks,0,blocks.length-1);
    }
    function quickSortVisualization(){

    }
    function clickEventHandler(){
        $('#bubbleSortVisualization').click(()=>{
            bubbleSortVisualization();
        });
        $('#insertionSortVisualization').click(()=>{
            insertionSortVisualization();
        });
        $('#selectionSortVisualization').click(()=>{
            selectionSortVisualization();
        });
        $('#mergeSortVisualization').click(()=>{
            mergeSortVisualization();
        });
        $('#quickSortVisualization').click(()=>{
            quickSortVisualization();
        });
        $('#generateArray').click(()=>{
            generateArray();
        });
    }
    function initializeApp(){
        generateArray();
        clickEventHandler();    
    }
    initializeApp();
})();