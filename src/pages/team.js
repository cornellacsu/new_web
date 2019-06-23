import React, { Component } from "react"
import { Image, Container, Dropdown, Header } from 'semantic-ui-react'
import { StaticQuery, graphql } from "gatsby"
import Navbar from "../components/navbar"
import TeamContainer from '../components/teamContainer'
import AlumniContainer from '../components/alumniContainer'
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
                text: 'WebDev',
                value: 'WebDev'
            },
            {
                text: 'Alumni',
                value: 'Alumni'
            },
        ]

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
                    {
                        this.state.activeTeam !== "Alumni" ?
                            <TeamContainer activeTeam={this.state.activeTeam} officers={officers} />
                        :
                            <AlumniContainer alumni={data.alumni} />
                    }
                    
                </Container>
                <Image className="background-illustration" src="images/computer.jpg" />
            </div>
        )
    }
}

export default Team
