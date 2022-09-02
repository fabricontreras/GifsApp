
import { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

export const GifExpertApp = () => {
  
  const [categories, setCategories] = useState([''])
  
  const onAddCategory = (newCategory) => {
    // categories.push('cod')//los push no son muy recomendados usar en react

    if( categories.includes(newCategory) )return;

  //  console.log(newCategory)

  //diferentes formas de escribir el codigo
    setCategories([ newCategory,...categories])
    // setCategories(cate => [...cate, 'HOLA'] )
  }
  
  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory
        // setCategories={setCategories}
        onNewCategory={onAddCategory}
      />


      {
        categories.map((category) => (
          <GifGrid 
          key={category}
          category={category}/>
        ))
      }

    </>
  )
}
