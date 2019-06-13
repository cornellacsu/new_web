import { Link } from "gatsby"
import { Menu, Image, Icon } from "semantic-ui-react"
import React, { Component } from "react"
import "../styles/navbar.css"

const MOBILE_BREAKPOINT = 768;

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
        let shouldShowNavbar = window.innerWidth > MOBILE_BREAKPOINT
        if (shouldShowNavbar !== this.state.navbarVisible) {
            this.setState({ navbarVisible: shouldShowNavbar })
        }
    }

    componentDidMount() {
        window.addEventListener("resize", this.resize)
        this.resize()
    }
    
    componentWillUnmount() {
        window.removeEventListener("resize", this.resize)
    }

    render() {
        const { activePage } = this.props
        const pages = ["team", "events", "resources", "sponsors", "join"]

        return (
            <nav className="navbar">
                <Icon id="mobile-hamburger" name={ this.state.navbarVisible ? "times" : "bars" } onClick={this.toggleNavbar} />
                <Link className="logo" to="/">
                    <Image className="logo-image" src="images/logo_ACSU.png" />
                    <span>ACSU</span>
                </Link>
                <Menu className={ this.state.navbarVisible ? "navbar-links visible" : "navbar-links hidden" } borderless stackable widths={5}>
                    {
                        pages.map((page, idx) => 
                            <Menu.Item
                                className={idx !== pages.length - 1 ? "link" : "link last"}
                                as={Link}
                                to={`/${page}`}
                                name={page}
                                active={activePage === page}
                            >
                                <span>{page.charAt(0).toUpperCase() + page.slice(1)}</span>
                            </Menu.Item>
                        )
                    }
                </Menu>
            </nav>
        )
    }
}

export default Navbar
