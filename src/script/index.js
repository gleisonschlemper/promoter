const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
});


document.getElementById("submit-btn").addEventListener("click", async (e) => {
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
            document.getElementById("nome").value = "";
            alert("Usuário salvo com sucesso!");
        }
    }
    
});