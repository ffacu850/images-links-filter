/*Esta funcion cierra cada tarjeta*/
const closed = (e, selector) => {
    if(e.target.matches(selector)){
        document.querySelector(".overlay").classList.toggle("activo")
    }
}

export default closed