import { useParams } from "react-router-dom";
import { useContext } from "react";
import { ContextAPI } from '../context/ContextApi';
import { FcApproval } from "react-icons/fc";

const Pizza = () => {

    const { pizzas, pedido, setPedido } = useContext(ContextAPI);
    const {id} = useParams();
    const verPizza = pizzas.filter(pizza => pizza.id == id);

    const agregar = (pizza) => {        
        if (pedido.find(item => item.id == pizza.id)) {
            const aumenta = pedido.map(item => item.id == pizza.id
                ? {...item, cantidad: item.cantidad + 1} 
                : item
            )
            return setPedido([...aumenta])
        };
        setPedido([...pedido, pizza])        
    };        

    return (
        <>
        <div className="detalle-box">
            <div className="detalle-img"
                 style={{backgroundImage: `url(${verPizza[0].img})`}}>                    
            </div>
            <div className="detalle-info">
                <p className='name-pizza'>{verPizza[0].name.substring(0, 1).toUpperCase() + verPizza[0].name.substring(1).toLowerCase()}</p>
                <p className="info">{verPizza[0].desc}</p>
                <div className='box-ingre'>
                    <p>Ingredientes:</p>
                    <ul>
                        {
                            verPizza[0].ingredients.map(item => (
                                <li key={item}><FcApproval />{item}</li>
                            ))
                        }                                                        
                    </ul>
                </div>
                <div className='box-btn'>
                    <p className='precio'>Precio: $ {verPizza[0].price.toLocaleString('es-CL')}</p>
                    <button className='btn add' 
                    onClick={() => agregar(verPizza[0])}>Agregar</button>
                </div>
            </div>
        </div>
        </>
    );
};

export default Pizza;