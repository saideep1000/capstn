import {  createContext,  useState ,useEffect }  from 'react';

import { getCategoriesAndDocuments } from '../utils/firebase/firebase.utils.js';

//import SHOP_DATA from '../shop-data.js';

export const CategoriesContext =createContext({
      categoriesMap: {},
});

export const CategoriesProvider=({children})=>{

    const [ categoriesMap ,  setCategoriesMap  ]= useState({});
  //  useEffect(()=>{
  //      addCollectionAndDocuments('categories',SHOP_DATA);
  //  },[]);
//only one time upload to firebase and then comment out 


    useEffect(()=>{
        const getCategoriesMap=async ()=>{
           const categoryMap= await  getCategoriesAndDocuments();
          // console.log(categoryMap);
           setCategoriesMap(categoryMap);
        }




        getCategoriesMap();
    },[]);
    const value={  categoriesMap  }  ;
    return (
        <CategoriesContext.Provider   value={ value}  >{children}</CategoriesContext.Provider>
    )
}