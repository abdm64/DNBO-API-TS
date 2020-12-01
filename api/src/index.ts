import express , { Request , Response } from 'express'

const app = express();




app.get('/api/',(req: Request, res: Response) =>{

    res.send('hels')
})

app.listen(3000, () => {
    console.log('Listening on port 3000');
  });