var x=document.getElementById('phone')
var err =document.getElementById('err')
var err1 =document.getElementById('err1')
var p =document.getElementById('pass')
var err2 =document.getElementById('err2')
var e =document.getElementById('email')
var num=document.getElementById('num')
var msg=document.getElementById('msg')
var str=document.getElementById('str')
var rolex=/^([A-Za-z0-9\-#_.]+)@([A-Za-z0-9\-]+).([a-z]{2,3}).([a-z]{2,3})?$/
var rolex2=/^([A-Za-z0-9]+)$/
x.addEventListener('keyup',function(e){console.log(e.target.value)})
function validatename()
{
    if(x.value.trim()=="")
    {
        err.innerText="Enter phone number";
        x.style.borderColor='red';
    return false;
    }
    else if(isNaN(x.value))
    {
        err.innerText='Must only contain values from 0-9';
        x.style.borderColor="red";
        return false;
    }    
    else if(x.value.length!=10)
    {
        err.innerText='Enter 10 numbers';
        x.style.borderColor="red";
        return false;
    }
    else
    {
     err.innerText='';
     x.style.borderColor='black';
     return true;
    }
}
function validatepass()
{
    if(p.value.trim()=="")
    {
        err1.innerText="Password is required to log in";
        p.style.borderColor='red';
    return false;
    }   
    else if(p.value.length<8)
    {
        err1.innerText='password must contain atleast 8 characters';
        p.style.borderColor="red";
        str.innerText="Poor password"
        str.style.color="red"
        return false;
    }    
   else if(p.value.length=8&&p.value.length<10)
    {
        str.innerText="Medium password"
        str.style.color="orange"
        return false;
    }  
    else if(p.value.length>9)
    {
        str.innerText="Good password"
        str.style.color="green"
        return true;
    }    
    else if(p.value.length>8&&p.value.match(rolex2))
    {
    err1.innerText='';
    str.innerText='';
    p.style.borderColor='black';
    return true;
    }  
    else
    {
        err1.innerText='';
        str.innerText='';
        p.style.borderColor='black';
        return true;
    }
}
function validateemail()
{
    if(e.value.trim()=="")
    {
        err2.innerText="email is required to log in";
        e.style.borderColor='red';
    return false;
    }
    else if(!e.value.match(rolex))
    {
        err2.innerText="Email is not in correct format";
        e.style.border='1px solid red';
        return false;
    }    
    else
    {
    err2.innerText='';
    e.style.border='black';
    return true;
    }  
}
function validateform()
{
    if(!validatename()||!validatepass()||!validateemail())
    {
        return false;
    }
    else
    {
        return true;
    }
}