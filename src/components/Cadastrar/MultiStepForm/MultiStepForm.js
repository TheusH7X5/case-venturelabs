import React, { useState } from 'react'
import {Stepper, Step, StepLabel, Typography, Button } from '@material-ui/core'
import { goToClientesPage, goToHomePage } from '../../../Router/coordinator'
import { useHistory } from 'react-router-dom'
import StepOne from '../StepOne/StepOne'
import StepTwo from '../StepTwo/StepTwo'
import StepThree from '../StepThree/StepThree'
import { useStyles } from './styles'
import { Box } from '@chakra-ui/layout'


const MultiStepForm = () => {

    const history = useHistory()
    //REACT HOOKS
    const [activeStep, setActiveStep] = useState(0);
    
    function getStep() {
        return ["DADOS CADASTRAIS", "ENDEREÇOS", "DADOS PESSOAIS"]
    }
    
    const handleNext = (e) => {
        e.preventDefault();
        setActiveStep(prevActiveStep => prevActiveStep + 1)
    }
    
    const steps = getStep();
    
    function getStepsContent(stepindex) {
        switch (stepindex) {
            case 0:
                return (
                    <StepOne
                handleNext={handleNext}
                activeStep={activeStep}
                steps={steps}
                />
                );
                case 1:
                    return (
                        <StepTwo
                        handleNext={handleNext}
                        activeStep={activeStep}
                        steps={steps}
                        />
                        );
                        case 2:
                            return (
                                <StepThree
                                handleNext={handleNext}
                                activeStep={activeStep}
                                steps={steps}
                                />
                                );
                                default: return "Uncknown Step";
                            }
                        }
                        
                        const classes = useStyles();
                        
                        return (
                            <Box 
                            minHeight='100vh'
                            display="flex" 
                            alignItems="center" 
                            justifyContent="center"
                            width="100%"
                            >
                                <Box
                                background="white"
                                margin="2rem"
                                border="1px solid #999"
                                minHeight='60vh'
                                width={[
                                    "70%",
                                    "70%",
                                    "60%",
                                    "50%",
                                ]}
                                >

                            <div className={classes.root}>
                        <Stepper activeStep={activeStep} activeStepalternativeLabel>
                            {steps.map(label => (
                                <Step key={label}>
                                    <StepLabel>
                                        {label}
                                    </StepLabel>
                                </Step>
                            ))}
                        </Stepper>
                        <Box>
                            {activeStep === steps.length 
                            ?
                            <Box>
                        <Typography
                        variant="h5" 
                        style={{ color: "green", textAlign: "center" }}>
                            Seus Dados Foram Salvos
                        </Typography>
                        <Box>   
                            <Button 
                            className={classes.btn}
                            variant="contained"
                            onClick={() => goToHomePage(history)}
                            >
                                Voltar
                            </Button>
                            <Button 
                            className={classes.btn}
                            variant="contained"
                            onClick={() => goToClientesPage(history)}
                            >
                                Lista de Clientes
                            </Button>
                        </Box> 
                    </Box>
                        : 
                        (
                            <Box>
                            {getStepsContent(activeStep)}
                        </Box>
                    )}
                </Box>
        </div>
                    </Box>
        </Box>
    )
}

export default MultiStepForm
