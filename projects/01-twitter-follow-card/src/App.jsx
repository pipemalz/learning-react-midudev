import TwitterFollowCard from "./TwitterFollowCard"
import "./App.css"

const users = [
  {
    username: 'lacimarronaesp',
    name: 'La Cimarrona ESP',
    following: true,
    followsYou: false
  },
  {
    username: 'leonardodicaprio',
    name: 'Leonardo DiCaprio',
    following: true,
    followsYou: false
  },
  {
    username: 'bradpitt',
    name: 'Brad Pitt',
    following: false,
    followsYou: true
  },
  {
    username: 'angelinajolie',
    name: 'Angelina Jolie',
    following: false,
    followsYou: false
  },
  {
    username: 'tomhanks',
    name: 'Tom Hanks',
    following: false,
    followsYou: false
  },
  {
    username: 'merylstreep',
    name: 'Meryl Streep',
    following: true,
    followsYou: false
  },
  {
    username: 'robertdowneyjr',
    name: 'Robert Downey Jr.',
    following: false,
    followsYou: true
  },
  {
    username: 'scarlettjohansson',
    name: 'Scarlett Johansson',
    following: false,
    followsYou: false
  },
  {
    username: 'bradleycooper',
    name: 'Bradley Cooper',
    following: false,
    followsYou: false
  },
  {
    username: 'jenniferlawrence',
    name: 'Jennifer Lawrence',
    following: false,
    followsYou: true
  },
  {
    username: 'mattdamon',
    name: 'Matt Damon',
    following: false,
    followsYou: false
  }
];

function App () {
  return (
    <section className="tw-followList">
      <h2>A quién seguir</h2>
      {
        users.map((user,i) => {
          return (
            <TwitterFollowCard 
              username={user.username} 
              name={user.name}
              followsYou={user.followsYou}
              following={user.following}
              key={i}
            />
          )
        } )
      }
    </ section>
  )
}

export default App