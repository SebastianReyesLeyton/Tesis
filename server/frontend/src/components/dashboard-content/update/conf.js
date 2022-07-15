const updateContent = {
    supervisor: {
        title: 'Editar supervisor',
        initialValue: {
            name: '',
            email: '',
            newPassword: '',
            docnum: ''
        },
        action: () => {},
        initialization: (userData) => {
            let ans = Object.assign({}, userData);
            
            ans.newPassword = "";
            delete ans.doctype;

            return ans;
        },
        inputs: [
            {
                type: 'text',
                name: 'name',
                value: 'name',
                label: 'Nombre'
            },
            {
                type: 'text',
                name: 'email',
                value: 'email',
                label: 'Correo electrónico',
            },
            {
                type: 'password',
                name: 'newPassword',
                value: 'newPassword',
                label: 'Nueva contraseña',
            },
            {
                type: 'text',
                name: 'docnum',
                value: 'docnum',
                label: 'Número de cédula',
            }
        ]
    }
}

export default updateContent;