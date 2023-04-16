const inviteToggle = document.querySelector(".switch");
inviteToggle.addEventListener("change", function(){
    if (!document.querySelector(".switch").children[0].disabled){
        document.querySelector(".switch").children[0].disabled = true;
        setInterval(function(){
            document.querySelector(".switch").style.display = "none";
            document.querySelector(".question-box").children[0].style.display = "inline-block"; 
            document.querySelector(".question-box").children[1].innerText = "از انتخابت متشکریم"
        }, 220)
    }
})