import React from 'react';
import {Formik,Form} from 'formik';
import * as Yup from 'yup';
import {styled} from 'styled-components';
import FormikControl from './FormikControl';

function FormikContainer() {
    const initialValues = {
      email:"",
      description:""
    };
    const validationSchema = Yup.object({
      email:Yup.string().email("Invalid format").required("Required email"),
      textarea:Yup.string().required("Required description"),

    })
    const onSubmit = (values)=>{
        console.log("form data",values)
    }
  return (
    <Container>
      <Formik 
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      >
        {
            (formik)=>{
               return(
                <Form>
                   <FormikControl control='input' type='email' name='email' label='Email' />
                   <FormikControl control='textarea' name='textarea' label='Description'
                   rows="8" cols="38"/>
                   <button type='submit'>Submit</button>
                </Form>
               )
            }
        }
      </Formik>
    </Container>
  )
}

export default FormikContainer
const Container = styled.div`
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 gap: 1rem;
 form{
  display: flex;
  flex-direction: column;

  gap: 1rem;
 }
 button{
  border: none;
  border-radius: 0.3rem;
  width: 20.6rem;
  height: 2.5rem;
  cursor: pointer;
  transition: 0.3s ease;
  background: #ceb4b4;
  font-size: 20px;
  font-weight: 500;
  &:hover{
    background: #a7e1ee;
  }
  &:active{
    transform: scale(0.95);
  }
 }
`