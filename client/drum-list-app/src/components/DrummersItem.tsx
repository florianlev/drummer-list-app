import React from "react"

type Props = DrummerProps

const Drummer: React.FC<Props> = ({ drummer }) => {
  return (
    <div className="Card">
      <div className="Card--text">
        <h1 className="drummName">{drummer.name}</h1>
        <span className="drummDescription">{drummer.description}</span>
      </div>
      <div className="Card--button">
        <button>
          Go
        </button>
      </div>
    </div>
  )
}

export default Drummer