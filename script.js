let btn = document.getElementById("btn")
document.querySelector(".box").style.backgroundColor = "lightblue";
document.querySelector(".box").style.color = "black";
document.querySelector(".box").style.textAlign = "center";
document.querySelector(".box").style.padding = "20px";
document.querySelector(".box").style.fontSize = "32px";
document.querySelector(".box").style.border = "2px solid black";
document.querySelector(".box").style.borderRadius = "10px";
document.querySelector(".box").style.boxShadow = "0px 4px 8px rgba(0, 0, 0, 0.2)";
btn.style.position = "absolute";
btn.style.top = "50%";
btn.style.left = "50%";
btn.style.transform = "translate(-50%, -50%)";
btn.style.padding = "10px 20px";
btn.style.fontSize = "16px";
btn.style.backgroundColor = "blue";
btn.style.color = "white";
btn.style.border = "none";
btn.style.borderRadius = "5px";
btn.style.cursor = "pointer";
btn.style.boxShadow = "0px 4px 6px rgba(0, 0, 0, 0.1)";
btn.addEventListener("dblclick",()=>{
//    document.querySelector(".box").innerHTML="<b> Yayy you were clicked </b>"
//    document.querySelector(".box").style.backgroundColor="red"
//    document.querySelector(".box").style.color="white"
//    document.querySelector(".box").style.textAlign="center"
//    document.querySelector(".box").style.padding="20px"
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    document.querySelector(".box").innerHTML = `<b>${tomorrow.toDateString()}</b>`;
    document.querySelector(".box").style.backgroundColor = "lightblue";
    document.querySelector(".box").style.color = "black";
    document.querySelector(".box").style.textAlign = "center";
    document.querySelector(".box").style.padding = "20px";
    document.querySelector(".box").style.fontSize = "24px";
    btn.innerHTML = "There you go";
    
})
document.addEventListener("keydown",(e)=>{
    console.log(e.key, e.keyCode);

})