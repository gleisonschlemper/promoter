async function carregarUsuarios() {
    const { data, error } = await db.from('pessoas').select('*');
        if (error) {
            console.log("Erro:", error);
            return;
        }
        console.log("Dados:", data);
        exibirUsuarios(data);
}

function exibirUsuarios(usuarios) {
    const tabela = document.querySelector("table tbody");
    tabela.innerHTML = "";

    usuarios.forEach(usuario => {
        const linha = document.createElement("tr");

        linha.className = "hover:bg-slate-700 transition";

        linha.innerHTML = `
            <td class="px-6 py-4 text-slate-300 text-center ">${usuario.id}</td>
            <td class="px-6 py-4 text-white text-center ">${usuario.nome}</td>
        `;

        tabela.appendChild(linha);
    });
}

carregarUsuarios()