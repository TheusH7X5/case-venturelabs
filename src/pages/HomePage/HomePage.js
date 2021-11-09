import React from 'react'
import logo from '../../assets/VL_Element.gif'
import { HomePageContainer } from './styles'
import { Image } from "@chakra-ui/react"


const HomePage = () => {
    return (
        <>
            <HomePageContainer>
                <Image 
                height={[
                    "200px",
                    "400px",
                    "450px",
                    "600px",
                ]}
                width={[
                    "80%",
                    "80%",
                    "80%",
                    "60%",
                ]}
                src={logo}
                />
            </HomePageContainer>
        </>
    )
}

export default HomePage
