import citiesRepository from '../repository/worldCitiesRespository'

exports.getAllCitiesUseCase = (ctx) => {
    ctx.body = citiesRepository.getAllCitiesRepository()
    ctx.status = 200;
    return ctx
}

exports.getCitiesByCountryUseCase = (ctx) => {
    const country = ctx.params.country;
  
    if (/^\d+$/.test(country)) {
      ctx.status = 400; // Establecer el código de estado a 400
      ctx.body = {
        message: 'Solo se aceptan caracteres no numericos',
      };
      return ctx;
    }
  
    const result = citiesRepository.searchCitiesByCountryName(country);
    ctx.body = result;
    return ctx;
  };

exports.getCitiesByCityNameAndCountryUseCase = (ctx) => {
    ctx.body = citiesRepository.searchCityByCityNameAndCountry(ctx.params.city, ctx.params.country)
    return ctx
}