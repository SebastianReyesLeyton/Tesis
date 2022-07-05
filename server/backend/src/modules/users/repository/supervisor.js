import UserRepository from "./user";
import { users } from "../../../conf/databases";

class SupervisorRepository extends UserRepository {

    constructor () {
        super('supervisor');
    }
    
    setData ( obj ) {
        return super.setUserData( Object.assign(obj, { rol: 'supervisor' }));
    }

    setState ( obj ) {
        return super.setUserState( Object.assign(obj, { rol: 'supervisor' }));
    }

}

export default SupervisorRepository;