import express from 'express';
import cors from 'cors';
import path from 'path';
import 'express-async-errors';

import './database/connection';
import routes from './routes';
import errorHandler from './errors/handler';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')))
app.use(errorHandler);

//Rota = conjunto
//Recurso = usuarios
//Metodos = GET, POST, PUT, DELETE 

//GET = buscar uma informação
//POST = criar uma informação nova
//PUT = editar uma informação
//DELETE = apagar uma informação

//Query params = http://localhost:3333/users?search=davi&page=2
//Route params = http://localhost:3333/users/1 (identificar um recurso)
//Body = dados de formulario
/*
app.post('/users/:id', (request, response)=>{
    console.log(request.query);
    console.log(request.params);
    console.log(request.body);
    return response.json({message: 'Hello World!'});
})*/



app.listen(3333);