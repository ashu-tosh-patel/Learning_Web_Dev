 const ul = document.querySelector("ul");
 
 const  button = document.querySelector("button");
 
 button.addEventListener("click", ()=>{
    //  ul.innerHTML+=`<li>Sumething new</li>`;
    const li = document.createElement("li");
    li.textContent = "Maurya is a good boy";
    ul.prepend(li);
 })



 button.addEventListener("click",()=>{
     console.log("You clicked");
 });
 const items = document.querySelectorAll("li");
 items.forEach(item=>{
     item.addEventListener("click", (e)=>{
         console.log("item cicked");
        console.log(e.target);
        e.target.style.textDecoration = "line-through";
        e.target.remove();
     });
 });