//import  SHOP_DATA from '../../shop-data.json';

import {  Routes , Route } from 'react-router-dom';

import CategoriesPreview from '../categories-preview/categories-preview.component';
import Category from '../category/category.component';
//import CategoryPreview from '../../components/category-preview/category-preview.component';
//import ProductCard from '../../components/product-card/product-card.component';
import  './shop.styles.scss';

const Shop = ()=>{

    

    return (
        <Routes>
              <Route index element={<CategoriesPreview />} />
              <Route path=':category' element={<Category />}  />
        </Routes>
    );
};

export default Shop;