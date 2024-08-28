// to clear the consoleon every refresh, just use console.clear();
console.clear();

  function rangeSlider(value){
           const rangeValueDispla= document.getElementById("password-length");
           rangeValueDispla.textContent=value;
  }
function btnIncreasedValue(){
    const rangeValue = document.getElementById("passwordInput");
    let increasingValueOnBtnClick =parseInt(rangeValue.value);
    if(increasingValueOnBtnClick<rangeValue.max){
        increasingValueOnBtnClick+=1;
        rangeValue.value=increasingValueOnBtnClick;
        rangeSlider(increasingValueOnBtnClick)

    }
}
function btnDecreasedValue(){
    const rangeValue=document.getElementById("passwordInput");
    let decreasingValueOnBtnClick=parseInt(rangeValue.value);
    if(decreasingValueOnBtnClick>rangeValue.min){
        decreasingValueOnBtnClick-=1;
        rangeValue.value=decreasingValueOnBtnClick;
        rangeSlider(decreasingValueOnBtnClick);
    }
}
const copyText=document.getElementById("passwordHolder").value;
function copyToClipboard(){
    navigator.clipboard.writeText(copyText).then(function(){
        alert ("copied to clipboard"+copyText)
    }).catch(function(error) {
        console.error("Could not copy text: ", error);
    });
    
}