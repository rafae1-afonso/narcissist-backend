import type { ProductDelegate } from "prisma/generated/models.js";

class Service {
    private table;
    constructor(model: ProductDelegate) {
        this.table = model;
    }

    getAll = async () => {
        return await this.table.findMany();
    }

    getById = async (id: number) => {
        return await this.table.findUnique({
            where: {
                id: id
            }
        })
    }

    getByName = async (searchName: string) => {
        const list = await this.table.findMany({});
        return list.filter(item => item.name.toLowerCase().includes(searchName.toLowerCase()));
    }
}

export default Service;