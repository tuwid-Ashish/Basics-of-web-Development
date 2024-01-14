let ans = ""
let buttons = document.querySelectorAll("button")
// let screen = document.querySelector("input").value;
buttons.forEach((button)=>{
    button.addEventListener('click', (e)=>{
        if(e.target.innerHTML == "="){
            ans = eval(ans)
            document.querySelector("input").value = ans;
        }
        else  if(e.target.innerHTML == "C"){
            ans = " "
            document.querySelector("input").value = ans;
        }
        else{
            
            console.log(e.target);
            ans += e.target.innerHTML;
           document.querySelector("input").value = ans;
        } 
    })
})