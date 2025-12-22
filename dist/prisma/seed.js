import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";
import { PrismaClient, Category } from "./generated/client.js";
const data = {
    "products": [
        {
            name: "Narcissist Chaos Tee",
            desc: "Oversized fit, heavyweight cotton with front anarchist graphic print. Limited drop.",
            price: 65.00,
            category: Category.TEES, // Usa o Enum do Prisma
            isNew: true,
            onSale: false,
            sale: 0,
            discountPrice: 65.00,
            thumbnailSrc: "nasupplyplaceholder.png",
            altThumbanilSrc: "altnasupplyplaceholder.png"
        },
        {
            name: "Anarchy Zip Hoodie",
            desc: "Heavyweight fleece, custom metal zipper, and large 'N' logo back print.",
            price: 140.00,
            category: Category.HOODIES,
            isNew: true,
            onSale: false,
            sale: 0,
            discountPrice: 140.00,
            thumbnailSrc: "nasupplyplaceholder.png",
            altThumbanilSrc: "altnasupplyplaceholder.png"
        },
        {
            name: "Rivet Denim Jacket",
            desc: "Washed black 14oz denim jacket with custom 'Narcissist' steel rivets.",
            price: 220.00,
            category: Category.JACKETS,
            isNew: true,
            onSale: false,
            sale: 0,
            discountPrice: 220.00,
            thumbnailSrc: "nasupplyplaceholder.png",
            altThumbanilSrc: "altnasupplyplaceholder.png"
        },
        {
            name: "Ego Cargo Pants",
            desc: "Black ripstop fabric with multiple stash pockets and D-ring hardware.",
            price: 160.00,
            category: Category.PANTS,
            isNew: true,
            onSale: false,
            sale: 0,
            discountPrice: 160.00,
            thumbnailSrc: "nasupplyplaceholder.png",
            altThumbanilSrc: "altnasupplyplaceholder.png"
        },
        {
            name: "Barbed Wire Snapback",
            desc: "Classic snapback structure with embroidered barbed wire detail on the front panel.",
            price: 45.00,
            category: Category.HATS,
            isNew: true,
            onSale: false,
            sale: 0,
            discountPrice: 45.00,
            thumbnailSrc: "nasupplyplaceholder.png",
            altThumbanilSrc: "altnasupplyplaceholder.png"
        },
        {
            name: "Spike Chain Belt",
            desc: "Faux leather belt with detachable spike chain accessory. Polished hardware.",
            price: 75.00,
            category: Category.ACCESSORIES,
            isNew: true,
            onSale: false,
            sale: 0,
            discountPrice: 75.00,
            thumbnailSrc: "nasupplyplaceholder.png",
            altThumbanilSrc: "altnasupplyplaceholder.png"
        },
        {
            name: "Destroyed Logo Tee",
            desc: "Distressed enzyme wash tee with cracked 'Narcissist Supply' logo.",
            price: 70.00,
            category: Category.TEES,
            isNew: true,
            onSale: true,
            sale: 0.15,
            discountPrice: 59.50,
            thumbnailSrc: "nasupplyplaceholder.png",
            altThumbanilSrc: "altnasupplyplaceholder.png"
        },
        {
            name: "Supply Pullover Hoodie",
            desc: "Minimal logo embroidery on 450gsm heavyweight fleece. Drop shoulder fit.",
            price: 130.00,
            category: Category.HOODIES,
            isNew: true,
            onSale: false,
            sale: 0,
            discountPrice: 130.00,
            thumbnailSrc: "nasupplyplaceholder.png",
            altThumbanilSrc: "altnasupplyplaceholder.png"
        },
        {
            name: "Bondage Strap Trousers",
            desc: "Black twill pants featuring adjustable bondage straps and zipper details.",
            price: 175.00,
            category: Category.PANTS,
            isNew: true,
            onSale: false,
            sale: 0,
            discountPrice: 175.00,
            thumbnailSrc: "nasupplyplaceholder.png",
            altThumbanilSrc: "altnasupplyplaceholder.png"
        },
        {
            name: "Narcissist Signet Ring",
            desc: "Polished stainless steel signet ring. Engraved 'N' logo. New drop accessory.",
            price: 50.00,
            category: Category.ACCESSORIES,
            isNew: true,
            onSale: false,
            sale: 0,
            discountPrice: 50.00,
            thumbnailSrc: "nasupplyplaceholder.png",
            altThumbanilSrc: "altnasupplyplaceholder.png"
        },
        {
            name: "Classic Box Logo Tee",
            desc: "Standard fit tee, screen printed red box logo on black cotton.",
            price: 50.00,
            category: Category.TEES,
            isNew: false,
            onSale: true,
            sale: 0.20,
            discountPrice: 40.00,
            thumbnailSrc: "nasupplyplaceholder.png",
            altThumbanilSrc: "altnasupplyplaceholder.png"
        },
        {
            name: "Rebel Skull Tee",
            desc: "Vintage wash tee with large cracked skull graphic on the back.",
            price: 55.00,
            category: Category.TEES,
            isNew: false,
            onSale: false,
            sale: 0,
            discountPrice: 55.00,
            thumbnailSrc: "nasupplyplaceholder.png",
            altThumbanilSrc: "altnasupplyplaceholder.png"
        },
        {
            name: "Heavyweight Basic Hoodie",
            desc: "Simple oversized heavyweight hoodie in black. No graphics.",
            price: 110.00,
            category: Category.HOODIES,
            isNew: false,
            onSale: false,
            sale: 0,
            discountPrice: 110.00,
            thumbnailSrc: "nasupplyplaceholder.png",
            altThumbanilSrc: "altnasupplyplaceholder.png"
        },
        {
            name: "MA-1 Bomber Jacket",
            desc: "Classic nylon bomber silhouette with 'N' logo zipper pull.",
            price: 190.00,
            category: Category.JACKETS,
            isNew: false,
            onSale: true,
            sale: 0.30,
            discountPrice: 133.00,
            thumbnailSrc: "nasupplyplaceholder.png",
            altThumbanilSrc: "altnasupplyplaceholder.png"
        },
        {
            name: "Washed Denim Jeans",
            desc: "Slim fit 14oz washed black denim with slight distressing.",
            price: 130.00,
            category: Category.PANTS,
            isNew: false,
            onSale: false,
            sale: 0,
            discountPrice: 130.00,
            thumbnailSrc: "nasupplyplaceholder.png",
            altThumbanilSrc: "altnasupplyplaceholder.png"
        },
        {
            name: "Cargo Utility Shorts",
            desc: "Durable cotton twill utility shorts with side flap pockets.",
            price: 85.00,
            category: Category.SHORTS,
            isNew: false,
            onSale: true,
            sale: 0.15,
            discountPrice: 72.25,
            thumbnailSrc: "nasupplyplaceholder.png",
            altThumbanilSrc: "altnasupplyplaceholder.png"
        },
        {
            name: "Logo Dad Hat",
            desc: "Unstructured cotton cap with small 'Narcissist' logo embroidery.",
            price: 35.00,
            category: Category.HATS,
            isNew: false,
            onSale: false,
            sale: 0,
            discountPrice: 35.00,
            thumbnailSrc: "nasupplyplaceholder.png",
            altThumbanilSrc: "altnasupplyplaceholder.png"
        },
        {
            name: "Logo Socks (3-Pack)",
            desc: "Black cotton crew socks with jacquard 'N' logo near the cuff.",
            price: 30.00,
            category: Category.ACCESSORIES,
            isNew: false,
            onSale: false,
            sale: 0,
            discountPrice: 30.00,
            thumbnailSrc: "nasupplyplaceholder.png",
            altThumbanilSrc: "altnasupplyplaceholder.png"
        },
        {
            name: "Safety Pin Graphic Tee",
            desc: "Oversized tee featuring safety pin and patch artwork.",
            price: 60.00,
            category: Category.TEES,
            isNew: false,
            onSale: false,
            sale: 0,
            discountPrice: 60.00,
            thumbnailSrc: "nasupplyplaceholder.png",
            altThumbanilSrc: "altnasupplyplaceholder.png"
        },
        {
            name: "Punk Knitted Polo",
            desc: "Knitted short sleeve polo with contrast white collar and zipper placket.",
            price: 95.00,
            category: Category.POLOS,
            isNew: false,
            onSale: true,
            sale: 0.25,
            discountPrice: 71.25,
            thumbnailSrc: "nasupplyplaceholder.png",
            altThumbanilSrc: "altnasupplyplaceholder.png"
        },
        {
            name: "Distressed Leather Jacket",
            desc: "Genuine leather moto jacket, hand-distressed with custom hardware.",
            price: 450.00,
            category: Category.JACKETS,
            isNew: false,
            onSale: false,
            sale: 0,
            discountPrice: 450.00,
            thumbnailSrc: "nasupplyplaceholder.png",
            altThumbanilSrc: "altnasupplyplaceholder.png"
        },
        {
            name: "Plaid Bondage Pants",
            desc: "Red plaid trousers with multiple zippers, D-rings, and strap details.",
            price: 165.00,
            category: Category.PANTS,
            isNew: false,
            onSale: false,
            sale: 0,
            discountPrice: 165.00,
            thumbnailSrc: "nasupplyplaceholder.png",
            altThumbanilSrc: "altnasupplyplaceholder.png"
        },
        {
            name: "Sleeveless Punk Hoodie",
            desc: "Cut-off sleeve hoodie with raw edges and a vintage wash.",
            price: 90.00,
            category: Category.HOODIES,
            isNew: false,
            onSale: true,
            sale: 0.20,
            discountPrice: 72.00,
            thumbnailSrc: "nasupplyplaceholder.png",
            altThumbanilSrc: "altnasupplyplaceholder.png"
        },
        {
            name: "Noise Graphic Longsleeve",
            desc: "Longsleeve tee with 'Noise' graphic print down both arms.",
            price: 75.00,
            category: Category.TEES,
            isNew: false,
            onSale: false,
            sale: 0,
            discountPrice: 75.00,
            thumbnailSrc: "nasupplyplaceholder.png",
            altThumbanilSrc: "altnasupplyplaceholder.png"
        },
        {
            name: "Spiked Beanie",
            desc: "Ribbed knit beanie with small metal cone spikes attached.",
            price: 40.00,
            category: Category.HATS,
            isNew: false,
            onSale: false,
            sale: 0,
            discountPrice: 40.00,
            thumbnailSrc: "nasupplyplaceholder.png",
            altThumbanilSrc: "altnasupplyplaceholder.png"
        },
        {
            name: "Studded Wristband",
            desc: "Black leather wristband (cuff) with three rows of pyramid studs.",
            price: 25.00,
            category: Category.ACCESSORIES,
            isNew: false,
            onSale: false,
            sale: 0,
            discountPrice: 25.00,
            thumbnailSrc: "nasupplyplaceholder.png",
            altThumbanilSrc: "altnasupplyplaceholder.png"
        },
        {
            name: "Destroyed Denim Shorts",
            desc: "Cut-off black denim shorts with heavy fraying and distressing.",
            price: 90.00,
            category: Category.SHORTS,
            isNew: false,
            onSale: false,
            sale: 0,
            discountPrice: 90.00,
            thumbnailSrc: "nasupplyplaceholder.png",
            altThumbanilSrc: "altnasupplyplaceholder.png"
        },
        {
            name: "Supply Co Tee",
            desc: "Simple branded tee. Standard fit. 'Narcissist Supply Co.' text.",
            price: 45.00,
            category: Category.TEES,
            isNew: false,
            onSale: true,
            sale: 0.50,
            discountPrice: 22.50,
            thumbnailSrc: "nasupplyplaceholder.png",
            altThumbanilSrc: "altnasupplyplaceholder.png"
        },
        {
            name: "Pinstripe Work Jacket",
            desc: "Black pinstripe cotton twill work jacket with zip front.",
            price: 180.00,
            category: Category.JACKETS,
            isNew: false,
            onSale: false,
            sale: 0,
            discountPrice: 180.00,
            thumbnailSrc: "nasupplyplaceholder.png",
            altThumbanilSrc: "altnasupplyplaceholder.png"
        },
        {
            name: "Chain Wallet",
            desc: "Black faux leather wallet with heavy duty steel wallet chain.",
            price: 55.00,
            category: Category.ACCESSORIES,
            isNew: false,
            onSale: false,
            sale: 0,
            discountPrice: 55.00,
            thumbnailSrc: "nasupplyplaceholder.png",
            altThumbanilSrc: "altnasupplyplaceholder.png"
        }
    ]
};
const prisma = new PrismaClient({
    adapter: new PrismaBetterSqlite3({
        url: process.env.DATABASE_URL ?? ''
    }, {
        timestampFormat: 'unixepoch-ms'
    })
});
async function main() {
    console.log("Iniciando o seeding de dados...");
    for (const product of data.products) {
        await prisma.product.create({
            data: product,
        });
    }
    console.log("Seeding concluído!");
}
main()
    .catch(e => {
    console.error(e);
    process.exit(1);
})
    .finally(async () => {
    await prisma.$disconnect();
});
//# sourceMappingURL=seed.js.map