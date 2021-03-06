import Info from '../Info/Info.jsx';
import {useSelector} from 'react-redux';
import { useHistory } from 'react-router-dom';
import axios from 'axios';


function Checkout() {

    const infoReducer = useSelector(state => state.infoReducer)
    const pizzaReducer = useSelector((state) => state.pizzaReducer);
    const history = useHistory();
    
  

    const handleCheckout = () => {
      console.log('handleCheckout clicked!');
      axios.post('/api/order', infoReducer
      ).then((response) =>{
        console.log('sending order details', response);
        history.push('/');

      }).catch(function (error) {
        console.log('Error on Post:', error);
      });
  }

    
    console.log('In checkout');
return (

    <section>
      <h2>Order Information</h2>
      <p>{infoReducer.customer_name}</p>
      <p>{infoReducer.street_address}</p>
      <p>{infoReducer.city}</p>
      <p>{infoReducer.zip}</p>
      <p>{infoReducer.type}</p>
      <p>{infoReducer.total}</p>
      <p>{infoReducer.time}</p>
      <table>
        <tbody>
            <tr>
            <th>Name</th>
            <th>Cost</th>
            <th><button onClick={handleCheckout}>Checkout</button></th>
          </tr>
          <tr>
              <td>{pizzaReducer.name}</td>
              <td>{pizzaReducer.price}</td>
          </tr>
          
        </tbody>
      </table>
    </section>

)


}


export default Checkout;
