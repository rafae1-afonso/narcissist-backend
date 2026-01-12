import type { ProductDelegate, ProductCreateInput, ProductUpdateInput } from "prisma/generated/models.js";

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

    create = async (newObject: ProductCreateInput) => {
        const createdRecord = await this.table.create({
            data: newObject
        })
        return createdRecord;
    }

    update = async (whereId: number, newUpdateObject: ProductUpdateInput) => {
        const updatedRecord = await this.table.update({
            where: { id: whereId },
            data: newUpdateObject
        })
        return updatedRecord;
    }

    delete = async (id: number) => {
        return await this.table.delete({
            where: {
                id: id
            },
            select: {
                name: true
            }
        })
    }
}

export default Service;