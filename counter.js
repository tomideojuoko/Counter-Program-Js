let value = 0;

document.getElementById("IncreaseBtn").onclick = () => {
    value += 1;
    document.getElementById("countLabel").innerHTML = value;
}
document.getElementById("ResetBtn").onclick = () => {
    value = 0;;
    document.getElementById("countLabel").innerHTML = value;
}
document.getElementById("DecreaseBtn").onclick = () => {
    value -= 1;
    document.getElementById("countLabel").innerHTML = value;
}