const emailValidator = ( email ) => {

    if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))) throw new Error('no es un correo válido');

}

const integerValidator = ( number ) => {

    if ( isNaN(number) || number.split('.').length === 0 ) throw new Error('no es un número entero')
    return Number(number);
}

const stringValidator = ( str ) => {
    
    if ( str.indexOf("'") === 0 ) throw new Error("no se admite el carácter ', favor usar doble comilla");

}

const passwordValidator = ( password ) => {

    if ( password.length < 8 ) throw new Error("la contraseña debe ser mayor a 8 caracteres");

}

const dtoValidator = ( dto, obj ) => {

    // Get keys both dto param and obj param
    const dtoKeys = Object.keys(dto);
    const objKeys = Object.keys(obj);

    // Create two arrays where will be stored the matches and unmatched keys between the obj and dto
    let unmatched = [], match = [];

    // Obtain the mach and unmatched keys
    dtoKeys.forEach( e => {
        if (typeof obj[e] == 'undefined') unmatched.push(e);
        else if (typeof dto[e] !== typeof obj[e]) unmatched.push(e);
        else match.push(e);
    });

    // Response evaluation
    if ( match.length == objKeys.length && unmatched.length != 0 ) {
        throw {
            statusCode: 400,
            message: 'el número de parámetros pasados es superior al solicitado'
        };
    } else if ( match.length != objKeys.length && unmatched.length != 0) {
        throw{
            statusCode: 400,
            message: 'faltan parámetros y hay parámetros innecesarios'
        };
    } else if ( match.length != objKeys.length ) {
        throw {
            statusCode: 400,
            message: 'faltan parámetros'
        };
    }
}

export { emailValidator, integerValidator, stringValidator, passwordValidator, dtoValidator };

// Regex: https://www.w3resource.com/javascript/form/email-validation.php