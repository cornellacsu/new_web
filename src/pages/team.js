import React from "react"
import { Card, Image } from 'semantic-ui-react'
import { StaticQuery, graphql } from "gatsby"
import data from '../data/team.json'

const officers = data.officers;
officers.map(officer => console.log(officer))


const Team = () => (
   <div>
   <p>team page</p>
   {officers.map(officer => 
      <Card textAlign="center" key={officer.email}>
         <Image src={officer.img} circular />
         <Card.Content>
         <Card.Header>{`${officer.name} '${officer.year}`}</Card.Header> 
         <Card.Meta>{officer.team}</Card.Meta>
         </Card.Content>
      </Card>
      )}
   </div>
)

export default Team