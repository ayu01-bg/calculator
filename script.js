    const inp = document.querySelector(".calc-result");
    const btn = document.querySelectorAll(".btn");

    btn.forEach(function (dets) {
        dets.addEventListener("click", function () {
            let value = dets.innerText || dets.dataset.value;

            if (value === "AC") {
                inp.value = " ";
            }
            else if (value === "C") {
                let arr = inp.value.split('');
                arr.pop();
                inp.value = arr.join('');
            }
            else if (value === "=") {
                let result = eval(inp.value)
                inp.value = result;
            }
            else {
                inp.value += value;
            }
        })
    })

