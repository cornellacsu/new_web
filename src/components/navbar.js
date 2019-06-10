import { Link } from "gatsby"
import { Menu, Image, Icon } from "semantic-ui-react"
import React, { Component } from "react"
import "../styles/navbar.css"

class Navbar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            navbarVisible: true
        }
    }

    toggleNavbar = () => {
        this.setState(prevState => ({ navbarVisible: !prevState.navbarVisible }))
    }
    
    resize = () => {
        let shouldShowNavbar = window.innerWidth > 768
        if (shouldShowNavbar !== this.state.navbarVisible) {
            this.setState({ navbarVisible: shouldShowNavbar })
        }
    }

    componentDidMount() {
        window.addEventListener("resize", this.resize);
        this.resize();
    }
    
    componentWillUnmount() {
        window.removeEventListener("resize", this.resize)
    }

    render() {
        const { activePage } = this.props;

        return (
            <nav className="navbar">
                <Icon id="mobile-hamburger" name={ this.state.navbarVisible ? "times" : "bars" } onClick={this.toggleNavbar} />
                <Link className="logo" to="/">
                    <Image className="logo-image" src="images/logo_ACSU.png" />
                    <span>ACSU</span>
                </Link>
                <Menu className={ this.state.navbarVisible ? "navbar-links visible" : "navbar-links hidden" } borderless stackable widths={5}>
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
    }
}

export default Navbar
