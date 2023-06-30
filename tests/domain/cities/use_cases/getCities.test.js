import request from 'supertest'
import { server }  from '../../../../src/index.js' // Ruta relativa al archivo que contiene la aplicación

describe('getCities', () => {
    describe('GET /api/cities/by_country/:country', () => {
        it('Retorna todos los paises disponibles', async () => {
            const expectedStatus = 200;
            const response = await request(server)
            .get(`/api/cities/by_country/`)        
        
            expect(response.status).toBe(expectedStatus);
            expect(response.body).toEqual(expectedResponse);
          });
   
        it('Caso para cuando se ingresa un pais que no tiene ciudades asociadas', async () => {
            const countryName = 'NonexistentCountry';
        
            const response = await request(server)
            .get(`/api/cities/by_country/${countryName.toLowerCase()}`);
        
            expect(response.status).toBe(200);
            expect(response.body).toEqual({
                message: 'No se encontraron ciudades para el pais ingresado',
            });
              
        })

        it('Se ingresa un nombre del pais con caracteres numerericos', async () => {
            const countryName = '1234'; // Nombre del país con caracteres numéricos
            const expectedStatus = 400;
            const expectedResponse = {
                message: 'Solo se aceptan caracteres no numericos',
            };
    
            const response = await request(server)
            .get(`/api/cities/by_country/${countryName.toLowerCase()}`);
    
            expect(response.status).toBe(expectedStatus);
            expect(response.body).toEqual(expectedResponse);
        })
    })
})
