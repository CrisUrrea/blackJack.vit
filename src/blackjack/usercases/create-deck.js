import _ from "underscore";

/**
 * 
 * @param {Array<string>} tipoDeCarta Ejemplo: ['C','D','H','S']
 * @param {Array<string>} tiposEspeciales Ejemplo: ['A','J','Q','K']
 * @returns {Array} retorna nuevo deck de cartas
 */

// Esta función crea un nuevo deck
export const crearDeck = (tipoDeCarta, tiposEspeciales) => {

    if ( !tipoDeCarta || tipoDeCarta === 0 )
        throw new Error('tipoDeCarta es obligatiroio como un arreglo de string');

    if ( !tiposEspeciales || tiposEspeciales === 0 )
        throw new Error('tiposEspeciales es obligatiroio como un arreglo de string');

    let deck = [];

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tipoDeCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tipoDeCarta ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );
    return deck;
}

// export default crearDeck;