import * as yup from 'yup'

const formSchema = yup.object().shape({

    name: yup.string()
        .trim()
        .min(2, 'The name must be at least two characters long')
        .required('Name is a required field'),
    email: yup.string()
        .email('Must be a valid email address')
        .required('Email is a required field'),
    password: yup.string()
        .trim()
        .min(6, 'The password needs to be at least 6 characters long')
        .required('Password is required'),
    role: yup.string().required('Please select a role'),
    tos: yup.boolean()
        .oneOf([true],'Please accept the TOS'),
        
})

export default formSchema