import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@material-ui/core';
import React from 'react'
import { MdExpandMore } from 'react-icons/md';
import { clientes } from '../../components/Cadastrar/utils';
import { ClientesContainer, useStyles } from './styles';
import { Box } from '@chakra-ui/layout'
import { Divider } from "@chakra-ui/react"



const ClientesPage = () => {

    const classes = useStyles();



    return (
      <Box
      display="flex" 
      alignItems="center" 
      justifyContent="center"
      width="100%">
      <Box
      minHeight='50vh'
      background="white"
      marginBottom="5rem"
      border="1px solid #999"
      width={[
          "70%",
          "70%",
          "60%",
          "50%",
      ]}
      >
        <Box marginTop="2rem" marginBottom="2rem">
            <Typography
                variant="h5" 
                style={{ color: "gray", textAlign: "center" }}>
                    Clientes Cadastrados
            </Typography> 
        </Box>
        <div className={classes.root}>
            <ClientesContainer>
    <Box minHeight='70vh'>
      <Accordion>
        <AccordionSummary
          expandIcon={<MdExpandMore />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          >
          <Typography><b>{clientes.nome} {clientes.sobrenome}</b></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box width="100%">
            <ul style={{listStyle: 'none'}}>
              <li><b>CPF:</b> {clientes.cpf}</li>
              <li><b>E-mail:</b> {clientes.email}</li>
              <li><b>Contato:</b> {clientes.contato}</li>
              <li><b>Data de Nascimento:</b> {clientes.dataNascimento}</li>
              <li><b>Renda Mensal:</b> R$ {clientes.rendaMensal}</li>
              <br/>
              <Typography variant='subtitle1' 
                style={{ textAlign: "center" }}><b>Endereço 1</b></Typography>
              <li><b>Cep:</b> {clientes.cep}</li>
              <li><b>Logradouro:</b> {clientes.logradouro}</li>
              <li><b>Número:</b> {clientes.numero}</li>
              <li><b>Complemento:</b> {clientes.complemento}</li>
              <li><b>Bairro:</b> {clientes.bairro}</li>
              <li><b>Localidade:</b> {clientes.localidade}</li>
              <li><b>UF:</b> {clientes.uf}</li>
              <br/>
              <Typography variant='subtitle1' 
                style={{ textAlign: "center" }}><b>Endereço 2</b></Typography>
              <li><b>Cep:</b> {clientes.cep2}</li>
              <li><b>Logradouro:</b> {clientes.logradouro2}</li>
              <li><b>Número:</b> {clientes.numero2}</li>
              <li><b>Complemento:</b> {clientes.complemento2}</li>
              <li><b>Bairro:</b> {clientes.bairro2}</li>
              <li><b>Localidade:</b> {clientes.localidade2}</li>
              <li><b>UF:</b> {clientes.uf2}</li>
            </ul>
          </Box>
        </AccordionDetails>
      </Accordion>
      <Divider />
      <Accordion>
        <AccordionSummary
          expandIcon={<MdExpandMore />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          >
          <Typography><b>João Pereira</b></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box width="100%">
            <ul style={{listStyle: 'none'}}>
              <li><b>CPF:</b> 123.456.789-09</li>
              <li><b>E-mail:</b> joaopereira@gmail.com</li>
              <li><b>Telefone:</b> 112222-2222</li>
              <li><b>Data de Nascimento:</b> 05/08/1960</li>
              <li><b>Renda Mensal:</b> R$ 2000</li>
              <br/>
              <Typography variant='subtitle1' 
                style={{ textAlign: "center", alignItems: "center", justifyContent: "center"}}><b>Endereço 1</b></Typography>
              <li><b>Cep:</b> 01001000</li>
              <li><b>Logradouro:</b> Rua toquinho</li>
              <li><b>Número:</b> 123</li>
              <li><b>Complemento:</b> casa</li>
              <li><b>Bairro:</b> Das neves</li>
              <li><b>Localidade:</b> São Paulo</li>
              <li><b>UF:</b> SP</li>
              <Typography variant='subtitle1' 
                style={{ textAlign: "center" }}><b>Endereço 2</b></Typography>
              <li><b>Cep:</b> 01001000</li>
              <li><b>Logradouro:</b> Rua toquinho</li>
              <li><b>Número:</b> 123</li>
              <li><b>Complemento:</b> casa</li>
              <li><b>Bairro:</b> Das neves</li>
              <li><b>Localidade:</b> São Paulo</li>
              <li><b>UF:</b> SP</li>
            </ul>
          </Box>
        </AccordionDetails>
      </Accordion>
    </Box>
            </ClientesContainer>
        </div>
                </Box>
                </Box>
    )
}

export default ClientesPage
