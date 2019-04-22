import { Link } from "gatsby"
import { Menu, Dropdown, Container, Image, Header, Grid } from "semantic-ui-react"
import PropTypes from "prop-types"
import React from "react"
import "../styles/navbar.css"

const Navbar = ({ siteTitle }) => (
    <div>
    <Container textAlign="center" className="site-header">
      <Header 
        className="orgname"
        as={Link}
        to="/"
      >
        <Image
          className="logo"
          // TODO replace w/ local paths
          src="images/logo_ACSU.png"
          //src="https://acsu.cornell.edu/img/logo_ACSU_short_transparent.png"
          /> ACSU
        </Header>
    </Container>
    
    <Menu borderless stackable>
    <Container className="navbar">
        <Dropdown item text="ABOUT">
          <Dropdown.Menu>
            <Dropdown.Item as={Link} to="/about" text="WHAT IS ACSU?" />
            <Dropdown.Item>OFFICERS</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Dropdown item text="EVENTS">
          <Dropdown.Menu>
            <Dropdown.Item>CALENDAR</Dropdown.Item>
            <Dropdown.Item>G-BODY</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Dropdown item text="RESOURCES">
          <Dropdown.Menu>
            <Dropdown.Item>ACSU README</Dropdown.Item>
            <Dropdown.Item>RESUME BOOK</Dropdown.Item>
            <Dropdown.Item>CS WIKI</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Menu.Item as="a"
          name="Sponsor"
        >
          SPONSOR
          </Menu.Item>

        <Menu.Item as="a"
          name="Hacsu"
        >
          HACSU
        </Menu.Item>

        <Menu.Item as="a"
          name="Hacsu"
        >
          JOIN
        </Menu.Item>

        <Menu.Item as="a" header>
        <Image
          className="social-media-icon"
          src="https://acsu.cornell.edu/img/icons/facebook-icon2.png"
        />
        </Menu.Item>

        <Menu.Item as="a" header>
        <Image
          className="social-media-icon"
          src="https://acsu.cornell.edu/img/icons/insta-icon.png"
        />
        </Menu.Item>

      </Container> 
      </Menu>
      </div>
)

Navbar.propTypes = {
  siteTitle: PropTypes.string,
}

Navbar.defaultProps = {
  siteTitle: ``,
}

export default Navbar
