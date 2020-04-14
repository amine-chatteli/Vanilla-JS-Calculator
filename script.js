
// object oriented approach

const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')

class Calculator{
  constructor(previousOperandTextElement,currentOperandTextElement){
this.previousOperandTextElement=previousOperandTextElement;
this.currentOperandTextElement=currentOperandTextElement;
this.clear()
  }
  clear(){
    this.currentOperand = ''
    this.previousOperand = ''
    this.operation = undefined;
    this.equals=0;

  }
  appendNumber(number){
if(this.equals===0){
    if(number==="."&&this.currentOperand.indexOf('.')!=-1)return
    this.currentOperand=this.currentOperand.toString()+number.toString();}
    else{
      this.equals=0;
      this.currentOperand=number.toString();
    }
  }
  
  delete(){
    this.currentOperand=this.currentOperand.slice(0,-1)

  }
  
  chooseOperation(operation){
    if (this.currentOperand === '') return
    if (this.previousOperand !== '') {
      this.compute()
    }
    this.operation = operation
    this.previousOperand = this.currentOperand
    this.currentOperand = ''
  }
  compute(){
    const prev=parseFloat(this.previousOperand);
    const current=parseFloat(this.currentOperand);
    var result='';
    switch(this.operation){
      case '+':
        result=prev+current;
        ;break;
        case '-':
        result=prev-current;
        ;break;
        case '*':
        result=prev*current;
        ;break;
        case '÷':
        result=prev/current;
      
        ;break;
        default:return
    }
    this.currentOperand = result
    this.operation = undefined
    this.previousOperand = ''
    this.equals=1

  }
  getDisplayNumber(number) {
    const stringNumber = number.toString()
    const integerDigits = parseFloat(stringNumber.split('.')[0])
    const decimalDigits = stringNumber.split('.')[1]
    let integerDisplay
    if (isNaN(integerDigits)) {
      integerDisplay = ''
    } else {
      integerDisplay = integerDigits.toLocaleString('en', { maximumFractionDigits: 0 })
    }
    if (decimalDigits != null) {
      return `${integerDisplay}.${decimalDigits}`
    } else {
      return integerDisplay
    }
  }

  updateDisplay() {
    this.currentOperandTextElement.innerText =
      this.getDisplayNumber(this.currentOperand)
    if (this.operation != null) {
      this.previousOperandTextElement.innerText =
        `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`
    } else {
      this.previousOperandTextElement.innerText = ''
    }
  }

}
 calculator =new Calculator(previousOperandTextElement,currentOperandTextElement);

numberButtons.forEach(button=>{button.addEventListener('click',function(){
  calculator.appendNumber(button.innerText);
  calculator.updateDisplay();
})}
)
allClearButton.addEventListener('click',()=>{
  calculator.clear();
  calculator.updateDisplay();
})

deleteButton.addEventListener('click',()=>{
  calculator.delete();
  calculator.updateDisplay();
})

operationButtons.forEach(button=>button.addEventListener('click',()=>{
  calculator.chooseOperation(button.innerText)
  calculator.updateDisplay();
}))
equalsButton.addEventListener('click',()=>{
  calculator.compute();
  calculator.updateDisplay();
})


// functional approach 





/* 
var buttons=document.getElementsByTagName('button');
Array.from(buttons).forEach(element => {
  element.addEventListener('click',output)
});
function output(e){
  
var button=e.target.innerHTML;

if(!(button == '+'||button=='-'||button=='*'||button =='÷'||button=='=')){
  
  var current =document.getElementsByClassName('current-operand')[0]
  current.innerText+=button
}
else {
  if(button!='='){
  var current =document.getElementsByClassName('current-operand')[0]
  current.innerText+=button
  var previous=document.getElementsByClassName('previous-operand')[0]
  previous.innerText+=current.innerText
  console.log(previous)
  current.innerText=null;}
  else{
    var current =document.getElementsByClassName('current-operand')[0]
  current.innerText+=button
  var previous=document.getElementsByClassName('previous-operand')[0]
  previous.innerText+=current.innerText
  var res = previous.innerText.replace("=", "").replace("÷","/")
  console.log(res)
   current.innerText= eval(res)
   previous.innerText=null;
  }
  
}
if(button=e.target.innerHTML=='DEL'){
  current.innerText=current.innerText.slice(0,-4);
  previous.innerText=previous.innerText.slice(0,-4);
}

} */