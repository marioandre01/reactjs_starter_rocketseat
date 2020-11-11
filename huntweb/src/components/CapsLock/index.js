import "./styles.css";

function CapsLock(props) {
    //props.children pega o texto dentos das tags CapsLock
    const textoinserido = props.children;
    const textoEmCapsLock = textoinserido.toUpperCase();

    return <div id="teste">{textoEmCapsLock}</div>
}

/*
function CapsLock(props) {
    const textoinserido = props.texto;
    const textoEmCapsLock = textoinserido.toUpperCase();

    return <div>{textoEmCapsLock}</div>
}*/

export default CapsLock;