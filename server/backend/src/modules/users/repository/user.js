import Repository from '../../../models/repository';
import { users } from '../../../conf/databases';

class UserRepository extends Repository {

    constructor (name = 'user') {
        super(users, 'User', name);
    }

    id ( obj ) {
        const ans = this.db.query('SELECT user_table.id AS id, fullname, email, passcode, rol, document_type.doctype AS doctype, docnum \
                                   FROM user_table INNER JOIN document_type ON user_table.doctype = document_type.id \
                                   WHERE id = ? ', [obj.id]);
        return ans;
    }

    idRol ( obj ) {
        const ans = this.db.query('SELECT user_table.id AS id, fullname, email, passcode, rol, document_type.doctype AS doctype, docnum \
                                   FROM user_table INNER JOIN document_type ON user_table.doctype = document_type.id \
                                   WHERE user_table.id = ?  and rol = ?', [obj.id, obj.rol]);
        return ans;
    }

    email ( obj ) {
        const ans = this.db.query('SELECT * FROM user_table WHERE email = ?', [obj.email]);
        return ans;
    }

    docnum ( obj ) {
        const ans = this.db.query('SELECT * FROM user_table WHERE docnum = ?', [obj.docnum]);
        return ans;
    }

    register ( obj ) {
        const ans = this.db.query('INSERT INTO user_table ( fullname, email, passcode, rol, doctype, docnum ) VALUES ( ?,?,?,?,?,? )', [
            obj.fullname,
            obj.email,
            obj.passcode,
            obj.rol,
            obj.doctype,
            obj.docnum
        ]);
        return ans;
    }

    getAll ( obj ) {
        const ans = this.db.query('SELECT id, fullname, email, docnum, isActive FROM user_table WHERE rol = ? LIMIT ?, ?', [
            obj.rol,
            obj.offset,
            obj.rows,
        ]);
        return ans;
    }

    setState ( { id, isActive, rol } ) {
        const ans = this.obj.query('UPDATE user_table SET isActive = ? WHERE id = ? and rol = ?', [
            isActive,
            id,
            rol
        ]);
        return ans;
    }
}


export default UserRepository;