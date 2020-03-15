import React from 'react';
import history from '../../services/history'

import { Container } from './styles';

export default function Card({hero, title, details = true }) {
  
  function detailChar(idHero) {
    history.push(`/char/${idHero}`, {
      hero
    })
  }

  return (
    <Container>
      <h3>{hero.name != null ? hero.name : title}</h3>
      <img src={hero.thumbnail.path+"/standard_large.jpg"}  alt="Hero Avatar"/>
      {
        details ?
        <div>
          <button type="button" onClick={() => detailChar(hero.id)}>Detalhes</button>
        </div>
        :
        <div />
      }
      
    </Container>
  );
}
