import app from './app';

app.listen( 4000, '0.0.0.0', () => {
    console.log('[+] Server status: Running.');
    console.log('[+] Link: http://localhost:4000')
} )