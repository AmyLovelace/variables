(function() {

    //Obtener fecha
    var fecha = new Date();
    document.write(fecha);
    
    //Obtener horas
    var hora = (fecha.getHours() - 12); 
    var minutos = fecha.getMinutes(); 
    var segundos = fecha.getSeconds(); 
    
    
    //Obtener fechas
    var dia = fecha.getDay();
    var diames = fecha.getDate();
    var mes = fecha.getMonth();
    var year = fecha.getFullYear();
    
    
    
    
    }());