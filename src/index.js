//password
window.onload = () => {
    const eyecon = document.querySelectorAll("#eyecon");
    const pass = document.querySelectorAll("#password");
    for (let i=0; i < eyecon.length; i++) {
        eyecon[i].addEventListener('click', () => {
            if (pass[i].type === 'password') {  
                pass[i].type = 'text';
                eyecon[i].classList.add('fa-eye')
                eyecon[i].classList.remove('fa-eye-slash')
            } else {
                pass[i].type = 'password';    
                eyecon[i].classList.remove('fa-eye')
                eyecon[i].classList.add('fa-eye-slash')
            }
        })
    }
}

function restaurar() {
    alert("contraseña restaurada")
}