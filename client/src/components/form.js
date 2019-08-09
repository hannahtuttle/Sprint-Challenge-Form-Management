import React from 'react'
import { withFormik, Form, Field } from "formik";
import * as Yup from 'yup'
import axios from 'axios'

const RegistrationForm = ({touched, errors}) => {

    return(
        <Form className ='registrationForm'>
            <h2 className='title'>Registration Form</h2>
            <Field className='input' type="text" name="username" placeholder='Username'/>
            {touched.username && errors.username && <p>{errors.username}</p>}
            <Field className='input' type='password' name ='password' placeholder='Password'/>
            {touched.password && errors.password && <p>{errors.password}</p>}
            <button className='submitBtn' data-testid='submitBtn' type='submit'>Submit</button>
        </Form>
    ) 
}

const FormWithFormik = withFormik({

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
        handleSubmit(values){
            axios.post('http://localhost:5000/api/register', values)
            .then(response => {
                console.log(response)
            })
            .catch(err => {
                console.log(err.response)
            })
            
        }
    
})(RegistrationForm)

export default FormWithFormik