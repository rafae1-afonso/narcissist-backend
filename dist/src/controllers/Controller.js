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
        res.status(200).json(result);
    };
}
export default Controller;
//# sourceMappingURL=Controller.js.map