
const handleSearchTerm = (req, res, next) => {
    const { searchTerm } = req.query;
    if (searchTerm) {
      // Si existe un searchTerm en la consulta, puedes realizar cualquier procesamiento adicional aquí
      req.searchTerm = searchTerm; // Agrega searchTerm al objeto req para que esté disponible en el controlador
    }
    next(); // Pasa el control al siguiente middleware o al controlador
  };
  
  module.exports = { handleSearchTerm };
  