import { Router } from 'express';

import { listEndereco } from './app/useCases/endereco/listEndereco';
import { createEndereco } from './app/useCases/endereco/createEndereco';

import { listCidade } from './app/useCases/cidade/listCidade';
import { createCidade } from './app/useCases/cidade/createCidade';

import { listBairro } from './app/useCases/bairro/listBairro';
import { createBairro } from './app/useCases/bairro/createBairro';
export const router = Router();

router.get('/endereco', listEndereco);
router.post('/endereco', createEndereco);

router.get('/bairro', listBairro);
router.post('/bairro', createBairro);

router.get('/cidade', listCidade);
router.post('/cidade', createCidade);