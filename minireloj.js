(function actualizarDatos() {
    //obtener datos de tiempo y fecha
    var fecha = new Date(),
    ampm,
    horas=fecha.getHours(),
    minutos=fecha.getMinutes(),
    segundos=fecha.getSeconds(),
    diaSemana=fecha.getDay(),//comienza desde 0
    dias=fecha.getDate(),
    mes=fecha.getMonth(),//comienza desde 0
    year=fecha.getFullYear();

    //obtenemos nuestros elementos HTML
    var elementoHoras=document.getElementById("horas"),
        elementoMinutos=document.getElementById("minutos"),
        elementoSegundos=document.getElementById("segundos"),
        elementoAmpm=document.getElementById("ampm"),
        elementodiaSemana=document.getElementById("diaSe"),
        elementodia=document.getElementById("dia"),
        elementomes=document.getElementById("mes"),
        elementoyear=document.getElementById("year");

    //declarar arreglo dias y meses
    var arraysemana=["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado"],
        arrayMes=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre"
        ,"Octubre","Noviembre","Diciembre"];




    //asignamos datos de fecha
    elementodiaSemana.textContent=arraysemana[diaSemana];
    elementodia.textContent=dias;
    elementomes.textContent=arrayMes[mes];
    elementoyear.textContent=year;

    //transformar el reloj de 24 a 12 horas
    if (horas>=12) {
        horas = horas -12;
        ampm = "PM"; 
    }
    //agregamos 0 a los minutos y tambien a los segundos
    if(minutos <10){
        minutos="0"+minutos;
    }
    
    if(segundos <10){
        segundos="0"+segundos;
    }

    if(horas <10){
        horas="0"+horas;
    }
    //agregar condicional para evitar la hora 00
    if(horas ==0){
        horas=12;
    }


    //asignar elemento de tiempo
    elementoHoras.textContent=horas;
    elementoMinutos.textContent=minutos;
    elementoSegundos.textContent=segundos;
    elementoAmpm.textContent= ampm;

    setInterval(actualizarDatos,1000);

    
}())