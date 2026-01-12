import ProductController from "../controllers/ProductController.js";
import { Router } from 'express';
const productRoutes = Router();
const productController = new ProductController();
productRoutes.get('/', productController.getAll);
productRoutes.get('/:id', productController.getById);
productRoutes.post('/', productController.createNew);
productRoutes.put('/', productController.updateRecord);
productRoutes.delete('/', productController.deleteRecord);
export default productRoutes;
//# sourceMappingURL=products.js.map