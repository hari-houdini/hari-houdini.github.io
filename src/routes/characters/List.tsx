import { useLoaderData, useNavigation } from 'react-router-dom';

import { Card } from '../../components/characters/card.component';
import '../../App.css'
import { hasItemsInList } from '../../common.util';

const CharacterList = () => {
  const characters = useLoaderData() as (StarWarsCharacter[] | null);
  const navigation = useNavigation();

  if (navigation.state === "loading") {
    return (<div>Loading...</div>)
  }

  if ( !hasItemsInList(characters)) {
    return (<div>No Data Found!</div>)
  }

  return (
    <ul className="card-list">
      {characters!.map((character) => (
        <li key={character._id} style={{ listStyle: "none" }}>
          <Card character={character} />
        </li>
      ))}
    </ul>
  )
}

export default CharacterList
