// Core
import * as yup from 'yup';

const tooShortMessage = 'At least ${min} characters';

export const taskSchema: yup.ObjectSchema<ITaskFormShape> = yup.object({
  description: yup.string().min(2, tooShortMessage),
});

export interface ITaskFormShape {
  description?: string;
}
