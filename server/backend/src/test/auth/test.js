import AuthService from '../../modules/auth/services/auth';
import ResponseOBJ from '../../models/request';

describe('Proof', () => {
    const service = new AuthService();
    
    it("Login proof", async () => {
        let res = new ResponseOBJ();
        let response = new ResponseOBJ();

        response = new ResponseOBJ();
        await service.login( res, response, { email: 'sebas.reyes2002asd@hotmail.com', password: 'Epyphone01' });
        expect(response.statusCode).toBe(400);

        response = new ResponseOBJ();
        await service.login( res, response, { email: 'sebas.reyes2002@hotmail.com', password: 'Epyphone1' });
        expect(response.statusCode).toBe(400);

        response = new ResponseOBJ();
        await service.login( res, response, { email: 'sebas.reyes2002@hotmail.com', password: 'Epyphone01' });
        expect(response.statusCode).toBe(200);

    });


    it("Create token", async () => {
        const obj = { 
            user: 'Sebastian'
        }

        await service.createToken(obj)
    });


    it ("Get access token", async () => {
        let obj = {
            id: 2
        }

        let res = new ResponseOBJ();

        await service.getAccessToken(res, obj);
        obj.token = 'my-token';

        await service.getAccessToken(res, obj);

        let auth = undefined;
        auth = await service.login( res, new ResponseOBJ(), { email: 'sebas.reyes2002@hotmail.com', password: 'Epyphone01' });

        obj = {
            id: 1,
            token: service.__extractRefreshToken(auth.token)
        }

        await service.getAccessToken(res, obj);

        obj = {
            id: 1,
            token: auth.token
        }

        await service.deleteRefreshToken(res, obj);

        console.log(await service.getAccessToken(res, obj))

    })

}); 

