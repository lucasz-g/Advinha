let numero = Math.floor(Math.random() * 100);  

for(let i = 1; i <= 5; i++ ){
    const input = parseInt(prompt("Advinhe o número"));     
    if (input == numero) {
        alert("Acertou");
        break; 
    } else {
        let diferenca = Math.abs(input - numero);
        if (diferenca > numero) {
            alert("Errou, faltam: " + diferenca + " a menos");
            alert("Número de tentativas: " + i);    
        }else{
            alert ("Errou, faltam: "+ diferenca +" mais") ;
        }
    }
} 

alert("Numero: " + numero); 
