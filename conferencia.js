function calculo(){
    var seleccion=document.getElementById("categoria");
    var valorSeleccionado=  parseFloat(seleccion.options[seleccion.selectedIndex].value);
    var cantidad=document.getElementById("cantidad").value;
    var total=0;

    if (seleccion=="" && valorSeleccionado=="" && cantidad=="" && total=="" )
    {
      document.getElementById("monto").innerHTML="";
        return;
      }
    switch(valorSeleccionado){
        case 1:
            total=(200*cantidad)-((200*cantidad)*0.80)
            break;
        case 2:
            total=(200*cantidad)-((200*cantidad)*0.50)
            break;
        case 3:
            total=(200*cantidad)-((200*cantidad)*0.15)
            break;
        case 4:
            total=(200*cantidad)
            break;    
    }
    document.getElementById("monto").value= "Total a pagar: $" + total;
   // return document.getElementaryById("Total").innerHTML=resultado;




}