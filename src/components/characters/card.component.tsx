import { Link } from "react-router-dom";
import "./card.css";

export const Card = ({character}: {character: StarWarsCharacter}) => {
    return (
        <div className="card-container">
            <div className="card-header">{character.name}</div>
            <div className="card-body">
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
            <Link to={`/characters/${character._id}`} className="card-footer">Click to know more!</Link>         
        </div>
    );
}