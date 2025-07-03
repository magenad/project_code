import popupCls from './popup.module.scss';
import { DropdownDirection } from '../../../types/ui';
export const mapDirectionClass: Record<DropdownDirection, string> = {
    'bottom left': popupCls.optionsBottomLeft,
    'bottom right': popupCls.optionsBottomRight,
    'top left': popupCls.optionsTopLeft,
    'top right': popupCls.optionsTopRight
};