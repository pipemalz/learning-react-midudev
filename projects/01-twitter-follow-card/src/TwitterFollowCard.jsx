import { useState } from "react"

import "./App.css"

function TwitterFollowCard (
  { 
    username,
    name, 
    maxCharCardInfo,
    followsYou, 
    initialIsFollowing 
  }
) {

  const [isFollowing, setIsFollowing] = useState(initialIsFollowing)
  
  const initialMaxCharName = initialIsFollowing ? maxCharCardInfo.name.following : maxCharCardInfo.name.follow

  const [maxCharName, setMaxCharName] = useState(initialMaxCharName)

  const initialMaxCharUsername = 
    initialIsFollowing 
      ? 
        followsYou 
          ? 
            maxCharCardInfo.username.followedFollowing
          : 
            maxCharCardInfo.username.following
      :
        followsYou
          ?
            maxCharCardInfo.username.followed
          :
            maxCharCardInfo.username.follow

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
      newIsFollowing ? maxCharCardInfo.name.following : maxCharCardInfo.name.follow
    )
    setMaxCharUsername(
      newIsFollowing 
        ? 
          followsYou 
            ? 
              maxCharCardInfo.username.followedFollowing
            : 
              maxCharCardInfo.username.following
        :
          followsYou
            ?
              maxCharCardInfo.username.followed
            :
              maxCharCardInfo.username.follow
    )
  }

  const setButtonTextOnMouseOver = () => {
    if (!isFollowing) return
    setButtonText("Dejar de Seguir")
    setMaxCharName(maxCharCardInfo.name.stopFollowing)
    setMaxCharUsername(
      followsYou
        ?
          maxCharCardInfo.username.followedFollowingStopFollowing
        :
          maxCharCardInfo.username.stopFollowing
    )
  }

  const setButtonTextOnMouseOut = () => {
    if (!isFollowing) return
    setButtonText("Siguiendo")
    setMaxCharName(maxCharCardInfo.name.following)
    setMaxCharUsername(
      followsYou
        ?
          maxCharCardInfo.username.followedFollowing
        :
          maxCharCardInfo.username.following
    )
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
          <span 
            className="followCard__username"
            title={username}
          >
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