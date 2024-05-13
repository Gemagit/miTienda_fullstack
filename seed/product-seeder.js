var mongoose = require("mongoose");
var Product = require("../models/productos.model");
const ObjectId = require('mongodb').ObjectId;


var newProducts = [
    {
        id: "001",
        name:"Vestido verde" ,
        img:"https://static.zara.net/assets/public/2bd4/a435/ebb5425da2e0/9ca1b91969c6/02513750500-a4/02513750500-a4.jpg?ts=1707133447434&w=750" ,
        relevancia: 7,
        precio:" 69.95€",
        descripcion: "Vestido midi confeccionado en hilatura con mezcla de lana. Cuello subido fluido y manga sisa. Detalle de tejido drapeado en lateral. Bajo con abertura en espalda. Cierre con cremallera oculta.Un vestido midi de corte minimalista con detalle drapeado a un lateral confeccionado en un tejido delicado con mezcla de lana de tacto agradable. En su diseño depurado destaca el cuello subido que se abre en un escote en pico a la espalda. Una prenda sencilla y a la vez sofisticada.",
        tejido: "hilatura y lana",
        made: "Thailandia",
        fabricante_id:new ObjectId("664226bf303e07d4dbe18af1")
    },
        {
        id: "002",
        name:"Blazer corta cruzada" ,
        img:"https://static.zara.net/assets/public/1ba5/bed7/4b1a4356a81a/87dd29b4a12d/03305770250-p/03305770250-p.jpg?ts=1714741445943&w=750" ,
        relevancia: 8,
        precio:"49.95€",
        descripcion: "Blazer de cuello solapa y manga larga con hombreras. Cierre frontal cruzado con botones con relieve.",
        tejido: "poliéster",
        made: "China",
        fabricante_id:new ObjectId("664226bf303e07d4dbe18af3")
    },
        {
        id: "003",
        name:"Bolso saca abalorios" ,
        img:"https://static.zara.net/assets/public/827f/43c5/779d498c883d/d9ec1ae53c25/16599310253-p/16599310253-p.jpg?ts=1714740135624&w=563" ,
        relevancia: 4,
        precio:" 35.95€",
        descripcion: "Bolso formato saca con detalle de abalorios en forma de flor y flecos. Asa de hombro. Cierre mediante cremallera.",
        tejido: "poliéster",
        made: "Turquía",
        fabricante_id:new ObjectId("664226bf303e07d4dbe18afd")
    },
        {
        id: "004",
        name:"Sandalia plana engomada" ,
        img:"https://static.zara.net/assets/public/8f17/8eac/07d741438d1f/40583a8f000d/15510410195-p/15510410195-p.jpg?ts=1714128749697&w=563" ,
        relevancia: 6,
        precio:" 17.95€",
        descripcion: "Sandalia plana engomada con posición para el dedo. Suela gruesa. Acabada en punta redonda.",
        tejido: "polietileno",
        made: "",
        fabricante_id:new ObjectId("664226bf303e07d4dbe18af3")
    },
        {
        id: "005",
        name:"Bikini contraste" ,
        img:"https://static.zara.net/assets/public/e914/8b4e/725142959888/cd7adbb77bef/00167012712-015-p/00167012712-015-p.jpg?ts=1712160196405&w=563" ,
        relevancia: 10,
        precio:"19.95 €",
        descripcion: "Top bikini triangular con detalle de pieza metálica en pecho. Acabados a contraste. Forro interior.",
        tejido: "poliamida reciclada",
        made: "Marruecos",
        fabricante_id:new ObjectId("664226bf303e07d4dbe18aff")
    },
        {
        id: "006",
        name:"Braguita Bikini" ,
        img:"https://static.zara.net/assets/public/fa36/0928/fbb1475bba41/24547b7be26d/02856033705-a1/02856033705-a1.jpg?ts=1713364940260&w=563" ,
        relevancia: 7,
        precio:" 17.95€",
        descripcion: "Braguita bikini con lazadas laterales.",
        tejido: "poliamida",
        made: "India",
        fabricante_id:new ObjectId("664226bf303e07d4dbe18af3")
    },
        {
        id: "007",
        name:"Cinturón hebilla" ,
        img:"https://static.zara.net/assets/public/7531/3140/e62046b0a86b/e87101013602/01736039052-p/01736039052-p.jpg?ts=1714665008028&w=563" ,
        relevancia: 9,
        precio:" 17.95€",
        descripcion: "Cinturón elástico de 5 cm de ancho con hebilla redonda efecto acetato.",
        tejido: "acetato",
        made: "Marruecos",
        fabricante_id:new ObjectId("664226bf303e07d4dbe18afd")
    },
         {
        id: "008",
        name:"Body estampado tul" ,
        img:"https://static.zara.net/assets/public/62a2/82b9/bb8846bb8b05/9b6197d66954/03000004050-a2/03000004050-a2.jpg?ts=1714725464830&w=563" ,
        relevancia: 2,
        precio:" 22.95€",
        descripcion: "Body de cuello halter con lazada. Espalda descubierta. Tejido drapeado. Cierre en bajo con botones a presión y lateral con cremallera oculta en costura.",
        tejido: "poliéster",
        made: "Turquía",
        fabricante_id:new ObjectId("664226bf303e07d4dbe18aff")
    },
         {
        id: "009",
        name:"Collar cordón guindilla" ,
        img:"https://static.zara.net/assets/public/4edd/5684/c05f4dbba605/6a2ef4dbe1d5/01856056600-p/01856056600-p.jpg?ts=1709657386507&w=563" ,
        relevancia: 1,
        precio:" 15.95€",
        descripcion: "Collar de cordón largo realizado en piel. Colgante con forma de guindilla.",
        tejido: "zinc",
        made: "España",
        fabricante_id:new ObjectId("664226bf303e07d4dbe18b02")
    },
        {
        id: "010",
        name:"Jeans regular tiro alto" ,
        img:"https://static.zara.net/assets/public/ee5e/19db/0ea74d01857f/bd084dff2779/06147112802-p/06147112802-p.jpg?ts=1714736531068&w=563" ,
        relevancia: 8,
        precio:" 29.95€",
        descripcion: "Jeans de tiro alto con cinco bolsillos. Pernera recta y larga. Cierre frontal con cremallera y botón.",
        tejido: "algodón",
        made: "China",
        fabricante_id:new ObjectId("664226bf303e07d4dbe18af3")
    },
        {
        id: "011",
        name:"Cuña atada tejido" ,
        img:"https://static.zara.net/assets/public/aa0e/38d8/3c534e4f8e6a/97cad11f3821/12283310111-p/12283310111-p.jpg?ts=1711468373192&w=563" ,
        relevancia: 8,
        precio:" 39.95€",
        descripcion: "Zapato tipo alpargata en tejido. Tacón tipo cuña. Tiras atadas al tobillo.",
        tejido: "poliuretano",
        made: "España",
        fabricante_id:new ObjectId("664226bf303e07d4dbe18aff")
    },
        {
        id: "012",
        name:"Falda pliegues punto" ,
        img:"https://static.zara.net/assets/public/f823/aebe/27d14b81bb43/b0fd2f4206fc/06771025420-a2/06771025420-a2.jpg?ts=1714740125677&w=563" ,
        relevancia:10,
        precio:" 19.95€",
        descripcion: "Falda mini con pliegues. Tiro alto y cintura elástica.",
        tejido: "algodón",
        made: "París",
        fabricante_id:new ObjectId("664226bf303e07d4dbe18b02")
    },
        {
        id: "013",
        name:"Jersey polo liso" ,
        img:"https://static.zara.net/assets/public/6b5e/653d/06d94ee5827f/176eccfe0417/03920053306-015-a1/03920053306-015-a1.jpg?ts=1714725622414&w=563" ,
        relevancia: 3,
        precio:" 25.95€",
        descripcion: "Jersey polo fino de cuello solapa y manga corta. Bolsillo delantero de plastrón. Cierre frontal con botones.",
        tejido: "acetato",
        made: "Reino Unido",
        fabricante_id:new ObjectId("664226bf303e07d4dbe18b04")
    },
    {
        id: "014",
        name:"Top popelín lazo" ,
        img:"https://static.zara.net/assets/public/f5c1/d234/211b4b209e2e/6ead7e98c0f8/02746200250-a4/02746200250-a4.jpg?ts=1710510985568&w=563" ,
        relevancia: 3,
        precio:" 19.95€",
        descripcion: "Top corto de escote pico y tirantes anchos. Detalle de elásticos y lazo en pecho.",
        tejido: "algodón",
        made: "EEUU",
        fabricante_id:new ObjectId("664226bf303e07d4dbe18af3")
    },
    {
        id: "015",
        name:"Trench minimal" ,
        img:"https://static.zara.net/assets/public/2f03/2297/dc934950b538/61aa9acacc32/00518062684-1-p/00518062684-1-p.jpg?ts=1713278614895&w=563" ,
        relevancia: 8,
        precio:" 79.95€",
        descripcion: "Trench oversize confeccionado en hilatura con mezcla de algodón. Cuello subido y manga larga ajustable con trabilla y botones a presión. Bolsillos en delantero",
        tejido: "algodón",
        made: "Marruecos",
        fabricante_id:new ObjectId("664226bf303e07d4dbe18aff")
    },
    {
        id: "016",
        name:"Braguita bikini cortinilla" ,
        img:"https://static.zara.net/assets/public/cbf2/b7d9/02c54fad90bf/2020a367ef7c/02856029400-002-p/02856029400-002-p.jpg?ts=1713539612338&w=563" ,
        relevancia: 8,
        precio:" 17.95€",
        descripcion: "Braguita bikini tipo cortinilla. Forro interior.",
        tejido: "Poliéster",
        made: "España",
        fabricante_id:new ObjectId("664226bf303e07d4dbe18afd")
    },
    {
        id: "017",
        name:"Vestido tul drapeado" ,
        img:"https://static.zara.net/assets/public/9753/791a/339244588ee8/2c9986c76b0b/03070002050-p/03070002050-p.jpg?ts=1714725455973&w=563" ,
        relevancia: 6,
        precio:" 29.95€",
        descripcion: "Vestido corto de cuello halter y escote pico pronunciado. Tejido drapeado. Cierre lateral con cremallera oculta en costura.",
        tejido: "poliéster",
        made: "Portugal",
        fabricante_id:new ObjectId("664226bf303e07d4dbe18afb")
    },
    {
        id: "018",
        name:"Zueco serraje" ,
        img:"https://static.zara.net/assets/public/67e0/4a97/effb416f827d/dd174665815d/12556310105-p/12556310105-p.jpg?ts=1712738259726&w=563" ,
        relevancia: 7,
        precio:" 49.95€",
        descripcion: "Zapato plano tipo zueco en serraje. Detalle de hebilla metálica en un lateral. Acabado punta redonda.",
        tejido: "piel vacuno",
        made: "España",
        fabricante_id:new ObjectId("664226bf303e07d4dbe18afd")
    },
    {
        id: "019",
        name:"Sandalia plana piel",
        img:"https://static.zara.net/assets/public/01d5/a3a1/2a52429a83f6/2b3b3828bb3b/12600710091-015-p/12600710091-015-p.jpg?ts=1711366423859&w=563" ,
        relevancia: 5,
        precio:" 25.95€",
        descripcion: "Zapato tipo sandalia plana de piel con detalle de tiras cruzadas en la parte delantera.",
        tejido: "piel ovina",
        made: "India",
        fabricante_id:new ObjectId("664226bf303e07d4dbe18aff")
    },
    {
        id: "020",
        name:"Pendientes lazos perlas" ,
        img:"https://static.zara.net/assets/public/1369/bca1/f4e64c5e8a29/7aa16cf4a8da/04736071303-p/04736071303-p.jpg?ts=1714740144094&w=563" ,
        relevancia: 8,
        precio:" 12.95€",
        descripcion: "Pendientes metálicos colgantes con aplicación de perlas en forma de lazo. Cierre con tuerca.",
        tejido: "polimetacrilato de metilo",
        made: "Francia",
        fabricante_id:new ObjectId("664226bf303e07d4dbe18af7")
    },
    {
        id: "021",
        name:"Vestido forro moledador" ,
        img:"https://static.zara.net/assets/public/4810/d8f9/c6d44740b9fe/819ec360015b/01355808607-p/01355808607-p.jpg?ts=1714324074968&w=563" ,
        relevancia: 10,
        precio:" 25.95€",
        descripcion: "Vestido corto confeccionado en hilatura con poliamida. Escote redondo y tirantes finos ajustables. Costuras termoselladas. ",
        tejido: "poliamida",
        made: "China",
        fabricante_id:new ObjectId("664226bf303e07d4dbe18b02")
    },
    {
        id: "022",
        name:"Chaqueta punto" ,
        img:"https://static.zara.net/assets/public/bd02/5d60/6af0481da77a/57d4a8b56e31/01957016401-p/01957016401-p.jpg?ts=1709129970803&w=563" ,
        relevancia: 10,
        precio:" 25.95€",
        descripcion: "Chaqueta de cuello redondo y manga corta. Acabados en rib. Cierre frontal con botones forrados a tono.",
        tejido: "acrílico",
        made: "Francia",
        fabricante_id:new ObjectId("664226bf303e07d4dbe18b04")
    },
    {
        id: "023",
        name:"Shorts bordados" ,
        img:"https://static.zara.net/assets/public/88dd/5e23/92ac4599bfe9/cc82c03550e3/05770033172-a1/05770033172-a1.jpg?ts=1714736540490&w=563" ,
        relevancia: 2,
        precio:" 45.95€",
        descripcion: "Shorts de tiro alto con cremallera lateral oculta en costura. Detalle de bordados combinados a contraste y aplicación efecto espejo.",
        tejido: "algodón",
        made: "China",
        fabricante_id:new ObjectId("664226bf303e07d4dbe18afb")
    },
    {
        id: "024",
        name:"Body rib volantes" ,
        img:"https://static.zara.net/assets/public/6a65/60bc/55d242bb831a/ae8397c3a10a/00858311800-a1/00858311800-a1.jpg?ts=1710930757274&w=563" ,
        relevancia: 9,
        precio:" 17.95€",
        descripcion: "Body entallado de escote pico y manga sisa. Tejido combinado en popelín con volantes a tono. Detalle de tira en espalda. Cierre en bajo con botones presión.",
        tejido: "algodón",
        made: "Bangladesh",
        fabricante_id:new ObjectId("664226bf303e07d4dbe18af7")
    },
    {
        id: "025",
        name:"Camiseta texto" ,
        img:"https://static.zara.net/assets/public/646e/d5d4/d6984d95a767/4f7498feb812/05643316020-a1/05643316020-a1.jpg?ts=1714726138608&w=563" ,
        relevancia:6,
        precio:" 6.95€",
        descripcion: "Camiseta confeccionada en algodón 100% de escote redondo y manga corta. Detalle de texto en delantero combinado a contraste.",
        tejido: "algodón",
        made: "España",
        fabricante_id:new ObjectId("664226bf303e07d4dbe18af3")
    },
    {
        id: "026",
        name:"Vestido lencero satinado" ,
        img:"https://static.zara.net/assets/public/060a/733e/de154ad384f7/fba7a240c3f2/04661374321-p/04661374321-p.jpg?ts=1714740128715&w=563" ,
        relevancia: 5,
        precio:" 29.95€",
        descripcion: "Vestido midi satinado de escote pico y tirantes finos ajustables. Detalle de espalda descubierta con tira elástica. Forro interior combinado a tono. Cierre con cremallera oculta en costura.",
        tejido: "viscosa",
        made: "Reino Unido",
        fabricante_id:new ObjectId("664226bf303e07d4dbe18aff")
    },
    {
        id: "027",
        name:"Gafas de sol ovaladas" ,
        img:"https://static.zara.net/assets/public/ed03/1d4e/27e94138a8e1/90f8a926633b/02727014600-015-p/02727014600-015-p.jpg?ts=1714747322976&w=563" ,
        relevancia: 8,
        precio:" 39.95€",
        descripcion: "Gafas de sol con montura ovalada en acetato. Incluye funda.",
        tejido: "acetato",
        made: "China",
        fabricante_id:new ObjectId("664226bf303e07d4dbe18afd")
    },
    {
        id: "028",
        name:"Bandolera básica" ,
        img:"https://static.zara.net/assets/public/d7da/0efc/bc36493fbd5a/f4bcb8571a5c/16583310709-p/16583310709-p.jpg?ts=1713364169794&w=563" ,
        relevancia: 10,
        precio:"22.95€",
        descripcion: "Bolso formato bandolera. Doble asa ajustable y extraíble, una en tejido. Detalle de costura central. Cierre mediante doble cremallera.",
        tejido: "poliuretano",
        made: "Marruecos",
        fabricante_id:new ObjectId("664226bf303e07d4dbe18afb")
    },
    {
        id: "029",
        name:"Blazer satinada estampada" ,
        img:"https://static.zara.net/assets/public/2c0b/aab2/c5c64497a209/92637c5fab07/03215208330-p/03215208330-p.jpg?ts=1712831260211&w=563" ,
        relevancia: 7,
        precio:" 49.95€",
        descripcion: "Blazer de cuello solapa y manga larga con hombreras. Bolsillos delanteros con solapa. Forro interior combinado a contraste.",
        tejido: "poliéster",
        made: "México",
        fabricante_id:new ObjectId("664226bf303e07d4dbe18af7")
    },
    {
        id: "030",
        name:"Botín biker piel tachas" ,
        img:"https://static.zara.net/assets/public/4502/737e/d0c74a79b0ff/b3fec702579b/12170310802-p/12170310802-p.jpg?ts=1714736538240&w=563" ,
        relevancia: 9,
        precio:" 99.95€",
        descripcion: "Zapato tipo botín biker en piel con detalle de tachas. Tiras con hebilla decorativa. Acabado en punta cuadrada.",
        tejido: "piel vacuno",
        made: "Marruecos",
        fabricante_id:new ObjectId("664226bf303e07d4dbe18afb")
    }
    ];


const seedDB = async () =>{
    await Product.deleteMany();
    await Product.insertMany(newProducts);
};

seedDB().then(()=>{
    mongoose.connection.close();
})