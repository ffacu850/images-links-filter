/* Esta funcion muestra el link activo colocandolo en color negro. Al dar click la funcion adquiere la clase. Esta funcion se la pasamos al evento click */
const currentLink = (e, selector) => {
    if (e.target.matches(selector)){
        document.querySelector(".activo").classList.remove("activo")
        e.target.classList.add("activo")
    }
}
export default currentLink