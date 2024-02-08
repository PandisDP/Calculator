//Variables
var displayDiv = document.querySelector("#display");
var result=0;
var tmp= [];
var tmp2= [];
var lst=[];
//Functions
function setOP(op){
    tmp=[];
    tmp2= [];
    lst.push(op);
}
function press(value){
    if(value!= '.'){
        if(tmp.length==0){
            if(tmp2.length==0){
                tmp2.push(value.toString())
                lst.push(value);
                displayDiv.innerText = value;
            }
            else{
                tmp2[tmp2.length-1]=tmp2[tmp2.length-1]+value;
                lst[lst.length-1]=parseFloat(tmp2[tmp2.length-1]);
                displayDiv.innerText = lst[lst.length-1];
            }
        }
        else{
            tmp[tmp.length-1]=tmp[tmp.length-1]+value;
            lst[lst.length-1]=parseFloat(tmp[tmp.length-1]);
            displayDiv.innerText = lst[lst.length-1];
        }
    }
    else{
        tmp.push(lst[lst.length-1]+value);
        displayDiv.innerText = tmp[tmp.length-1];
    }
}
function calculate(){
    if(lst.length==3){
        var oper= lst[lst.length-2];
        if(oper=='/'){
            if(lst[lst.length-1]!=0){
                result=lst[lst.length-3]/lst[lst.length-1];
            }
            else{
                result=0;
            }
        }
        if(oper=='*'){
            result=lst[lst.length-3]*lst[lst.length-1]
        }
        if(oper=='+'){
            result=lst[lst.length-3]+lst[lst.length-1]
        }
        if(oper=='-'){
            result=lst[lst.length-3]-lst[lst.length-1]
        }
        lst[lst.length-3]=result;
        lst.pop();
        lst.pop();
        displayDiv.innerText = result;
    }
    else{
        displayDiv.innerText = 0;
    }
    
}
function clr(){
    tmp=[];
    tmp2=[];
    lst=[];
    displayDiv.innerText = 0;
}