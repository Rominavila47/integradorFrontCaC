function calculo(){
    var seleccion=parseFloat(document.getElementById ("categoria").value);
    var valorSeleccionado=document.getElementById ("option").value;
    var cantidad=document.getElementById ("cantidad").value;
    var total=0;

    if (seleccion=="" && valorSeleccionado=="" && cantidad=="" && total=="" )
    {
      document.getElementById("monto").innerHTML="";
        return;
      }
    switch(valorSeleccionado){
        case 1:
            total=(200*cantidad)+((200*cantidad)*80)/100
            break;
        case 2:
            total=(200*cantidad)+((200*cantidad)*50)/100
            break;
        case 3:
            total=(200*cantidad)+((200*cantidad)*15)/100
            break;
        case 4:
            total=(200*cantidad)
            break;    
    }
    document.getElementById("monto").value=total;
   // return document.getElementaryById("Total").innerHTML=resultado;




}