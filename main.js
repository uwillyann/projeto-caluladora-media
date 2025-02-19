const form = document.getElementById('form-atividade');
const imgAprovado = '<img src="feliz.png" alt="Emoji feliz" />';
const imgReprovado = '<img src="triste.png" alt="Emoji triste" />';
const atividade = [];
const notas = [];
const spanAprovado = '<span class= "resultado aprovado">Aprovado</spam>';
const spanReprovado = '<span class= "resultado reprovado">Reprovado</spam>';
const notaMinima = parseFloat(prompt('Digite s nota minima'));

let linhas = '';

form.addEventListener('submit',function(e){
    e.preventDefault();

    adicionarLinha();
    atualizarTabela();
    atualizaMediaFinal();
});

function adicionarLinha() {
    const inputNomeAtividade = document.getElementById('nome-atividade');
    const inputNotaAtividade = document.getElementById('nota-atividade');

    if( atividade.includes(inputNomeAtividade.value)){
        alert(`A atuividade: ${inputNomeAtividade.value} ja foi adicionada`)
    } else{
        atividade.push(inputNomeAtividade.value);
        notas.push(parseFloat(inputNotaAtividade.value));

        let linha = '<tr>';
        linha += `<td>${inputNomeAtividade.value}</td>`;
        linha += `<td>${inputNotaAtividade.value}</td>`;
        linha += `<td>${inputNotaAtividade.value >= notaMinima ? imgAprovado : imgReprovado}</td>`;
        linha += '</tr>';

        linhas += linha;
    }


    inputNomeAtividade.value = '';
    inputNotaAtividade.value = '';
}


function atualizarTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function atualizaMediaFinal() {
    const mediaFinal = calculaMediaFinal();

    document.getElementById('media-final-valor').innerHTML = mediaFinal;
    document.getElementById('media-final-resultado').innerHTML = mediaFinal >= notaMinima ? spanAprovado : spanReprovado ;


    console.log(media);
}

function calculaMediaFinal(){
    let somaDasNotas = 0;

    for (let i = 0; i < notas.length; i++) {
        somaDasNotas += notas[i];
    }
    
    return somaDasNotas / notas.length;
}