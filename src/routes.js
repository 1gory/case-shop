import MainPage from './components/MainPage';
import Catalog from './components/Catalog';
import Delivery from './components/Delivery';
import Cooperation from './components/Cooperation';
import Product from './components/Product';
import Payment from './components/Payment';
import Gallery from './components/Gallery';
import Blog from './components/Blog';
import About from './components/About';
import Checkout from './components/Checkout';
import SuccessPayment from './components/Payment/SuccessPayment';
import ErrorPayment from './components/Payment/ErrorPayment';
import GenericNotFound from './components/GenericNotFound';

export default [
  {
    path: '/',
    id: 0,
    exact: true,
    component: MainPage,
  },
  {
    id: 1,
    path: '/catalog/:catalogName?',
    component: Catalog,
  },
  {
    id: 2,
    path: '/delivery',
    component: Delivery,
  },
  {
    id: 3,
    path: '/cooperation',
    component: Cooperation,
  },
  {
    id: 4,
    path: '/product/:id',
    component: Product,
  },
  {
    id: 5,
    path: '/payment',
    component: Payment,
  },
  {
    id: 6,
    path: '/shopSuccessUrl',
    component: SuccessPayment,
  },
  {
    id: 7,
    path: '/shopFailUrl',
    component: ErrorPayment,
  },
  {
    id: 8,
    path: '/gallery',
    component: Gallery,
  },
  {
    id: 9,
    path: '/checkout',
    component: Checkout,
  },
  {
    id: 10,
    path: '/blog/:articleName?',
    component: Blog,
  },
  {
    id: 11,
    path: '/about',
    component: About,
  },
  {
    id: 12,
    path: '*',
    component: GenericNotFound,
  },
];
