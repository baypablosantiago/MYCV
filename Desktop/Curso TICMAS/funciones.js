function mostrarDiv(id,div){
    document.getElementById(id).onclick = function(){
        if (document.getElementById(div).style.display != "none"){
            document.getElementById(div).style.display = "none";
        }
        else{   
        document.getElementById("divPortfolio").style.display="none";
        document.getElementById("divContacto").style.display="none";
        document.getElementById("divExperiencia").style.display="none";
        document.getElementById("divFormacion").style.display="none";
        
        document.getElementById(div).style.display="block";
        }
    }    
}

mostrarDiv("portfolio","divPortfolio");
mostrarDiv("contacto","divContacto");
mostrarDiv("experiencia","divExperiencia");
mostrarDiv("formacion","divFormacion");

function iluminarSeleccion(id){
    document.getElementById(id).onmouseover = function(){
        document.getElementById(id).style.backgroundColor = "gray";
    }
    
    document.getElementById(id).onmouseout = function(){
        document.getElementById(id).style.backgroundColor = "black";
    }
}

iluminarSeleccion("portfolio");
iluminarSeleccion("contacto");
iluminarSeleccion("experiencia");
iluminarSeleccion("formacion");