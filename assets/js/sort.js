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
    function emptyArray(){
        let blocks = document.querySelectorAll('.block');
        return blocks.length == 0;
    }
    function insertionSortVisualization(){
        
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
    
    function mergeSortVisualization(){

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