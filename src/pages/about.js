import React from "react"
import Navbar from "../components/navbar"
import { Header, Container, Divider, Segment, Grid } from "semantic-ui-react"
import "../styles/about.css"

const About = () => (
  <div>
    <Navbar activePage="about" />
    <Container textAlign="justified" text>
        <Header className="page-title" as="h1">About Us</Header>
        <Divider />
        <Header as="h3">Our Purpose</Header>
        <Segment basic>
            The Association of Computer Science Undergraduates (ACSU) is Cornell's chapter of the Association for Computing Machinery (ACM). We promote educational, professional, and social interaction among students interested in computer science and facilitate student communication with faculty, alumni, and corporate representatives to enhance the undergraduate experience in computer science. The ACSU receives support from the Department of Computer Science and several corporate sponsors.
        </Segment>
    </Container>
    <Grid className="page-subcontent" container columns={3} doubling>
    <Grid.Row>
        <Grid.Column >
            <Segment>
            <Header textAlign="center" as="h4">Social Events</Header>
            <p>We host a variety of events for CS students to meet each other outside of class, including bowling nights, lunches, and formals, as well as a mentorship program every semester!
            </p>
            </Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>
            <Header textAlign="center" as="h4">Faculty Events</Header>
            <p>
            We hold several events each year to improve student-faculty relations, including student-faculty luncheons, presentations by faculty on their research, and information sessions on graduate programs.
            </p>
            </Segment>
      </Grid.Column>
      <Grid.Column>
            <Segment>
            <Header textAlign="center" as="h4">Educational Events</Header>
            <p>We organize a few presentations and workshops each semester to help CS students learn something new and build their range of technical skills. Past events have included LaTeX tutorials and introductory web programming lessons.
            </p>
            </Segment>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row>
        <Grid.Column >
            <Segment>
            <Header textAlign="center" as="h4">Company Events</Header>
            <p>We arrange many information sessions each semester for companies of all sizes from the tech industry and beyond, which provide a great opportunity for members to learn about employment options and meet recruiters. Companies we've hosted include Google, Microsoft, Goldman Sachs, Intel, BlackRock, Priceline, and many more.
            </p>
            </Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>
            <Header textAlign="center" as="h4">Resume Book</Header>
            <p>
            Each year, we feature our members' resumes in two books (one for students seeking summer opportunities and one for students seeking full-time employment). We send these resumes to over 100 top corporations as well as Cornell alumni. Numerous students have benefited from great career opportunities as a result.
            </p>
            </Segment>
      </Grid.Column>
      <Grid.Column>
            <Segment>
            <Header textAlign="center" as="h4">Mentorship</Header>
            <p>We offer a mentorship program that allows older ACSU students and alumni to be paired with younger students seeking advice regarding the CS major, undergraduate research, technical careers, and more. The program fosters friendships, promotes networking, and allows both mentors and mentees to be more involved with the local CS community.
            </p>
            </Segment>
      </Grid.Column>
      </Grid.Row>
    </Grid>
  </div>
)

export default About