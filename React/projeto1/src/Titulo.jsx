import { useState } from "react";
function Titulo({cor}){
    const[texto, setTexto] = useState("Título inicial");
    const[inputText, setInputText] = useState("");

    function clicou(){
        setTexto(inputText);
    }
    return (
        <div>
        <h1 style={{color: cor}}>{texto}</h1> 
        <input value={inputText} onChange={(e)=>{setInputText(e.target.value)}} type="text" />
        <button onClick={clicou}>Mudar</button>
        </div>
    )
}

export default Titulo

/* {nome ? nome : "Fulano"} é uma condicional compactada, 
    o ? serve pra verificar se a primeira coisa existe, 
    se sim, ela irá fazer(ou mostrar) o valor seguinte 
    que no caso é a variavel nome, se não, representado 
    pelo :, irá mostrar(ou fazer) o que está depois que 
    no caso é o que está entre aspas
*/