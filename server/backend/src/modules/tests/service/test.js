import fs from "fs";
import UTF8 from "utf8";
import Service from "../../../models/service";
import TestRepository from "../repository/test";
import { DTO_MYSQL_TEST_CREATION, DTO_TESTS_RESPONSE, DTO_QUESTION_TYPES_RESPONSE } from "../models/dto.out";
import { SUCCESS, BAD_REQUEST, INTERNAL_ERROR } from "../../../lib/httpCodes";
import { TEST_PATH } from "../../../conf/tests";

class TestService extends Service {

    constructor ( repository = new TestRepository, name = 'test' ) {
        super({
            repository, 
            module: 'Test',
            name
        });
    }

    __create ( res, id ) {
        
        // Set the default response
        let ans = { message: 'creada con éxito' }
        res.statusCode = SUCCESS;

        // Try of create a folder to id
        try {
            if (!fs.existsSync(`${TEST_PATH}/${id}`)){
                fs.mkdirSync(`${TEST_PATH}/${id}`)
                console.log(fs.existsSync(`${TEST_PATH}/${id}`))
            } 
        } catch (err) {
            console.log(err);
            res.statusCode = BAD_REQUEST;
            return { message: 'ya tiene una carpeta asociada' };
        }

        return ans;

    } 

    async create ( res, obj ) {

        // Define the default values
        let ans = { message: 'creada con éxito' };
        res.statusCode = SUCCESS;

        // Map the obj to DTO_MYSQL_TEST_CREATION format
        try {
            this.mapper.map( {}, DTO_MYSQL_TEST_CREATION, (dto) => {
                
                dto.tName = UTF8.encode(obj.name);
                dto.tDescription = UTF8.encode(obj.description);

                return dto;
            })
        } catch (err) {
            res.statusCode = INTERNAL_ERROR;
            ans = err;
            return ans;
        }

        // Validate the existence of the test
        let response = await this.repository.getByName(this.mapper.obj);
        if ( response.length ) {
            res.statusCode = BAD_REQUEST;
            return { message: 'Ya existe un test con ese nombre' };
        }

        // Create the new test
        response = await this.repository.createTest(this.mapper.obj);
        if ( response.affectedRows === 1 ) {
            response = this.__create( res, response.insertId);
            if ( res.statusCode !== SUCCESS ) {
                return { message: response.message };
            }
        }

        return ans;

    }

    async getAll ( res, obj ) {
    
        // Define the default values
        let ans = { message: 'encontrados' };
        res.statusCode = SUCCESS;

        // Wait the response of repository
        let response = await this.repository.getAll( obj );

        // Map the response to DTO_TESTS_RESPONSE format
        response.map((item) => {
            try {
                this.mapper.map( item, DTO_TESTS_RESPONSE, (dto) => {
                    
                    dto.name = UTF8.decode(dto.tName);
                    dto.description = UTF8.decode(dto.tDescription);

                    delete dto.tName;
                    delete dto.tDescription;
                    delete dto.isEditable;
                    
                    return dto;
                } )
            } catch (err) {
                console.log(err);
            }

            return item;
        })

        // Assign the response to ans
        ans.tests = response;

        return ans;

    }

    async getQuestionTypes ( res ) {

        // Define the default values
        let ans = { message: 'encontrados' };
        res.statusCode = SUCCESS;

        // Wait the response of repository
        let response = await this.repository.getQuestionTypes();

        // Map the database response to DTO_QUESTION_TYPES_RESPONSE format
        response.map((item) => {

            try {
                
                this.mapper.map( item, DTO_QUESTION_TYPES_RESPONSE, (dto) => {

                    dto.type = UTF8.decode(dto.qtype);
                    dto.description = UTF8.decode(dto.descriptionP);

                    delete dto.qtype;
                    delete dto.descriptionP;

                    return dto;
                })

            } catch (err) {
                console.log(err);
            }
        });

        // Assign the response
        ans.types = response;

        return ans;

    }

    async publish ( res, obj ) {

        // Define the default values
        let ans = { message: 'publicado' };
        res.statusCode = SUCCESS;

        // Validate that test exists
        let response = await this.repository.getByIdState( Object.assign({isEditable: 1}, obj) );

        // If test does not exists or already is published
        if ( response.length !== 1 ) {
            res.statusCode = BAD_REQUEST;
            return { message: 'prueba no encontrada' };
        }

        // Publish the test
        response = await this.repository.publish( obj );

        return ans;

    }

}

export default TestService;