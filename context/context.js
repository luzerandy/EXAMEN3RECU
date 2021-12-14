import React, { useState, useEffect, createContext } from 'react';

export const ApiContext = createContext();

const FrasesProvider = (props) => {

    const [Today, setToday] = useState([])
    const [Random, setRandom] = useState([])
    const [Quotes, setQuotes] = useState([])
    useEffect(() => {
        const getToday = () => {
            fetch('https://zenquotes.io/api/today/')
                .then(data => {
                    return data.json();
                })
                .then(resultado => {
                    setToday(resultado);
                });
        }
        const getRandom = () => {
            fetch('https://zenquotes.io/api/random/')
                .then(data => {
                    return data.json();
                })
                .then(resultado => {
                    setRandom(resultado);
                });
        }
        const getQuotes = () => {
            fetch('https://zenquotes.io/api/quotes/')
                .then(data => {
                    return data.json();
                })
                .then(resultado => {
                    setQuotes(resultado);
                });
        }
        getToday()
        getRandom()
        getQuotes()
    }, [])


    return (
        <ApiContext.Provider
            value={{
                Today,
                Random,
                Quotes
            }}>
            {props.children}
        </ApiContext.Provider>
    )
}
export default FrasesProvider;