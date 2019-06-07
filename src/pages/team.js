import React, { Component } from "react"
import { Container, Dropdown } from 'semantic-ui-react'
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
        const officers = data.officers
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
        
        return (
            <div>
                <Navbar activePage="team" />
                <Container fluid>
                    <h1 className="team-header">
                        Meet the{' '}
                        <Dropdown
                            inline
                            options={teamOptions}
                            defaultValue={teamOptions[0].value}
                            onChange={this.handleTeamChange}
                        />
                        {' '}Team
                    </h1>
                    <Container>
                        <h2 className="officer-header">Team Leads</h2>
                    </Container>
                    <Container>
                        <h2 className="officer-header">Officers</h2>
                    </Container>
                </Container>
            </div>
        )
    }
}

export default Team