function execute() {
    var yoga = document.sampleForm.menu[0];
    var study = document.sampleForm.menu[1];
    var meal = document.sampleForm.menu[2];
    var result = document.getElementById("result");
    result.innerHTML = "";
    var none = true;
    const textbox = document.getElementById("input-message");
    const inputValue = textbox.value;
    const url = new URL(inputValue);
    const params = new URLSearchParams(url.search);
 
    if(yoga.checked) {
        result.innerHTML = yoga.value + "が選択されています。";
	window.open("https://papikko.github.io/srt.js/index.htm?"+params+"&surl=sample/example2_srt.js",'_blank');
        none = false;
    }
 
    if(study.checked) {
        result.innerHTML += study.value + "が選択されています。";
        none = false;
    }
 
    if(meal.checked) {
        result.innerHTML += meal.value + "が選択されています。";
        none = false;
    }
 
    if(none) {
        result.innerHTML = "何も選択されていません。";
    }
 
}
