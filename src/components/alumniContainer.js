import { Container } from 'semantic-ui-react'
import Officer from './officer'
import React from "react"
import '../styles/teamContainers.css'

const AlumniContainer = ({ alumni }) => (
    <Container>
        <div className="officers-container">
            {
                alumni.map((officer, idx) => <Officer key={idx} {...officer} />)
            }
        </div>
    </Container>
)

export default AlumniContainer
