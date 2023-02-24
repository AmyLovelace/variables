var  formulario = document.getElementById("formulario"),
     boton = document.getElementById("btn");

function validarDatos(e)  {
var  inputNombre = document.formulario.name.value,
inputApellido = document.formulario.lastname.value,
inputEmail = document.formulario.email.value;

if (inputNombre == 0 || inputApellido == 0 || inputEmail == 0) {
alert("Campos necesarios vacios");
e.preventDefault(); }
 }

function validarRB(e) {
     if (document.formulario.sexo[0].checked == true || document.formulario.sexo[1].checked == true) {
     }
     else{     alert("Seleccione un sexo");  
         e.preventDefault();
         }
        }

    function validarTerminos(e) {
         if (document.formulario.term.checked == true) {
        }
         else{     alert("Debe aceptar terminos y condiciones");  
         e.preventDefault();
         }
        }


        //Funcion que ejecuta todo
        function validar(e) {
                 validarDatos(e);
                 validarRB(e);
                 validarTerminos(e);
          }


          //Eventos 
      formulario.addEventListener("submit", validar);

    