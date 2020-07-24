var op1,op2;
var result;
var operator=null;
var operand1=document.getElementById("operand1");
var operand2=document.getElementById("operand2");
var op=document.getElementById("operator");
var r=document.getElementById("result");
var number=document.getElementsByClassName("number");
//var display=document.getElementById("output");
for(var i=0;i<number.length;i++){
number[i].addEventListener('click',function(){
   var val=this.getAttribute("data-value");
  
  if(val=='+'){
    operator='+';
     op.innerText=val;
    op1=parseFloat(operand1.innerText);
    
   }else if(val=='-'){
   operator='-';
   op.innerText=val;
   op1=parseFloat(operand1.innerText);
  
   }else if(val=='*'){
   operator='*';
   op.innerText=val;
     op1=parseFloat(operand1.innerText);
    
   }else if(val=='/'){
     op1=parseFloat(operand1.innerText);  
     op.innerText=val;
     operator='/';
 
   }else if(val=='='){
    op2=parseFloat(operand2.innerHTML);
    result=eval((op1+" "+operator+" "+op2));
    console.log(op1,operator,op2,result);
    r.innerText="= "+result;
   
  }
  else if(val=='clear'){
    operator=null;
    op1=null;
    op2=null;
    result=null;
    operand1.innerText=null;
    operand2.innerText=null;
    op.innerText=null;
    r.innerText=null;
  }else{
    if(operator!=null)
    {operand2.innerText+=val;
    } else{
      operand1.innerText+=val;
    }
  }
  
  });
}