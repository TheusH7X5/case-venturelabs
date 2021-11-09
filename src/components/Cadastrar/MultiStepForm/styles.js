import { makeStyles } from "@material-ui/core";


export const useStyles = makeStyles({
    root: {
        "& .MuiPaper-root.MuiStepper-root.MuiStepper-horizontal.MuiPaper-elevation0": {
            display: "flex",
            alignItems: "center",
            width: "auto",
        },
        "& .MuiStepIcon-root.MuiStepIcon-active": {
            color: "gray"
        },
        "& .MuiStepIcon-root.MuiStepIcon-completed": {
            color: "green"
        }

    },
    btn: {
        width: "50%",
        height: "3rem",
        marginTop: "18rem",
        background: "green",
        color: "#fff",
        "&:hover": {
            background: "green",
            opacity: "0.7",
            transition: "0.3s esase-in-out"
        }
    }
})