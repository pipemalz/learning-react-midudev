import "./App.css"

function TwitterFollowCard ({ username, name }) {
  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img className="tw-followCard-avatar"
          src={`https://unavatar.io/twitter/${username}`}
          alt={`Avatar de ${name}`}
        />
        <div className="tw-followCard-info">
          <strong>{name}</strong>
          <span>@{username}</span>
        </div>
      </header>

      <aside className="tw-followCard-aside">
          <button className="tw-followCard-followBtn">Seguir</button>
      </aside>
    </article>
  )
}

export default TwitterFollowCard