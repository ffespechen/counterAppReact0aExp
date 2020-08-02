import React from 'react';
import PrimeraApp from '../PrimeraApp';
import '@testing-library/jest-dom';
// import { render } from '@testing-library/react';
import { shallow } from 'enzyme';

describe('Pruebas componentes <PrimeraApp />', () =>{

	test('Debería mostrar "Hola soy Ironman!"', () =>{

		const mensaje = 'Hola soy Ironman!';

		// Desestructuro el resultado, en lugar de obtener una const
		// const { getByText } = render( <PrimeraApp saludo={ mensaje }/>);

		// En el expect verifico si tengo el texto esperado
		// expect( getByText(mensaje) ).toBeInTheDocument();

		const wrapper = shallow( <PrimeraApp saludo={ mensaje }/> );

		expect( wrapper ).toMatchSnapshot();

	});

});