let currentStatus = 1;
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const nums = document.querySelectorAll(".num");
prev.addEventListener('click', ()=>{
    console.log(currentStatus);
    console.log(nums);
    try{
        nums.forEach(num => {
            if(num.innerHTML==currentStatus.toString()){
                currentStatus=(currentStatus-1)%4;
                if(currentStatus==0) currentStatus=3;
                num.classList.remove('red');
                throw new Error("end iterative")
            }
        });
    }catch(e){
        if(e.message!="end iterative")throw e;
    };
    nums.forEach(num => {
        if(num.innerHTML==currentStatus.toString()){
            num.classList.add('red');
        }
    });
})

next.addEventListener('click', ()=>{
    console.log(currentStatus);
    console.log(nums);
    try{
        nums.forEach(num => {
            if(num.innerHTML==currentStatus.toString()){
                currentStatus=(currentStatus+1)%4;
                if(currentStatus==0) currentStatus++;
                num.classList.remove('red');
                throw new Error("end iterative")
            }
        });
    }catch(e){
        if(e.message!="end iterative")throw e;
    };
    nums.forEach(num => {
        if(num.innerHTML==currentStatus.toString()){
            num.classList.add('red');
        }
    });
})

function removeActiveClasses(num) {
    
}