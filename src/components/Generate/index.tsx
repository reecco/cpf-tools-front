import { useEffect, useState } from "react";

import { ContainerProps } from "../../utils/types";
import Button from "../Button";
import Container from "../Container";
import Input from "../Input";
import Title from "../Title";
import './styles.scss';

function Generate({ className }: ContainerProps) {
  const [cpf, setCpf] = useState('');

  const generate = async () => {
    const response = await fetch('https://cpf-tools.vercel.app/v1/generate', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
      .then(res => res)
      .catch(error => error);

    if (response.code !== 200)
      return console.log(response);

    setCpf(response.cpf);
  }

  useEffect(() => {
    generate();
  }, []);

  return (
    <Container className={className}>
      <Title tag="h2" value="Gerar CPF" />
      <div className="box-generate">
        <div className="inputs-box">
          <Input
            className="input-cpf"
            type="text"
            placeholder={cpf}
            value={cpf}
            readOnly={true}
          />
          <Button
            className="btn-copy"
            value="Copiar"
            icon={'FaCopy'}
            onClick={() => navigator.clipboard.writeText(cpf)}
          />
        </div>
        <Button
          className="btn-generate"
          value="Gerar"
          onClick={generate}
        />
      </div>
    </Container>
  );
}

export default Generate;