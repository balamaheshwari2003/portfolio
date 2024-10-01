const form=document.querySelector("#form")
const fname=document.querySelector("#fname")
const lname=document.querySelector("#lname")
const eid=document.querySelector("#eid")
const phone=document.querySelector("#phone")
const msg=document.querySelector("#msg")
form.addEventListener('submit',(e)=>{
  validate_fname()
  validate_lname()
  validate_email()
  validate_phone()
  validate_message()
    e.preventDefault();
  
})
function validate_fname(){
    var fnameval=fname.value.trim()
   
if(fnameval==='')
  seterror(fname,'*first name is required*')
else if(!name_check(fnameval))
seterror(fname,'*use only alphabet*')
else 
setsuccess(fname)
}
function validate_lname(){
  var lnameval=lname.value.trim()
if(lnameval==='')
seterror(lname,'*last name is required*')
else if(!name_check(lnameval))
seterror(lname,'*use only alphabet*')
else 
setsuccess(lname)
}
function validate_email(){
  var eidval=eid.value.trim()
if(eidval==='')
seterror(eid,'*email_id is required*')
else if(!validateEmail(eidval))
seterror(eid,'*invalid email_id*')
else
setsuccess(eid);
}
function validate_phone(){
  var phoneval=phone.value.trim()
if(phoneval==='')
seterror(phone,'*phone_no. is required*')
else if(!phone_check(phoneval))
seterror(phone,"*invalid phone number*")
else if(phoneval.length<9)
seterror(phone,"*invalid phone number*")
else 
setsuccess(phone)
}
function validate_message(){
  var msgval=msg.value.trim()
if(msgval==='')
seterror(msg,'*message is required*')
else 
setsuccess(msg)
}

function seterror(element,message){
const inp =element.parentElement;
const emsg=inp.querySelector('.error')
emsg.innerText=message;
inp.classList.add('error')
inp.classList.remove('success')
}
function setsuccess(element){
const inp=element.parentElement
const emsg=inp.querySelector('.error')
emsg.innerText=''
inp.classList.add('success')
inp.classList.remove('error')
}
const validateEmail = (email) =>{
    return String(email).toLowerCase().match( /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
};
function name_check(name){
    if(!name.match(/^[A-Za-z]+$/))
      return false;
      else
      return true;
}
function phone_check(phn_c){
    if(!phn_c.match(/^[0-9]+$/))
      return false;
      else
      return true;
}

function edu(){
  var education_detail=document.getElementsByClassName("education_detail");
  education_detail.style.display='block';
}


