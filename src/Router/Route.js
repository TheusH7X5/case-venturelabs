import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import MultiStepForm from '../components/Cadastrar/MultiStepForm/MultiStepForm'
import Header from '../components/Header/Header'
import ClientesPage from '../pages/ClientesPage/ClientesPage'
import HomePage from '../pages/HomePage/HomePage'
import { AppContainer } from '../styles'

export const Router = () => {
    return (
        <BrowserRouter>
            <AppContainer>
                <Header/>
            </AppContainer>
            <Switch>
                <Route exact path="/">
                    <HomePage/>
                </Route>
                <Route exact path="/clientes">
                    <ClientesPage/>
                </Route>
                <Route exact path="/cadastrar-clientes" >
                    <MultiStepForm/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}
