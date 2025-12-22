import Controller from "./Controller.js";
import ProductService from "../services/ProductService.js";
const productService = new ProductService();
class ProductController extends Controller {
    constructor() {
        super(productService);
    }
    getAll = async (req, res) => {
        const { name } = req.query;
        const result = !name ? await this.service.getAll() : await this.service.getByName(name);
        res.status(200).json(result);
    };
}
export default ProductController;
//# sourceMappingURL=ProductController.js.map