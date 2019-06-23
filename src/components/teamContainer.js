import { Container, Header } from 'semantic-ui-react'
import Officer from './officer'
import React from "react"
import '../styles/teamContainers.css'

const executiveBoard = ["President", "Vice President", "Treasurer", "Secretary"]

const TeamContainer = ({ activeTeam, officers }) => (
    <>
        <Container>
            <Header as="h2" className="officers-header">{ activeTeam === "Leadership" ? "Executive Board" : "Team Leads" }</Header>
            <div className="officers-container">
                {
                    officers.filter(officer => {
                        if (activeTeam === "Leadership") {
                            const reducer = (acc, curr) => officer.position.includes(curr) || acc
                            return executiveBoard.reduce(reducer, false)
                        } else {
                            return officer.position.includes(activeTeam + " Chair")
                        }
                    }).map((officer, idx) => <Officer key={idx} {...officer} />)
                }
            </div>
        </Container>
        <Container>
            <Header as="h2" className="officers-header">{ activeTeam === "Leadership" ? "Team Leads" : "Officers" }</Header>
            <div className="officers-container">
                {
                    officers.filter(officer => {
                        if (activeTeam === "Leadership") {
                            return officer.position.includes("Chair")
                        } else {
                            return !officer.position.includes("Chair") && officer.team === activeTeam
                        }
                    }).map((officer, idx) => <Officer key={idx} {...officer} />)
                }
            </div>
        </Container>
    </>
)

export default TeamContainer
