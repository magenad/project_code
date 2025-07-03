import { Popover as HPopover } from '@headlessui/react';
import popupCls from '../../styles/popup.module.scss';
import { ReactNode } from 'react';
import { DropdownDirection } from 'shared/types/ui';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Popover.module.scss';
import { mapDirectionClass } from '../../styles/consts';

interface PopoverProps {
    className?: string;
    direction?: DropdownDirection;
    trigger: ReactNode;
    children: ReactNode;
    opened?: boolean;
}

export function Popover(props: PopoverProps) {
    const { className, trigger, direction = 'bottom right', children, opened = false } = props;
    return (
        <HPopover className={classNames(cls.Popover, {}, [className, popupCls.popup])}>
            <HPopover.Button className={popupCls.trigger}>
                {trigger}
            </HPopover.Button>

            <HPopover.Panel className={classNames(cls.panel, {}, [mapDirectionClass[direction]])} static={opened}>
                {children}
            </HPopover.Panel>
        </HPopover>
    );
}

