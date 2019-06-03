import { Link } from "gatsby"
import { Menu, Dropdown, Container, Image, Header, Grid } from "semantic-ui-react"
import PropTypes from "prop-types"
import React from "react"
import "../styles/navbar.css"

const Navbar = ({ siteTitle }) => (
    <div className="site-header">
    <Container textAlign="left" className="header-content">
      <Header 
        className="orgname"
        floated="left"
        as={Link}
        to="/"
        
      >
        <Image
          className="logo"
          src="images/logo_ACSU.png"
          /> ACSU
      </Header>
      <Menu borderless stackable>
        <Container className="navbar">

         <Menu.Item as="a"
          name="Team"
        >
          <div className="unslant">
          Team
          </div>
          </Menu.Item>

        <Menu.Item as="a"
          name="Events"
        >
          <div className="unslant">
          Events
          </div>
          </Menu.Item>

        <Menu.Item as="a"
          name="Resources"
        >
          <div className="unslant">
          Resources
          </div>
        </Menu.Item>

        <Menu.Item as="a"
          name="Sponsors"
        >
          <div className="unslant">
          Sponsors
          </div>
        </Menu.Item>

        <Menu.Item as="a"
          name="Sponsor"
        >
          <div className="unslant">
          Join
          </div>
          </Menu.Item>

        </Container> 
      </Menu>
    </Container>
    </div>
)

Navbar.propTypes = {
  siteTitle: PropTypes.string,
}

Navbar.defaultProps = {
  siteTitle: ``,
}

export default Navbar
