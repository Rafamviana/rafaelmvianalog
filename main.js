// Header Toggle
let MenuBtn = document.getElementById('MenuBtn')

MenuBtn.addEventListener('click', function(e) {
    document.querySelector('body').classList.toggle('mobile-nav-active')
    this.classList.toggle('fa-xmark')
})

//typing effect
let typed = new Typed('#auto-input', {
    strings: ['logística', 'compras', 'análises'],
    typeSpeed: 90,
    backSpeed: 90,
    backDelay: 100,
    loop: true,
})

//Mensagem enviada
const form = document.getElementById("contact-form");
const status = document.getElementById("form-status");

form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const data = new FormData(form);

    try {
        const response = await fetch(form.action, {
            method: form.method,
            body: data,
            headers: {
                'Accept': 'application/json'
            }
        });

        if (response.ok) {
            status.innerHTML = "Sua mensagem foi enviada!";
            status.className = "success";
            form.reset();
        } else {
            status.innerHTML = "Oops! Algo deu errado. Tente novamente.";
            status.className = "error";
        }
    } catch (error) {
        status.innerHTML = "Erro de conexão. Tente mais tarde.";
        status.className = "error";
    }
});