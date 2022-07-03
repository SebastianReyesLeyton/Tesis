import UserRepository from "./user";
import { users } from "../../../conf/databases";

class SupervisorRepository extends UserRepository {

    constructor () {
        super('supervisor');
    }

    setData ( obj ) {
        const ans = this.obj.query('UPDATE user_table SET\
                                    fullname = ?, email = ?, passcode = ?,\
                                    docnum = ?, WHERE id = ? and rol = ?',[
                                        obj.fullname,
                                        obj.email,
                                        obj.passcode,
                                        obj.docnum,
                                        obj.id,
                                        'supervisor'
                                    ]);
        return ans;
    }
    
}

export default SupervisorRepository;