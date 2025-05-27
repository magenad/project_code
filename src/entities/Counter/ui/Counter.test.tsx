import { screen } from '@testing-library/react';
import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
import { Counter } from './Counter';
import userEvent from '@testing-library/user-event';

describe('Counter', function () {
    test('Should be able to create a button', function () {
        componentRender(<Counter />,{ initialState:{ counter:{ value:10 } } });
        expect(screen.getByTestId('value-title')).toHaveTextContent('10');
    });
    test('increment', async function () {
        componentRender(<Counter />,{ initialState:{ counter:{ value:10 } } });
        await userEvent.click(screen.getByTestId('increment-btn'));
        expect(screen.getByTestId('value-title')).toHaveTextContent('11');
    });
    test('decrement', async function () {
        componentRender(<Counter />,{ initialState:{ counter:{ value:10 } } });
        await userEvent.click(screen.getByTestId('decrement-btn'));
        expect(screen.getByTestId('value-title')).toHaveTextContent('9');
    });
  
});