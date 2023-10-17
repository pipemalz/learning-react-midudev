import "./App.css"

function TwitterFollowCard ({ username, name, maxCharName, followsYou, following }) {

  const avatarSrc = `https://unavatar.io/twitter/${username}`

  const shortenedName = name => (
    name.length > maxCharName 
      ? 
        name.slice(0, maxCharName) + "..." 
      : 
        name
    )

  return (
    <article className="followCard">
      <header className="followCard__header">
        <img className="followCard__avatar"
          src={avatarSrc}
          alt={`Avatar de ${name}`}
        />
        <div className="followCard__info">
          <strong 
            className="followCard__name">{shortenedName(name)}
          </strong>
          <span className="followCard__username">
            @{username} 
            { 
              followsYou && <span className="followCard__followsYou">Te sigue</span>
            } 
          </span>
        </div>
      </header>

      <aside className="followCard__aside">
          <button className="followCard__button">
            {
              following ? "Siguiendo" : "Seguir"
            }
          </button>
      </aside>
    </article>
  )
}

export default TwitterFollowCard