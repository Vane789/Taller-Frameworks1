 /*Anlly Vanessa Cardona-->*/
 
 function Sumar(){
	 let n1 = document.getElementById('numero').value;
     let n2 = document.getElementById('numero2').value;
     let suma= parseInt(n1) + parseInt(n2);
     document.getElementById("Solucion").innerHTML= suma;
 }
 
 function Restar(){
	 let n1 = document.getElementById('numero').value;
     let n2 = document.getElementById('numero2').value;
     let resta= parseInt(n1) - parseInt(n2);
     document.getElementById("Solucion").innerHTML= resta;
 }
 
 function Multiplicar(){
	 let n1 = document.getElementById('numero').value;
     let n2 = document.getElementById('numero2').value;
     let m= parseInt(n1) * parseInt(n2);
     document.getElementById("Solucion").innerHTML= m;
 }
 
  function Dividir(){
	 let n1 = document.getElementById('numero').value;
     let n2 = document.getElementById('numero2').value;
     let d= parseFloat(n1) / parseFloat(n2);
     document.getElementById("Solucion").innerHTML= d;
 }
 
 function Potencia(){
	 let n1= document.getElementById('numero').value;
	 let n2 = document.getElementById('numero2').value;
	 let elevado= Math.pow(n1,n2);
	 document.getElementById("Solucion").innerHTML= elevado;
 }
 
    function validar() {
 
        let v= document.getElementById("numero").value;
		let v2= document.getElementById("numero2").value;
        if (v.length == 0 || v2.length==0) {
			window.alert("Los campos estan vacios");
        }
        return true;
    }


 

