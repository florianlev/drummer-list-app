import React from "react"

type Props = DrummerProps

const Drummer: React.FC<Props> = ({ drummer }) => {
  return (
    <div className="videos__item">
      <div className="video__image">
        <a target="_blank">
          <img src={`https://i4.ytimg.com/vi/${drummer.idVideo}/mqdefault.jpg`} />
        </a>
        <div className="video__footer">
          <p>{drummer.name}</p>
        </div>
      </div>
    </div>
  )
}

export default Drummer