document.querySelector("form").onsubmit = (e) => {
    let reg3 = /\w+@\w+.\w+/g
    let reg4 = /\w+/g
    if (document.querySelector("input").value.length <= 0) {
        document.querySelector("input").style.borderColor = "red"
        document.querySelector(".e").style.display = "inline-block"
        document.querySelector(".tt").style.display = "block"
    } if (document.querySelectorAll("input")[1].value.length <= 0) {
        document.querySelectorAll("input")[1].style.borderColor = "red"
        document.querySelectorAll(".e")[1].style.display = "inline-block"
document.querySelectorAll(".tt")[1].style.display = "block"


    } if (document.querySelectorAll("input")[2].value.match(reg3) == null) {
        document.querySelectorAll("input")[2].style.borderColor = "red"
        document.querySelectorAll(".e")[2].style.display = "inline-block"
document.querySelectorAll(".tt")[2].style.display = "block"


    } if (document.querySelectorAll("input")[3].value.match(reg4) == null) {
        document.querySelectorAll("input")[3].style.borderColor = "red"
        document.querySelectorAll(".e")[3].style.display = "inline-block"
document.querySelectorAll(".tt")[3].style.display = "block"

    }
    if (document.querySelector("input").value.length > 0 && document.querySelectorAll("input")[1].value.length > 0 && document.querySelectorAll("input")[2].value.match(reg3) == document.querySelectorAll("input")[2].value && document.querySelectorAll("input")[3].value.match(reg4) == document.querySelectorAll("input")[3].value) {
        console.log("yes")
            }
    console.log(document.querySelectorAll("input")[3].value.match(reg4) == true)
}