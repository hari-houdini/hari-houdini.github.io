import { Link } from "react-router-dom"
import { CharacterBlock } from "./block.component";
import "./details.css";

type CharacterDetailsBoxProps = {
    character: StarWarsCharacter;
    homeworld: StarWarsPlanet[] | null;
    films: StarWarsFilm[] | null;
    species: StarWarsSpecies[] | null;
    vehicles: StarWarsVehicle[] | null;
    starships: StarWarsStarShip[] | null;
    loadingState: LoadingState;
}

export const CharacterDetailsBox = ({
    character,
    homeworld,
    films,
    species,
    vehicles,
    starships,
    loadingState
}: CharacterDetailsBoxProps) => {
    return (
        <>
            <Link to="/" className="navigation">&#60; Back to list</Link>
            <div className="box">
                <div className="box-body">
                    <div className="box-title">
                        {character.name}
                    </div>
                    <div className="box-description">
                        <div className="character-attrs">
                            <div className="attribute">
                                <div className="attr-key">Gender</div>
                                <div className="attr-value">{character.gender}</div>
                            </div>
                            <div className="attribute">
                                <div className="attr-key">Birth Year</div>
                                <div className="attr-value">{character.birth_year}</div>
                            </div>
                            <hr />
                            <div className="attribute">
                                <div className="attr-key">Height</div>
                                <div className="attr-value">{character.height}cms</div>
                            </div>
                            <div className="attribute">
                                <div className="attr-key">Weight</div>
                                <div className="attr-value">{character.mass}kgs</div>
                            </div>
                            <hr />
                            <div className="attribute">
                                <div className="attr-key">Hair Color</div>
                                <div className="attr-value">{character.hair_color}</div>
                            </div>
                            <div className="attribute">
                                <div className="attr-key">Skin Color</div>
                                <div className="attr-value">{character.skin_color}</div>
                            </div>
                            <div className="attribute">
                                <div className="attr-key">Eye Color</div>
                                <div className="attr-value">{character.eye_color}</div>
                            </div>
                        </div>
                        <div className="character-info">
                            <CharacterBlock title="Homeworld" badges={homeworld} loadingState={loadingState.homeworld} />
                            <hr />
                            <CharacterBlock title="Films" badges={films} loadingState={loadingState.films} />
                            <hr />
                            <CharacterBlock title="Species" badges={species} loadingState={loadingState.species} />
                            <hr />
                            <CharacterBlock title="Vehicles" badges={vehicles} loadingState={loadingState.vehicles} />
                            <hr />
                            <CharacterBlock title="Starships" badges={starships} loadingState={loadingState.starships} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}