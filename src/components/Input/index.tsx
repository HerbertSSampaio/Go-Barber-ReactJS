import React, { InputHTMLAttributes } from 'react';
import { Interface } from 'readline';
import Container from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: String;
}

const Input: FC.React<InputProps> = (props) => (
  <Container>
    <input {...props } />
  </Container>
);

export default Input;
