// Initializes the `food` service on path `/food`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../declarations';
import { Food } from './food.class';
import createModel from '../../models/food.model';
import hooks from './food.hooks';

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    'food': Food & ServiceAddons<any>;
  }
}

export default function (app: Application): void {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/food', new Food(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('food');

  service.hooks(hooks);
}
