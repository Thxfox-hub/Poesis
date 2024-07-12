async function fetchAndDecryptFile(password) {
    const correctPassword = "victorsahquelbg"; 
    if (password === correctPassword) {
        try {
            document.getElementById('content').innerHTML = '<a href="https://github.com/Thxfox-hub/Poesis/blob/main/codehtml.html" target="_blank">Accéder au fichier</a>';
        } catch (error) {
            alert('Erreur lors du déchiffrement ou mot de passe incorrect');
        }
    } else {
        alert('Mot de passe incorrect');
    }
}
