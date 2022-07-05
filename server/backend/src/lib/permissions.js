const Permissions = ( type ) => {
    
    let callback;
   
    switch ( type ) {
        case 'admin':
            callback = (rol) => {
            
                // Define the default value to return
                let ans = undefined;
    
                // Permissions
                switch ( rol ) {
                    case 'admin':
                        break;
                    default:
                        ans = { error: 'permisos denegados' };
                        break;
                }
    
                return ans;
            }
            break;
        case 'admin and the same supervisor':
            callback = (rol, supervisor, body) => {
            
                // Define the default value to return
                let ans = undefined;
    
                // Permissions
                switch ( rol ) {
                    case 'admin':
                        break;
                    case 'supervisor':
                        if ( body.id !== supervisor.id ) ans = callback('error');
                        break;
                    default:
                        ans = { error: 'permisos denegados' };
                        break;
                }
    
                return ans;
            }
            break;
        case 'admin and supervisor':
            callback = (rol) => {

                // Define the default value to return
                let ans = undefined;

                // Permissions
                switch ( rol ) {
                    case 'admin':
                        break;
                    case 'supervisor':
                        break;
                    default:
                        ans = { error: 'permisos denegados' };
                        break;
                }

                return ans;
            }
            break;
        case 'admin, supervisor, and the same therapist':
            callback = (rol, therapist, body) => {

                // Define the default value to return
                let ans = undefined;

                // Permissions
                switch ( rol ) {
                    case 'admin':
                        break;
                    case 'supervisor':
                        break;
                    case 'terapeuta':
                        if ( body.id !== therapist.id ) ans = callback('error');
                        break;
                    default:
                        ans = { error: 'permisos denegados' };
                        break;
                }

                return ans;
            }
            break;
        case 'supervisor and the same therapist':
            callback = (rol, therapist, body) => {
                // Define the default value to return
                let ans = undefined;

                // Permissions
                switch ( rol ) {
                    case 'supervisor':
                        break;
                    case 'terapeuta':
                        if ( body.id !== therapist.id ) ans = callback('error');
                        break;
                    default:
                        ans = { error: 'permisos denegados' };
                        break;
                }

            }
            break;
        default:
            return { error: 'no definido' }
    }

    return callback;
 
}

export default Permissions;