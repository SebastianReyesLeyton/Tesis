import Controller from '../../../models/controller';
import UserService from '../service/user';
import { DTO_LOGIN_RESPONSE } from '../models/user/dto.out';
import { DTO_EMAIL_REQUEST, DTO_LOGIN_REQUEST } from '../models/user/dto.in';
import { emailValidator, dtoValidator, passwordValidator } from '../../../lib/validator'; 

class UserController extends Controller {

    constructor () {
        super('user', 'User', new UserService());
    }

    email () { 
        return async (req, res) => {
            
            // Get the body request form
            let body = req.body;
            
            try {

                dtoValidator( body, DTO_EMAIL_REQUEST );
                emailValidator( body.email );
                
            } catch (err) {
                res.statusCode = 400;
                res.send({ error: err.message });
                return ;
            }

            let response = await this.service.email( res, body );
            res.json(response);
        }
    }

    docnum () {
        return async (req, res) => {
            console.log('Soy yo 2');
        }
    }

    emailPassword () {
        return async (req, res) => {

            // Get body form
            let body = req.body;

            // Doing the validations required
            try {

                dtoValidator( body, DTO_LOGIN_REQUEST );
                emailValidator( body.email );
                passwordValidator( body.password );
                
            } catch (err) {

                res.statusCode = 400;
                res.send({ error: err.message });
                return ;

            }

            // Wait the response of user service
            let response = await this.service.emailPassword(res, body);

            if ( res.statusCode == 200 ) {

                // Map user info to DTO_LOGIN_RESPONSE
                try {
    
                    this.mapper.map( response.user, DTO_LOGIN_RESPONSE, (dto) => {
                        return {
                            id: dto.id,
                            name: dto.fullname,
                            rol: dto.rol
                        };
                    });
    
                    response.user = this.mapper.obj;
                    res.json(response);
    
                } catch (err) {
                    
                    res.statusCode = 500;
                    res.json(err);
    
                }
            } else {
                res.json(response);
            }

        }
    }
}

const userController = new UserController();

export default userController;