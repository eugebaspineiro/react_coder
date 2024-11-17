import { useState  } from "react"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Timestamp, addDoc, collection } from "firebase/firestore"
import { Link } from "react-router-dom"
import FormCheckout from "./FormCheckout"
import db from "../../db/db.js"

const Checkout = () => {

    const [dataForm, setDataForm] = useState({
        fullname: "",
        phone:"",
        email:"",
        confirmemail: ""
    })

    const [idOrder, setIdOrder] = useState(null)

    const { cart, totalPrice, deleteCart } = useContext( CartContext )

    const handleChangeInput = (event) => {
        setDataForm({...dataForm, [event.target.name]: event.target.value})
  

    }

    const handleSubmitForm = (event) =>{

        event.preventDefault()

        const order = {
            buyer: {...dataForm},
            products: [...cart],
            date: Timestamp.fromDate (new Date ()),
            total: totalPrice()
        }

        uploadOrder(order)

    }

    const uploadOrder = ( newOrder ) =>{
        const orderRef = collection(db, "orders")
        addDoc(orderRef, newOrder)
        .then((response) => setIdOrder(response.id))
        .catch((error) => console.error(error))
        .finally(() => {
            deleteCart()
        })

    }

  return (
    <div>

        {
            idOrder === null ? ( <FormCheckout dataForm={dataForm} handleChangeInput={handleChangeInput} handleSubmitForm={handleSubmitForm}/> 

            ) : (
                <div>
                    <h2>Gracias, su orden a sido enviada</h2>
                    <p>Por favor guarde su numero de seguimiento: {idOrder}</p>
                    <Link to="/"><button>Volver al inicio</button></Link>
                </div>
            
            )
        }
        

    </div>
  )
}

export default Checkout
