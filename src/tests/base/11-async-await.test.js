import { getImagen } from '../../base/11-async-await';

describe('Pruebas con async-await-fetch', () =>{

	// Debe idicarse que se trata de una función asíncrona
	test('getImagen debe devolver una URL', async () =>{

		// Utilizamos el await porque la función nos devuelve una Promise
		const url = await getImagen();

		expect( typeof url ).toBe( 'string' );

	});
});
