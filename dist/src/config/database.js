import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";
import { PrismaClient } from "../../prisma/generated/client.js";
const prisma = new PrismaClient({
    adapter: new PrismaBetterSqlite3({
        url: "file:./dev.db"
    }, {
        timestampFormat: 'unixepoch-ms'
    })
});
export default prisma;
//# sourceMappingURL=database.js.map