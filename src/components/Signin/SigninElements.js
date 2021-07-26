import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  min-height: 692px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 0;
  overflow: hidden;
  background: rgb(36, 149, 56);
  );
`;

export const FormWrap = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width: 400) {
        height: 80%;
    }
`

export const Icon = styled(Link)`
    margin-left: 32px;
    margin-top: 32px;
    text-decoration: none;
    color: #fff;
    font-weight: 700;
    font-size: 38px;

    @media screen and (max-width: 480px) {
        margin-left: 16px;
        margin-right: 8px;
    }
`

export const FormContent = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width: 480px) {
        padding: 10px;
    }
`

export const Form = styled.form`
    background: #323232;
    max-width: 400px;
    height: auto;
    width: 100%;
    z-index: 1;
    display: grid;
    margin: 0 auto;
    padding: 80px 32px;
    border-radius: 5px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);

    @media screen and (max-width: 400px) {
    padding: 32px 32px;
    }
`;

export const FormH1 = styled.h1`
    margin-bottom: 44px;
    color: #fff;
    font-size: 28px;
    font-weight: 500;
    text-align: center;
`;

export const FormLabel = styled.label`
    margin-bottom: 12px;
    font-size: 18px;
    color: #fff;
`;

export const FormInput = styled.input`
    padding: 16px 16px;
    margin-bottom: 34px;
    border: none;
    border-radius: 6px;
`;

export const FormButton = styled.button`
  background: #afd91a;
  padding: 16px 0;
  border: none;
  border-radius: 6px;
  color: #010606;
  font-size: 24px;
  cursor: pointer;
`;
export const Text = styled.span`
    text-align: center;
    margin-top: 26px;
    color: #fff;
    font-size: 14px;
`;