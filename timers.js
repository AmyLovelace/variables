      
/*/timeout
(function () {
    function holaMundo() {
        console.log("hola mundo");
    }

    setTimeout(holaMundo,3000);
    
}())*/

//interval
(function(){
    var contador =0;

    function holaMundo(){
        contador ++;
        console.log(contador)

        if(contador==10){
            clearInterval(repeticion)
        }
    }
    var repeticion=setInterval(holaMundo, 1000);
}())