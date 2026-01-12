import type { ProductDelegate, ProductCreateInput, ProductUpdateInput } from "../../prisma/generated/models.js";
declare class Service {
    private table;
    constructor(model: ProductDelegate);
    getAll: () => Promise<{
        id: number;
        name: string;
        desc: string;
        price: number;
        discountPrice: number | null;
        sale: number | null;
        category: import("../../prisma/generated/enums.js").Category;
        isNew: boolean | null;
        onSale: boolean | null;
        thumbnailSrc: string | null;
        altThumbanilSrc: string | null;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    getById: (id: number) => Promise<{
        id: number;
        name: string;
        desc: string;
        price: number;
        discountPrice: number | null;
        sale: number | null;
        category: import("../../prisma/generated/enums.js").Category;
        isNew: boolean | null;
        onSale: boolean | null;
        thumbnailSrc: string | null;
        altThumbanilSrc: string | null;
        createdAt: Date;
        updatedAt: Date;
    } | null>;
    getByName: (searchName: string) => Promise<{
        id: number;
        name: string;
        desc: string;
        price: number;
        discountPrice: number | null;
        sale: number | null;
        category: import("../../prisma/generated/enums.js").Category;
        isNew: boolean | null;
        onSale: boolean | null;
        thumbnailSrc: string | null;
        altThumbanilSrc: string | null;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    create: (newObject: ProductCreateInput) => Promise<{
        id: number;
        name: string;
        desc: string;
        price: number;
        discountPrice: number | null;
        sale: number | null;
        category: import("../../prisma/generated/enums.js").Category;
        isNew: boolean | null;
        onSale: boolean | null;
        thumbnailSrc: string | null;
        altThumbanilSrc: string | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
    update: (whereId: number, newUpdateObject: ProductUpdateInput) => Promise<{
        id: number;
        name: string;
        desc: string;
        price: number;
        discountPrice: number | null;
        sale: number | null;
        category: import("../../prisma/generated/enums.js").Category;
        isNew: boolean | null;
        onSale: boolean | null;
        thumbnailSrc: string | null;
        altThumbanilSrc: string | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
    delete: (id: number) => Promise<{
        name: string;
    }>;
}
export default Service;
//# sourceMappingURL=Service.d.ts.map