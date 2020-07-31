// require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(express.static('./src/app/chatbot-page'));
app.use(function(req, res, next){
    res.setHeader("Acess-Control-Allow-Origin", "http://localhost:4200/")
    res.setHeader("Acess-Control-Allow-Methods", "POST")
    next();
})

var cors = require('cors')
app.use(cors({origin: "*"})) // Usando o cors (npm install cors) para permitir o acesso de outras rotas a esse servidor aqui
const port = 3000;

const AssistantV2 = require('ibm-watson/assistant/v2');
const { IamAuthenticator } = require('ibm-watson/auth');

const assistant = new AssistantV2({
    
    version: '2020-04-01',
    authenticator: new IamAuthenticator({
        apikey: 'sRUqGpANbyYcg2gCG5xnFB-MxNhSFppbkv-CNOTGdXIf',
    }),
    url: 'https://api.us-south.assistant.watson.cloud.ibm.com/instances/39e064e8-d14b-4fc8-8543-9ca472959b7d',
    disableSslVerification: true,
});



assistant.createSession({
    assistantId: '58a6dc37-f356-4f23-9353-879822910e8c'
})
.then(res => {
    console.log(JSON.stringify(res.result, null, 2));
    session_id = res.result.session_id

    app.post('/conversation/', (req, res) => {
    console.log(req.headers)
        const { text, context = {} } = req.body;
        const params = {
            assistantId: '58a6dc37-f356-4f23-9353-879822910e8c',
            sessionId: session_id,
            input: {text} ,
            context,
        };
        
        assistant.message(params, (err, response) => {
            if (err) {
                console.error(err);
                res.status(500).json(err);
            } else {
                res.json(response['result']['output']['generic'][0].text);
            }
        });
    });
})
.catch(err => {
    console.log(err);
});

// let bey = "Quero agendar vacinação"

// assistant.message({
//     assistantId: '58a6dc37-f356-4f23-9353-879822910e8c',
//     sessionId: '600d21a8-cc3b-4869-b71d-e82ca56e84bd',
//     input: {
//         'message_type': 'text',
//         'text': bey
//     }
// })
// .then(res => {
//     console.log(JSON.stringify(res.result, null, 2));
//     let resposta = res.result.output.generic;
//     console.log(JSON.stringify(resposta))
// })
// .catch(err => {
//     console.log(err);
// });

// app.post('/conversation/', (req, res) => {
//     const { text, context = {} } = req.body;
    
//     const params = {
//         assistantId: '3fda368d-7ba6-4db3-9dfd-183ad4e4948b',
//         sessionId: '600d21a8-cc3b-4869-b71d-e82ca56e84bd',
//         input: {text} ,
//         context,
//     };
    
//     assistant.message(params, (err, response) => {
//         if (err) {
//             console.error(err);
//             res.status(500).json(err);
//         } else {
//             res.json(response['result']['output']['generic'][0].text);
//         }
//     });
// });

app.listen(port, () => console.log(`Running on port ${port}`));