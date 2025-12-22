import type Service from '@/services/Service.js';
import { type Request, type Response } from 'express';

class Controller {
    public service;
    constructor(service: Service) {
        this.service = service;
    }

    getAll = async (req: Request, res: Response) => {
        const result = await this.service.getAll();
        res.status(200).json(result);
    }

    getById = async (req: Request, res: Response) => {
        const result = await this.service.getById(Number(req.params.id));
        res.status(200).json(result);
    }
}

export default Controller;