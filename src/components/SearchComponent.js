import React, {useState, useEffect} from 'react'
import { ProductsData } from '../data/products';
import '../pages/css/menu.css';

const SearchComponent = () => {
  //setear los hooks useState
  const [ users, setUsers ] = useState([])
  const [ search, setSearch ] = useState("")

  //función para traer los datos de la API
  const URL = 'http://localhost:3001/productos'

  const showData = async () => {
    const response = await fetch(URL)
    const data = await response.json()
    //console.log(data)
    setUsers(data)
  }   
   //función de búsqueda
  const searcher = (e) => {
      setSearch(e.target.value)   
  }
   //metodo de filtrado 1 
   /*  let results = []
   if(!search)
   {
       results = users
   }else{
        results = users.filter( (dato) =>
        dato.name.toLowerCase().includes(search.toLocaleLowerCase())
    )
   } */

   //metodo de filtrado 2   
   const results = !search ? users : users.filter((dato)=> dato.nombre.toLowerCase().includes(search.toLocaleLowerCase()))
  
   useEffect( ()=> {
    showData()
  }, [])
  
  //renderizamos la vista
  return (
    <div>
        
        <input value={search} onChange={searcher} type="text" placeholder='Busca tu Bici...' className='form-control'/>
        <div className="columna_products"> {results.map((product, i) => (
            <div key={i}>
                <img className="img_product"  src={product.img} alt={product.nombre} />
                <div>
                    <p className=" name">
                        {product.nombre} 
                    </p>
                    <p className="name_product">
                     ${product.precio}
                    </p>

                    <button className="boton" onClick={() => console.log(product)}>
                        Agregar al Carrito
                    </button>
                </div>
            </div>
        )
        )}
        </div>
    </div>
  )
}
export default SearchComponent