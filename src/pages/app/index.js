import React, {useState, useEffect} from 'react';
import md5 from 'md5'
import {  ArrowBackIos, ArrowForwardIos } from '@material-ui/icons';

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
          hash: strmd5

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
  }, [])


  async function findHero(){
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

  async function changePage(direction){
    let newOffset = 0;
    if(direction === 'prev'){
      if(offset > 20)
        newOffset =  offset - 20
    }else if(direction === 'next'){
      if((offset + 20) < total)
        newOffset = offset + 20
    }

    console.log(direction)
    console.log(offset)
    const timestamp = new Date().getMilliseconds();
    const strmd5 = md5(timestamp + MARVEL_PRIVATE_KEY + MARVEL_PUBLIC_KEY)
    
    const response = await api.get(`/v1/public/characters`,{
      params: {
        ts: timestamp,
        apikey: MARVEL_PUBLIC_KEY,
        hash: strmd5,
        offset: newOffset

      }        
    })

    const chars = response.data.data
    console.log(chars)
    setCount(chars.count)
    setLimit(chars.limit)
    setTotal(chars.total)
    setOffset(chars.offset)
    setCharacters(chars.results)

  }

  return (
    <Container>
      <header>
        <div>
          <input type="text" ref={input => setSearch(input)} defaultValue='' 
          placeholder="     Busque seu herói aqui"/>
          <button type="button" onClick={() => findHero()}>Buscar</button>
        </div>

      <aside>
        
          <div onClick={() => changePage('prev')}>
            <ArrowBackIos /><span>Prev</span>
          </div>
            <p>{offset} de {total}</p>
          <div onClick={() => changePage('next')}>
            <span>Next</span><ArrowForwardIos/>
          </div>        
        
        </aside>
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
    </Container>
  );
}

export default App;
