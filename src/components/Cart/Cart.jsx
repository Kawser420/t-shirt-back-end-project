
import './Cart.css';

const Cart = ({ cart, handleRemoveFromCart }) => {

    let message;
    if (cart.length === 0) {
        message = <p>Please add some products</p>
    }
    else {
        message = <div>
            <h3>Richest Person</h3>
            <p><small>Thanks for give me money</small></p>
        </div>
    }

    return (
        <div>
            <h3 className={cart.length === 1 ? 'blue' : 'red'} >Order Review: {cart.length}</h3>
            <h4 className={`bold bordered ${cart.length === 2 ? 'red' : 'goldenrod'}`}>Something</h4>
            {cart.length > 2
                ?
                <span className='blue'>some buy</span>
                :
                <span className='hotpink'>lose</span>}
            {message}
            {
                cart.map(tshirt => <p
                    key={tshirt._id}>{tshirt.name}
                    <button onClick={() => handleRemoveFromCart(tshirt._id)}
                    >X
                    </button></p>)
            }
            {
                cart.length === 2 && <p>Double class!!!</p>
            }
            {
                cart.length === 3 || <h4>NOT 3!!!</h4>
            }
        </div>
    );
};

export default Cart;

/*
** CONDITIONAL RENDERING
1. use if or  else to set a variable that will contain an element, components
2. ternary: condition ? 'for true' : 'false'
3.Logical &&: (if the condition is true then the next thing will be displayed)
4. Logical ||: (if the condition is false then the next thing will be displayed)
*/

/**
 * CONDITIONAL CSS Class
 * 1. use ternary 
 * 2. ternary inside template string
 * **/