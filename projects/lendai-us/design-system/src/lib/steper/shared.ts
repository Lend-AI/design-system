import { BodyLevel } from '../typography';

export type StepSize = 'md' | 'lg';

export const STEP_GROUP_SIZE_TO_BODY_LEVEL: Record<StepSize, BodyLevel> = {
  md: 5,
  lg: 4,
};
