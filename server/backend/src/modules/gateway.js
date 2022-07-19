import userRouter from "./users/routes";
import authRouter from "./auth/routes";
import testRouter from "./tests/routes/test";

class PrivateGateway {

    constructor ( app ) {
        this.app = app;
        this.registerRoutes()
    }

    logger () {
        return (req, res, next) => {
            console.log(`[+] ${req.method} ${req.originalUrl}`); 
            if ( req.method !== 'GET' ) console.log('   Body:', req.body);
            next();
        }
    }

    registerRoutes () {

        this.app.use('/user', this.logger(), userRouter);
        this.app.use('/auth', this.logger(), authRouter);
        this.app.use('/test', this.logger(), testRouter);
        
        // Space to register routes 
        console.log('\x1b[32m[+] Gateway status: All routes registered.\x1b[0m');
    }

}

class Gateway {

    constructor() {
        throw new Error('Use Gateway.getInstance()');
    }

    static getInstance( app ) {
        if ( !Gateway.instance ) Gateway.instance = new PrivateGateway(app);
        return Gateway.instance;
    }
}

export default Gateway;