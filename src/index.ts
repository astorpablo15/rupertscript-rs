import express, {Express, Request, Response} from 'express';
import dotenv from 'dotenv';
dotenv.config();

import Persona from './Persona';
import Perimetro from './Perimetro';
import Superficie from './Superficie';
import { getDate } from './lib/utils';

const app: Express = express();

const persona : Persona = new Persona('Pablo', 'Dominguez');

const superficie: Superficie = new Superficie();

const perimetro: Perimetro = new Perimetro();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', (_req: Request, res: Response) => {
    res.status(200).json({
        fyh: getDate(),
        fullName: persona.getFullName()
    })
});

app.get('/circulo/:radio', (req: Request, res: Response) => {
    const radio: string = req.params.radio;
    const op: any = req.query.op;
    switch(op){
        case 'PER':
            return res.status(200).send(`El perimetro es ${perimetro.circulo(radio)}`);
        default: 
            return res.status(200).send(`El area es ${superficie.circulo(radio)}`);
    }
});

app.get('/cuadrado/:lado', (req: Request, res: Response) => {
    const lado: string = req.params.lado;
    const op: any = req.query.op;

    switch(op){
        case 'PER':
            return res.status(200).send(`El perimetro es ${perimetro.cuadrado(lado)}`);
        default: 
            return res.status(200).send(`El area es ${superficie.cuadrado(lado)}`);
    }
});

app.get('/rectangulo/:base/:altura', (req: Request, res: Response) => {
    const base: string = req.params.base;
    const altura: string = req.params.altura;

    const op: any = req.query.op;
    switch(op){
        case 'PER':
            return res.status(200).send(`El perimetro es ${perimetro.rectangulo(base, altura)}`);
        default: 
            return res.status(200).send(`El area es ${superficie.rectangulo(base, altura)}`);
    }
});

const PORT: string = process.env.PORT || '3000';

app.listen(parseInt(PORT), () => console.info(`App up and running on port ${PORT}`));