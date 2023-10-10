import express, { Request, Response } from 'express';
import axios from 'axios';
import cors from 'cors'

const app = express();
const PORT = 4000;

interface Character {
  id: number;
  name: string;
  image: string;
}
app.use(cors({
  origin: 'http://localhost:3000',
}));
app.get('/characters', async (request: Request,  res: Response) => {
  try {
    const query = `
      {
        characters(filter: { species: "human" }) {
          results {
            id
            name
            image
          }
        }
      }
    `;
    const url = 'https://rickandmortyapi.com/graphql'
    const response = await axios.post(url, { query });
    const characters: Character[] = response.data.data.characters.results;
    res.json(characters);
    
  } catch (error) {
    console.error('Error fetching characters:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
