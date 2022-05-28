import productsList from '.product';

const INITIAL_STATE= {
    value: 0,
    products: productsList,
    Cart: []
}

export default function Cart(State = INITIAL_STATE, action){
     switch (action.type){
         case 'ADD_TO_CART':
             if(State.value === 0) {
                 let item = {
                     id: action.product.id_Product,
                     name: action.product.name_Product,
                     price: action.product.price,
                     image: action.product.image,
                     quantaty: 1
                 }
                 State.Cart.push(item);
             } else {
                 let check = false;
                 State.Cart.map((item,key) => {
                     if (item.id === action.product.id_Product){
                         State.Cart[key].quantaty++;
                         Check = true;
                     }
                 });
                 if (!Check){
                     let item = {
                         id: action.product.id_Product,
                         name: action.product.name_Product,
                         price: action.product.price,
                         image: action.product.image,
                         quantaty: 1
                     }
                     State.Cart.push(item);
                 }
             }
             return {
                 ...State,
                 value: (State.value + 1)
             }
             case 'ADD_ITEM':
                 action.product.quantaty++
                 return{
                     ...State,
                     value: ( action.Cart.value + 1)
                 }
                 case 'REMOVE_ITEM':
                     if (action.product.quantaty > 1){
                         action.product.quantaty--
                         return {
                             ...State,
                             value: (action.Cart.value - 1)
                         }
                     } else{
                         return State;
                     }
                     case 'DELETE_ITEM':
                     return{
                         ...State,
                         value: (action.Cart.value - action.product.quantaty),
                         Cart: State.Cart.filter (item => {
                             return item.id !== action.product.id
                         })
                     }
                     case 'CHANGE_CART':
                         return State = action.localCart
                         default:
                             return State;
                    }
                    return State
                
} 