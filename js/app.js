const display = document.getElementById("display");
    const buttons = document.querySelectorAll("button");

    buttons.forEach(btn => {
        btn.addEventListener("click", () => {
            const value = btn.innerText;
            giveInput(value);
        });
    });
     function giveInput(value){
            if (value === "AC") {
                display.value = "";
            } else if (value === "=") {
                try {
                    display.value = eval(display.value);
                } catch {
                    display.value = "Error";
                }
            } else if (value === "⌫") { // for delete-left icon
                display.value = display.value.slice(0, -1);
            } else if (value === "+/-") {
                display.value = display.value ? String(-1 * parseFloat(display.value)) : "";
            } else {
                display.value += value;
            }
        }


document.addEventListener("keydown",(event)=>{
    if(!isNaN(event.key))
    {   
        giveInput(event.key);
    }
    else if(["+","-","*","/","."].includes(event.key))
    {
        giveInput(event.key);
    }
    else if(event.key==="Enter"){
         giveInput("=");
    }
    else if(event.key==="Backspace")
    {
         giveInput("⌫");
    }
    else if(event.key==="Delete")
    {
        giveInput("AC");
    }
});