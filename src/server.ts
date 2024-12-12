import express, { Application } from 'express';
import cors from 'cors';
import statusRoutes from './routes/status';

const app: Application = express();

app.use(cors());
app.use(express.json());

app.use('/api/status', statusRoutes);

const PORT = 3003;
app.listen(PORT, () => {
    console.log(`Servidor rodando em ${PORT}`);
});




