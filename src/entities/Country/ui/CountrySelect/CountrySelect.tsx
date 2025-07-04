import { useTranslation } from 'react-i18next';
import { Country } from '../../model/types/country';
import { memo, useCallback } from 'react';
import { ListBox } from '@/shared/ui/Popups';

interface CountrySelectProps {
    value?:Country;
    className?:string;
    onChange?: (value: Country) => void;
    readonly?: boolean;

}
const options = [
    { value:Country.Armenia,content:Country.Armenia },
    { value:Country.Belarus,content:Country.Belarus },
    { value:Country.Kazakhstan,content:Country.Kazakhstan },
    { value:Country.Ukraine,content:Country.Ukraine },
    { value:Country.Russia,content:Country.Russia }
];

export const CountrySelect = memo(({ className,value,onChange,readonly }:CountrySelectProps) => {
    const { t } = useTranslation();
    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Country);
    }, [onChange]);
    return (
        <ListBox
            onChange={onChangeHandler}
            className={className}
            value={value}
            defaultValue={t('Выбрать страну')}
            readonly={readonly}
            items={options}
            direction='top right'
            label={t('Указать страну')}
        />
    );
    // return (
    //     <Select
    //         label={t('Указать страну')}
    //         readonly={readonly}
    //         value={value}
    //         className={classNames('',{},[className])}
    //         onChange={onChangeHandler}
    //         options={options}
    //     />
    // );
});
