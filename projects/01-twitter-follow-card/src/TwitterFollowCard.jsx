import "./App.css"

function TwitterFollowCard ({ username, name, followsYou, following }) {

  const avatarSrc = `https://unavatar.io/twitter/${username}`

  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img className="tw-followCard-avatar"
          src={avatarSrc}
          alt={`Avatar de ${name}`}
        />
        <div className="tw-followCard-info">
          <strong>{name}</strong>
          <span className="tw-info-userName">
            @{username} 
            { 
              followsYou && <span className="tw-info-followsYou">Te sigue</span>
            } 
          </span>
        </div>
      </header>

      <aside className="tw-followCard-aside">
          <button className="tw-followCard-followBtn">
            {
              following ? "Siguiendo" : "Seguir"
            }
          </button>
      </aside>
    </article>
  )
}

export default TwitterFollowCard