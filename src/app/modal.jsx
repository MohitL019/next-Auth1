const Modal = ({modalOpen,setModalOpen, children}) => {
    return (
        <div className= {`modal ${modalOpen ? "modal-open" : ""}`}>
          <form method="dialog">
            <button onClick={()=>setModalOpen(false)} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          </form>
          {children}
        </div>
      );
}
export default Modal;