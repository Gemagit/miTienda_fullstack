var mongoose = require("mongoose");
var Fabricante= require("../models/fabricantes.model");
const ObjectId = require('mongodb').ObjectId;

var newFabricantes = [
    {
        id: "001",
        nombre: "Fabricante Elegante S.A.",
        CIF: "A12345678",
        direccion: "Calle Elegancia, 1, Ciudad Elegante, País Elegante",
        producto_id: new ObjectId
      },
      {
        id: "002",
        nombre: "Modas Creativas Ltda.",
        CIF: "B23456789",
        direccion: "Avenida Creatividad, 25, Ciudad Creativa, País Creativo",
        producto_id: new ObjectId
      },
      {
        id: "003",
        nombre: "Textiles Innovadores S.A.",
        CIF: "C34567890",
        direccion: "Calle Innovación, 10, Ciudad Innovadora, País Innovador",
        producto_id: new ObjectId
      },
      {
        id: "004",
        nombre: "Confecciones Modernas Ltda.",
        CIF: "D45678901",
        direccion: "Avenida Modernidad, 15, Ciudad Moderna, País Moderno",
        producto_id: new ObjectId
      },
      {
        id: "005",
        nombre: "Fabricante de Estilo Elegante S.A.",
        CIF: "E56789012",
        direccion: "Calle Estilo, 5, Ciudad Elegante, País Elegante",
        producto_id: new ObjectId
      },
      {
        id: "006",
        nombre: "Innovaciones Textiles S.A.",
        CIF: "F67890123",
        direccion: "Avenida Innovación, 20, Ciudad Innovadora, País Innovador",
        producto_id: new ObjectId
      },
      {
        id: "007",
        nombre: "Confecciones Elegantes Ltda.",
        CIF: "G78901234",
        direccion: "Calle Elegancia, 10, Ciudad Elegante, País Elegante",
        producto_id: new ObjectId
      },
      {
        id: "008",
        nombre: "Textiles Modernos S.A.",
        CIF: "H89012345",
        direccion: "Avenida Modernidad, 30, Ciudad Moderna, País Moderno",
        producto_id: new ObjectId
      },
      {
        id: "009",
        nombre: "Estilos Creativos S.A.",
        CIF: "I90123456",
        direccion: "Calle Creatividad, 15, Ciudad Creativa, País Creativo",
        producto_id: new ObjectId
      },
      {
        id: "010",
        nombre: "Textiles Elegantes Ltda.",
        CIF: "J01234567",
        direccion: "Avenida Elegancia, 40, Ciudad Elegante, País Elegante",
        producto_id: new ObjectId
      },
      {
        id: "011",
        nombre: "Innovaciones en Moda S.A.",
        CIF: "K12345678",
        direccion: "Calle Innovación, 25, Ciudad Innovadora, País Innovador",
        producto_id: new ObjectId
      },
      {
        id: "012",
        nombre: "Confecciones Creativas Ltda.",
        CIF: "L23456789",
        direccion: "Avenida Creatividad, 35, Ciudad Creativa, País Creativo",
        producto_id: new ObjectId
      },
      {
        id: "013",
        nombre: "Textiles de Vanguardia S.A.",
        CIF: "M34567890",
        direccion: "Calle Vanguardia, 5, Ciudad Innovadora, País Innovador",
        producto_id: new ObjectId
      },
      {
        id: "014",
        nombre: "Confecciones Elegantes S.A.",
        CIF: "N45678901",
        direccion: "Avenida Elegancia, 45, Ciudad Elegante, País Elegante",
        producto_id: new ObjectId
      },
      {
        id: "015",
        nombre: "Moda Creativa S.A.",
        CIF: "O56789012",
        direccion: "Calle Creatividad, 20, Ciudad Creativa, País Creativo",
        producto_id: new ObjectId
      },
      {
        id: "016",
        nombre: "Textiles Modernos Ltda.",
        CIF: "P67890123",
        direccion: "Avenida Modernidad, 50, Ciudad Moderna, País Moderno",
        producto_id: new ObjectId
      },
      {
        id: "017",
        nombre: "Estilos Elegantes S.A.",
        CIF: "Q78901234",
        direccion: "Calle Elegancia, 15, Ciudad Elegante, País Elegante",
        producto_id: new ObjectId
      },
      {
        id: "018",
        nombre: "Innovaciones en Textiles Ltda.",
        CIF: "R89012345",
        direccion: "Avenida Innovación, 40, Ciudad Innovadora, País Innovador",
        producto_id: new ObjectId
      },
      {
        id: "019",
        nombre: "Confecciones de Vanguardia S.A.",
        CIF: "S90123456",
        direccion: "Calle Vanguardia, 10, Ciudad Innovadora, País Innovador",
        producto_id: new ObjectId
      },
      {
        id: "020",
        nombre: "Textiles Creativos S.A.",
        CIF: "T01234567",
        direccion: "Avenida Creatividad, 55, Ciudad Creativa, País Creativo",
        producto_id: new ObjectId
      },
      {
        id: "021",
        nombre: "Innovaciones en Confecciones S.A.",
        CIF: "U12345678",
        direccion: "Calle Innovación, 30, Ciudad Innovadora, País Innovador",
        producto_id: new ObjectId
      },
      {
          id: "022",
          nombre: "Textiles Elegantes S.A.",
          CIF: "V23456789",
          direccion: "Avenida Elegancia, 60, Ciudad Elegante, País Elegante",
          producto_id: new ObjectId
        },
        {
          id: "023",
          nombre: "Moda Moderna S.A.",
          CIF: "W34567890",
          direccion: "Calle Modernidad, 20, Ciudad Moderna, País Moderno",
          producto_id: new ObjectId
        },
        {
          id: "024",
          nombre: "Estilos Creativos Ltda.",
          CIF: "X45678901",
          direccion: "Avenida Creatividad, 65, Ciudad Creativa, País Creativo",
          producto_id: new ObjectId
        },
        {
          id: "025",
          nombre: "Confecciones Elegantes Ltda.",
          CIF: "Y56789012",
          direccion: "Calle Elegancia, 20, Ciudad Elegante, País Elegante",
          producto_id: new ObjectId
        },
        {
          id: "026",
          nombre: "Textiles Innovadores Ltda.",
          CIF: "Z67890123",
          direccion: "Avenida Innovación, 70, Ciudad Innovadora, País Innovador",
          producto_id: new ObjectId
        },
        {
          id: "027",
          nombre: "Innovaciones en Moda Ltda.",
          CIF: "A78901234",
          direccion: "Calle Innovación, 35, Ciudad Innovadora, País Innovador",
          producto_id: new ObjectId
        },
        {
          id: "028",
          nombre: "Confecciones de Vanguardia Ltda.",
          CIF: "B89012345",
          direccion: "Avenida Vanguardia, 25, Ciudad Innovadora, País Innovador",
          producto_id: new ObjectId
        },
        {
          id: "029",
          nombre: "Textiles de Moda S.A.",
          CIF: "C90123456",
          direccion: "Calle Moda, 25, Ciudad Creativa, País Creativo",
          producto_id: new ObjectId
        },
        {
          id: "030",
          nombre: "Estilos Elegantes Ltda.",
          CIF: "D01234567",
          direccion: "Avenida Elegancia, 30, Ciudad Elegante, País Elegante",
          producto_id: new ObjectId
        }
    ]

    const seedDB = async () =>{
        await Fabricante.deleteMany();
        await Fabricante.insertMany(newFabricantes);
    };
    
    seedDB().then(()=>{
        mongoose.connection.close();
    })