import { Input, Button, Card, Table } from 'antd';
import styled from 'styled-components';

const fontPrimary = 'Martel Sans';
const primary = '#0c2e60';
const radius = '12px';

export const StyledCard = styled(Card)`
  width: 100% !important;
  box-shadow: 0 0 40px 0 rgba(94,92,154,.06);
  border-radius: ${radius};
  font-family: ${fontPrimary};
  margin: 0;
  margin-bottom: 15px;
  border: none;

  .ant-card-cover img {
    border-radius: 12px 12px 0 0;
  }
`

export const StyledInput = styled(Input)`
  padding: 8px 16px;
  font-size: 13px;
  height: auto;
  border-radius: ${radius};
  font-family: ${fontPrimary};
  background-color: ${props => props.bgcolor ? props.bgcolor : '#fff'};

  &:focus, &:hover {
    box-shadow: none;
    -webkit-box-shadow: none;
    border-color: ${primary};
  }
`

export const StyledInputIcon = styled(Input)`
  input {
    padding: 8px 16px;
    font-size: 13px;
    height: auto;
    border-radius: ${radius};
    font-family: ${fontPrimary};

    &:focus, &:hover {
      box-shadow: none;
      -webkit-box-shadow: none;
      border-color: ${primary};
    }
  }
`

export const StyledButton = styled(Button)`
  border-radius: ${radius};
  padding: 8px 20px;
  height: auto;
  box-shadow: 4px 7px 12px 0 rgba(255, 102, 59, 0.2);
  background-color: #ff663b;
  color: white;
  border: none;
  font-weight: 700;
  font-size: 12px;
  font-family: ${fontPrimary};

  &:hover {
    color: #fff;
    background-color: #ff663b;
  }
`

export const StyledTable = styled(Table)`
  background-color: #fff;
  width: 100%;

  @media screen and (min-width:0px) and (max-width:991px) {
    overflow-x: scroll;
    display: inline-block;
  }
`

export const StyledTextAreaFeed = styled(Input.TextArea)`
  background-color: #fcfcfd;
  border-radius: 0;
  padding: 15px 15px 0;
  font-size: 14px;
  resize: none;
  font-family: ${fontPrimary};
  border-radius: ${radius};

  &:focus, &:hover {
    outline: none;
    box-shadow: none;
    border-color: ${primary};
  }

  &.ant-input {
    height: 120px;
  }
`
