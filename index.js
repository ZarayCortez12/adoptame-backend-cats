import app from './app.js';
import { connectDB } from './db.js';

const startServer = async () => {
    await connectDB();
    app.listen(3001, () => {
        console.log('Servidor corriendo en http://localhost:3001');
    });
};

startServer();
