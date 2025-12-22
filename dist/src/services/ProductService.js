import prisma from "../config/database.js";
import Service from "./Service.js";
class ProductService extends Service {
    constructor() {
        super(prisma.product);
    }
}
export default ProductService;
//# sourceMappingURL=ProductService.js.map