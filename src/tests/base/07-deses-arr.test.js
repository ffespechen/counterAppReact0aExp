import { retornaArreglo } from '../../base/07-deses-arr';

describe( 'Prueba en 07 desestructura arreglos ', () => {

	test( 'retornaArreglo debe devolver un string y un número', () => {

		// Desestructurando
		const [ letras, numeros ] = retornaArreglo();

		expect( letras ).toBe( 'ABC' );
		expect( typeof letras).toBe( 'string' );

		expect( numeros ).toBe( 123 );
		expect( typeof numeros ).toBe( 'number');

	})
})