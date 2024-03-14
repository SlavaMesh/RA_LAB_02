import shirt from '../images/card_backs_simple_red.svg'
import d4 from '../../assets/images/ornamental_deck_4_of_diamonds.svg'
import c7 from '../../assets/images/ornamental_deck_7_of_clubs.svg'
import bj from  '../../assets/images/ornamental_deck_black_joker.svg'
import h5 from  '../../assets/images/white_deck_5_of_hearts.svg'
import h8 from  '../../assets/images/white_deck_8_of_hearts.svg'
import s10 from '../../assets/images/white_deck_10_of_spades.svg'
import kd from '../../assets/images/white_deck_king_of_diamonds.svg'
import ks from '../../assets/images/white_deck_king_of_spades.svg'

const cardsArray = [
    {id:1, src: d4, src_2: shirt, isFlipped: false},
    {id:2, src: c7, src_2: shirt, isFlipped: false},
    {id:3, src: bj, src_2: shirt, isFlipped: false},
    {id:4, src: h5, src_2: shirt, isFlipped: false},
    {id:5, src: h8, src_2: shirt, isFlipped: false},
    {id:6, src: s10, src_2: shirt, isFlipped: false},
    {id:7, src: kd, src_2: shirt, isFlipped: false},
    {id:8, src: ks, src_2: shirt, isFlipped: false}
  ]

export const cards = [...cardsArray, ...cardsArray]