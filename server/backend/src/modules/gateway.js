import userRouter from "./users/routes";
import authRouter from "./auth/routes";

class PrivateGateway {

    constructor ( app ) {
        this.app = app;
        this.registerRoutes()
    }

    logger () {
        return (req, res, next) => {
            console.log(`[+] ${req.method} ${req.originalUrl}`); 
            console.log('   ', req.body);
            next();
        }
    }

    registerRoutes () {

        this.app.use('/user', this.logger(), userRouter);
        this.app.use('/auth', this.logger(), authRouter);
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