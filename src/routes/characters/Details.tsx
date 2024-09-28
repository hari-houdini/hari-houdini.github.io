
import { useLoaderData, useNavigation } from 'react-router-dom';

import '../../App.css'
import { useEffect, useState } from 'react';
import { CharacterDetailsBox } from '../../components/characters/details.component';
import { fetchAllData } from '../../context/starwars.reducer';

const INITIAL_LOADING_STATE: LoadingState = {
  homeworld: false,
  films: false,
  species: false,
  vehicles: false,
  starships: false
}

const CharacterDetails = () => {
  const character = useLoaderData() as (StarWarsCharacter | null);
  const navigation = useNavigation();

  const [homeworld, setHomeworld] = useState<StarWarsPlanet[] | null>(null);
  const [films, setFilms] = useState<StarWarsFilm[] | null>(null);
  const [species, setSpecies] = useState<StarWarsSpecies[] | null>(null);
  const [vehicles, setVehicles] = useState<StarWarsVehicle[] | null>(null);
  const [starships, setStarships] = useState<StarWarsStarShip[] | null>(null);

  const [loadingState, setLoadingState] = useState<LoadingState>(INITIAL_LOADING_STATE);

  const resolveHomeworldData = async () => {
    const _homeworld = character?.homeworld;

    if (!_homeworld) {
      return null;
    }

    try {
      setLoadingState({
        ...loadingState,
        homeworld: true
      })
      const _data = await fetchAllData<StarWarsPlanet>([_homeworld]);
      setHomeworld(_data);
      setLoadingState({
        ...loadingState,
        homeworld: false
      })
      return _data;
    } catch (err) {
      setLoadingState({
        ...loadingState,
        homeworld: false
      })
      console.error("Error fetching data:", err);
      return null;
    }
  }

  const resolveFilmsData = async () => {
    const _films = character?.films;

    if (!_films) {
      return null;
    }

    try {
      setLoadingState({
        ...loadingState,
        films: true
      })
      const _data = await fetchAllData<StarWarsFilm>(_films);
      setFilms(_data);
      setLoadingState({
        ...loadingState,
        films: false
      })
      return _data;
    } catch (err) {
      setLoadingState({
        ...loadingState,
        films: false
      })
      console.error("Error fetching data:", err);
      return null;
    }
  }

  const resolveSpeciesData = async () => {
    const _species = character?.species;

    if (!_species) {
      return null;
    }

    try {
      setLoadingState({
        ...loadingState,
        species: true
      })
      const _data = await fetchAllData<StarWarsSpecies>(_species);
      setSpecies(_data);
      setLoadingState({
        ...loadingState,
        species: false
      })
      return _data;
    } catch (err) {
      setLoadingState({
        ...loadingState,
        species: false
      })
      console.error("Error fetching data:", err);
      return null;
    }
  }

  const resolveVehiclesData = async () => {
    const _vehicles = character?.vehicles;

    if (!_vehicles) {
      return null;
    }

    try {
      setLoadingState({
        ...loadingState,
        vehicles: true
      })
      const _data = await fetchAllData<StarWarsVehicle>(_vehicles);
      setVehicles(_data)
      setLoadingState({
        ...loadingState,
        vehicles: false
      })
      return _data;
    } catch (err) {
      setLoadingState({
        ...loadingState,
        vehicles: false
      })
      console.error("Error fetching data:", err);
      return null;
    }
  }

  const resolveStarshipsData = async () => {
    const _starships = character?.starships;

    if (!_starships) {
      return null;
    }

    try {
      setLoadingState({
        ...loadingState,
        starships: true
      })
      const _data = await fetchAllData<StarWarsStarShip>(_starships);
      setStarships(_data)
      setLoadingState({
        ...loadingState,
        starships: false
      })
      return _data;
    } catch (err) {
      setLoadingState({
        ...loadingState,
        starships: false
      })
      console.error("Error fetching data:", err);
      return null;
    }
  }

  useEffect(function onMount() {
    resolveHomeworldData();
    resolveFilmsData();
    resolveSpeciesData();
    resolveStarshipsData();
    resolveVehiclesData();
  }, [character])

  if (navigation.state === "loading") {
    return (<div>Loading...</div>)
  }

  if ( !character ) {
    return (<div>No Data Found!</div>)
  }

  return (
    <ul className="card-list">
      <CharacterDetailsBox 
        character={character}
        homeworld={homeworld}
        films={films}
        species={species}
        vehicles={vehicles}
        starships={starships}
        loadingState={loadingState}
        />
    </ul>
  )
}

export default CharacterDetails
