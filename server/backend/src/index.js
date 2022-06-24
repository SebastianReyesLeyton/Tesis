import app, { PORT, HOST } from './app';

app.listen( PORT, HOST, () => {
    console.log(`\x1b[33m[+] Server status: Running. Link: http://localhost:${PORT} \x1b[0m`);
} )