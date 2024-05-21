import * as yup from 'yup';

export const validationSchema = yup.object({
    email: yup.string()
        .required("Email is required")
        .email("Email must be a valid email address"),
    password: yup.string()
        .required("Password is required")
        .min(6, 'Password must be at least 6 characters long'),
    confirmPassword: yup.string()
        .when('$isLoginForm', (isLoginForm, schema) =>
            isLoginForm ? schema : schema.required("Confirm password is required").oneOf([yup.ref('password')], "Passwords must match")
        )
});
