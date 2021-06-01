/* Con esta funcion cuando tocamos algun link filtramos segun la categoria. Esta funcion se la pasamos al evento click */
const linkCard = (e, enlace, selector) => {
    if (e.target.matches(enlace)){
        document.querySelectorAll(selector).forEach(el => (
            el.children[0].getAttribute("alt") === e.target.textContent || "todos" === e.target.textContent
                ? el.classList.remove("filter")
                : el.classList.add("filter")
        ))
    }
    
}

export default linkCard