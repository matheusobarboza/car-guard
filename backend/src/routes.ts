import { Router } from 'express';
import { CreateAccidentController } from './controllers/CreateAccidentController';
import { CreateClientController } from './controllers/CreateClientController';
import { CreateVehicleController } from './controllers/CreateVehicleController';
import { GetAllAccidentsController } from './controllers/GetAllAccidentsController';
import { GetAllClientsController } from './controllers/GetAllClientsController';
import { GetAllVehiclesController } from './controllers/GetAllVehiclesController';

const routes = Router();

const createClientController = new CreateClientController();
const getAllClientsController = new GetAllClientsController();

const createVehicleController = new CreateVehicleController();
const getAllVehiclesController = new GetAllVehiclesController();

const createAccidentController = new CreateAccidentController();
const getAllAccidentsController = new GetAllAccidentsController();

routes.post('/clients', createClientController.handle);
routes.get('/clients', getAllClientsController.handle);

routes.post('/vehicles', createVehicleController.handle);
routes.get('/vehicles', getAllVehiclesController.handle);

routes.post('/accidents', createAccidentController.handle);
routes.get('/accidents', getAllAccidentsController.handle);

export { routes };

