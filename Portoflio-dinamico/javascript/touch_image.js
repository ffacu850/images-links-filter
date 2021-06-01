const touchImage = (e, selector) => {
    if(e.target.matches(selector)){
        document.querySelector(".overlay").classList.toggle("activo")   
        document.querySelector(".overlay__img").src = e.target.getAttribute("src")
        document.querySelector(".description").textContent = e.target.getAttribute("data-description") 
    }
}
export default touchImage

// document.addEventListener("click", (e) => {
//     touchImage(e, ".cards__item img")
    
   
// })