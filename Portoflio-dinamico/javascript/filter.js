/*Funcion para filtrar en el input search todos los resultados de la busqueda, esta funcion se la pasamos al evento keyup */


const filter = (e, barraDeFiltro, selector) => {
    if(e.target.matches(barraDeFiltro)){
        document.querySelectorAll(selector).forEach(el => (
            el.children[0].getAttribute("data-description").toLowerCase().includes(e.target.value) || el.children[0].getAttribute("alt").toLowerCase().includes(e.target.value)
                ? el.classList.remove("filter")
                : el.classList.add("filter")
        ))      
    }
}

export default filter
