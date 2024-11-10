// import express from 'express'
// import cors from 'cors'

// const app = express();
// app.use(cors())
// app.use(express.json())

// app.listen(process.env.PORT,()=>{
//     console.log(`SERVER IS RUNNING ON PORT ${process.env.PORT}`)
// })

import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config(); // .env file ko load karne ke liye

const app = express();
app.use(cors());
app.use(express.json());

app.listen(process.env.PORT, () => {
  console.log(`SERVER IS RUNNING ON PORT ${process.env.PORT}`);
});
