import { IconSize } from '../icon';
import { BodyLevel } from '../typography';

export type TabSize = 'md' | 'lg';

export type TabType = 'line' | 'contained';

export const TAB_GROUP_SIZE_TO_BODY_LEVEL: Record<TabSize, BodyLevel> = {
  md: 5,
  lg: 4,
};

export const TAB_GROUP_SIZE_TO_ICON_SIZE: Record<TabSize, IconSize> = {
  md: 'sm',
  lg: 'md',
};
