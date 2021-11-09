import React from 'react'
import { 
    Typography, 
    Button, 
    TextField
} from '@material-ui/core'
import SendSharpIcon from "@material-ui/icons/SendSharp"
import BlockSharpIcon from "@material-ui/icons/BlockSharp"
import { useStyles } from './styles'
import useForm from '../../../Hooks/useForm'
import { useToast } from '@chakra-ui/toast'
import { Box } from '@chakra-ui/layout'
    

const StepThree = ({activeStep, steps, handleNext}) => {
    
    const [form, onChange, clear] = useForm({ dataNascimento: "", cpf: "", rendaMensal: "" })

    const toast = useToast();

    const subtmitForm = (event) => {
        localStorage.setItem('dataNascimento', form.dataNascimento)
        localStorage.setItem('cpf', form.cpf)
        localStorage.setItem('rendaMensal', form.rendaMensal)
        event.preventDefault()
        toast({
            title: "Salvo!",
            description: "Dados Pessoais salvos com sucesso.",
            status: "success",
            duration: 6000,
            isClosable: true,
            position: "bottom-left",
          })
    }

    const classes = useStyles();
    return (
        <Box minH='60vh'>
        <div className={classes.mainContainer}>
            <Typography 
            variant="h5" 
            style={{ color: "#999", textAlign: "center" }}>
                Insira Seus Dados
            </Typography>
            <div className={classes.formContainer}> 
                <form onSubmit={subtmitForm}>
                    <TextField 
                    style={{width: "100%", margin: "1rem 0"}} 
                    label="Data de Nascimento" 
                    type="number"
                    variant="outlined" 
                    name="dataNascimento"
                    value={form.dataNascimento}
                    onChange={onChange}
                    autoFocus
                    />
                
                    <TextField 
                    style={{width: "100%", marginBottom: "1rem"}} 
                    label="CPF" 
                    variant="outlined" 
                    name="cpf"
                    value={form.cpf}
                    onChange={onChange}
                    />
                    
                    <TextField 
                    style={{width: "100%", marginBottom: "1rem"}} 
                    label="Renda Mensal" 
                    variant="outlined" 
                    name="rendaMensal"
                    type="number"
                    value={form.rendaMensal}
                    onChange={onChange}
                    />
                    <Button
                    className={classes.btnSave}
                    variant="contained"
                    type="submit"
                    >
                        Salvar
                    </Button>
                    {
                        !form.dataNascimento ||
                        !form.cpf ||
                        !form.rendaMensal
                        ?
                        (
                            <Button 
                            className={classes.desabledBtn}
                            variant="contained"
                            desabled
                            endIcon={<BlockSharpIcon/>}
                            >
                                {activeStep === steps.length ? "Salvar" : "Proximo"}
                            </Button>
                        )
                        :
                        (
                            <Button 
                            className={classes.btn}
                            variant="contained"
                            onClick={handleNext}
                            endIcon={<SendSharpIcon/>}
                            >
                                {activeStep === steps.length ? "Salvar" : "Proximo"}
                            </Button>
                        )
                    }
                </form>
            </div>
        </div>
        </Box>
    )
}

export default StepThree
