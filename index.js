let title =document.querySelectorAll(".title");
title.forEach((element)=>{
    element.addEventListener('click',(e)=>{
        // e.target.classList.toggle('active');
        let content = e.target.nextElementSibling; 
        if(content.style.height){
            content.style.height = null
        }else{
            content.style.height=content.scrollHeight+'px';
        }
        
    })
}
)
 