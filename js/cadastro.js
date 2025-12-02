const urlBase = 'http://159.65.228.63/';
const endpoint = 'produtos';

async function salvartarefa() {
    const prioridade = document.getElementById('prioridade').value;
    const descricao = document.getElementById('descricao').value.trim();
    const local = document.getElementById('local').value.trim();
    const recursosTexto = document.getElementById('recursos').value.trim();
    const dataLimite = document.getElementById('dataLimite').value;
    const matricula = document.getElementById('matricula').value;

    if (!prioridade || !descricao || !local || !dataLimite || !matricula) {
        alert('Preencha todos os campos obrigatórios!');
        return;
    }

    const recursosNecessarios = recursosTexto
        ? recursosTexto.split(',').map(r => r.trim())
        : [];

    const novaTarefa = {
        prioridade,
        descricao,
        local,
        recursosNecessarios,
        dataLimite,
        matricula
    };

    try {
        await fetch(urlBase + endpoint, {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(novaTarefa)
        });

        alert('Tarefa cadastrada com sucesso!');
        window.location.href = 'index.html';
    } catch (erro) {
        console.error('Erro ao salvar tarefa:', erro);
        alert('Erro ao salvar tarefa.');
    }
}