//TODO make the code cleaner 
    //divide the code into funcitons 


//IIFE
(function(){
    const input = $('#fname');
    const container = $('#array');
    function generateArray(sorted){
        container.empty();
        let arr=[];
        for(let i=0;i<20;i++){
            arr.push(Math.ceil(Math.random() * 100));
        }

        if(sorted)
            {
                arr.sort((a, b)=>{return a - b});
            }
        for(let i=0;i<20;i++){
            let value = arr[i];
            let array_ele = document.createElement("div");
            array_ele.classList.add('block');
            array_ele.style.height = `${value * 3}px`;
            array_ele.style.transform = `translate(${i * 30}px)`;
            let array_ele_label = document.createElement("label");
            array_ele_label.classList.add("block_id");
            array_ele_label.innerText = value;
            array_ele.appendChild(array_ele_label);
            container.append(array_ele);
        }
    }
    async function linearSearchVisualization(to_find,delay=300){
        
        let blocks = document.querySelectorAll('.block');
        let output = document.getElementById('output');
        //console.log(blocks);
        let num = to_find;
        output.innerText = "";
        let flag = 0;
        // LinearSearch Algorithm
        for (let i = 0; i < blocks.length; i += 1) {
          //Changing the color of current block to red
          blocks[i].style.backgroundColor = "#FF4949";
          // To wait for .1 sec
          await new Promise((resolve) =>
            setTimeout(() => {
              resolve();
            }, delay)
          );
        let value = Number(blocks[i].childNodes[0].innerHTML);
        if (value == num) {
            flag = 1;
            output.innerText = "Element Found";
            blocks[i].style.backgroundColor = "#13CE66";
            break;
          } else {
            // Changing the color to the previous one
            blocks[i].style.backgroundColor = "#6b5b95";
          }
        }
        //When element is not found in the array
        if (flag == 0) {
          output.innerText = "Element Not Found";
        }
    }
    async function binarySearchVisualization(to_find,delay=600){
        
        let blocks = document.querySelectorAll('.block');
        let output = document.getElementById('output');
        let num = to_find;
        output.innerText = "";
        let flag = 0;
        // BinarySearch Algorithm
        let si=0,ei=blocks.length-1;
        console.log('blocks ',blocks)
        while(si<=ei) {
         let mid = Math.floor(si + ((ei-si)/2));
          blocks[mid].style.backgroundColor = "#FF4949";
          await new Promise((resolve) =>
            setTimeout(() => {
              resolve();
            }, delay)
          );
        
        let value = Number(blocks[mid].childNodes[0].innerHTML);
        if (value == num) {
            flag = 1;
            output.innerText = "Element Found";
            blocks[mid].style.backgroundColor = "#13CE66";
            break;
          } else {
            blocks[mid].style.backgroundColor = "#6b5b95";
            if (value > num)
                ei=mid-1;
            else 
                si = mid+1;
        }
        }
        //When element is not found in the array
        if (flag == 0) {
          output.innerText = "Element Not Found";
        }
    }
    function noInputGivenAlert(){
        input.css("border-color","red");
        input.attr('placeholder','Input Number Required')
    }
    function inputBoxReset(){
        input.css("border-color","green");
        input.attr('placeholder','No. to search')
    }
    async function handleInputClick(event){
        let target_id = event.target.id;
        let currentInputVal = parseInt(input.val());

        if(currentInputVal){
            inputBoxReset();
            if(target_id==='linear-search'){
                generateArray(false);
                linearSearchVisualization(currentInputVal);
            }
            else if(target_id==='binary-search'){
                generateArray(true);
                await new Promise((resolve) =>
                setTimeout(() => {
                resolve();
                }, 500)
                );
                binarySearchVisualization(currentInputVal);
            }
        }
        else {
            if(target_id==='linear-search'||target_id==='binary-search'){
                noInputGivenAlert();
            }
        }
    }
    function initializeApp(){
        document.addEventListener('click',handleInputClick);
    }
    initializeApp();
})();

