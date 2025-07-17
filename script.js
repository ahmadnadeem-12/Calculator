const display = document.querySelector("#inp");
const button = document.querySelectorAll("button");

console.log(button);
let arraybutton = Array.from(button);
let string="";
console.log(arraybutton);
arraybutton.forEach((btn)=>{
    btn.addEventListener('click',(e)=>{
        if(e.target.innerHTML=="DEL")
        {
            string=string.substring(0,string.length-1)
            display.value=string;
        }
        else if(e.target.innerHTML=="AC"){
            string="";
            display.value=string;
        }
        else if(e.target.innerHTML=="="){
            string=eval(string).toString();
            display.value=string;
        }
        else
        {
            string+=e.target.innerHTML;
            display.value=string;
            display.scrollLeft=display.scrollWidth;
        }
    });
});
