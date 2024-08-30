import './stylesAniversariantes.css';
import React, { useState, useEffect } from 'react';
import { Header } from '../../components/Header/Header';
import { CardAniversariante } from '../../components/CardAniversariante/CardAniversariante';
import { Footer } from '../../components/Footer/Footer';

// URL da API (exemplo)
const API_URL = 'https://api.exemplo.com/aniversariantes';

const Aniversariantes = () => {
  // Obtém o mês atual (0-11) e adiciona 1 para o formato (1-12)
  const mesAtual = new Date().getMonth() + 1;

  const [mesSelecionado, setMesSelecionado] = useState(mesAtual);
  const [aniversariantes, setAniversariantes] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null);

  // Função para buscar dados da API
  const buscarAniversariantes = async () => {
    try {
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error('Falha ao buscar dados');
      }
      const data = await response.json();
      setAniversariantes(data);
    } catch (error) {
      setErro(error.message);
    } finally {
      setCarregando(false);
    }
  };

  useEffect(() => {
    buscarAniversariantes();
  }, []);

  // Filtra aniversariantes com base no mês selecionado
  const aniversariantesDoMes = aniversariantes.filter(
    (aniversariante) => aniversariante.mes === mesSelecionado
  );

  return (
    <div className='aniversariantesContainer'>
      <Header />
      <div className='bodyAniversariantes'>
        <h1 className='titleAniversariantes'>Aniversariantes</h1>

        <section className='sectionSelect'>
          <label className='selectMes' htmlFor="mes">Mês de </label>
          <select
            id="mes"
            value={mesSelecionado}
            onChange={(e) => setMesSelecionado(Number(e.target.value))}
          >
            <option value={1}>Janeiro</option>
            <option value={2}>Fevereiro</option>
            <option value={3}>Março</option>
            <option value={4}>Abril</option>
            <option value={5}>Maio</option>
            <option value={6}>Junho</option>
            <option value={7}>Julho</option>
            <option value={8}>Agosto</option>
            <option value={9}>Setembro</option>
            <option value={10}>Outubro</option>
            <option value={11}>Novembro</option>
            <option value={12}>Dezembro</option>
          </select>
        </section>

        <section className='sectionAniversario'>
          {carregando ? (
            <p className='carregandoDados'>Carregando dados...</p>
          ) : aniversariantesDoMes.length > 0 ? (
            aniversariantesDoMes.map((aniversariante) => (
              <CardAniversariante
                key={aniversariante.id}
                src={aniversariante.foto}
                childrenName={aniversariante.nome}
                childrenDescrition={`Aniversariante em ${obterNomeDoMes(aniversariante.mes)}`}
              />
            ))
          ) : (
            <p className='menssageSemAniversariante'>Nenhum aniversariante para este mês.</p>
          )}
        </section>
      </div>
      <Footer />
    </div>
  );
};

// Função para obter o nome do mês
const obterNomeDoMes = (mes) => {
  const meses = [
    'Janeiro', 'Fevereiro', 'Março', 'Abril',
    'Maio', 'Junho', 'Julho', 'Agosto',
    'Setembro', 'Outubro', 'Novembro', 'Dezembro'
  ];
  return meses[mes - 1];
};

export default Aniversariantes;
