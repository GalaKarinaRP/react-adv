import * as Yup from "yup";
import "../styles/styles.css";
import { useFormik, Formik, Form, Field, ErrorMessage } from "formik";
export const FormikComponent = () => {
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
            <label htmlFor="firstName">First Name</label>
            <Field name="firstName" type="text" />
            <ErrorMessage component="span" name="firstName" />

            <label htmlFor="lasttName">Last Name</label>
            <Field name="lastName" type="text" />
            <ErrorMessage component="span" name="lastName" />

            <label htmlFor="email">Email</label>
            <Field name="email" type="text" />
            <ErrorMessage component="span" name="email" />

            <label htmlFor="jobType">Job type</label>
            <Field name="jobType" as="select">
              <option value="">Pick something</option>
              <option value="developer">Developer</option>
              <option value="designer">Designer</option>
              <option value="it-senior">It-senior</option>
              <option value="it-jr">It-Junior</option>
            </Field>
            <ErrorMessage component="span" name="jobType" />

            <label>
              <Field name="terms" type="checkbox" />
              Terms and conditions
            </label>

            <ErrorMessage component="span" name="terms" />

            <button type="submit"> Enviar </button>
          </Form>
        )}
      </Formik>
      <h1>formik Basic Tutorial</h1>
    </div>
  );
};
