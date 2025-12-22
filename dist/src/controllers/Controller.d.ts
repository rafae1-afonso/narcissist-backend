import type Service from '../services/Service.js';
import { type Request, type Response } from 'express';
declare class Controller {
    service: Service;
    constructor(service: Service);
    getAll: (req: Request, res: Response) => Promise<void>;
    getById: (req: Request, res: Response) => Promise<void>;
}
export default Controller;
//# sourceMappingURL=Controller.d.ts.map