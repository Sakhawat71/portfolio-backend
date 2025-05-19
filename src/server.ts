import { Server } from 'http';
import app from './app';
import configs from './app/configs';

async function main() {
    try {
        const server: Server = app.listen(configs.port, () => {
            console.log(`Server is running on port ${configs.port}`);
        });
    } catch (error) {
        console.error('Error starting server:', error);
    }
}

main().catch(error => {
    console.error('Error in main function:', error);
});