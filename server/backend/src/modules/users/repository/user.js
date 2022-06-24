import Repository from '../../../models/repository';
import { users } from '../../../conf/databases';

class UserRepository extends Repository {

    constructor () {
        super(users, 'User', 'user');
    }

    id ( obj ) {
        const ans = this.db.query('SELECT * FROM user_table WHERE id = ?', [obj.id]);
        return ans;
    }

    email( obj ) {
        const ans = this.db.query('SELECT * FROM user_table WHERE email = ?', [obj.email]);
        return ans;
    }

    docnum( obj ) {
        const ans = this.db.query('SELECT * FROM user_table WHERE docnum = ?', [obj.docnum]);
        return ans;
    }

}


export default UserRepository;