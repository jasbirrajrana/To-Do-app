var din=document.querySelector(".data-input");
var work=document.querySelector(".work");
var add=document.querySelector("#add");
var txt=document.querySelector("#text");
var curr=document.getElementById("d")
var date = document.getElementById("d")
var d=new Date();
var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
var days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
var today=days[d.getDay()]+","+months[d.getMonth()]+" "+d.getDate()
date.innerText = today;
add.addEventListener("click",function(){
    var div=document.createElement("div")
    div.setAttribute("class","big")
    var check=document.createElement("input");
    check.setAttribute("id","chk");
    check.setAttribute("type","checkbox");
    check.setAttribute("onclick","Check(this)");
    var divi=document.createElement("div");
    divi.setAttribute("class","fdiv");
    var h4=document.createElement("h4");
    var t=document.createTextNode(txt.value);
    h4.appendChild(t);
    h4.setAttribute("id","final");
    divi.appendChild(h4);
    var del=document.createElement("i")
    del.setAttribute("class","fa fa-trash md");
    del.setAttribute("aria-hidden","true");
    del.setAttribute("id","delete")
    del.setAttribute("onclick","Delete(this)")
    div.appendChild(check);
    div.appendChild(divi);
    div.appendChild(del);
    din.appendChild(div);
    txt.value="";
})
function Delete(obj){
    obj.parentNode.remove()
}
function Check(obj){
    if(obj.checked==true){
        console.log("clicked");//
        obj.parentNode.querySelector("#final").style.textDecoration="line-through";
        obj.parentNode.querySelector("#final").style.color="silver";
    }
        
    if(obj.checked==false){
        console.log("not clicked");
        obj.parentNode.querySelector("#final").style.textDecoration="none";
        obj.parentNode.querySelector("#final").style.color="black";
}
}
document.querySelector(".btn").addEventListener("click",function(){
    var b=document.querySelectorAll(".big");
    for(let i=0;i<b.length;i++){
        b[i].remove();
    }

})