import { Application } from '../declarations';
import users from './users/users.service';
import products from './products/products.service';
import cart from './cart/cart.service';
import food from './food/food.service';
// Don't remove this comment. It's needed to format import lines nicely.

export default function (app: Application): void {
  app.configure(users);
  app.configure(products);
  app.configure(cart);
  app.configure(food);
}
