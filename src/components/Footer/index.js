import React from 'react';
import { FooterBase } from './styles';

function Footer() {
  return (
    <FooterBase>
      <a href="https://www.alura.com.br/">
        <img src="https://fontmeme.com/permalink/221016/d06db71e93b9fdd4a66610b9fa36da07.png" alt="Logo ArtoriasFlix" />
      </a>
      <p>
        Seu site de series e filmes
        {' '}
        <a href="https://www.alura.com.br/">
          para todos os gostos
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
