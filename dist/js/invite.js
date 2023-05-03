function onSelectSurvey(isGood){
    document.getElementById("qu-buttons").style.display = "none";
    document.querySelector(".question-box").children[(isGood) ? 0 : 1].style.display = "inline-block"; 
    document.getElementById("qu-text").innerText = (isGood) ? "از انتخابت متشکریم" : "از تجربه ات متاستفیم؛ برای بهبودی مشکل با پشتیبانی ربات تماس بگیرید";
}