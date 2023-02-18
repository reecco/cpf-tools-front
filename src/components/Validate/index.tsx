import { useState } from "react";

import Button from "../Button";
import InputMask from "../InputMask";
import { ContainerProps } from "../../utils/types";
import './styles.scss';
import Title from "../Title";
import Container from "../Container";

function Validate({ className }: ContainerProps) {
  const [warning, setWarning] = useState('');
  const [message, setMessage] = useState('');
  const [messageError, setMessageError] = useState('');
  const [cpf, setCpf] = useState('');

  const inputPaste = (e: any) => {
    e.preventDefault();
    navigator.clipboard.readText()
      .then(text => {
        const regex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;

        if (!regex.test(text)) {
          setMessageError('Digite um CPF válido.');
          setWarning('warning');

          setTimeout(() => {
            setMessageError('');
            setWarning('');
          }, 4000);
          return;
        } 
        
        setCpf(text);
      })
      .catch(error => alert(error));
  }

  const inputClear = (e: any) => {
    e.preventDefault();
    setCpf('');
  }

  const validate = async (e: any) => {
    e.preventDefault();
    setWarning('');
    setMessageError('');
    setMessage('');
    const cpf: string = e.target.cpf.value.replace(/[-.]/g, '');

    if (cpf.length !== 11) {
      setWarning('warning');
      setMessageError('Digite um CPF válido.');
      return;
    }

    const response = await fetch('https://cpf-tools.vercel.app/v1/validate/' + cpf, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
      .then(res => res)
      .catch(error => error);

    if (response.code === 400) {
      setMessageError(response.message);
      setWarning('warning-error');
      return;
    }

    setMessage(response.message);
    return;
  }

  return (
    <Container className={className}>
      <Title tag="h2" value="Validar CPF" />
      <form onSubmit={validate}>
        <div className="box-input">
          <InputMask
            className="input-cpf"
            type="text"
            name="cpf"
            id="cpf"
            placeholder="000.000.000-00"
            value={cpf}
            onChange={(e: any) => setCpf(e.target.value)}
          />
          {cpf.length > 0 ? (
            <Button
              className="btn-paste"
              value="Limpar"
              icon={'MdClose'}
              onClick={inputClear}
            />
          ) : (
            <Button
              className="btn-paste"
              value="Colar"
              icon={'FaPaste'}
              onClick={inputPaste}
            />
          )}
        </div>
        <Button
          className="btn-validate"
          value="Validar"
        />
      </form>
      <div className="result">
        <div
          style={
            warning === 'warning' ? { backgroundColor: '#ffc107' } :
            warning === 'warning-error' ? { backgroundColor: '#dc3545' } :
            message ? { backgroundColor: '#28a745' } : { backgroundColor: '' }
          }
          className="message-box">
          <p>{messageError ? messageError : message}</p>
        </div>
      </div>
    </Container>
  );
}

export default Validate;