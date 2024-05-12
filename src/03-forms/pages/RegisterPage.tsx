import { ChangeEvent, FormEvent, useState } from 'react'
import  '../styles/styles.css'
import { useForm } from '../hooks/useForm'
const RegisterPage = () => {

   const { email, name, password1, password2, onChange, resetForm, isValidEmail} = useForm({
    name:'',
    email: '',
    password1:'',
    password2:''
});


    const onSubmit =  (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        
    }

    



  return (
    <div>
      <h1>Register page</h1>
      <form noValidate onSubmit={onSubmit}>
        <input name='name' type="text" placeholder='name' value={ name } onChange={onChange} className={`${name.trim().length <= 0  && 'has-error'}`}/>
        { name.trim().length <= 0 && <span>Este campo es necesario</span>}
        <input name='email' type="email" placeholder='email' value={ email } onChange={onChange} className={`${!isValidEmail( email ) && 'has-error'}`}/>
        { !isValidEmail( email ) && <span>Este campo no es valido</span>}
        <input name='password1' type="password" placeholder='password' value={ password1 } onChange={onChange}/>
        <input name='password2' type="password" placeholder='repeat password' value={ password2 } onChange={onChange}/>
        <button type="submit" >Create</button>
        <button type="button" onClick={resetForm} >Reseat form</button>



      </form>
    </div>
  )
}


export default RegisterPage;
