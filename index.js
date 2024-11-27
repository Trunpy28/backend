import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import routes from './routes/index.js'
import cors from 'cors';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

routes(app);


mongoose.connect(process.env.MONGODB_URI)
    .then(()=>{
        console.log('Connected to Db Successfully');
    })
    .catch((err)=>{
        console.log(err);
    })

app.listen(process.env.PORT, () => {
    console.log(`Server is running!`);
})