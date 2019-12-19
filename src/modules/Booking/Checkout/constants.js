import * as Yup from 'yup';

export const FIELD_NAMES = {
  name: 'name',
  email: 'email'
};

const requiredMsg = 'This field is required!';

export const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('E-mail is not valid!')
    .required(requiredMsg),
  name: Yup.string()
    .required(requiredMsg)
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
});
