//value element
let selectTitle=document.getElementById('selectTitle');
let firstName = document.getElementById('firstName');
let lastName = document.getElementById('lastName');
let gender = document.getElementsByName('gender')
let dob = document.getElementById('dob');
let phoneNum= document.getElementById('phoneNumber');
let accountBal= document.getElementById('accountBal');
let loanAmount =document.getElementById('loanAmount')
let creditHistory =document.getElementById('creditHistory');
let lastDeposit =document.getElementById('lastDeposit');
let lastLoan =document.getElementById('lastLoan');
let payBackPeriod =document.getElementById('payBackPeriod');
let accountType=document.getElementsByName('accountType');

//error message element
let selectTitleError=document.getElementById('selectTitleError');
let firstNameError = document.getElementById('firstNameError');
let lastNameError = document.getElementById('lastNameError');
let genderError = document.getElementById('genderError')
let dobError = document.getElementById('dobError');
let phoneNumError= document.getElementById('phoneNumberError');
let accountBalError= document.getElementById('accountBalError');
let loanAmountError =document.getElementById('loanAmountError')
let creditHistoryError =document.getElementById('creditHistoryError');
let lastDepositError =document.getElementById('lastDepositError');
let lastLoanError =document.getElementById('lastLoanError');
let payBackPeriodError =document.getElementById('payBackPeriodError');
let accountTypeError=document.getElementById('accountTypeError');

let messageTxt=document.getElementById('messageTxt');
let decisionPoint=0;


let btn=document.getElementById('btn');
// adding Eventlistener
btn.addEventListener('click', ()=>{
    validationCheck();
})
function validationCheck(){
if(selectTitle.value==""){
    selectTitleError.textContent='value of field is required';
    selectTitle.style.border='1px solid red';
}else{
    selectTitleError.textContent='';
    selectTitle.style.border='initial';
}
if(firstName.value==""){
    firstNameError.textContent='value of field is required';
    firstName.style.border='1px solid red';
}else{
    firstNameError.textContent='';
    firstName.style.border='initial';
}
if(lastName.value==""){
    lastNameError.textContent='value of field is required';
    lastName.style.border='1px solid red';
}else{
    lastNameError.textContent='';
    lastName.style.border='initial';
}
if(gender[0].checked=='' && gender[1].checked==''){
    genderError.textContent='value of field is required';
}else{
    genderError.textContent='';
}
if(dob.value==""){
    dobError.textContent='value of field is required';
    dob.style.border='1px solid red';
}else{
    dobError.textContent='';
    dob.style.border='initial';
}
if(phoneNum.value==""){
    phoneNumError.textContent='value of field is required';
    phoneNum.style.border='1px solid red';
}else{
    phoneNumError.textContent='';
    phoneNum.style.border='initial';
}
if(accountBal.value==""){
    accountBalError.textContent='value of field is required';
    accountBal.style.border='1px solid red';
}else{
    accountBalError.textContent='';
    accountBal.style.border='initial';
}
if(loanAmount.value==""){
    loanAmountError.textContent='value of field is required';
    loanAmount.style.border='1px solid red';
}else{
    loanAmountError.textContent='';
    loanAmount.style.border='initial';
}
if(creditHistory.value==""){
    creditHistoryError.textContent='value of field is required';
    creditHistory.style.border='1px solid red';
}else{
    creditHistoryError.textContent='';
    creditHistory.style.border='initial';
}
if(lastDeposit.value==""){
    lastDepositError.textContent='value of field is required';
    lastDeposit.style.border='1px solid red';
}else{
    lastDepositError.textContent='';
    lastDeposit.style.border='initial';
}
if(lastLoan.value==""){
    lastLoanError.textContent='value of field is required';
    lastLoan.style.border='1px solid red';
}else{
    lastLoanError.textContent='';
    lastLoan.style.border='initial';
}
if(payBackPeriod.value==""){
    payBackPeriodError.textContent='value of field is required';
    payBackPeriod.style.border='1px solid red';
}else{
    payBackPeriodError.textContent='';
    payBackPeriod.style.border='initial';
}
if(accountType[0].checked=='' && accountType[1].checked==''){
    accountTypeError.textContent='value of field is required';
}else{
    accountTypeError.textContent='';
}

if(selectTitle.value!=""&&firstName.value!=""&&lastName.value!=""&&gender.checked!=""&&dob.value!=""&&phoneNum.value!=""&&accountBal.value!=""&&loanAmount.value!=""&&creditHistory.value!=""&&lastDeposit.value!=""&&lastLoan.value!=""&&payBackPeriod.value!=""&&accountType.checked!=""){
    firstCondition();
}
}



function firstCondition(){
    if (accountBal.value > loanAmount.value){
        decisionPoint+=10;
    }else {
        decisionPoint-=10;
    }
    secondCondition();
    }
    
    function secondCondition(){
        if(creditHistory.value=='1'|| creditHistory.value=='2'|| creditHistory.value=='3' ||creditHistory.value=='4' || creditHistory.value=='5' || creditHistory.value=='6'){
            decisionPoint+=10;
        }else{
            decisionPoint+=0;
        }
        thirdCondition();
    }
    function thirdCondition(){
        if(lastDeposit.value=='lessWeek'||lastDeposit.value=='lessMonth'){
            decisionPoint=decisionPoint+5;
    }else{
        decisionPoint+=0;
    }
    fourthCondition();
    }
    
    function fourthCondition(){
        if(lastLoan.value=='1month'||lastLoan.value=='2month'||lastLoan.value=='3month'||lastLoan.value=='4month'||lastLoan.value=='5month'||lastLoan.value=='6month'){
            decisionPoint+=10;
        
    }else{
        decisionPoint+=0;
    }
    fifthCondition();
    }
    function fifthCondition(){
        if(payBackPeriod.value=='Below6months'){
            decisionPoint+=5
        }else{
            decisionPoint+=0
        }
        sixthCondition();

    }
    function sixthCondition(){
        if(accountType[1].checked==true){
            decisionPoint+=10;
        }else{
            decisionPoint+=5;
        }
        decideTest();
    }

    function decideTest(){
        if(decisionPoint>30){
            messageTxt.innerHTML='<i>Dear '+firstName.value.valueOf(firstName) +' ' + lastName.value.valueOf(lastName)+' your loan of N'+loanAmount.value.valueOf(loanAmount) + ' has been Approved. </i>'
            messageTxt.style.backgroundColor='#0aadad'
        }else{
            messageTxt.innerHTML='<i>Dear '+firstName.value.valueOf(firstName) +' ' + lastName.value.valueOf(lastName)+' your loan of N'+loanAmount.value.valueOf(loanAmount) + ' has been Rejected. Reapply after 60 days. </i>'
            messageTxt.style.backgroundColor='#0aadad'
        }
    resetAll();
    }
    function resetAll(){
        selectTitle.value='';
        firstName.value='';
        lastName.value='';
        dob.value='';
        phoneNum.value='';
        accountBal.value='';
        loanAmount.value='';
        creditHistory.value='';
        lastDeposit.value='';
        lastLoan.value='';
        payBackPeriod.value='';
    }
