import { createContext, useState, useEffect } from "react";

export const ContextAPI = createContext();

const ProviderAPI = ({ children}) => {

    const [pizzas, setPizzas] = useState([]);
    const [pedido, setPedido] = useState([]);
    const [total, setTotal] = useState(0);   

    const consultarAPI = async () => {
        const url = "/pizzas.json";
        const res = await fetch(url);
        const data = await res.json();
        
        const nuevo = data.map(item => {
            return {...item, cantidad: 1}   
        })        
        setPizzas(nuevo);
    };
    useEffect(() => {
        consultarAPI()
    }, []);
    
    const suma = () => {
        if ( pedido.length >= 1) {
        const sumatoria = pedido.map(item => item.price * item.cantidad)
        const data = sumatoria.reduce((a, b) => (a + b))
        setTotal(data.toLocaleString('es-CL'))
        };
    };
    useEffect(() => {
        suma()
    }, [pedido]);
    //console.log(total)

    return (
        <ContextAPI.Provider value={{ pizzas, setPizzas, pedido, setPedido, total }}>
            {children}
        </ContextAPI.Provider>
    );
};

export default ProviderAPI;