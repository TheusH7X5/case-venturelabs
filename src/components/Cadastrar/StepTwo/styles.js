import { InputBase, makeStyles, styled } from "@material-ui/core";

export const useStyles = makeStyles({
    mainContainer: {
        justifyContent: "center",
        position: "relative",
        zIndex: 5
    },
    formContainer: {
        position: "relative",
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

export const BootstrapInput = styled(InputBase)(({ theme }) => ({
    'label + &': {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
    },
    '& .MuiInputBase-input': {
      borderRadius: 4,
      position: 'relative',
      backgroundColor: theme.palette.background.paper,
      border: '1px solid #ced4da',
      fontSize: 16,
      padding: '10px 26px 10px 12px',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:focus': {
        borderRadius: 4,
        borderColor: '#80bdff',
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
      },
    },
  }));