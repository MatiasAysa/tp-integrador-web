export class BuscarUsuarioActual {
    constructor(){}
    
    BuscarUsuarioActual(usuarioActual){
        // Load users list from localStorage (be robust if stored as object)
        const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
        const actual = usuarioActual;

        const found = usuarios.find(u => {
            if (!u) return false;
            const email = (u.email || '').toString().toLowerCase();
            const username = (u.username || '').toString().toLowerCase();
            return email === actual.email || username === actual.username;
        });
        return found || null;
    }
}