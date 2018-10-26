function insert (num){
     calcform.txt.value = calcform.txt.value+num;
}
function clr (){
    calcform.txt.value = "";
}
function equal (){
    exp = calcform.txt.value;
  
        calcform.txt.value = eval(exp);
    
}
function back (){
    exp = calcform.txt.value;
    calcform.txt.value = exp.substring(0, exp.length-1);
    }