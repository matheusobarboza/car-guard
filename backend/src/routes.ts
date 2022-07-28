import { Router } from 'express';
import { CreateClientController } from './controllers/CreateClientController';
import { CreateVehicleController } from './controllers/CreateVehicleController';
import { GetAllClientsController } from './controllers/GetAllClientsController';
import { GetAllVehiclesController } from './controllers/GetAllVehiclesController';

const routes = Router();

const createClientController = new CreateClientController();
const getAllClientsController = new GetAllClientsController();

const createVehicleController = new CreateVehicleController();
const getAllVehiclesController = new GetAllVehiclesController();

routes.post('/clients', createClientController.handle);
routes.get('/clients', getAllClientsController.handle);

routes.post('/vehicles', createVehicleController.handle);
routes.get('/vehicles', getAllVehiclesController.handle);

export { routes };

