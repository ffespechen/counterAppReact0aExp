
describe( 'Mis pruebas', () => {



	test('Los dos strings deben ser IGUALES', () => {

		// 1. Arrange (Inicializar)
		const mensaje1 = 'Hola Mundo';

		// 2. Act (Actuar)
		const mensaje2 = `Hola Mundo`;

		// 3. Assert (Observar el comportamiento esperado)
		expect( mensaje1 ).toBe( mensaje2 );

	});

	// test('Esta prueba FALLA', () => {

	// 	// 1. Arrange (Inicializar)
	// 	const mensaje1 = 'FALLA';

	// 	// 2. Act (Actuar)
	// 	const mensaje2 = `FALLA?`;

	// 	// 3. Assert (Observar el comportamiento esperado)
	// 	expect( mensaje1 ).toBe( mensaje2 );

	// });


});