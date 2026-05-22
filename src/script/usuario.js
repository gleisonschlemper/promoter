async function carregarUsuarios() {
    const { data, error } = await db.from('pessoas').select('*');
        if (error) {
            console.log("Erro:", error);
            return;
        }

        exibirUsuarios(data);
}

function exibirUsuarios(usuarios) {
    const tabela = document.querySelector("table tbody");
    tabela.innerHTML = "";  

    usuarios.forEach(usuario => {
        const linha = document.createElement("tr");
        linha.innerHTML = `  
            <td>${usuario.id}</td>              
            <td>${usuario.nome}</td>
        `;
        
        tabela.appendChild(linha);
    });
}   

carregarUsuarios()