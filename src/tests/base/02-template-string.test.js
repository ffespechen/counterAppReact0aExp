import '@testing-library/jest-dom';

import { getSaludo } from '../../base/02-template-string';

describe('Pruebas para 02-template-string', () => {

	test('Prueba de función getSaludo', () =>{

		const nombre = 'Flavio';

		const resultado = getSaludo( nombre );

		expect( resultado ).toBe( 'Hola ' + nombre );

	});

	test('Prueba de función getSaludo con valor por defecto', () =>{

		const resultado = getSaludo();

		expect( resultado ).toBe( 'Hola Tolkien' );

	});

})