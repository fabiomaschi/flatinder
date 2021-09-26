import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import TinderCard from 'react-tinder-card'
import { Button, Card, Icon, Image, Statistic } from 'semantic-ui-react'
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import SchoolIcon from '@mui/icons-material/School';
import SmokingRoomsIcon from '@mui/icons-material/SmokingRooms';
import SmokeFreeIcon from '@mui/icons-material/SmokeFree';

import { api } from '../api'
import './index.css'

interface Profile {
  // from user
  id: number
  email: string
  name: string
  profileImage: string
  // attributes
  gender: string
  birthday: string
  smoker: Boolean
  occupation: string
  description: string
  // preferences
  preferences : {
    flatLocationRadius: Number,
    flatMaxPrice: Number,
    flatMinPeople: Number,
    flatMaxPeople: Number,
    roomHasOwnBathroom?: Boolean,
    smokingFlat?: Boolean
  }
}

/*const db: Array<Profile> = [
  {
    id: 0,
    email: 'lala@lala.com',
    name: 'Silvia Saint',
    profileImage: 'https://roomsurf.s3.amazonaws.com/user/4c/2c/4c2c960870d5908c3d246bedd_large.jpg',
    gender: 'F',
    birthday: '2020.02.02',
    occupation: 'Student',
    description: 'Ma oeeeeeeee'
  },
  {
    id: 1,
    email: 'lala@lala.com',
    name: 'Gérard',
    profileImage: 'https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/BLX4S2MEHE3XLE7IUUGEEPIDNY.jpg&w=500',
    gender: 'M',
    birthday: '2020.02.02',
    occupation: 'Worker',
    description: 'Ma oeeeeeeee'
  }
]*/



// const alreadyRemoved: Array<string>= []

function FrontPage (): JSX.Element {
  const [profiles, setProfiles] = useState<Profile[]>([])
  const [counter, setCounter] = useState<number>(0)

  const fetchData = React.useCallback(() => {
    api.get(`/applicants/`)
      .then(response => {
        console.log(response)
        setProfiles(response.data.applicants)
      })
  }, [setProfiles])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  
  function swiped (direction: string, email: string): void {
    switch(direction) {
      case 'left':
        api.post(`/pass/${email}`)
        break
      case 'right':
        api.post(`/like/${email}`)
          .then(response => {
            console.log(response)
          })
        setCounter(counter+1)
        if (counter === 3) {
          // issue the same like, but reverse
        }
        break
    }
    console.log('removing ' + email)
    //alreadyRemoved.push(id)
  }

  function onCardLeftScreen (id: number): void {
    console.log(id + ' left the screen')
  }

  return (
    <>
    <div>
      <div className='cardContainer'>
        {profiles.map((profile, index) =>
          <TinderCard key={profile.id} onSwipe={(dir) => swiped(dir, profile.email)} onCardLeftScreen={() => onCardLeftScreen(profile.id)} preventSwipe={['up', 'down']}>
            <Card>
              <Image src={profile.profileImage} wrapped ui={false} />
              <Card.Content>
                <Card.Header>{profile.name}</Card.Header>
                <Card.Meta>
                  <Statistic.Group size='small'>
                    <Statistic>
                      <Statistic.Value>{profile.preferences.flatMaxPrice}$</Statistic.Value>
                      <Statistic.Label>Budget</Statistic.Label>
                    </Statistic>
                    <Statistic>
                      <Statistic.Value>{profile.preferences.flatMaxPeople}</Statistic.Value>
                      <Statistic.Label>Max people</Statistic.Label>
                    </Statistic>
                    <Statistic>
                      <Statistic.Value>{(profile.smoker) ? <SmokingRoomsIcon fontSize="large" /> : <SmokeFreeIcon fontSize="large" />}</Statistic.Value>
                      <Statistic.Label>Cigarrets</Statistic.Label>
                    </Statistic>
                    <Statistic>
                      <Statistic.Value>{(profile.occupation !== 'working') ? <SchoolIcon fontSize="large" /> : <BusinessCenterIcon fontSize="large"/>}</Statistic.Value>
                      <Statistic.Label>Occupation</Statistic.Label>
                    </Statistic>
                  </Statistic.Group>
                  <span className='date'>{profile.gender} - {profile.birthday}</span>
                </Card.Meta>
                <Card.Description>
                  {profile.description}
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <Link to={'#'}>
                  <Icon name='user' />
                    {profile.occupation}
                </Link>
              </Card.Content>
              <Card.Content extra>
                <div className='ui two buttons'>
                  <Button basic color='red'>
                    Pass
                  </Button>
                  <Button basic color='green'>
                    Like
                  </Button>
                </div>
              </Card.Content>
            </Card>
          </TinderCard>
        )}
      </div>
    </div>
    </>
  )
}

export default FrontPage
