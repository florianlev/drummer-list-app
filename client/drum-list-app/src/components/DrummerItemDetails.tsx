import React, { useEffect, useState } from 'react'
import config from '../config';

const DrummerItemDetails: React.FC = () => {

    const [drummer, setDrummer] = useState<IDrummer>()
    const [loading, setLoading] = useState(false);
    const queryParams: string | any = window.location.href.split('/');

    useEffect(() => {
        setLoading(true);
        fetch(config.api.endpoints.drummers.id(queryParams[queryParams.length - 1]))
            .then((response) => response.json())
            .then((data) => { setDrummer(data.drummer) })
            .catch((err) => {
                console.log(err)
            })
            .finally(() => {
                setLoading(false);
            });
    }, [])
    if (loading) {
        return <p>Données en chargement ...</p>;
    }
    return (
        <div className="detail__drummer__container">
            <h1>{drummer?.name}</h1>

            <div className="detail__drummer__embeded">
                <iframe
                    width='100%'
                    height='100%'
                    src={`https://www.youtube.com/embed/${drummer?.idVideo}`}
                    frameBorder="0"
                    allowFullScreen
                />
            </div>
      
            <div className="detail__drummer__description">
                <p>Description : {drummer?.description}</p>
            </div>
            <div className="detail__drummer__description">
                <p>Marques : {drummer?.marks}</p>
            </div>
            <div className="detail__drummer__description">
                <p>Styles : {drummer?.styles}</p>
            </div>
        </div>
    )
}

export default DrummerItemDetails;