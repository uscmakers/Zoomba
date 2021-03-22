import { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import axios from 'axios'

import toast, { Toaster } from 'react-hot-toast'

function About() {
    return (
        <Container>
            <Row>
                <h1>Welcome to Zoomba!</h1>
            </Row>
        </Container>
    )
}

export default About
