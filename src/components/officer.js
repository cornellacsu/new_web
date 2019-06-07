import { Card, Image } from "semantic-ui-react"
import { StaticQuery, graphql } from "gatsby"
import React from "react"
import "../styles/officer.css"

const Officer = ({ name, position, year, img, email }) => (
    <Card textAlign="center" key={email}>
        <Image src={img} circular />
        <Card.Content>
        <Card.Header>{`${name} '${year}`}</Card.Header> 
        <Card.Meta>{position}</Card.Meta>
        </Card.Content>
    </Card>
)

export default Officer
