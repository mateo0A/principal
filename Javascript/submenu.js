

let itemClick=document.querySelector('.item-lits--click')

itemClick.addEventListener('click',()=>{
    
    let secondItem=itemClick.nextElementSibling
    let heigthh=0
    if(secondItem.clientHeight===0){
        heigthh=secondItem.scrollHeight
        let textTit=document.querySelector('.titleText')

        textTit.classList.add('close')

    }else{
        let textTit=document.querySelector('.titleText')
        textTit.classList.remove('close')
    }
    secondItem.style.height=`${heigthh}px`
    console.log(secondItem.clientHeight);
    
    
})