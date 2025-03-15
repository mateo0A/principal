

let itemClick=document.querySelector('.item-lits--click')
const icon =document.querySelector('.chevDown')
itemClick.addEventListener('click',()=>{
    
    let secondItem=itemClick.nextElementSibling
    let heigthh=0
    if(secondItem.clientHeight===0){
        heigthh=secondItem.scrollHeight
        let textTit=document.querySelector('.titleText')

        textTit.classList.add('close') 
        icon.classList.add("Rot")
    }else{
        let textTit=document.querySelector('.titleText')
        textTit.classList.remove('close')
        icon.classList.remove("Rot")
        


    }
    secondItem.style.height=`${heigthh}px`
    console.log(1);
    
    
})