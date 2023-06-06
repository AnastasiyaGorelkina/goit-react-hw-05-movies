import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  font-size: 30px;
  align-items: center;
`;

export const Conteiner = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Linker = styled(Link)`
  font-weight: 600;
  color: black;
  text-decoration: none;
  font-size: 25px;
  padding: 5px;
  display: inline-block;

  &:active {
    color: green;
  }

  &:hover,
  &:focus {
    color: orange;
  }
`;

export const Back = styled(Link)`
  font-size: 25px;
  font-weight: 600;
  text-decoration: none;
  color: green;

   &:hover,
  &:focus {
    color: orange;
  }
`;

export const Text = styled.p`
  font-size: 20px;
  font-weight: 400;
`;

export const BoxConteiner = styled.div`
  display: flex;
  gap: 40px;
`;

export const Box = styled.div`
display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Input = styled.input`
  width: 700px;
  height: 50px;
  border-radius: 10px;
  border: 4px solid green;
  font-size: 25px;
`;

export const Form = styled.form`
  margin-top: 30px;
  display: flex;
  align-content: stretch;
  justify-content: center;
`;

export const Button = styled.button`
  width: 100px;
  height: 50px;
  border-radius: 10px;
  border: 4px solid green;
  background: green;
  color: orange;
  font-size: 20px;
  margin-top: 15px;

  &:hover {
    color: blue;
    border: 1px solid black;
    background: grey;
  }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
`;