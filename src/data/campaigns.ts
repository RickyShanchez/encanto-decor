import { categories } from './products';

/** Estrutura reutilizável: cadastre novas campanhas sazonais neste arquivo. */
export type SeasonalCampaign = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  category: string;
  image: string;
  imageAlt: string;
  buttonLabel: string;
};

export const seasonalCampaigns: SeasonalCampaign[] = [
  {
    id: 'natal',
    eyebrow: 'COLEÇÃO SAZONAL · ENCANTO',
    title: 'O Natal mora nos detalhes.',
    description: 'Encontre presentes especiais e transforme cada cantinho em um cenário de afeto.',
    category: categories[6],
    image: 'https://images.pexels.com/photos/29871957/pexels-photo-29871957.jpeg?auto=compress&cs=tinysrgb&w=1800',
    imageAlt: 'Árvore de Natal decorada em ambiente acolhedor',
    buttonLabel: 'Descobrir o Natal Encanto',
  },
];
