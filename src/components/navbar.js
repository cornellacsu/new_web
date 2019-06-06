import { Link } from "gatsby"
import { Menu, Image } from "semantic-ui-react"
import React, { Component } from "react"
import "../styles/navbar.css"

const Navbar = ({ activePage }) => (
    <nav className="navbar">
        <Link className="logo" to="/">
            <Image className="logo-image" src="images/logo_ACSU.png" />
            <span>ACSU</span>
        </Link>
        <Menu className="navbar-links" borderless stackable widths={5}>
            <Menu.Item 
                className="link"
                as={Link}
                to="/team"
                name="team"
                active={activePage === 'team'}
            >
                <span>Team</span>
            </Menu.Item>
            <Menu.Item 
                className="link"
                as={Link}
                to="/events"
                name="events"
                active={activePage === 'events'}
            >
                <span>Events</span>
            </Menu.Item>
            <Menu.Item 
                className="link"
                as={Link}
                to="/resources"
                name="resources"
                active={activePage === 'resources'}
            >
                <span>Resources</span>
            </Menu.Item>
            <Menu.Item 
                className="link"
                as={Link}
                to="/sponsors"
                name="sponsors"
                active={activePage === 'sponsors'}
            >
                <span>Sponsors</span>
            </Menu.Item>
            <Menu.Item 
                className="link last"
                as={Link}
                to="/join"
                name="join"
                active={activePage === 'join'}
            >
                <span>Join</span>
            </Menu.Item>
        </Menu>
    </nav>
)

export default Navbar
