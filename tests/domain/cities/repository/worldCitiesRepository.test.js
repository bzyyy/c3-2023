
import citiesRepository from '../../../../src/domain/cities/repository/worldCitiesRespository'
import worldCitiesDataset from '../../../../dataset/world-cities_json.json'

describe('citiesRepository', () => {
    describe('getAllCitiesRepository', () => {
      it('Retorna todas las ciudades', () => {
        const result = citiesRepository.getAllCitiesRepository()
        expect(result).toEqual(worldCitiesDataset)
      })
    })
  
    describe('searchCitiesByCountryName', () => {
        it('Retorna las ciudades dando un nombre', () => {
          const inputCountryName = 'United Arab Emirates'
          const expectedCities = worldCitiesDataset.filter(city => city.country === inputCountryName)
    
          const result = citiesRepository.searchCitiesByCountryName(inputCountryName)
    
          expect(result.data).toEqual(expectedCities)
        })
      })
    
      describe('searchCityByCityNameAndCountry', () => {
        it('Retorna las ciudades dando un nombre y ciudad', () => {
          const inputCityName = 'Dubai'
          const inputCountryName = 'United Arab Emirates'
          const expectedCities = worldCitiesDataset.filter(city => city.name === inputCityName && city.country === inputCountryName)
    
          const result = citiesRepository.searchCityByCityNameAndCountry(inputCityName, inputCountryName)
    
          expect(result).toEqual(expectedCities)
        })
      })
    })