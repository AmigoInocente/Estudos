function Titulo(){

    let nome = "Alisson Guilherme Formento";
    const soma = 10 + 10;
    const urlImg = "https://victorvhpg.github.io/minicurso-react.js/slides/img/logo.png";

    return (
        <div>
        <h1>Oi, eu sou um {nome}</h1>
        <img width={100} src={urlImg} />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At nulla placeat libero ratione, magnam nemo et distinctio mollitia tenetur facilis blanditiis consequuntur illo iusto debitis earum cum deserunt nostrum dolor!</p>
        </div>
    )
}

export default Titulo