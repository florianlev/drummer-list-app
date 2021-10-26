import React, { useEffect, useState } from 'react'
import config from '../config';
import { Link } from "react-router-dom";
import DrummersItem from './DrummersItem'
import { ToggleButton } from 'react-bootstrap';

interface IState {
    loading: boolean;
    drummers: IDrummers | any;
    error: any;
    activeFilterMarks: string;
    activeFilterNationality: string;
    activeFilterStyle: string;
    showToogle: boolean;
}

export default class Search extends React.Component<{}, IState> {
    public filterMarks: string[];
    public filterStyles: string[];
    public filterNationality: string[];

    constructor(props: any) {
        super(props);

        // fulter listing
        this.filterMarks = ['zildjian', 'sabian', 'paiste', 'promark', 'tama', 'yamaha', 'pearl', 'ludwig', 'gretsch'];
        this.filterStyles = ['rock', 'jazz', 'funk', 'metal', 'pop', 'jazz fusion', 'heavy'];
        this.filterNationality = ['français', 'anglais', 'allemand', 'americain', 'canadien'];
        this.state = { loading: true, drummers: null, error: false, activeFilterMarks: "", activeFilterNationality: "", activeFilterStyle: "", showToogle: false };

        // get datas from API 
        fetch(config.api.endpoints.drummers.all)
            .then((response) => response.json())
            .then((data) => {
                this.setState({ drummers: data });

            })
            .catch((err) => {
                console.log(err)
                this.setState({ error: err });
            })
            .finally(() => {
                this.setState({ loading: false });
            });
    }

    //event when change filter
    onFilterChange(filter: string, typeFilter: string) {

        switch (typeFilter) {
            case "marks":
                this.setState({ activeFilterMarks: filter })
                break;
            case "nationality":
                this.setState({ activeFilterNationality: filter })
                break;
            case "styles":
                this.setState({ activeFilterStyle: filter })
                break;
            case "All":
                this.setState({ activeFilterStyle: "" })
                this.setState({ activeFilterNationality: "" })
                this.setState({ activeFilterMarks: "" })

                break;

        }
    }

    render() {

        if (this.state.loading) {
            return <p>Données en chargement ...</p>;
        }

        if (this.state.error || !Array.isArray(this.state.drummers.drummers)) {
            return <p>Erreur de chargement des données ! </p>;
        }


        const { activeFilterMarks, activeFilterNationality, activeFilterStyle } = this.state;
        let filteredList: IDrummer[];
        if (activeFilterMarks == "" && activeFilterNationality == "" && activeFilterStyle == "") {
            filteredList = this.state.drummers.drummers;
        }
        else {
            console.log(this.state.drummers.drummers);
            filteredList = this.state.drummers.drummers
                .filter((item: IDrummer) => (this.state.activeFilterNationality == "") || (this.state.activeFilterNationality == item.nationality))
                .filter((item: IDrummer) => (this.state.activeFilterMarks == "") || (this.state.activeFilterMarks == item.marks))
                .filter((item: IDrummer) => (this.state.activeFilterStyle == "") || (this.state.activeFilterStyle == item.styles));

        }

        return (
            <div>
                <button onClick={() => this.setState({ showToogle: !this.state.showToogle })}>Filtres: {!this.state.showToogle ? 'show' : 'hide'}</button>
                {this.state.showToogle && <div>
                    <div className="row">
                        <div className="col-1-of-3"><ul><li>Nationalité</li>{this.filterNationality.map((nationality: string, idx: number) => (
                            <li>
                                <React.Fragment>
                                    <ToggleButton
                                        type="radio"
                                        value={1}
                                        variant='outline-success'
                                        id={nationality}
                                        checked={activeFilterNationality == nationality}
                                        onClick={() => this.onFilterChange(nationality, "nationality")}
                                    >
                                        {nationality}
                                    </ToggleButton>
                                </React.Fragment>
                            </li>
                        ))}
                        </ul>
                        </div>
                        <div className="col-1-of-3"><ul><li>Marques</li>{this.filterMarks.map((marks: string) => (
                            <li>
                                <React.Fragment>
                                    <ToggleButton
                                        value={1}
                                        type="radio"
                                        variant='outline-success'
                                        id={marks}
                                        checked={activeFilterMarks == marks}
                                        onClick={() => this.onFilterChange(marks, "marks")}
                                    >
                                        {marks}

                                    </ToggleButton>

                                </React.Fragment>
                            </li>
                        ))}
                        </ul>
                        </div>
                        <div className="col-1-of-3"><ul><li>Styles</li>{this.filterStyles.map((style: string) => (
                            <li>
                                <React.Fragment>

                                    <ToggleButton
                                        value={1}
                                        type="radio"
                                        variant='outline-success'
                                        id={style}
                                        checked={activeFilterStyle == style}
                                        onClick={() => this.onFilterChange(style, "styles")}
                                    >
                                        {style}

                                    </ToggleButton>

                                </React.Fragment>
                            </li>
                        ))}
                        </ul>
                        </div>

                    </div>

                    <button
                        id="all"
                        onClick={() => this.onFilterChange("ALL", "All")}
                    >
                        Tout
                    </button>
                </div>
                }
                <div className="videos">
                    {filteredList.map((drummer: IDrummer) => (
                        <Link to={`/drummer/${drummer.id.toString()}`} style={{ color: 'inherit', textDecoration: 'inherit' }}>
                            <DrummersItem
                                key={drummer.id}
                                drummer={drummer}
                            />
                        </Link>
                    ))}
                </div>
            </div>
        )

    }

}