import * as Yup from 'yup';
import  '../styles/styles.css'
import { useFormik } from 'formik'
const FormikBasicPage = () => {

        const { handleSubmit , errors, touched, getFieldProps } = useFormik({
            initialValues:{
                firstName:'',
                lastName: '',
                email: ''
            },
            onSubmit: (values) => {
                console.log(values);
                
            },
            validationSchema: Yup.object({
                firstName: Yup.string().max(15, 'Debe tener minimo 15 caracteres').required('Requerido'),
                lastName: Yup.string().max(15, 'Debe tener minimo 15 caracteres').required('Requerido'),
                email: Yup.string().email('Email no tiene un formato valido').required('Requerido'),

                
            })
    
        });
    
      return (
        <div>
          <h1>formik Basic Tutorial</h1>
          <form noValidate onSubmit={ handleSubmit } >
            <label htmlFor="firstName">First Name</label>
            <input type="text" {...getFieldProps('firstName')} />
            {touched.firstName && errors.firstName && <span> {errors.firstName }</span>}
    
            <label htmlFor="lasttName">Last Name</label>
            <input type="text" {...getFieldProps('lastName')} />
            {touched.lastName && errors.lastName && <span> {errors.lastName }</span>}

            <label htmlFor="email">Email</label>
            <input type="email" {...getFieldProps('email')} />
            {touched.email && errors.email && <span> {errors.email }</span>}
            
            <button type="submit"> Enviar </button>
             </form>
        </div>
      )
    }
    

export default FormikBasicPage;
