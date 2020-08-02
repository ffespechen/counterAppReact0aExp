import { getUser, getUsuarioActivo } from '../../base/05-funciones';

describe( 'Pruebas en 05-funciones', () =>{

	test( 'getUser() debe devolver un objeto', ()=>{

		const userTest = {
        	uid: 'ABC123',
        	username: 'El_Papi1502'
		};

		const usuario = getUser();

		// Para comparar objetos
		expect( userTest ).toEqual( usuario );
	});

	test( 'getUsuarioActivo( param ) debe devolver un objeto', ()=>{

		const param = 'Flavio';

		const userTest = {
        	uid: 'ABC567',
        	username: param,
		};

		const usuario = getUsuarioActivo( param );

		// Para comparar objetos
		expect( userTest ).toEqual( usuario );
	});


})