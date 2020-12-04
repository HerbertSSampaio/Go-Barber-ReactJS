import React, { ButtonHTMLAttributes } from 'react';
import { Container } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC.React<ButtonProps> = ({ children, ...rest }) => (
  <Container type="Button" {...rest}>
    {children}
  </Container>
);

export default Button;
