export class BuscarUsuarioActual {
    constructor(){}
    
    BuscarUsuarioActual(usuarioActual){
        // Load users list from localStorage (be robust if stored as object)
        let usuariosRaw = localStorage.getItem('usuarios');
        let usuarios = [];
        if (usuariosRaw) {
            try {
                const parsed = JSON.parse(usuariosRaw);
                if (Array.isArray(parsed)) usuarios = parsed;
                else if (parsed && typeof parsed === 'object') usuarios = [parsed];
            } catch (e) {
                usuarios = [];
            }
        }

        // Determine current user object or identifier
        let actual = usuarioActual;
        if (!actual) {
            const raw = localStorage.getItem('usuarioActual');
            if (!raw) return null;
            try { actual = JSON.parse(raw); } catch (e) { actual = raw; }
        }

        if (!actual) return null;

        // Normalize: look for matching user by email or username
        const identifier = (typeof actual === 'string') ? actual.toLowerCase() : ((actual.email || actual.username || '').toString().toLowerCase());

        const found = usuarios.find(u => {
            if (!u) return false;
            const email = (u.email || '').toString().toLowerCase();
            const username = (u.username || '').toString().toLowerCase();
            return email === identifier || username === identifier;
        });

        return found || null;
    }
}