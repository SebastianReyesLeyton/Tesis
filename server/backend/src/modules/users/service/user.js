import Service from "../../../models/service";
import UserRepository from "../repository/user";
import { PasswordCipher } from "../../../lib/encrypt";
import { SUCCESS, BAD_REQUEST, INTERNAL_ERROR } from "../../../lib/httpCodes";

class UserService extends Service {

    constructor (repository= new UserRepository(), name = 'user') {
        super({
            repository, 
            module: 'User', 
            name
        });
        this.cipher = PasswordCipher.getInstance();
    }

    async id ( res, obj ) {

        // Define the default values
        let ans = { message: 'encontrado' };
        res.statusCode = SUCCESS;

        let response;

        // Wait the response of repository
        if ( Boolean(obj.rol) ) response = await this.repository.idRol( obj );
        else response = await this.repository.id( obj );

        // Check if user exists, and built the corresponding answers
        if ( response.length ) { ans.user = response[0]; } 
        else {
            ans.message = (Boolean(obj.rol)) ? 'no existe un usuario con ese id y rol' : 'no existe un usuario con ese id';
            res.statusCode = BAD_REQUEST;
        }

        return ans;
    }

    async email ( res, obj ) {
        
        // Define the default values
        let ans = { message: 'encontrado' };
        res.statusCode = SUCCESS;

        // Wait the response of repository
        let response = await this.repository.email(obj);

        // Check if user exists, and built the corresponding answers
        if ( response.length ) { ans.user = response[0]; } 
        else {
            ans.message = 'no existe un usuario con ese correo';
            res.statusCode = BAD_REQUEST;
        }

        return ans;

    }

    async docnum ( res, obj ) {

        // Define the default values
        let ans = { message: 'encontrado'}
        res.statusCode = SUCCESS;

        // Wait the response of repository
        let response = await this.repository.docnum(obj);

        // Check if user exists, and built the corresponding answers
        if ( response.length ) { ans.user = response[0]; }
        else {
            ans.message = 'no existe un usuario con ese número de documento';
            res.statusCode = BAD_REQUEST;
        }

        return ans;

    }

    async emailPassword ( res, obj ) {

        // Calls the email method and wait its response
        let ans = await this.email( res, obj );

        // If response is successful, compare the passwords and assign the result values depending on result
        if ( res.statusCode === SUCCESS ) {

            if ( !this.cipher.compare( obj.password, ans.user.passcode )) {
                res.statusCode = BAD_REQUEST;
                ans.message = 'las contraseñas no coinciden';
                delete ans.user;
            }
            
        }

        return ans;
    }

    async registerUser ( res, obj ) {

        // Define the default values
        let ans = { message: 'registrado con éxito' };
        res.statusCode = SUCCESS;

        // Check that not exists an user with the same credentials
        let response = await this.email( res, obj );
        
        // If exists an user with the same email
        if ( res.statusCode === SUCCESS ) {
            res.statusCode = BAD_REQUEST;
            return { message: "ya existe un usuario con ese correo" }
        }

        // Check that not exists an user with the same credentials
        response = await this.docnum( res, obj );

        // If exists an user with the same docnum
        if ( res.statusCode === SUCCESS ) {
            res.statusCode = BAD_REQUEST;
            return { message: "ya existe un usuario con ese número de documento" }
        }

        // Reset status code response
        res.statusCode = SUCCESS;

        // Wait the response of repository
        response = await this.repository.register(obj);

        // The register was successful?
        if ( response.affectedRows === 1 ) { 
            ans.id = response.insertId;
        } else {
            res.statusCode = INTERNAL_ERROR;
            ans.message = response.message;
        }

        return ans;

    }

}

export default UserService;