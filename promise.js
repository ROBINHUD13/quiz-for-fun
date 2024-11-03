// let promise = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         error=0
//         if(error){
//         console.log('ram')
//             resolve()}
//             else{
//                 reject()
//             }
        
//     },2000)
// })
// promise.then(function(){
//     console.log('completed')
// }).catch(function(){
//     console.log('error');
    
// }
    
// ).finally(()=>{
//     console.log('promise completed')
// })
let question=[]
let answer
let flag=false
// let quest=document.querySelector('.quest')
let quest = document.querySelector('.quest')
let choice=document.querySelector('.list')
let next=document.querySelector('.next')
let skip=document.querySelector('.skip')
let checkBtn=document.querySelector('.chk')
let count =document.querySelector('.count')
let rj=true
let num=0;
function event(){
checkBtn.addEventListener('click',checkAnswer)}
async function data(){
    fetch('https://opentdb.com/api.php?amount=1').then((response)=>{
       return response.json()
         
     }).then((data)=>{
       question=data.results
       question.forEach((val) => {
        quest.innerHTML=val.question
         answer=val.correct_answer
        let option=val.incorrect_answers
        option.splice(Math.floor(Math.random()*(option.length+1)),0,answer)
        choice.innerHTML=`
        ${option.map((opn)=>
            `<li class="opt">${opn}</li>`
       ).join('')}`
       selectOption();
        console.log(answer)
       });
       num++ 
         
     }).catch((error)=>{
         console.log(error)
     }).finally(
         function(){
             console.log('your respose completed')
             
         }
     )

}
data();
event();
next.addEventListener('click',function(e){
        data(); 
   
        skip.disabled=false
        checkBtn.disabled=false
        count.innerHTML=`${num}`
       
         
})
skip.addEventListener('click',(e)=>{
    data();
})
document.querySelector('.restart').addEventListener('click',(e)=>{
    num=0;
    next.disabled=false
    skip.disabled=false
    data();
    count.innerHTML=`${num}`
})



function selectOption() {
    
    const options = choice.querySelectorAll('li');

    options.forEach((pot) => {
        pot.addEventListener('click', function(e) {
            const active = choice.querySelector('.selected');
            console.log('clicked')
            if (active) {
                active.classList.remove('selected'); // Corrected from 'seleted' to 'selected'
            }
            pot.classList.add('selected');
        });
    });
}
function checkAnswer(){
         checkBtn.disabled=true
        if(choice.querySelector('.selected')){
            let ans=choice.querySelector('.selected ').textContent
            if(num>10){
                next.disabled=true;
                skip.disabled=true
            }
             if(ans==answer){
                document.querySelector('.result').innerHTML='correct answer'
                skip.disabled=true
                
             }
             else{
                document.querySelector('.result').innerHTML='incorrect answer'
                skip.disabled=true
             }
            
        }
}


