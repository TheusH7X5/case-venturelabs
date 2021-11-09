import { makeStyles } from "@material-ui/core";


export const useStyles = makeStyles({
    mainContainer: {
        display: "grid",
        justifyContent: "center",
        position: "relative",
        zIndex: 5
    },
    formContainer: {
        position: "relative",
        width: "28.125rem",
        height: "auto",
        padding: "2rem"
    },
    btn: {
        width: "100%",
        height: "3rem",
        background: "green",
        color: "#fff",
        "&:hover": {
            background: "green",
            opacity: "0.7",
            transition: "0.3s esase-in-out"
        }
    },
    desabledBtn: {
        background: "rgba(0,0,0, 0.38)",
        width: "100%",
        height: '3rem'
    },
    btnSave: {
        marginBottom:'1rem',
        width: "100%",
        height: "3rem",
        background: "green",
        color: "#fff",
        "&:hover": {
            background: "green",
            opacity: "0.7",
            transition: "0.3s esase-in-out"
        }
    }
})