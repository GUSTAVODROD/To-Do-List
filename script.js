let seleccionadorInput= document.querySelector(".input")

let seleccionadorAgregar= document.querySelector(".boton-agregar")

let seleccionadorContainer= document.querySelector(".container")

class Item {
    constructor(nuevaTarea) {
        this.crearDiv(nuevaTarea)
    }
    crearDiv(nuevaTarea){

        let botonEditar= document.createElement("button")
        botonEditar.innerHTML= "<i class='fas fa-lock'></i>"
        botonEditar.classList.add("boton-editar")
        
        let inputItem = document.createElement("input")
        inputItem.type= "text"
        inputItem.value= nuevaTarea
        
        inputItem.disabled= true
        inputItem.classList.add("item-input")
        
        let elementoDiv = document.createElement("div")
        elementoDiv.classList.add("item")



        let botonRemover= document.createElement("button")
        botonRemover.innerHTML= "<i class='fas fa-trash'></i>"
        botonRemover.classList.add("boton-remover")
        
        elementoDiv.appendChild(botonEditar)
        elementoDiv.appendChild(inputItem)
        elementoDiv.appendChild(botonRemover)
        
        seleccionadorContainer.appendChild(elementoDiv)

        
            
        botonEditar.addEventListener("click", function() {

            inputItem.disabled=! inputItem.disabled

            if (inputItem.disabled==false){

                this.innerHTML="<i class='fas fa-lock-open'></i>"
                this.style.color="yellow"

            }else{

                this.innerHTML= "<i class='fas fa-lock'></i>"
                this.style.color="white"
            }

            
        })

            
        botonRemover.addEventListener("click", function() {

            seleccionadorContainer.removeChild(elementoDiv)
    
        })
   
        
    }


}



seleccionadorAgregar.addEventListener("click", chequearInput)

seleccionadorInput.addEventListener("keydown", function(e){

    if (e.keyCode==13){

        chequearInput()

    }
})

function chequearInput(){
    
    if(seleccionadorInput.value!==""){
        
        let tarea= new Item(seleccionadorInput.value)
        seleccionadorInput.value=""
     
    }

}