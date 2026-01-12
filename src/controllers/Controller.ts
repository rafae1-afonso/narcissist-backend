import type Service from '@/services/Service.js';
import { type Request, type Response } from 'express';
import type { PrismaClientValidationError } from 'prisma/generated/internal/prismaNamespace.js';

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
        result ? res.status(200).json(result) : res.status(404).json({
            result: '404 not found'
        });
    }

    createNew = async (req: Request, res: Response) => {
        const result = await this.service.create(req.body);
        res.status(201).json(result);
    }

    updateRecord = async (req: Request, res: Response) => {
        const result = await this.service.update(req.body.whereId, req.body.updateObject);
        res.status(200).json(result);
    }

    deleteRecord = async (req: Request, res: Response) => {
        const result = await this.service.delete(req.body.whereId)
        res.status(200).json(result);
    }
}

export default Controller;