import { useContext } from "react";
import { ContextAPI } from '../context/ContextApi';

const Carrito = () => {
    
    const { pedido, setPedido, total} = useContext(ContextAPI);
    const listado = pedido.filter(ped => ped.cantidad >= 1 );

    const decrementar = (id) => {       
        const desaumenta = pedido.map(item => item.id == id
            ? {...item, cantidad: item.cantidad - 1} 
            : item
        )
        return setPedido([...desaumenta])
    };

    const incrementar = (id) => {       
        const aumenta = pedido.map(item => item.id == id
            ? {...item, cantidad: item.cantidad + 1} 
            : item
        )
        return setPedido([...aumenta])
    };   
    //console.log(pedido)


    return (
        <>
        <div className="pedido">
            <h1 className="pedido-title">Tu pedido</h1>
            <table>
                <tbody>
                    {
                        listado.map(item => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name.substring(0, 1).toUpperCase() + item.name.substring(1).toLowerCase()}</td>
                                <td className="drive-precio">${(item.price * item.cantidad).toLocaleString('es-CL')}</td>
                                <td className="drive">
                                    <button className="drive-btn"
                                            onClick={() => decrementar(item.id)}> - </button>
                                    <p>{item.cantidad}</p>
                                    <button className="drive-btn"
                                            onClick={() => incrementar(item.id)}> + </button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <h3>Total $ {total}</h3>
            <button className='btn add'>Ir a pagar</button>
        </div>
        </>
    );    
};

export default Carrito;