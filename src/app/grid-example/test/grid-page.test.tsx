import { render, screen } from "@testing-library/react"
import GridPage, { Character } from "../page"

const mockCharacters = {
  info: {},
  results: [
    {
      id: "1",
      name: "Rick Sanchez",
      image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    },
    {
      id: "2",
      name: "Morty Smith",
      image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
    },
  ],
};

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(mockCharacters),
    ok: true,
    status: 200,
  }) as Promise<Response>
  );

describe('Testing Grid Page', () => {
    it('Should load 3 charcaters', () => {
        render(<GridPage/>)
        expect(screen.getByText('Rick Sanchez')).toBeInTheDocument();
        expect(screen.getByText('Morty Smith')).toBeInTheDocument();
        
    })
})