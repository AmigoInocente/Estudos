import { useState } from "react";
function Saudacao({nome}){
    let usuario = nome;
    const[texto, setTexto] = useState("Usuário");
    const[inputText, setInputText] = useState("");

    function botao(){
        setTexto(inputText);
    }
    return (
        <div>
            
            <h1> Olá, {usuario ? texto : "Usuário"}. Seja bem vindo ao programa!</h1>
            <input value={inputText} onChange={(e)=>{setInputText(e.target.value)}} type="text" />
            <button onClick={botao}>Iniciar</button>
        </div>
    )
}

export default Saudacao