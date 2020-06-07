import {
  food,
  house,
  lazer,
  gift,
  transport,
  card,
  clothing,
} from '../../assets/images';

export const handleTagImage = type =>
  ({
    Alimentação: food,
    'Conta de casa': house,
    Lazer: lazer,
    Presente: gift,
    Transporte: transport,
    Cartão: card,
    Roupas: clothing,
  }[type]);
