import React, {useState, useEffect} from 'react';
import md5 from 'md5'

import { Container } from './styles';

import api from '../../services/api'

import Card from '../../components/Card'

const MARVEL_PUBLIC_KEY = '385381afed010aedad4b49cc871138da'
const MARVEL_PRIVATE_KEY ='b0bd971b7482f39114c03fdc032d7165bb67c725'


function App() {
  const [characters, setCharacters] = useState([])
  const [offset, setOffset] = useState(0)
  const [limit, setLimit] = useState(0)
  const [total, setTotal] = useState(0)
  const [count, setCount] = useState(0)
  const [search, setSearch] = useState('')
  

  useEffect(() => {
    const loadCharacters = async () => {
      const timestamp = new Date().getMilliseconds();
      const strmd5 = md5(timestamp + MARVEL_PRIVATE_KEY + MARVEL_PUBLIC_KEY)
      
      const response = await api.get(`/v1/public/characters`,{
        params: {
          ts: timestamp,
          apikey: MARVEL_PUBLIC_KEY,
          hash: strmd5,
          offset

        }        
      })

      const chars = response.data.data
      setCount(chars.count)
      setLimit(chars.limit)
      setTotal(chars.total)
      setOffset(chars.offset)
      setCharacters(chars.results)
    }

    loadCharacters()
  }, [offset])


  async function findHero(){
    
    console.log(search.value)
    const timestamp = new Date().getMilliseconds();
      const strmd5 = md5(timestamp + MARVEL_PRIVATE_KEY + MARVEL_PUBLIC_KEY)
      
      const response = await api.get(`/v1/public/characters`,{
        params: {
          ts: timestamp,
          apikey: MARVEL_PUBLIC_KEY,
          hash: strmd5,
          name: search.value != '' ? search.value : null
        }        
      })

      const chars = response.data.data
      setCount(chars.count)
      setLimit(chars.limit)
      setTotal(chars.total)
      setCharacters(chars.results)

  }

  return (
    <Container>
      <header>
        <div class="Busca">
          <input type="text" ref={input => setSearch(input)} defaultValue='' 
          placeholder="     Busque seu herói aqui"/>
          <button type="button" onClick={() => findHero()}>Buscar</button>
        </div>

        <div>

          <p>Offset: {offset}</p>
          <p>Limit: {limit}</p>
          <p>Count: {count}</p>
          <p>Total: {total}</p>
        </div>

      </header>
      {
        characters.length ? 
          (
          <ul>
            {
            characters.map((char) => (
              <Card key={char.id}
                hero={char}
              />
            ))
            }
            </ul>
          )
        : (<h1>Não há herois disponíveis</h1>)
      }

      <footer>
        
        <h2>footer</h2>
      </footer>
    </Container>
  );
}

export default App;
