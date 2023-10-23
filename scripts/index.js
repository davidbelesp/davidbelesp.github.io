/* Source by HYPERPLEXED 
https://youtu.be/W5oawMJaXbU?si=TWcnidnRsOrDoJ-M&t=32
*/
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ_";

let interval = null;

document.querySelector(".name").onmouseover = event => {  
    let iteration = 0;
    
    clearInterval(interval);
    
    interval = setInterval(() => {
    event.target.innerText = event.target.innerText
        .split("")
        .map((_ , index) => {
        if(index < iteration) {
            return event.target.dataset.value[index];
        }
        
        return letters[Math.floor(Math.random() * letters.length)]
        })
        .join("");
    
    if(iteration >= event.target.dataset.value.length){ 
        clearInterval(interval);
    }
    
    iteration += 1 / 3;
    }, 10);

    
}
