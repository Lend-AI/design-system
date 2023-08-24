import { IconSize } from '../icon';
import { BodyLevel } from '../typography';

export type StepSize = 'md' | 'lg';

export type StepType = 'line' | 'contained';

export const STEP_GROUP_SIZE_TO_BODY_LEVEL: Record<StepSize, BodyLevel> = {
  md: 5,
  lg: 4,
};

export const STEP_GROUP_SIZE_TO_ICON_SIZE: Record<StepSize, IconSize> = {
  md: 'sm',
  lg: 'md',
};
