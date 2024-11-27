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

const query = 'mongodb+srv://tpsoict28:123@cluster0.6acs5.mongodb.net/W6';

mongoose.connect(query)
    .then(()=>{
        console.log('Connected to Db Successfully');
    })
    .catch((err)=>{
        console.log(err);
    })

app.listen(3001, () => {
    console.log(`Server is running!`);
})