import React from "react";
import {
  Typography,
  Button,
  TextField,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@material-ui/core";
import SendSharpIcon from "@material-ui/icons/SendSharp";
import BlockSharpIcon from "@material-ui/icons/BlockSharp";
import { UFS } from "../utils";
import { BootstrapInput, useStyles } from "./styles";
import useForm from "../../../Hooks/useForm";
import { useToast } from "@chakra-ui/toast";
import { Box } from '@chakra-ui/layout'



const StepTwo = ({ activeStep, steps, handleNext }) => {


	const [form, onChange, clear] = useForm({
	cep: "",
	logradouro: "",
	numero: "",
	complemento: "",
	bairro: "",
	localidade: "",
	uf: "",
	cep2: "",
	logradouro2: "",
	numero2: "",
	complemento2: "",
	bairro2: "",
	localidade2: "",
	uf2: "",
	});

	const toast = useToast();


	const subtmitForm = (event) => {
        localStorage.setItem('cep', form.cep)
        localStorage.setItem('logradouro', form.logradouro)
        localStorage.setItem('numero', form.numero)
        localStorage.setItem('complemento', form.complemento)
        localStorage.setItem('bairro', form.bairro)
        localStorage.setItem('localidade', form.localidade)
        localStorage.setItem('uf', form.uf)
		event.preventDefault()
        toast({
            title: "Salvo!",
            description: "Endereço salvos com sucesso.",
            status: "success",
            duration: 6000,
            isClosable: true,
            position: "bottom-left",
          })
}

	const subtmitForm2 = (event) => {
		localStorage.setItem('cep2', form.cep2)
        localStorage.setItem('logradouro2', form.logradouro2)
        localStorage.setItem('numero2', form.numero2)
        localStorage.setItem('complemento2', form.complemento2)
        localStorage.setItem('bairro2', form.bairro2)
        localStorage.setItem('localidade2', form.localidade2)
        localStorage.setItem('uf2', form.uf2)
		event.preventDefault()
		toast({
            title: "Salvo!",
            description: "Endereço 2 salvos com sucesso.",
            status: "success",
            duration: 6000,
            isClosable: true,
            position: "bottom-left",
          })
	}

	// const onBlurCep = (e) => {
	// 	const { value } = e.target;
	
	// 	const cep = value?.replace(/[^0-9]/g, "");
	
	// 	if (cep?.length !== 8) {
	// 		return;
	// 	}
	// };

  // const getDataByCep = (cep) => {
	// axios
	//   .get(`https://viacep.com.br/ws/${cep}/json/`)
	//   .then(({ data }) => {
	// 	setFields(
	// 	  (fields.cep = cep),
	// 	  (fields.logradouro = data.logradouro),
	// 	  (fields.bairro = data.bairro),
	// 	  (fields.localidade = data.localidade),
	// 	  (fields.uf = data.uf)
	// 	);
	//   })
	//   .catch((error) => {
		// 	console.log("Error na busca por cep");
	//   });
  // };
	

  const classes = useStyles();

  return (
	  <Box>

	<div className={classes.mainContainer}>
	  <Typography variant="h5" style={{ color: "#999", textAlign: "center" }}>
		Primeiro Endereço
	  </Typography>
	  <div className={classes.formContainer}>
		<form onSubmit={subtmitForm}>
		  <TextField
			style={{ width: "100%", margin: "1rem 0" }}
			label="Cep"
			type="number"
			variant="outlined"
			name="cep"
			value={form.cep}
			onChange={onChange}
			autoFocus
			/>
		  <TextField
			style={{ width: "100%", marginBottom: "1rem" }}
			label="Logradouro"
			variant="outlined"
			name="logradouro"
			value={form.logradouro}
			onChange={onChange}
			/>
		  <TextField
			style={{ width: "100%", marginBottom: "1rem" }}
			label="Número"
			variant="outlined"
			type="number"
			name="numero"
			value={form.numero}
			onChange={onChange}
			/>
		  <TextField
			style={{ width: "100%", marginBottom: "1rem" }}
			label="Complemento"
			variant="outlined"
			name="complemento"
			value={form.complemento}
			onChange={onChange}
			/>
		  <TextField
			style={{ width: "100%", marginBottom: "1rem" }}
			label="Bairro"
			variant="outlined"
			name="bairro"
			value={form.bairro}
			onChange={onChange}
			/>
		  <TextField
			style={{ width: "100%", marginBottom: "1rem" }}
			label="Localidade"
			variant="outlined"
			name="localidade"
			value={form.localidade}
			onChange={onChange}
			/>
		  <FormControl sx={{ m: 1 }} variant="standard">
			<InputLabel id="demo-customized-select-label">UF</InputLabel>
			<Select
			  labelId="demo-customized-select-label"
			  id="demo-customized-select"
			  name="uf"
			  value={form.uf}
			  onChange={onChange}
			  input={<BootstrapInput />}
			  >
			  {UFS.map((uf) => (
				  <MenuItem key={uf} value={uf}>
				  {uf}
				</MenuItem>
			  ))}
			</Select>
		  </FormControl>
		  	<Button
			className={classes.btnSave}
			variant="contained"
			type="submit"
			>Salvar
			
			</Button>
		  </form>
		  </div>

		  	<Typography variant="h5" style={{ color: "#999", textAlign: "center" }}>
				Segundo Endereço
			</Typography>
			<div className={classes.formContainer}>
			<form onSubmit={subtmitForm2}>
		  <TextField
			style={{ width: "100%", margin: "1rem 0" }}
			label="Cep"
			type="number"
			variant="outlined"
			name="cep2"
			value={form.cep2}
			onChange={onChange}
			/>
		  <TextField
			style={{ width: "100%", marginBottom: "1rem" }}
			label="Logradouro"
			variant="outlined"
			name="logradouro2"
			value={form.logradouro2}
			onChange={onChange}
			/>
		  <TextField
			style={{ width: "100%", marginBottom: "1rem" }}
			label="Número"
			variant="outlined"
			type="number"
			name="numero2"
			value={form.numero2}
			onChange={onChange}
			/>
		  <TextField
			style={{ width: "100%", marginBottom: "1rem" }}
			label="Complemento"
			variant="outlined"
			name="complemento2"
			value={form.complemento2}
			onChange={onChange}
			/>
		  <TextField
			style={{ width: "100%", marginBottom: "1rem" }}
			label="Bairro"
			variant="outlined"
			name="bairro2"
			value={form.bairro2}
			onChange={onChange}
			/>
		  <TextField
			style={{ width: "100%", marginBottom: "1rem" }}
			label="Localidade"
			variant="outlined"
			name="localidade2"
			value={form.localidade2}
			onChange={onChange}
			/>
		  <FormControl sx={{ m: 1 }} variant="standard">
			<InputLabel id="demo-customized-select-label">UF</InputLabel>
			<Select
			  labelId="demo-customized-select-label"
			  id="demo-customized-select"
			  name="uf2"
			  value={form.uf2}
			  onChange={onChange}
			  input={<BootstrapInput />}
			  >
			  {UFS.map((uf) => (
				  <MenuItem key={uf} value={uf}>
				  {uf}
				</MenuItem>
			  ))}
			</Select>
		  </FormControl>
		  <Button
			className={classes.btnSave}
			variant="contained"
			type="submit"
			>
				Salvar
		</Button>
		  {!form.cep ||
		  !form.logradouro ||
		  !form.numero ||
		  !form.complemento ||
		  !form.bairro ||
		  !form.localidade ||
		  !form.uf ? (
			  <Button
			  className={classes.desabledBtn}
			  variant="contained"
			  desabled
			  endIcon={<BlockSharpIcon />}
			  >
			  {activeStep === steps.length ? "Salvar" : "Proximo"}
			</Button>
		  ) : (
			  <Button
			  className={classes.btn}
			  variant="contained"
			  onClick={handleNext}
			  endIcon={<SendSharpIcon />}
			  >
			  {activeStep === steps.length ? "Salvar" : "Proximo"}
			</Button>
		  )}
		</form>
	  </div>
	</div>
		  </Box>
  );
};

export default StepTwo;
