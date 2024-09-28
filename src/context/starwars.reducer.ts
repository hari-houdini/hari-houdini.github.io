type StarWarsPeopleRes = Omit<StarWarsCharacter, "_id"> & {
    url: string;
}

type Results = {
    count: number;
    next: string;
    previous: string;
    results: StarWarsPeopleRes[];
}

export const resolveStarWarsCharacters = async () => {
    const url = "https://swapi.dev/api/people/"

    try{
        const res = await resolveStarWarsData<Results>(url);

        if (res) {
            const peopleIdRegex = /people\/(\d+)\//;

            const characters: StarWarsCharacter[] = res.results.map(({ url, ...rest}) => {
                const match = url.match(peopleIdRegex)
                const _id = match?.[1] ?? "";
                return {
                    ...rest,
                    _id,      
                };
            });
            return characters;
        }
        return [];
    } catch (err) {
        console.log({err});
        return null;
    }
}

export const resolveStarWarsData = async <T>(url: string): Promise<T | null> => {
    try{
        const res = await fetch(url);

        if (res.ok) {
            const data: T = await res.json();
            return data;
        }
        return null;
    } catch (err) {
        console.log({err});
        return null;
    }
}

export async function fetchAllData<T>(urls: string[]): Promise<T[] | null> {
    try {
      const fetchPromises = urls.map(url => fetch(url));
      const responses = await Promise.all(fetchPromises);
  
      const dataPromises = responses.map(response => response.json());
      const _data: T[] = await Promise.all(dataPromises);
  
      return _data;
    } catch (error) {
      console.error("Error fetching data:", error);
      return null;
    }
  }