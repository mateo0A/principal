/*btnmenu side mobile and computer */
let btnMenuSide=document.querySelector('.btn-menuRes')
let widthWindow=window.innerWidth

if(widthWindow<768){
    btnMenuSide.style.display='block'
}

window.addEventListener('resize',()=>{
    let dinamicWidth=window.innerWidth
    if(dinamicWidth<768){
        btnMenuSide.style.display='block'

    }else{
        btnMenuSide.style.display='none'

    }
})