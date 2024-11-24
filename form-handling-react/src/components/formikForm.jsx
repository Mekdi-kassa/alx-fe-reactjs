import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
    username: Yup.string().required('Username is required'),
    email: Yup.string().email('Invalid email format').required('Email is required'),
    password: Yup.string().required('Password is required'),
});

const FormikForm  = () => {
    return (
        <Formik
            initialValues={{ username: '', email: '', password: '' }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
                console.log('Form submitted:', values);
                // Here you would typically send values to the API
            }}
        >
            {() => (
                <Form>
                    <div>
                        <label>Username:</label>
                        <Field name="username" type="text" />
                        <ErrorMessage name="username" component="div" style={{ color: 'red' }} />
                    </div>
                    <div>
                        <label>Email:</label>
                        <Field name="email" type="email" />
                        <ErrorMessage name="email" component="div" style={{ color: 'red' }} />
                    </div>
                    <div>
                        <label>Password:</label>
                        <Field name="password" type="password" />
                        <ErrorMessage name="password" component="div" style={{ color: 'red' }} />
                    </div>
                    <button type="submit">Register</button>
                </Form>
            )}
        </Formik>
    );
};

export default FormikForm;