import React from 'react'
import logo from '../../assets/logoVenturelabs.png'
import { Button, Divider, Fade, ListItemIcon, Menu, MenuItem, Typography } from '@material-ui/core';
import { IoPersonAddOutline, IoPersonOutline } from 'react-icons/io5';
import { AiOutlineHome, AiOutlineClose } from 'react-icons/ai';
import { goToCadastrarPage, goToClientesPage, goToHomePage } from '../../Router/coordinator';
import { useHistory } from 'react-router-dom';
import { DivButton, DivContainer } from './styles';
import { Box } from '@chakra-ui/layout'
import { Image } from "@chakra-ui/react"


const Header = () => {
    const history = useHistory()

    const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

    return (
        <Box 
        width={[
            "100%",
            "100%",
            "100%",
            "100%",
          ]}
        >
            <DivContainer>
                <Image 
                width={[
                    "50%",
                    "50%",
                    "50%",
                    "30%",
                  ]}
                marginTop="3rem"
                height="5.5rem"
                src={logo}/>
            </DivContainer>
            <Box
             width={[
                "50%",
                "50%",
                "50%",
                "30%",
              ]}
            >
            <DivButton>
                <Button
                startIcon={<IoPersonOutline/>}
                variant="text"
                color='primary'
                id="fade-button"
                aria-controls="fade-menu"
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                >
                    Clientes
                </Button>
                <Menu
                    id="fade-menu"
                    MenuListProps={{
                    'aria-labelledby': 'fade-button',
                    }}
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    TransitionComponent={Fade}
                >
                    <MenuItem onClick={() => goToHomePage(history)}>
                        <ListItemIcon>
                            <AiOutlineHome fontSize="large" />
                        </ListItemIcon>
                        <Typography>
                            <b>Home</b>
                        </Typography>
                    </MenuItem>
                    <Divider sx={{ my: 0.5 }} />
                    <MenuItem onClick={() => goToCadastrarPage(history)}>
                        <ListItemIcon>
                            <IoPersonAddOutline fontSize="large" />
                        </ListItemIcon>
                        <Typography>
                            <b>Cadastrar</b>
                        </Typography>
                    </MenuItem>
                    <Divider sx={{ my: 0.5 }} />
                    <MenuItem onClick={() => goToClientesPage(history)}>
                        <ListItemIcon>
                            <IoPersonOutline fontSize="large" />
                        </ListItemIcon>
                        <Typography>
                            <b>Cadastrados</b>
                        </Typography>
                    </MenuItem>
                    <Divider sx={{ my: 0.5 }} />
                    <MenuItem onClick={handleClose}>
                        <ListItemIcon>
                            <AiOutlineClose fontSize="large" />
                        </ListItemIcon>
                        <Typography>
                            <b>Fechar</b>
                        </Typography>
                    </MenuItem>
                </Menu>
            </DivButton>
            </Box>
        </Box>
    )
}

export default Header
