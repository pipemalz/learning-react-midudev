import { useState } from "react"

import "./App.css"

function TwitterFollowCard (
  { 
    username,
    name, 
    maxCharButton,
    followsYou, 
    initialIsFollowing 
  }
) {

  const [isFollowing, setIsFollowing] = useState(initialIsFollowing)
  
  const initialMaxCharName = initialIsFollowing ? maxCharButton.name.following : maxCharButton.name.follow

  const [maxCharName, setMaxCharName] = useState(initialMaxCharName)

  const initialMaxCharUsername = 
    initialIsFollowing 
      ? 
        followsYou 
          ? 
            maxCharButton.username.followedFollowing
          : 
            maxCharButton.username.following
      :
        followsYou
          ?
            maxCharButton.username.followed
          :
            maxCharButton.username.follow

  const [maxCharUsername, setMaxCharUsername] = useState(initialMaxCharUsername)

  const initialButtonText = initialIsFollowing ? "Siguiendo" : "Seguir"

  const [buttonText, setButtonText] = useState(initialButtonText)

  const avatarSrc = `https://unavatar.io/twitter/${username}`

  const shortenedText = (text, maxLength) => (
    text.length > maxLength 
      ? 
        text.slice(0, maxLength) + "..." 
      : 
        text
    )

  const buttonClassName = isFollowing 
    ? 
      "followCard__button followCard__button--following"
    :
      "followCard__button"

  const setIsFollowingOnClick = () => {
    const newIsFollowing = !isFollowing
    setIsFollowing(newIsFollowing)
    setButtonText(newIsFollowing ? "Siguiendo" : "Seguir")
    setMaxCharName(
      newIsFollowing ? maxCharButton.name.following : maxCharButton.name.follow
    )
    setMaxCharUsername(
      newIsFollowing 
        ? 
          followsYou 
            ? 
              maxCharButton.username.followedFollowing
            : 
              maxCharButton.username.following
        :
          followsYou
            ?
              maxCharButton.username.followed
            :
              maxCharButton.username.follow
    )
  }

  const setButtonTextOnMouseOver = () => {
    if (!isFollowing) return
    setButtonText("Dejar de Seguir")
    setMaxCharName(maxCharButton.name.stopFollowing)
    setMaxCharUsername(maxCharButton.username.followedFollowingStopFollowing)
  }

  const setButtonTextOnMouseOut = () => {
    if (!isFollowing) return
    setButtonText("Siguiendo")
    setMaxCharName(maxCharButton.name.following)
    setMaxCharUsername(maxCharButton.username.followedFollowing)
  }

  return (
    <article className="followCard">
      <header className="followCard__header">
        <img className="followCard__avatar"
          src={avatarSrc}
          alt={`Avatar de ${name}`}
        />
        <div className="followCard__info">
          <strong
            title={name}
            className="followCard__name">{shortenedText(name, maxCharName)}
          </strong>
          <span className="followCard__username">
            @{shortenedText(username, maxCharUsername)} 
            { 
              followsYou && <span className="followCard__followsYou">Te sigue</span>
            } 
          </span>
        </div>
      </header>

      <aside className="followCard__aside">
          <button 
           className={buttonClassName}
           onClick={setIsFollowingOnClick}
           onMouseOver={setButtonTextOnMouseOver}
           onMouseOut={setButtonTextOnMouseOut}
          >
            <span className="followCard__buttonText">{buttonText}</span>
          </button>
      </aside>
    </article>
  )
}

export default TwitterFollowCard