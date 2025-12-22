import type { Request, Response } from "express";
import Controller from "./Controller.js";
declare class ProductController extends Controller {
    constructor();
    getAll: (req: Request, res: Response) => Promise<void>;
}
export default ProductController;
//# sourceMappingURL=ProductController.d.ts.map