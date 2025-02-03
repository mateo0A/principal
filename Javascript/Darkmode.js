
let darkmode=localStorage.getItem("dark");
console.log(darkmode);

const eneableMode=()=>{
    document.querySelector("body").classList.add('Modedark')
    localStorage.setItem("dark","active")
}
const disableMode=()=>{
    document.querySelector("body").classList.remove('Modedark')
    localStorage.setItem("dark",null)
}


let btnM=document.querySelector(".mode-lD")


if(darkmode==="active") eneableMode()
btnM.addEventListener("click",()=>{
    darkmode=localStorage.getItem("dark")

    darkmode !== "active" ? eneableMode():disableMode()
    console.log(1);
    
})