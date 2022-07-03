import UserService from "./user";
import SupervisorRepository from "../repository/supervisor";
import { DTO_REGISTER_MYSQL } from "../models/supervisor/dto.out";
import { PasswordCipher } from "../../../lib/encrypt";
import { SUCCESS, INTERNAL_ERROR } from "../../../lib/httpCodes";

class SupervisorService extends UserService {

    constructor() {
        super( new SupervisorRepository(), 'supervisor' );
        this.cipher = PasswordCipher.getInstance();
    }

    async register ( res, obj ) {

        // Define the default values
        let ans = { message: 'registrado con éxito' };
        res.statusCode = SUCCESS;

        // Map the entry obj to DTO_REGISTER_MYSQL format
        try {
            this.mapper.map( obj, DTO_REGISTER_MYSQL, (dto) => {

                dto.fullname = dto.name;
                dto.passcode = this.cipher.encrypt(dto.password);

                delete dto.name;
                delete dto.password;

                return dto;
            } )
        } catch (err) {
            res.statusCode = INTERNAL_ERROR;
            ans = err;
            return ans;
        }

        // Wait to UserService register the user
        let response = await this.registerUser( res, Object.assign(this.mapper.obj,{ rol: 'supervisor', doctype: 1}));

        // Is it ok?
        if ( res.statusCode !== SUCCESS ) {
            ans.message = response.message;
        }

        return ans;
    }

    async getAll ( res, obj ) {

        // Define the default values
        let ans = { message: 'encontrados' };
        res.statusCode = SUCCESS;

        // Wait the response of repository
        let response = await this.repository.getAll( obj );

        // Assign the users to response
        ans.users = response;

        return ans;

    }

}

export default SupervisorService;