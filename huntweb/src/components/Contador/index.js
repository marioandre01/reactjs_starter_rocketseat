import { useState } from 'react';

function Contador() {
    //forma que não usa state
    //let contador = 5;

    //Chamar o useState para que o componente tenha estado, ou seja, memoria dentro dele
    //O useState aceita um valor inicial, no caso do contador vai ser 1
    //Ao executar o useState ela retorna 2 coisas, a variavel usado no contador
    //que vai conter o numero 1 passado como valor inicial
    //E uma função especializada em atualizar essa variavel
    //O React vai ficar colado nessa variavel "AtualizarContador", pois quando ela for
    //chamada ele precisa provavelmente atualizar a interface tambem
    //Trocar o nome "atualizarContador" para "setContador"
    //Pois é uma convenção adotada por outros programadores, que signficar setar o que a gente quer
    //Esse nome não muda o comportamento da variavel, é só convenção mesmo
    //O useState retorna um array, onde a variavel "contador" esta na primeira posição, e a função 
    //que atualiza essa variavel esta na segunda posição
    //Para pegar esse valores, deve-se usar um recurso do javascript, atribuição via destruturação
    //Deste modo vai se destruturar esse array de duas posições, e atribuir cada posição para uma variavel independente
    //Agora se tem a variavel "contador" e a variavle "setContador" para quando se quiser atualizar a variavel "contador"
    //e informar o React que a interface deve ser reavaliada
    //No navegador a interface vai iniciar com o valor 1 colocado no useState
    //const [contador,atualizarContador] = useState(1);
    const [contador,setContador] = useState(1);

    function AdicionarContador() {
        //contador = contador + 1;
        //console.log(contador);
        //console.log('Adicionou');

        //Toda vez q for clicado no botão, vai ser chamado o setContador, que o valor pasado nele
        // vai atualiazar o valor do "contador", e vai refletir na atualização da parte visual do componente 
        setContador(contador + 1);

    }

    return(
        <div>
            <div>{contador}</div>
            <button onClick={AdicionarContador}>Adicionar</button>
        </div>
    );
}

export default Contador;