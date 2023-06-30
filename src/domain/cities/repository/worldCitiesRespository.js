import worldCitiesDataset from '../../../../dataset/world-cities_json.json'

exports.getAllCitiesRepository = () => {
    return worldCitiesDataset
}

exports.searchCitiesByCountryName = (inputCountryName) => {
    if (inputCountryName.length < 3) {
      return {
        message: 'El país debe tener al menos 3 caracteres',
      };
    }
  
    const result = [];
    if (/^\d+$/.test(inputCountryName)) {
      return {
        message: 'Solo se aceptan caracteres no numericos',
      };
    }
    worldCitiesDataset.forEach((cityObject) => {
      if (inputCountryName.toLowerCase() === cityObject.country.toLowerCase()) {
        result.push(cityObject);
      }
    });
  
    if (result.length === 0) {
      return {
        message: 'No se encontraron ciudades para el pais ingresado',
      };
    }
  
    return {
      data: result, // Retornar el resultado dentro de la propiedad 'data'
    };
  };
  

exports.searchCityByCityNameAndCountry = (inputCityName, inputCountryName) => {
    const result = [];
    worldCitiesDataset.forEach((cityObject) => {
        if (
            inputCityName.toLowerCase() === cityObject.name.toLowerCase() &&
            inputCountryName.toLowerCase() === cityObject.country.toLowerCase()
        ){
            result.push(cityObject);
        }
    });
    return result;
  };