import { Image, Icon } from "semantic-ui-react"
import { StaticQuery, graphql } from "gatsby"
import React from "react"
import "../styles/officer.css"

const Officer = ({ name, position, year, img, email }) => (
    <div className="officer">
        <Image src={img} rounded />
        <h5>{`${name} '${year}`}</h5>
        <p>{position} {email && <a href={`mailto:${email}@cornell.edu`}><Icon name="envelope" /></a>}</p>
    </div>
)

export default Officer
