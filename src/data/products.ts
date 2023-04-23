import { Product } from '../model/Product';

const data: Array<Product> = [
  {
    id: 1,
    nombre: 'Zapatos A',
    valor: 19.3,
    enStock: true,
    createdOn: new Date(),
  },
  {
    id: 2,
    nombre: 'Zapatos B',
    valor: 206.3,
    enStock: false,
    createdOn: new Date(),
  },
  {
    id: 3,
    nombre: 'Zapatos C',
    valor: 56.0,
    enStock: true,
    createdOn: new Date(),
  },
  {
    id: 4,
    nombre: 'Zapatos D',
    valor: 63.8,
    enStock: true,
    createdOn: new Date(),
  },
  {
    id: 5,
    nombre: 'Zapatos E',
    valor: 39.4,
    enStock: false,
    createdOn: new Date(),
  },
];
export { data };
