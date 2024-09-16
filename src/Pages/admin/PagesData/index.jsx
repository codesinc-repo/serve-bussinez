import React from "react";
import Header from "../../../Components/Header";
import { Footer } from "../../../Components/Footer";
import { Container } from "react-bootstrap";
import EditorComponent from "../../../Components/EditorComponent";

function PagesData()
{
    return(
        <>
        <Header/>
        <Container>
        <EditorComponent/>
        </Container>

        <Footer/>
        </>
    )
}