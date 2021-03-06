import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'

import md5 from 'md5'
import history from '../../services/history'

import api from '../../services/api'
import Card from '../../components/Card'

import { Container } from './styles';

import {
  useParams,
  useHistory
} from 'react-router-dom'

import { editHero } from '../../store/modules/hero/actions'

const MARVEL_PUBLIC_KEY = '385381afed010aedad4b49cc871138da'
const MARVEL_PRIVATE_KEY ='b0bd971b7482f39114c03fdc032d7165bb67c725'

export default function Char() {
  const { id } = useParams()
  
  const { hero } = useHistory().location.state;
  const dispatch = useDispatch();

  const heros = useSelector(state => state.heros)
  console.log("heros " + heros)

  const [series, setSeries] = useState([])
  const [description, setDescription] = useState('')

  useEffect(() => {
    const loadSeries = async () => {
      const timestamp = new Date().getMilliseconds();
      const strmd5 = md5(timestamp + MARVEL_PRIVATE_KEY + MARVEL_PUBLIC_KEY)
      
      const response = await api.get(`/v1/public/characters/${id}/series`,{
        params: {
          ts: timestamp,
          apikey: MARVEL_PUBLIC_KEY,
          hash: strmd5,
        }        
      })

      const charSeries = response.data.data
      setSeries(charSeries.results)
    }


    loadSeries()
  }, [id])
  

  function changeDescription() {
    dispatch(editHero(id, description.value))
  }

  return (
    <Container>
      <header>
        <button onClick={() => (history.goBack())}>Voltar</button>
      </header>
      <h1>{hero.name}</h1>
      <img src={hero.thumbnail.path+"/standard_large.jpg"}/>

      <textarea ref={input => setDescription(input)} defaultValue={hero.description}/>

      <button onClick={() => changeDescription()}> Salvar </button>
      
      {
        series.length ? 
          (
          <ul>
            {
            series.map((serie) => (
              <Card key={serie.id}
                hero={serie}
                title={serie.title}
                details={false}
              />
            ))
            }
            </ul>
          )
        : (<h1>Não há séries disponíveis</h1>)
      }

    </Container>
  );
}
