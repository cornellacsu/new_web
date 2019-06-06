import React from "react"
import { Container, Grid, Card, Image } from 'semantic-ui-react'
import { StaticQuery, graphql } from "gatsby"
import Navbar from "../components/navbar"
import data from '../data/team.json'

const officers = data.officers;

const cols = 4;

// const createOfficerGrid = (cols) => {
//    var i,j;
//    for( i = 0; i < officers.len(); i+= cols){
//       console.log(cols,"cols")
//    }
// }

const Team = () => (
   <div>
      <Navbar activePage="team" />
      <p>team page</p>
      <Grid columns={cols}> 
      {
         officers.map(officer => {
            let grid = [];

            grid.push((<Card textAlign="center" key={officer.email}>
               <Image src={officer.img} circular />
               <Card.Content>
               <Card.Header>{`${officer.name} '${officer.year}`}</Card.Header> 
               <Card.Meta>{officer.team}</Card.Meta>
               </Card.Content>
            </Card>))
            return grid
         })
      }
      </Grid>
   </div>
)

export default Team