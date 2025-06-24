import React, { useState } from 'react';
import { AddCategory } from '../components/AddCategory';
import { GifGrid } from '../components/GifGrid';

export const HomePage = () => {

const [categories, setCategories] = useState(['One Punch']);

const onAddCategory = (newCategory) => {

  if (categories.includes(newCategory)) return;  

  setCategories([newCategory, ...categories]);
}

return (
    <>
      <h1>GifExpertApp</h1>

        <AddCategory 
          onNewCategory={onAddCategory}
        />

        <h2>Categories</h2>

        {
            categories.map(category => (
               <GifGrid key={category} category={category} />
            ))
        }
 
    </>
  )
} 