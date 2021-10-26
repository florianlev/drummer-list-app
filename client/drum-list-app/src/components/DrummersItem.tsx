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
              <h2>{drummer.name}</h2>
              <p>
                <span>
                  Marques : {drummer.marks}
                </span>
                <span>
                  Nationalité : {drummer.nationality}
                </span>
                <span>
                  Styles : {drummer.styles}
                </span>
              </p>
            </div>
          </div>
        </div>
  )
}

export default Drummer