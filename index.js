function updateValues(numberOfMonths, depositAmount, debitAmount) {
    document.getElementById("duration").value = numberOfMonths;
    document.getElementById("deposit-amount").value = depositAmount;
    document.getElementById("debit-amount").value = debitAmount;

    document.querySelectorAll(".options > .active").forEach(node => {
        node.classList.remove('active');
    });

    updateMonthlyPayments();
    updateBubbles();
}

function updateMonthlyPayments() {
    let numberOfMonths = document.getElementById("duration").value;
    let depositAmount = document.getElementById("deposit-amount").value;
    let debitAmount = document.getElementById("debit-amount").value;

    document.getElementById("monthly-payments").textContent = Math.ceil((depositAmount - debitAmount) / numberOfMonths) + " rubles";
}

(function () {
    document.getElementById("saving-account").addEventListener("click", function () {
        updateValues(18, 200000, 60000);
        this.classList.add("active");
    });
    document.getElementById("pension-account").addEventListener("click", function () {
        updateValues(15, 80000, 10000);
        this.classList.add("active");
    });
    document.getElementById("comfort-plus-account").addEventListener("click", function () {
        updateValues(12, 150000, 40000)
        this.classList.add("active");
    });
    document.getElementById("comfort-account").addEventListener("click", function () {
        updateValues(14, 120000, 30000)
        this.classList.add("active");
    });

    document.getElementById("saving-account").click();

    document.querySelectorAll(".row > input").forEach(element => {
        element.addEventListener("change", () => {
            updateBubbles();
            updateMonthlyPayments();
        });
    })
})();


function updateBubbles() {
    for (const input of document.querySelectorAll(".row > input")) {
        let value = input.value;
        let bubble = input.nextElementSibling;

        let addInfo;
        if(input.getAttribute("name") === "duration") {
            addInfo = "months";
        } else {
            addInfo = "rub.";
        }

        bubble.value = value + " " + addInfo;

        let min =input.getAttribute('min');
        let max = input.getAttribute('max');
        let percent = (value - min) / (max - min);

        bubble.style.left = percent * 94 + "%";
    }

}
