import { getHeroeByIdAsync } from '../../base/09-promesas';
import { heroes } from '../../base/heroes';


describe( 'Pruebas con aysn', () =>{

	// En funciones asíncronas, se pasa un parámetro `done` que se ejecuta
	// Cuando el proceso termina
	test('getHeroeByIdAsync devuelve un héroe async', ( done ) =>{

		const id = 1;

		getHeroeByIdAsync( id )
			.then( heroe => {

				expect( heroe ).toEqual( heroes[0] );
				done();

			});

	});

	// Prueba de función asíncrona ( async ) para controlar el error
	// Se debe enviar el parámetro done
	test('getHeroeByIdAsync devuelve error', ( done )=> {

		const id = 15;

		getHeroeByIdAsync( id )
		.catch( err => {

			expect(err).toBe('No se pudo encontrar el héroe');
			done();

		});
	});

});