import React from 'react';
import CounterApp from '../CounterApp';
import '@testing-library/jest-dom';

import { shallow } from 'enzyme';

describe('Pruebas con CounterApp', ()=>{

	let wrapper = shallow( <CounterApp />);

	//Se ejecuta antes de cada prueba
	beforeEach( ()=> {

		//Inicializo el wrapper antes de cada prueba
		wrapper = shallow( <CounterApp />);
	});

	test('Debe mostrar el snapshot de CounterApp', ()=>{

		expect( wrapper ).toMatchSnapshot();

	});


	test('Debe mostrar el valor del contador en CounterApp', ()=>{

			const valor = 100;
			const wrapper = shallow( <CounterApp value={ valor }/>);

			const valorMostrado = wrapper.find('h2').text();

			expect( valorMostrado.trim() ).toBe( valor.toString() );

		});

	test('Debe mostrar el valor luego del +1', ()=>{

		wrapper.find('button').at(0).simulate('click');

		const valorMostrado = wrapper.find('h2').text().trim();
		expect( valorMostrado ).toBe('11');

	});

	test('Debe mostrar el valor luego del -1', ()=>{

		wrapper.find('button').at(2).simulate('click');

		const valorMostrado = wrapper.find('h2').text().trim();
		expect( valorMostrado ).toBe('9');

	});

	test('Debe mostrar el valor pasado para Inicializar', ()=>{

		const valor = 120;

		const wrapper = shallow( <CounterApp value={valor} /> );

		// Modifico el valor original
		wrapper.find('button').at(2).simulate('click');
		wrapper.find('button').at(2).simulate('click');

		// Click sobre el botón reset
		wrapper.find('button').at(1).simulate('click');

		const valorMostrado = wrapper.find('h2').text().trim();

		expect( valorMostrado ).toBe( valor.toString() );
	});

});