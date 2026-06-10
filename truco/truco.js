import axios from 'axios';
let id = null

async function embaralhar() {
    try {
        const baralho = await axios.get('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
        console.log(baralho.data.deck_id);
        id = baralho.data.deck_id
    } catch (error) {
        console.error(error);
    }

}

async function darCartas() {
    try {
        const darCartas = await axios.get(`https://deckofcardsapi.com/api/deck/${id}/draw/?count=2`)
        console.log(darCartas.data);
    } catch (error) {
        console.error(error);
    }
}
embaralhar()
darCartas() 
