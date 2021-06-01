import filter from "./filter.js"
import touchImage from "./touch_image.js"
import closed from "./closed.js"
import linkCard from "./link_card.js"
import currentLink from "./current_link.js"

/*Objeto para crear cada figure */
const cardContent = [
    {img: "/Portoflio-dinamico/assets/images/naturaleza1.png", 
    title: "Hojas de Arbol",
    gender: "Naturaleza"
    }, 
    {img: "/Portoflio-dinamico/assets/images/paisaje2.png",
    title: "Montañas", 
    gender: "Naturaleza"
    },
    {img: "/Portoflio-dinamico/assets/images/paisaje1.png", 
    title: "Paisaje",
    gender: "Naturaleza"
    },
    {img: "/Portoflio-dinamico/assets/images/ciudad1.png", 
    title: "Edificios",
    gender: "Ciudades"
    },
    {img: "/Portoflio-dinamico/assets/images/ciudad2.png", 
    title: "San Pablo",
    gender: "Ciudades"
    },
    {img: "/Portoflio-dinamico/assets/images/animal1.png", 
    title: "Leon",
    gender: "Animales"
    },
    {img: "/Portoflio-dinamico/assets/images/animal2.png", 
    title: "Oso Panda",
    gender: "Animales"
    },
    {img: "/Portoflio-dinamico/assets/images/persona1.png", 
    title: "Morocha",
    gender: "Personas"
    },
    {img: "/Portoflio-dinamico/assets/images/persona2.png", 
    title: "Pelirroja",
    gender: "Personas"
    }
]

const cards = document.querySelector(".cards")
const fragment = document.createDocumentFragment()

/*Creacion de las etiquetas figure que contienen dentro su etiqueta img con sus atributos src y alt. Ademas creacion de etiqueta figcaption para mostrar una descripcion al pie de la imagen */
for(let item of cardContent){
    const img = document.createElement("img")
    img.setAttribute("src", item.img)
    img.setAttribute("alt", item.gender.toLowerCase())
    img.setAttribute("data-description", item.title)
    img.classList.add("images")
    const figure = document.createElement("figure")
    figure.classList.add("cards__item")
    figure.appendChild(img)
    fragment.appendChild(figure)
}

cards.appendChild(fragment)


document.addEventListener("DOMContentLoaded",() =>{
    /*Este es el evento que se dispara en la barra de busqueda 
     barra.addEventListener("keyup", filtrar)*/
    document.addEventListener("keyup", (e) => {
        filter(e, ".barra-busqueda", ".cards__item")
    })
    /*Evento click */
    document.addEventListener("click", (e) => {
        touchImage(e, ".cards__item img")
        closed(e, ".closed")
        linkCard(e, ".link", ".cards__item")
        currentLink(e, ".link")
    })
})

/*Evento load, al abrir la pagina las imagenes aparecen con un delay de un segundo y recien ahi se cargan y se muestran */
window.addEventListener("load", () => {
    cards.classList.add("open")
})




