import React from 'react'
import { Link } from 'react-router-dom';
import { withFormik, Form, Field } from "formik";
import * as Yup from 'yup'

const Login = ({touched, errors}) => {

    return(
        <div>
             <Form >
            <h2 className='title'>Login</h2>
            <Field className='input' type="text" name="username" placeholder='Username'/>
            {touched.username && errors.username && <p>{errors.username}</p>}
            <Field className='input' type='password' name ='password' placeholder='Password'/>
            {touched.password && errors.password && <p>{errors.password}</p>}
            <button className='submitBtn' data-testid='submitBtn' type='submit'><Link to='/recipes/'>Sign in</Link></button>
        </Form>
        </div>
    )
}

const LoginWithFormik = withFormik({
mapPropsToValues({username, password}){
    return{
        username: username || '',
        password: password || ''
    }
    },
    validationSchema: Yup.object().shape({
        username: Yup.string().required('Username is required'),
        password: Yup.string().min(6).required('password is required')
    }),
})(Login)

export default LoginWithFormik