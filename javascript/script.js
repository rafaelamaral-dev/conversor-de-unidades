const metrosInput = document.querySelector('#metros')
const pesInput = document.querySelector('#pes')

const METERS_TO_FEET = 3.28084;

function converterMetrosParaPes(){
    // 1. O que o usuário digitou no campo Metros? (Lembre-se de converter para número)
    const metros = parseFloat(metrosInput.value)

    // 2. Se o campo estiver vazio ou for inválido, limpe o outro campo
    if (isNaN(metros)) { 
        pesInput.value = '';
        return; 
    }

    // 3. Sua Tarefa: Calcule o valor em pés e atribua-o à variável 'pes'
    const pes = metros * METERS_TO_FEET;

    // 4. Sua Tarefa: Exiba o resultado no campo Pés (pesInput)
    // Dica: Use o método .toFixed(4) para manter 4 casas decimais.
    pesInput.value = pes.toFixed(4);
}

function converterPesParaMetros(){
    // 1. O que o usuário digitou no campo Pés?
    const pes = parseFloat(pesInput.value);

    // 2. Se o campo estiver vazio ou for inválido, limpe o outro campo
    if (isNaN(pes)) {
        metrosInput.value = '';
        return;
    }

    // 3. Sua Tarefa: Calcule o valor em metros e atribua-o à variável 'metros'
    // Fórmula: Pés / (Constante)
    const metros = pes/METERS_TO_FEET;

    // 4. Sua Tarefa: Exiba o resultado no campo Metros (metrosInput)
    metrosInput.value = metros.toFixed(2);
}

metrosInput.addEventListener('input', converterMetrosParaPes)
pesInput.addEventListener('input', converterPesParaMetros)