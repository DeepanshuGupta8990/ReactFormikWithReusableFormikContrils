import { ErrorMessage, Field } from 'formik';
import React from 'react'
import { styled } from 'styled-components';
import TextError from './TextError';

export default function (props) {
    const {label,name,...rest} = props;
  return (
    <Container>
      <label htmlFor={name}>{label}</label>
      <Field id={name} name={name} {...rest}/>
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
 input{
    width: 20rem;
    height: 1.5rem;
    border-radius: 0.3rem;
    padding:.2rem ;
    outline: none;
    border: 2px solid black;
 }

`