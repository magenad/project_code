import { Button } from '@/shared/ui/Button';
import { useCounterActions } from '../model/slice/counterSlice';
import { useCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { useTranslation } from 'react-i18next';


export const Counter = () => {
    const { t } = useTranslation();
    const counterValue = useCounterValue();
    const { add, decrement, increment } = useCounterActions();
    const handlerInc = () => {
        increment();
    };
    const handlerDec = () => {
        decrement();
    };
    const handlerAddFive = () => {
        add(5);
    };

    return (
        <div>
            <h1 data-testid="value-title">{counterValue}</h1>
            <Button onClick={handlerAddFive} data-testid="increment-btn">{t('add five')} </Button>
            <Button onClick={handlerInc} data-testid="increment-btn">{t('increment')} </Button>
            <Button onClick={handlerDec} data-testid="decrement-btn">{t('decrement')}</Button>
        </div>
    );
};
