import { ErrorMessage, Field } from 'formik';
import React from 'react'
import { styled } from 'styled-components'
import TextError from './TextError';

export default function TextArea(props) {
    const {label,name,...rest} = props;
  return (
    <Container>
       <label htmlFor={name}>{label}</label>
       <Field as='textarea' id={name} name={name} {...rest}/>
       <ErrorMessage name={name} component={TextError}/>
    </Container>
  )
}

const Container = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
width: 20rem;
 label{
    font-size: 24px;
    display: block;
    font-weight: 600;
 }
 textarea{
    border-radius: 0.3rem;
    padding: 1rem;
    border: 2px solid black;
    color: red;
 }

`