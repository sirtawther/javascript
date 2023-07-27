 const input = document.querySelector(".numberInput");
        const para = document.querySelector("p");

        function doubleNum(num) {
            return num * num
        }

        input.addEventListener("change", ()=> {
            const num = parseFloat(input.value)
            para.textContent = doubleNum(num)
        })
