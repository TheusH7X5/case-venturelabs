import React from 'react'
import { 
    Typography, 
    Button, 
    TextField,
    InputAdornment
} from '@material-ui/core'
import SendSharpIcon from "@material-ui/icons/SendSharp"
import BlockSharpIcon from "@material-ui/icons/BlockSharp"
import { useStyles } from './styles'
import useForm from '../../../Hooks/useForm'
import { MdOutlinePhoneIphone } from 'react-icons/md'
import { useToast } from '@chakra-ui/toast'
import { Box } from '@chakra-ui/layout'


const StepOne = ({activeStep, steps, handleNext}) => {

    const [form, onChange, clear] = useForm({ firstname: "", lastname: "", email: "", contato: "" })

    const toast = useToast();

    const subtmitForm = (event) => {
        localStorage.setItem('firstname', form.firstname)
        localStorage.setItem('lastname', form.lastname)
        localStorage.setItem('email', form.email)
        localStorage.setItem('contato', form.contato)
        event.preventDefault()
        toast({
            title: "Salvo!",
            description: "Dados Cadastrais salvos com sucesso.",
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
                    label="Nome" 
                    variant="outlined" 
                    name="firstname"
                    value={form.firstname}
                    onChange={onChange}
                    autoFocus
                    />
                    <TextField 
                    style={{width: "100%", marginBottom: "1rem"}} 
                    label="Sobrenome" 
                    variant="outlined" 
                    name="lastname"
                    value={form.lastname}
                    onChange={onChange}
                    />
                    <TextField 
                    style={{width: "100%", marginBottom: "1rem"}} 
                    label="E-mail" 
                    variant="outlined" 
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={onChange}
                    />
                    <TextField 
                    style={{width: "100%", marginBottom: "1rem"}} 
                    label="Contato" 
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                        <MdOutlinePhoneIphone />
                        </InputAdornment>
                    ),
                }}
                variant="outlined" 
                type="number"
                name="contato"
                value={form.contato}
                onChange={onChange}
                placeholder="(00) 0 0000-0000"
                />
                    <Button
                    className={classes.btnSave}
                    variant="contained"
                    type="submit"
                    >
                        Salvar
                    </Button>
                    {
                        !form.firstname ||
                        !form.lastname ||
                        !form.email
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

export default StepOne
