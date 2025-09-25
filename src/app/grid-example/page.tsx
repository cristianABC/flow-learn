interface Response {
    info: object,
    results: Character[]
}


export interface Character {
    id: string;
    name: string;
    image: string;
}


export default async function GridPage() {
  const results = await fetch('https://rickandmortyapi.com/api/character')
  const characters: Response = await results.json();
  
    return (
    <div>
      <h1>Personajes</h1>
      {characters.results.map(character => (
        <div key={character.id}>
            <h2>{character.name}</h2>
        </div>
      ))}

    </div>
  );
}