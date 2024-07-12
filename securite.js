async function fetchAndDecryptFile(password) {
    const correctPassword = "victorsahquelbg"; 
    if (password === correctPassword) {
        try {
            const response = await fetch('https://raw.githubusercontent.com/Thxfox-hub/Poesis/main/codehtml.html');
            const data = await response.text();
            document.getElementById('content').innerHTML = data;
        } catch (error) {
            alert('Erreur lors du déchiffrement ou mot de passe incorrect');
        }
    } else {
        alert('Mot de passe incorrect');
    }
}
