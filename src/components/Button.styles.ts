import styled from 'styled-components'

export type ButtonVariant = 'primary' | 'secundary' | 'danger' | 'success';

interface ButtonContainerProps {
  variant: ButtonVariant;
}

const ButtonVariants = {
  primary: 'purple',
  
}

const buttonVariants = {
  primary: 'purple',
  secundary: 'orange',
  danger: 'red',
  success: 'green'
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 100px;
  height: 40px;

  ${props => {
    return `background-color: ${buttonVariants[props.variant]}`
  }}
`