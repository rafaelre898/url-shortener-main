import * as Yup from 'yup';

export const initialValues = { url: '', status: null };

export const validationSchema = Yup.object({
  url: Yup.string().url('Invalid URL').required('Required'),
});
