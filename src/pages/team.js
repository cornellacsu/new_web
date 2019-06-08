import React, { Component } from "react"
import { Image, Container, Dropdown, Header } from 'semantic-ui-react'
import { StaticQuery, graphql } from "gatsby"
import Navbar from "../components/navbar"
import Officer from "../components/officer"
import data from '../data/team.json'
import "../styles/team.css"

class Team extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTeam: 'Administrative'
        }
    }

    handleTeamChange = (_, { value }) => {
        this.setState({ activeTeam: value })
    }

    render() {
        const officers = data.officers.filter(officer => officer.team.includes(this.state.activeTeam))
        const teamOptions = [
            {
                key: 'Administrative',
                text: 'Administrative',
                value: 'Administrative',
            },
            {
                key: 'Design',
                text: 'Design',
                value: 'Design',
            },
            {
                key: 'Social',
                text: 'Social',
                value: 'Social',
            },
            {
                key: 'Corporate',
                text: 'Corporate',
                value: 'Corporate',
            },
            {
                key: 'Academic',
                text: 'Academic',
                value: 'Academic',
            },
            {
                key: 'Publicity',
                text: 'Publicity',
                value: 'Publicity',
            },
            {
                key: 'Webdev',
                text: 'Webdev',
                value: 'Webdev',
            },
            {
                key: 'Alumni',
                text: 'Alumni',
                value: 'Alumni',
            },
        ]
        
        console.log(officers)

        return (
            <div>
                <Navbar activePage="team" />
                <Container fluid>
                    <Header className="team-header">
                        Meet the{' '}
                        <Dropdown
                            inline
                            options={teamOptions}
                            defaultValue={teamOptions[0].value}
                            onChange={this.handleTeamChange}
                        />
                        {' '}Team
                    </Header>
                    <Container>
                        <Header as="h2" className="officers-header">Team Leads</Header>
                        <div className="officers-container">
                            {
                                officers.filter(officer => {
                                    if (this.state.activeTeam === "Administrative") {
                                        return officer.position === "President"
                                    } else {
                                        return officer.position.includes("Chair")
                                    }
                                }).map(officer => <Officer {...officer} />)
                            }
                        </div>
                    </Container>
                    <Container>
                        <Header as="h2" className="officers-header">Officers</Header>
                        <div className="officers-container">
                            {
                                officers.filter(officer => {
                                    if (this.state.activeTeam === "Administrative") {
                                        return officer.position !== "President"
                                    } else {
                                        return !officer.position.includes("Chair")
                                    }
                                }).map(officer => <Officer {...officer} />)
                            }
                        </div>
                    </Container>
                </Container>
                <Image className="background-illustration" src="images/computer.jpg" />
            </div>
        )
    }
}

export default Team