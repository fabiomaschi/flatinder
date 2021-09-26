import React, { useEffect, useState } from 'react'
import { Feed, Image } from 'semantic-ui-react'
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

function Matches (): JSX.Element {
  const [profiles, setProfiles] = useState<Profile[]>([])

  const fetchData = React.useCallback(() => {
    api.get(`/flat-feed/Haylie.Heller91@hotmail.com`)
      .then(response => {
        console.log(response)
        setProfiles(response.data.feed)
      })
  }, [setProfiles])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  return (
    <>
    <div>
      <Feed>
        {profiles.map((profile, index) =>
          <Feed.Event>
            <Feed.Label>
              <Image src={profile.profileImage} wrapped ui={false} />
            </Feed.Label>
            <Feed.Content>
              <Feed.Summary>
                <Feed.User>{profile.name}</Feed.User> matched you!
                <Feed.Date>1 hour ago</Feed.Date>
              </Feed.Summary>
              <Feed.Extra>
                {profile.description}
              </Feed.Extra>
            </Feed.Content>
            <Feed.Meta>
              <Feed.Like>
                {(profile.smoker) ? <SmokingRoomsIcon fontSize="large" /> : <SmokeFreeIcon fontSize="large" />}
                {(profile.occupation !== 'working') ? <SchoolIcon fontSize="large" /> : <BusinessCenterIcon fontSize="large"/>}
              </Feed.Like>
            </Feed.Meta>
          </Feed.Event>
        )}
      </Feed>
    </div>
    </>
  )
}

export default Matches
