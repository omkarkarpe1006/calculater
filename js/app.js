const display = document.getElementById("display");
    const buttons = document.querySelectorAll("button");

    buttons.forEach(btn => {
        btn.addEventListener("click", () => {
            const value = btn.innerText;

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
        });
    });