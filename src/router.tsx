import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./Error";
import CharacterList from "./routes/characters/List";
import CharacterDetails from "./routes/characters/Details";
import { resolveStarWarsCharacters } from "./context/starwars.reducer";

export const router = createBrowserRouter([
        {path: "/", element: <CharacterList />, errorElement: <ErrorPage />, index: true, loader: resolveStarWarsCharacters},
        {path: "/characters/:id", element: <CharacterDetails />, loader: async ({ params }) => {
            if (!params.id) {
                return null;
            }
            return fetch(`https://swapi.dev/api/people/${params.id}`);
        }}
]);