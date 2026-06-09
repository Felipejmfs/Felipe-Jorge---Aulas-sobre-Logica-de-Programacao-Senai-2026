const baralho = 'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1'
async function chamarApiBaralho() {
    const baralhoEmbaralhado = await fetch(baralho)
    console.log(baralhoEmbaralhado);
    if (baralhoEmbaralhado.status === 200){
        const obj = await baralhoEmbaralhado.json();
    }
}

chamarApiBaralho()