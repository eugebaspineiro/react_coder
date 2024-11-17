import { useState  } from "react"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Timestamp, addDoc, collection, doc, setDoc } from "firebase/firestore"
import { Link } from "react-router-dom"
import FormCheckout from "./FormCheckout"
import db from "../../db/db.js"
import validateForm from "../../utils/validateForm.js"
import { toast } from "react-toastify"
import "./formCheckout.scss"

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

    const handleSubmitForm = async(event) =>{

        event.preventDefault()

        const order = {
            buyer: {...dataForm},
            products: [...cart],
            date: Timestamp.fromDate (new Date ()),
            total: totalPrice()
        }

        try {
            if (dataForm.email !== dataForm.confirmemail) {
                throw new Error("Los correos electrónicos no coinciden. Por favor, verifica.");
              }

            const response = await validateForm(dataForm)
            if(response.status === "error") throw new Error(response.message)

            toast.success("Subiendo orden...")
            uploadOrder(order)
            
        } catch (error) {
            toast.error(error.message)
            
        }

        

    }

    const uploadOrder = ( newOrder ) =>{
        const orderRef = collection(db, "orders")
        addDoc(orderRef, newOrder)
        .then((response) => setIdOrder(response.id))
        .catch((error) => console.error(error))
        .finally(() => {
            updateStock()
        })

    }

    const updateStock = () => {
        cart.map(({id, quantity, ...dataProduct}) => {
            const productRef = doc (db, "products", id)
            setDoc(productRef, {...dataProduct, stock: dataProduct.stock - quantity})
        })
        deleteCart()
    }

  return (
    <div>

        {
            idOrder === null ? ( <FormCheckout dataForm={dataForm} handleChangeInput={handleChangeInput} handleSubmitForm={handleSubmitForm}/> 

            ) : (
                <div className="finish-form">
                    <img src="/compra-finalizada.svg" alt="" />
                    <h2>Gracias, su orden fue enviada</h2>
                    <p>Por favor guarde su numero de seguimiento: <strong>{idOrder}</strong> </p>
                    <Link to="/"><button>Volver al inicio</button></Link>
                </div>
            
            )
        }
        

    </div>
  )
}

export default Checkout
