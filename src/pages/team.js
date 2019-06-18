import React, { Component } from "react"
import { Image, Container, Dropdown, Header } from 'semantic-ui-react'
import { StaticQuery, graphql } from "gatsby"
import Navbar from "../components/navbar"
import Officer from "../components/officer"
import data from '../data/team.json'
import "../styles/team.css"

class Team extends Component {
    constructor(props) {
        super(props)
        this.state = {
            activeTeam: 'Leadership'
        }
    }

    handleTeamChange = (_, { value }) => {
        this.setState({ activeTeam: value })
    }

    render() {
        // const officers = data.officers.filter(officer => officer.team.includes(this.state.activeTeam))
        const officers = data.officers
        const teamOptions = [
            {
                text: 'Leadership',
                value: 'Leadership'
            },
            {
                text: 'Design',
                value: 'Design'
            },
            {
                text: 'Social',
                value: 'Social'
            },
            {
                text: 'Corporate',
                value: 'Corporate'
            },
            {
                text: 'Academic',
                value: 'Academic'
            },
            {
                text: 'Publicity',
                value: 'Publicity'
            },
            {
                text: 'Webdev',
                value: 'Webdev'
            },
            {
                text: 'Alumni',
                value: 'Alumni'
            },
        ]
        const executiveBoard = ["President", "Vice President", "Treasurer", "Secretary"]

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
                        <Header as="h2" className="officers-header">{ this.state.activeTeam === "Leadership" ? "Executive Board" : "Team Leads" }</Header>
                        <div className="officers-container">
                            {
                                officers.filter(officer => {
                                    if (this.state.activeTeam === "Leadership") {
                                        const reducer = (acc, curr) => officer.position.includes(curr) || acc
                                        return executiveBoard.reduce(reducer, false)
                                    } else {
                                        return officer.position.includes(this.state.activeTeam + " Chair")
                                    }
                                }).map((officer, idx) => <Officer key={idx} {...officer} />)
                            }
                        </div>
                    </Container>
                    <Container>
                        <Header as="h2" className="officers-header">{ this.state.activeTeam === "Leadership" ? "Team Leads" : "Officers" }</Header>
                        <div className="officers-container">
                            {
                                officers.filter(officer => {
                                    console.log(officer.position)
                                    console.log(officer.position.includes("Chair"))
                                    if (this.state.activeTeam === "Leadership") {
                                        return officer.position.includes("Chair")
                                    } else {
                                        return !officer.position.includes("Chair") && officer.team === this.state.activeTeam
                                    }
                                }).map((officer, idx) => <Officer key={idx} {...officer} />)
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
