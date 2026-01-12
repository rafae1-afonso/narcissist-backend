import {} from 'express';
class Controller {
    service;
    constructor(service) {
        this.service = service;
    }
    getAll = async (req, res) => {
        const result = await this.service.getAll();
        res.status(200).json(result);
    };
    getById = async (req, res) => {
        const result = await this.service.getById(Number(req.params.id));
        result ? res.status(200).json(result) : res.status(404).json({
            result: '404 not found'
        });
    };
    createNew = async (req, res) => {
        const result = await this.service.create(req.body);
        res.status(201).json(result);
    };
    updateRecord = async (req, res) => {
        const result = await this.service.update(req.body.whereId, req.body.updateObject);
        res.status(200).json(result);
    };
    deleteRecord = async (req, res) => {
        const result = await this.service.delete(req.body.whereId);
        res.status(200).json(result);
    };
}
export default Controller;
//# sourceMappingURL=Controller.js.map