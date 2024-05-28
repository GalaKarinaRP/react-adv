import { ChangeEvent, FormEvent, useState } from "react";
import "../styles/styles.css";
import {  Form, Formik } from "formik";
import * as Yup from 'yup';
import { MyTextInput } from "../components";

const RegisterFormikPage = () => {


  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <div>
      <h1>Register formik page</h1>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password1: "",
          password2: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .min(2, "Debe tener minimo 2 caracteres")
            .max(15, "Debe tener maximo 15 caracteres")
            .required("Requerido"),
          email: Yup.string()
            .email("Email no tiene un formato valido")
            .required("Requerido"),
          password1: Yup.string()
            .required('La contraseña es obligatoria')
            .min(8, 'La contraseña debe tener al menos 8 caracteres'),
          password2: Yup.string()
            .oneOf([Yup.ref('password1')], 'Las contraseñas deben coincidir')
            .required('Debe repetir la contraseña')
        })}
      >

      {({handleReset}) => (
        <Form>
           <MyTextInput label="Name" name="name" />
           <MyTextInput label="Email" name="email" type="email" />
           <MyTextInput label="Password" name="password1" type="password" />
           <MyTextInput label="Repeat Password" name="password2" type="password" />


           <button type="submit"> Enviar </button>
           <button type="button" onClick={handleReset}>
            Reseat form
          </button>
        </Form>

      )}
       
      </Formik>
    </div>
  );
};

export default RegisterFormikPage;
