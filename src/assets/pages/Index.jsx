
/* import store from '../../store/store'
import inputs_filter from '../../store/actions/inputs_filter' */
import Carousel from '../components/Carousel'
import Welcome from '../components/Welcome'
/* import { useSelector, useDispatch } from 'react-redux' */
export default function Index() {
/*   const {title, categories} = useSelector(store =>console.log(store.inputs)) */
  //con use selector selecciono los estados que necesito 
 /*  const dispatch = useDispatch() */
/*   console.log(title)
  console.log(categories) */
  return (
    
    <> <Welcome/>
  
  <Carousel/>
  
  </>
  )
}
