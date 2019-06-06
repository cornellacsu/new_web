import React from "react"
import Navbar from "../components/navbar"
import { Header, Container, Divider, Segment, Grid, GridColumn, Image } from "semantic-ui-react"
import "../styles/sponsors.css"

const Sponsors = () => (
    <div>
        <Navbar />
        <Container textAlign="justified" text>
            <Header className="sponsors-title" as="h1">MEET OUR 2019 SPONSORS</Header>
            <Divider />
        </Container>

        <Container textAlign="justified" text>
            <Grid.Row>
                <Header className="gold" as="h1">Gold</Header>
            </Grid.Row>

            <Grid className="sponsors-subcontent" container columns={4} doubling>

                <Grid.Row>
                    <GridColumn>
                        <a href="https://www.facebook.com/">
                            <Image src="images/logos/facebook.png" className="facebook" alt="Facebook" />
                        </a>
                    </GridColumn>
                    <GridColumn>
                        <a href="https://www.google.com/">
                            <Image src="images/logos/google.png" className="google" alt="Google" />
                        </a>
                    </GridColumn>
                    <GridColumn>
                        <a href="https://www.bloomberg.com/">
                            <Image src="images/logos/Bloomberg.png" className="bloomberg" alt="Bloomberg" />
                        </a>
                    </GridColumn>
                    <GridColumn>
                        <a href="http://www.broadwaytechnology.com/">
                            <Image src="images/logos/broadway.png" className="broadway" alt="Broadway" />
                        </a>

                    </GridColumn>
                    <GridColumn>
                        <a href="https://www.anduril.com/">
                            <Image src="images/logos/Anduril.png" className="anduril" alt="Anduril" />
                        </a>

                    </GridColumn>
                    <GridColumn>
                        <a href="https://meraki.cisco.com/">
                            <Image src="images/logos/meraki.png" className="cisco_meraki" alt="Cisco Meraki" />
                        </a>

                    </GridColumn>
                    <GridColumn>
                        <a href="https://www.janestreet.com/">
                            <Image src="images/logos/Jane_Street.png" className="jane_street" alt="Jane Street" />
                        </a>

                    </GridColumn>
                    <GridColumn>
                        <a href="https://www.ghs.com/">
                            <Image src="images/logos/Green_hills.jpeg" className="green_hills" alt="Green Hills" />
                        </a>
                    </GridColumn>
                </Grid.Row>
            </Grid>
            <Divider />
        </Container>


        <Container textAlign="justified" text>
            <Grid.Row>
                <Header className="silver" as="h1">Silver</Header>
            </Grid.Row>
            <Grid className="sponsors-subcontent" container columns={4} doubling>
                <Grid.Row>
                    <GridColumn>

                        <a href="https://www.airbnb.com/">
                            <Image src="images/logos/Airbnb.png" className="airbnb" alt="Airbnb" />
                        </a>

                    </GridColumn>

                    <GridColumn>

                        <a href="https://www.alibaba.com/">
                            <Image src="images/logos/Alibaba.png" className="alibaba" alt="Alibaba" />
                        </a>

                    </GridColumn>

                </Grid.Row>

            </Grid>
            <Divider />
        </Container>

        <Container textAlign="justified" text>
            <Grid.Row>
                <Header className="bronze" as="h1">Bronze</Header>
            </Grid.Row>
            <Grid className="sponsors-subcontent_bronze" container columns={4} doubling>
                <Grid.Row>
                    <GridColumn>
                        <a href="https://asana.com/">
                            <Image src="images/logos/Asana.png" className="asana" alt="Asana" />
                        </a>
                    </GridColumn>

                    <GridColumn>
                        <a href="https://www.palantir.com/">
                            <Image src="images/logos/Palantir.png" className="palantir" alt="Palantir" />
                        </a>
                    </GridColumn>
                    <GridColumn>
                        <a href="https://www.twosigma.com/">
                            <Image src="images/logos/Two_Sigma.png" className="twosigma" alt="Two Sigma" />
                        </a>
                    </GridColumn>
                    <GridColumn>
                        <a href="https://www.hubspot.com/">
                            <Image src="images/logos/HubSpot.png" className="hubspot" alt="Hubspot" />
                        </a>
                    </GridColumn>
                    <GridColumn>
                        <a href="https://www.roblox.com/">
                            <Image src="images/logos/Roblox.png" className="roblox" alt="Roblox" />
                        </a>

                    </GridColumn>
                    <GridColumn>
                        <a href="http://www.goldmansachs.com/">
                            <Image src="images/logos/Goldman-Sachs-Logo.png" className="goldman_sachs" alt="Goldman Sachs" />
                        </a>

                    </GridColumn>
                    <GridColumn>
                        <a href="https://www.predictivetechnologies.com/">
                            <Image src="images/logos/APT.png" className="apt" alt="APT" />
                        </a>

                    </GridColumn>
                    <GridColumn>
                        <a href="https://www.datto.com/">
                            <Image src="images/logos/datto.png" className="datto" alt="Datto" />
                        </a>

                    </GridColumn>
                    <GridColumn>
                        <a href="https://www.arista.com/">
                            <Image src="images/logos/Arista.jpg" className="arista" alt="Arista" />
                        </a>

                    </GridColumn>
                    <GridColumn>
                        <a href="https://www.lyft.com/">
                            <Image src="images/logos/Lyft.png" className="lyft" alt="Lyft" />
                        </a>

                    </GridColumn>
                    <GridColumn>
                        <a href="https://www.mitre.org/">
                            <Image src="images/logos/Mitre.png" className="mitre" alt="Mitre" />
                        </a>

                    </GridColumn>
                    <GridColumn>
                        <a href="https://twitter.com/">
                            <Image src="images/logos/Twitter.png" className="twitter" alt="Twitter" />
                        </a>
                    </GridColumn>
                    <GridColumn>
                        <a href="https://www.amazonrobotics.com/">
                            <Image src="images/logos/Amazon_Robotics.png" className="amazon_robotics" alt="Amazon Robotics" />
                        </a>
                    </GridColumn>
                    <GridColumn>
                        <a href="https://corporate.exxonmobil.com/en">
                            <Image src="images/logos/ExxonMobil.png" className="exxonmobil" alt="ExxonMobil" />
                        </a>

                    </GridColumn>
                    <GridColumn>
                        <a href="https://www.mongodb.com/">
                            <Image src="images/logos/MongoDB.png" className="mongodb" alt="MongoDB" />
                        </a>

                    </GridColumn>
                    <GridColumn>
                        <a href="https://www.abinitio.com/en">
                            <Image src="images/logos/Ab_Initio.png" className="abinitio" alt="Ab Initio" />
                        </a>
                    </GridColumn>
                </Grid.Row>
            </Grid>
        </Container>

    </div>
)

export default Sponsors