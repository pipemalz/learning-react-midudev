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
    username: 'minsaludcol',
    name: 'Ministerio de Salud',
    following: true,
    followsYou: false
  },
  {
    username: 'ministerio_tic',
    name: 'Ministerio TIC',
    following: false,
    followsYou: true
  },
  {
    username: 'mineducacion',
    name: 'Ministerio de Educación',
    following: false,
    followsYou: false
  },
  {
    username: 'minhacienda',
    name: 'Ministerio de Hacienda',
    following: false,
    followsYou: false
  },
  {
    username: 'mincienciasco',
    name: 'Ministerio de Ciencias',
    following: true,
    followsYou: false
  },
  {
    username: 'mininterior',
    name: 'Ministerio del Interior',
    following: false,
    followsYou: true
  },
  {
    username: 'mindefensa',
    name: 'Ministerio de Defensa',
    following: false,
    followsYou: false
  },
  {
    username: 'minambienteco',
    name: 'Ministerio de Medio Ambiente',
    following: false,
    followsYou: false
  },
  {
    username: 'mintransporteco',
    name: 'Ministerio de Transporte',
    following: false,
    followsYou: true
  },
  {
    username: 'mincultura',
    name: 'Ministerio de Cultura',
    following: false,
    followsYou: false
  }
];

function App () {

  const maxCharButton = {
    name: {
      following : 18,
      follow : 20,
      stopFollowing : 14
    },
    username: {
      following : 18,
      follow : 20,
      stopFollowing : 14,
      followed: 18,
      followedFollowing: 10,
      followedFollowingStopFollowing: 5
    }
  }

  return (
    <section className="followCards">
      <h2 className="followCards__title">A quién seguir</h2>
      {
        users.map((user,i) => {
          return (
            <TwitterFollowCard 
              username={user.username} 
              name={user.name}
              maxCharButton={maxCharButton}
              initialMaxCharUsername={18}
              followsYou={user.followsYou}
              initialIsFollowing={user.following}
              key={i}
            />
          )
        } )
      }
    </ section>
  )
}

export default App