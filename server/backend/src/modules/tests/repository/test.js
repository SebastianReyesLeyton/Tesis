import Repository from "../../../models/repository";
import { tests } from "../../../conf/databases";

class TestRepository extends Repository {

    constructor (name = 'test') {
        super(tests, 'Test', name);
    }

    getById ( obj ) {
        const ans = this.db.query('SELECT * FROM test_table WHERE id = ?', [ obj.id ]);
        return ans;
    }

    getByIdState ( obj ) {
        const ans = this.db.query('SELECT * FROM test_table WHERE id = ? AND isEditable = ?', [ 
            obj.id,
            obj.isEditable
        ]);
        return ans;
    }

    getByName ( obj ) {
        const ans = this.db.query('SELECT * FROM test_table WHERE tName = ?', [obj.tName]);
        return ans;
    }

    createTest ( obj ) {
        const ans = this.db.query('INSERT INTO test_table (tName, tDescription) VALUES (?, ?)',[
            obj.tName, 
            obj.tDescription
        ]);
        return ans;
    }

    getAll ( obj ) {
        const ans = this.db.query('SELECT * FROM test_table WHERE isEditable = ? LIMIT ?, ?', [
            obj.isEditable,
            obj.offset,
            obj.rows
        ]);
        return ans;
    }

    getQuestionTypes ( ) {
        const ans = this.db.query('SELECT * FROM question_type_table');
        return ans;
    }

    publish ( obj ) {
        const ans = this.db.query('UPDATE test_table SET isEditable = ? WHERE id = ?', [
            0,
            obj.id
        ]);
        return ans;
    }

}

export default TestRepository;