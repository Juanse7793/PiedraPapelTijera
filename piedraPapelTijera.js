const counter = document.querySelector('#counter');
const counter2 = document.querySelector('#counter2');
const container = document.querySelector('#results-container')
const container2 = document.querySelector('#resultado')

const btns = document.querySelectorAll('.btn')

let count=0;
let count2=0;


function computerPlay (){
    const arma = ["Piedra", "Papel", "Tijera"];

    const random = Math.floor(Math.random() * arma.length);

return(arma[random]);    
}

function PPT(seleccion,computer){
    if(seleccion==="Piedra" && computer==="Piedra")
        return ("Empate")
    if(seleccion==="Piedra" && computer==="Papel")
        return ("Perdiste")        
    if(seleccion==="Piedra" && computer==="Tijera")
        return ("Ganaste")
    if(seleccion==="Tijera" && computer==="Piedra")
        return ("Perdiste")
    if(seleccion==="Tijera" && computer==="Papel")
        return ("Ganaste")
    if(seleccion==="Tijera" && computer==="Tijera")
        return ("Empate")
    if(seleccion==="Papel" && computer==="Piedra")
        return ("Ganaste")
    if(seleccion==="Papel" && computer==="Papel")
        return ("Empate")
    if(seleccion==="Papel" && computer==="Tijera")
        return ("Perdiste")

}
btns.forEach(btn => {
    btn.addEventListener('click',(e) => {
        const styles = e.currentTarget.classList 

        if (styles.contains('Piedra')){
            let maquina = computerPlay()
            let result = PPT('Piedra',maquina)
            console.log(result);
            if (result === "Ganaste")
            count++;
            if (result === "Perdiste")
            count2++;
        console.log(count,count2);
        counter.textContent = count;
        counter2.textContent = count2;
        container.textContent = `Tú escogiste Piedra ✊ y la Máquina escogió ${maquina} por lo tanto ${result}!!!`
           
        }
        if (styles.contains('Papel')){
            let maquina = computerPlay()
            let result = PPT('Papel',maquina)
            console.log(computerPlay(),result);
            if (result === "Ganaste")
            count++;
            if (result === "Perdiste")
            count2++;
        console.log(count,count2);
        counter.textContent = count;
        counter2.textContent = count2;
        container.textContent = `Tú escogiste Papel 🖐️ y la Máquina escogió ${maquina} por lo tanto ${result}!!!`
           
        }
        if (styles.contains('Tijera')){
            let maquina = computerPlay()
            let result = PPT('Tijera',maquina)
            console.log(result);
            if (result === "Ganaste")
            count++;
            if (result === "Perdiste")
            count2++;
        console.log(count,count2);
        counter.textContent = count;
        counter2.textContent = count2;
        container.textContent = `Tú escogiste Tijera ✌️ y la Máquina escogió ${maquina} por lo tanto ${result}!!!` 
        
        }
        if(count===5){
            container2.textContent = '🥳 MUY BIEN LE HAS GANADO A LA MÁQUINA, si quieres juega de nuevo';
            count =0;
            count2 =0;
            
        }
        if(count2===5){
            container2.textContent = '😞 OH NO, HAS PERDIDO... VAS A MORIR... Inténtalo de nuevo!';
            count2 =0;
            count = 0;
            
        }
        if(count===4){
            container2.textContent = '😌 ESTÁS A UN PUNTITO DE VENCER A LA MALVADA MÁQUINA';
            
        }
        if(count2===4){
            container2.textContent = '😞 LA MÁQUINA ESTÁ A PUNTO DE DARTE MATARILE';
            
        }
    })
})



