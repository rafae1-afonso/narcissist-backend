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
}
export default Service;
//# sourceMappingURL=Service.js.map