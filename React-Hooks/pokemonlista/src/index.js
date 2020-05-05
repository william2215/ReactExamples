import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'
import './index.css';

function App() {
    const [pokedex, setPokedex] = useState([])
    const [wildPokemon, setWildPokemon] = useState({})

    useEffect(() => {
        encounterWildPokemon();
    }, [])

    const pokeid = () => {
        const min = Math.ceil(1)
        const max = Math.floor(700)
        return Math.floor(Math.random() * (max - min + 1)) + min
    }

    const encounterWildPokemon = () => {
        let pokmon = pokeid()
        axios.get('https://pokeapi.co/api/v2/pokemon/' + pokmon)
        .then(res => {
            console.log(res.data)
            setWildPokemon(res.data)
        })
        .catch(err => console.log(err))
    }


    const catchPokemon = (pokemon) => {
        setPokedex(state => {
            const monExist = (state.filter(p => pokemon.id == p.id).length > 0);
            console.log(monExist)
            if (!monExist) {
                state = [...state, pokemon]
                state.sort((a,b) => {
                    return a.id - b.id
                })                
            }
            return state
        })
        encounterWildPokemon();
    }

    const releasePokemon = id => {
        setPokedex(state => state.filter(p => p.id != id))
      }
    return(
        <div className="app-wrapper">
            <header>
                <h1 className="title">React Hooks</h1>
                <h3 className="subtitle">With Pokemon</h3>
            </header>
       

        <section className="wild-pokemon">
            <h1>Wild Encouder</h1>
            <img src={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'+ wildPokemon.id + ".png"} className="sprite"/>
        </section>
        <h3>{wildPokemon.name}</h3>
        <button className = "catch-btn" onClick={()=> catchPokemon(wildPokemon) }>CATCH</button>
        <section className="pokedex">
            <h2>Pokedex</h2>
            <div className = "pokedex-list">

                {pokedex.map(pokemon => (
                    <div className="pokemon" key={pokemon.id}>
                        <img src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + pokemon.id + ".png"} className="sprite"/>
                        <h3 className="pokemon-name">{pokemon.id}</h3>
                        <button className="remove" onClick={() => releasePokemon(pokemon.id)}>&times;</button>
                </div>
                ))}
            </div>
        </section> 
        </div>
    )
}


ReactDOM.render(<App />, document.getElementById('root'));

