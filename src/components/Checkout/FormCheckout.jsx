import "./formCheckout.scss"


const FormCheckout = ({dataForm, handleChangeInput, handleSubmitForm}) => {
  return (
    <>
        <div className="form-checkout" >
            <h2>Formulario de orden</h2>
            <div className="line-cart"></div>
        </div>


        <form onSubmit={ handleSubmitForm } className="form">
            <label>Nombre completo</label>
            <input type="text" name="fullname" value={dataForm.fullname} onChange={ handleChangeInput } />

            <label>Telefono</label>
            <input type="number" name="phone" value={dataForm.phone} onChange={ handleChangeInput } />

            <label>Email</label>
            <input type="email" name="email" value={dataForm.email} onChange={ handleChangeInput } />

            <label>Confirmar email</label>
            <input type="email" name="confirmemail" value={dataForm.confirmemail} onChange={ handleChangeInput } />

            <button type="submit">Enviar mi orden</button>

        </form>
  </>

  )
}

export default FormCheckout
