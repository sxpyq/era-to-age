let eraStart = 1926
let input = ""

function setEra(start) {
    eraStart = start
    document.querySelectorAll(".era").forEach(b => {
        b.classList.remove("active")
    })
    event.target.classList.add("active")

    calculate()
}

function press(num) {
    if (input.length >= 6) return
    input += num

    updateDisplay()
    calculate()
}

function backspace() {
    input = input.slice(0, -1)

    updateDisplay()
    calculate()
}

function clearInput() {
    input = ""

    updateDisplay()
    calculate()
}

function updateDisplay() {

    let y = input.slice(0, 2)
    let m = input.slice(2, 4)
    let d = input.slice(4, 6)

    document.getElementById("display").textContent =
        (y || "--") + "年 " +
        (m || "--") + "月 " +
        (d || "--") + "日"

}

function calculate() {

    if (input.length < 6) {
        document.getElementById("age").textContent = "--歳"
        return
    }

    let y = Number(input.slice(0, 2))
    let m = Number(input.slice(2, 4))
    let d = Number(input.slice(4, 6))

    if (m < 1 || m > 12 || d < 1 || d > 31) {
        document.getElementById("age").textContent = "入力エラー"
        return
    }

    let birthYear = eraStart + y - 1
    let today = new Date()
    let age = today.getFullYear() - birthYear

    if (
        today.getMonth() + 1 < m ||
        (today.getMonth() + 1 == m && today.getDate() < d)
    ) {
        age--
    }

    document.getElementById("age").textContent = age + "歳"
}