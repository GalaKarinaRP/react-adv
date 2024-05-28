import { Form, Formik} from "formik";
import formJson from "../data/custom-form.json";
import { MySelect, MyTextInput } from "../components";
import * as Yup from 'yup';

const initialValues:{[x:string]:any } = {}
const requiredFields:{[key:string]: any} = {}
for (const input of formJson) {
    initialValues[ input.name] = input.value;
    if( !input.validations ) continue;

    let squema = Yup.string();

    for (const rule of input.validations) {
      if( rule.type === "required"){
        squema =  squema.required("Este campo es requerido");
      }
      
    }

    requiredFields[ input.name ] = squema;
}

const validationsSchema =  Yup.object({...requiredFields});

const DinamicForm = () => {

   

  return (
    <div>
      <h1>Dinamic form</h1>
      <Formik
        initialValues={ initialValues }
        validationSchema={validationsSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {(formik) => (
          <Form 
          noValidate>
            {formJson.map(({ type, name, placeholder, label, options }) => {
                if(type === "input" || type === "email" || type === "password"){
                    return (
                      <MyTextInput key={ name } label={label} name={name} type={type as any} placeholder={placeholder} />
                    );
                } else if( type === "select"){
                    return(
                    <MySelect key={name} label={label} name={name} >
                        <option value="">Select an option</option>
                        {
                            options?.map( ({id, label})  => (
                                 <option value={id}>{label}</option>
                            ))
                        }
                    </MySelect>
                            )                }
            })}
            <button type="submit">Enviar</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default DinamicForm;
