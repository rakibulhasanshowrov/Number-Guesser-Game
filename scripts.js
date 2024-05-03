let attempt=0;
document.addEventListener('DOMContentLoaded',numberGenrator)

let randomNumber;
let inputNumber=document.getElementById('gnumber')
let btn=document.getElementById('submit')




btn.addEventListener('click',checkError);
function timeout(tag){
    setTimeout(()=>{
        tag.innerHTML=''
    },2000)
}
function numberGenrator(){
    let min=10;
    let max=20;
    let showAttempt=document.getElementById('attempt')
    showAttempt.innerHTML=`Attempts Left: <span class="text-blue-500">${(attempt+3)}</span>`;
    randomNumber=Math.floor(Math.random()*(max-min+1)+min);
    console.log("Random Number:"+randomNumber);
}
function displayError(message){
    let error=document.getElementById('error')
    error.style.color='red'
    error.style.fontWeight='bold'
    error.innerHTML=message;
    timeout(error)
}
function displayResult(message, color) {
    let error = document.getElementById('result');
    error.style.color=color
    error.classList.add('text-red-500', 'font-bold');
    error.innerHTML = message;
}


function GameOver(){
    inputNumber.disabled=true
    btn.disabled=true
    let refresh=document.getElementById('refresh')
    refresh.innerHTML="Click To Restart The Game !!"
    refresh.addEventListener('click',()=>{
        location.reload()
    })


}

function numberGuessor(){
    
    let showAttempt=document.getElementById('attempt')
    showAttempt.innerHTML=showAttempt.innerHTML = `Attempts Left: <span class="text-blue-500">${(3-attempt)}</span>`;
    
    if(attempt == 3){  
        let showAttempt=document.getElementById('attempt')
        showAttempt.innerHTML=showAttempt.innerHTML = `Attempts Left: <span class="text-blue-500">${(0)}</span>`;
        displayResult('SORRY!! You Lost', 'red')
        console.log(attempt)
        GameOver() 
        
    }
    
        let inputNumber=document.getElementById('gnumber').value
        if(inputNumber==randomNumber){
            displayResult('Congratulations!! You Won The Game', 'green')
            GameOver()
        }
        else if(inputNumber>randomNumber){
            displayError('Hint:Correct answer is Smaller!','red')
        }
        else if(inputNumber<randomNumber){
            displayError('Hint:Correct answer is Greater!' ,'red')
        }
        
}  
    


function checkError(e){
    //e.preventDefault()
    if((inputNumber.value)<10 || (inputNumber.value)>20 || (inputNumber.value)==='' ){
        displayError('Please Enter Number Between 10 to 20')
    }else{
            attempt=attempt+1
            console.log(attempt)
            numberGuessor()
            
            
        }
        
            
}   
        
    
    
