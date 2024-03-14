import shirt from '../images/card_backs_simple_red.svg'

const cardsArray = [
    {id:1, src: '../src/assets/images/ornamental_deck_4_of_diamonds.svg', src_2: shirt, isFlipped: false},
    {id:2, src: '../src/assets/images/ornamental_deck_7_of_clubs.svg', src_2: shirt, isFlipped: false},
    {id:3, src: '../src/assets/images/ornamental_deck_black_joker.svg', src_2: shirt, isFlipped: false},
    {id:4, src: '../src/assets/images/white_deck_5_of_hearts.svg', src_2: shirt, isFlipped: false},
    {id:5, src: '../src/assets/images/white_deck_8_of_hearts.svg', src_2: shirt, isFlipped: false},
    {id:6, src: '../src/assets/images/white_deck_10_of_spades.svg', src_2: shirt, isFlipped: false},
    {id:7, src: '../src/assets/images/white_deck_king_of_diamonds.svg', src_2: shirt, isFlipped: false},
    {id:8, src: '../src/assets/images/white_deck_king_of_spades.svg', src_2: shirt, isFlipped: false}
  ]

export const cards = [...cardsArray, ...cardsArray]