import * as Yup from "yup";
import "../styles/styles.css";
import { Formik, Form} from "formik";
import { MyCheckbox, MySelect, MyTextInput } from "../components";
export const FormikAbstractation = () => {
  return (
    <div>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          terms: false,
          jobType: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, "Debe tener minimo 15 caracteres")
            .required("Requerido"),
          lastName: Yup.string()
            .max(15, "Debe tener minimo 15 caracteres")
            .required("Requerido"),
          email: Yup.string()
            .email("Email no tiene un formato valido")
            .required("Requerido"),
          terms: Yup.boolean().oneOf([true],'Debe de aceptar las condiciones'),
          jobType: Yup.string().notOneOf(['it-jr','Esta opcion no es permitida']).required("Requerido"),
        })}
      >
        {(formik) => (
          <Form>
            <MyTextInput label="First Name" name="firstName" />
            <MyTextInput label="Last Name" name="lastName" />
            <MyTextInput label="Email" name="email" type="email" />
            <MySelect label="Job type" name="jobType">
            <option value="">Pick something</option>
              <option value="developer">Developer</option>
              <option value="designer">Designer</option>
              <option value="it-senior">It-senior</option>
              <option value="it-jr">It-Junior</option>
            </MySelect>          
           
           
            <MyCheckbox label="Terms and conditions" name="terms" />

            <button type="submit"> Enviar </button>
          </Form>
        )}
      </Formik>
      <h1>formik Basic Tutorial</h1>
    </div>
  );
};
