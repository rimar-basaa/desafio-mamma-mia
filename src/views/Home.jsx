import { FcApproval } from "react-icons/fc";
import { useContext } from "react";
import { ContextAPI } from '../context/ContextApi';
import { useNavigate } from "react-router-dom";

const Home = () => {

    const { pizzas, pedido, setPedido } = useContext(ContextAPI);
    const navigate = useNavigate(); 
    
    const agregar = (pizza) => {
        if (pedido.find(item => item.id == pizza.id)) {
            const aumenta = pedido.map(item => item.id == pizza.id
                ? {...item, cantidad: item.cantidad + 1} 
                : item
            )
            return setPedido([...aumenta])
        };
        setPedido([...pedido, pizza]);
    };

    return (
        <>
        <div className="head">
            <h1>¡Pizzeria Mamma Mia!</h1>
            <p>¡Tenemos las mejores pizzas para degustar!</p>
        </div>

        <div className='box-card'>
            {
                pizzas.map(pizza => (
                    <div className="card" key={pizza.id}>
                        <div className='box-img'
                            style={{backgroundImage: `url(${pizza.img})`}}>
                        </div>
                        <p className='name-pizza'>{pizza.name.substring(0, 1).toUpperCase() + pizza.name.substring(1).toLowerCase()}</p>
                        <div className='box-ingre'>
                            <p>Ingredientes:</p>
                            <ul>
                                {
                                    pizza.ingredients.map(item => (
                                        <li key={item}><FcApproval />{item}</li>
                                    ))
                                }                                
                            </ul>
                        </div>
                        <p className='precio'>Precio: $ {pizza.price.toLocaleString('es-CL')}</p>
                        <div className='box-btn'>
                            <button 
                                className='btn ver' 
                                onClick={() => navigate(`/pizza/${pizza.id}`)}>Detalles
                            </button>
                            <button className='btn add' 
                                    onClick={() => agregar(pizza)}>Agregar
                            </button>
                        </div>
                    </div>
                ))
            }            
        </div>
        </>
    );
};

export default Home;
