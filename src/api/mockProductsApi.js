import delay from './delay';

const products = [
  {
    id: 1,
    title: 'Hidratante',
    size: '50g',
    description: 'hidratante para peles extra secas e/ou regiões ressecadas do corpo,pode ser usado nas pontas do cabelo e nos lábios',
    ingredients: 'óleo de coco, óleo de amêndoas, manteiga de cacau, manteiga de karité',
    price: 20,
    category: 'hidratantes'
  },
  {
    id: 2,
    title: 'Desodorante',
    size: '50g',
    description: '',
    ingredients: 'óleo de coco, bicarbonato de sódio, amido de milho, óleo de abacate, óleo essencial',
    price: 12,
    category: 'desodorantes'
  },
  {
    id: 3,
    title: 'Creme Dental',
    size: '50g',
    description: '',
    ingredients: 'glicerina vegetal, carvão ativado, aloe vera, stevia, bicarbonato de sódio, óleo essencial de hortelã-pimenta',
    price: 12,
    category: 'cremes dentais'
  },
  {
    id: 4,
    title: 'Sabonete de Alecrim',
    size: '90g',
    description: '',
    ingredients: '',
    price: 6,
    category: 'sabonetes'
  },
  {
    id: 5,
    title: 'Sabonete de Canela com Açafrão e Argila Vermelha',
    size: '90g',
    description: '',
    ingredients: '',
    price: 6,
    category: 'sabonetes'
  }
];

class ProductsApi {
  static getProducts() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], products))
      }, delay)
    })
  }

  static filterProducts(term) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (term.trim() === '') resolve([]);

        const regex = new RegExp(term, 'i');

        resolve(products.filter(a => {
          return regex.test(a.title)
        }));
      }, delay)
    })
  }
}

export default ProductsApi;