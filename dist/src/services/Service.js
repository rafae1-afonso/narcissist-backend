class Service {
    table;
    constructor(model) {
        this.table = model;
    }
    getAll = async () => {
        return await this.table.findMany();
    };
    getById = async (id) => {
        return await this.table.findUnique({
            where: {
                id: id
            }
        });
    };
    getByName = async (searchName) => {
        const list = await this.table.findMany({});
        return list.filter(item => item.name.toLowerCase().includes(searchName.toLowerCase()));
    };
    create = async (newObject) => {
        const createdRecord = await this.table.create({
            data: newObject
        });
        return createdRecord;
    };
    update = async (whereId, newUpdateObject) => {
        const updatedRecord = await this.table.update({
            where: { id: whereId },
            data: newUpdateObject
        });
        return updatedRecord;
    };
    delete = async (id) => {
        return await this.table.delete({
            where: {
                id: id
            },
            select: {
                name: true
            }
        });
    };
}
export default Service;
//# sourceMappingURL=Service.js.map