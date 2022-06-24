import Service from "../../../models/service";
import UserRepository from "../repository/user";
import { PasswordCipher } from "../../../lib/encrypt";

class UserService extends Service {

    constructor () {
        super({
            repository: new UserRepository(), 
            module: 'User', 
            name: 'user'
        });
        this.cipher = PasswordCipher.getInstance();
    }

    async email ( res, obj ) {
        
        // Define the default values
        let ans = { message: 'encontrado' };
        res.statusCode = 200;

        // Wait the response of repository
        let response = await this.repository.email(obj);

        // Check if user exists, and built the corresponding answers
        if ( response.length ) { ans.user = response[0]; } 
        else {
            ans.message = 'no existe un usuario con ese correo';
            res.statusCode = 400;
        }

        return ans;

    }

    async docnum ( res, obj ) {

        // Define the default values
        let ans = { message: 'encontrado'}
        res.statusCode = 200;

        // Wait the response of repository
        let response = await this.repository.docnum(obj);

        // Check if user exists, and built the corresponding answers
        if ( response.length ) { ans.user = response[0]; }
        else {
            ans.message = 'no existe un usuario con ese número de documento';
            res.statusCode = 400;
        }

        return ans;

    }

    async emailPassword ( res, obj ) {

        // Calls the email method and wait its response
        let ans = await this.email( res, obj );

        // If response is successful, compare the passwords and assign the result values depending on result
        if ( res.statusCode === 200 ) {

            if ( !this.cipher.compare( obj.password, ans.user.passcode )) {
                res.statusCode = 400;
                ans.message = 'las contraseñas no coinciden';
                delete ans.user;
            }
            
        }

        return ans;
    }

}

export default UserService;