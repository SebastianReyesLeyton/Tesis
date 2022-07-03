import UTF8 from "utf8";
import Controller from "../../../models/controller";
import SupervisorService from "../service/supervisor";
import { DTO_REGISTER } from "../models/supervisor/dto.in";
import { docNumValidator, dtoValidator, emailValidator, integerValidator, passwordValidator } from "../../../lib/validator";
import { DTO_SUPERVISOR_RESPONSE, DTO_SUPERVISORS_RESPONSE } from "../models/supervisor/dto.out";
import { SUCCESS, BAD_REQUEST, FORBIDDEN } from "../../../lib/httpCodes"; 

class SupervisorController extends Controller {

    constructor () {
        super ('supervisor', 'User', new SupervisorService());
    }

    register () {
        return async ( req, res ) => {
            
            // Get the body request from
            let body = req.body;

            // Validating the permissions
            await this.service.id( res, { id: req.tokenData.id, rol: 'admin' } );
            
            switch ( req.tokenData.rol ) {
                case 'admin':
                    if (res.statusCode === SUCCESS ) break;
                default:
                    res.statusCode = FORBIDDEN;
                    res.json({ error: 'permisos denegados' });
                    return;
            }

            // Doing the required validations
            try {

                dtoValidator( body, DTO_REGISTER );
                emailValidator( body.email );
                passwordValidator( body.password );
                docNumValidator( body.docnum );


            } catch (err) {

                res.statusCode = BAD_REQUEST;
                res.send({ error: err.message });
                return ;

            }

            // Wait the response of supervisor service
            let response = await this.service.register( res, body );

            // Return the response according to statusCode result
            if ( res.statusCode === SUCCESS ) {
                response.success = response.message;
                delete response.message;
                res.json(response)
            } else {
                response.error = response.message;
                delete response.message;
                res.json(response);
            }
        }
    }

    get () {
        return async ( req, res ) => {
            
            // Get the params
            let body = { id: req.params.id, rol: 'supervisor' }

            // Doing the required validations
            try {
                
                body.id = integerValidator(body.id);

            } catch (err) {
                res.statusCode = BAD_REQUEST;
                res.send({ error: err.message });
                return ;
            }

            // Validating the permissions
            let response = await this.service.id( res, body );
            switch ( req.tokenData.rol ) {
                case 'admin':
                    break;
                case 'supervisor':
                    if ( res.statusCode === SUCCESS && response.user.id === req.tokenData.id ) break;
                default:
                    res.statusCode = FORBIDDEN;
                    res.json({ error: 'permisos denegados' });
                    return;
            }

            // Map user data to DTO_SUPERVISOR_RESPONSE format
            try {
                
                this.mapper.map( response.user, DTO_SUPERVISOR_RESPONSE, (dto) => {

                    dto.name = dto.fullname;
                    dto.doctype = UTF8.decode(dto.doctype);

                    delete dto.fullname;
                    delete dto.passcode;
                    delete dto.rol;

                    return dto;
                } )

                // Return response
                res.json(response)

            } catch (err) {
                console.log(err);
            }
            
        }
    }

    getAll () {
        return async ( req, res ) => {

            // Get request params
            let body = { rows: req.params.rows, offset: req.params.offset, rol: 'supervisor' };

            // Validating the permissions
            await this.service.id( res, { id: req.tokenData.id, rol: 'admin' } );
            
            switch ( req.tokenData.rol ) {
                case 'admin':
                    if (res.statusCode === SUCCESS ) break;
                default:
                    res.statusCode = FORBIDDEN;
                    res.json({ error: 'permisos denegados' });
                    return;
            }

            // Doing the required validations
            try {
                body.rows = integerValidator(body.rows);
                body.offset = integerValidator(body.offset);
            } catch (err) {
                res.statusCode = BAD_REQUEST;
                res.send({ error: err.message });
                return ;
            }

            // Wait the response of supervisor service
            let response = await this.service.getAll( res, body );

            // Map users to DTO_SUPERVISORS_RESPONSE format
            response.users.map((element) => {
                try {

                    this.mapper.map( element, DTO_SUPERVISORS_RESPONSE, (dto) => {

                        dto.name = dto.fullname;

                        delete dto.fullname;
                        delete dto.isActive;
                        return dto;
                    } );
                    return element;
                } catch ( err ) {
                    console.log(err);
                }
            })

            // Return the response
            res.json(response);

        }
    }

}

const supervisorController = new SupervisorController();

export default supervisorController;