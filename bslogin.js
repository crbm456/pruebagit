const user = "MarinaCh"
        const pw = 1234
        function verificar(){
            let usuario = document.getElementById("nombre").value
            let clave = document.getElementById("clave").value
            if(usuario == user && clave == pw){
                alert("Login exitoso")
            }else{
                alert("Verifique los datos")
            }
        }