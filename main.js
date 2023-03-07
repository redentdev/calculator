const islem = document.querySelector("#islem");
const result = document.querySelector("#result");
const buttons = document.querySelectorAll("button");

buttons.forEach(btn => {
  btn.addEventListener("click", function() {
    if(btn.id == "submit"){
      islem.value = eval(islem.value);
      result.innerHTML = "";
    }else if(btn.id == "ac"){
      islem.value = "";
    }else if(btn.id == "del"){
      islem.value = islem.value.slice(0, -1);
    }else{
      islem.value += btn.id;
      if(islem.value.includes("+") || islem.value.includes("-") || islem.value.includes("/") || islem.value.includes("*")){
        result.innerHTML = eval(islem.value);
      }else{
        result.innerHTML = "";
      }
    }
  });
});