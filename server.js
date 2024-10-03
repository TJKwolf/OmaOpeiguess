import express from 'express';
import bodyParser from 'body-parser';
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(express.static('public'));

app.post('/get-question',(req,res) =>{
    const question = req.body.question;
    console.log(question);
    if(question){
        res.json({question: `käyttäjä kysyi ${question}`});
    }else{
        res.status(400).json({error:'kysymys puuttui.'})
    }
});

app.listen(port,()=>{
    console.log(`Server running at http://localhost:${port}`);
});