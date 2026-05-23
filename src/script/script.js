const btnEnviar = document.querySelector(".btn");
const mensagem = document.getElementById("mensagem");

async function carregarUsuarios() {
    const { data, error } = await db.from('pessoas').select('*');
        if (error) {
            console.log("Erro:", error);
            return;
        }

    console.log("Usuários carregados:", data);
    return 
}

btnEnviar.addEventListener("click", async (e) => {
    e.preventDefault();

    let nome = document.getElementById("nome").value;

    if(nome === "") {
        alert("Por favor, preencha o nome.");
        return;
    }
    else {
        const { data, error } = await db
            .from('pessoas')
            .insert([
                { nome: nome }
            ]);

        if (error) {
            console.log(error);
            alert("Erro ao salvar");
        } else {
            mensagem.innerHTML = `Salvo com sucesso, ${nome}! 🚀`;
            document.getElementById("nome").value = "";
        }
    }
    
});

