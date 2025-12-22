import express, { type NextFunction, type Request, type Response } from 'express';
import productRoutes from './routes/products.js';

const app = express();

app.use((req: Request, res: Response, next: NextFunction) => {
    res.setHeader('Access-Control-Allow-Origin', 'https://narcissist-frontend.onrender.com')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    next();
})

app.use(express.json());
app.use('/products', productRoutes);


export default app;