import './modal.css'

function Modal({ isOpen, onCancel, onConfirm }){
    if (!isOpen) {
        return null;
    }

    return (
        <div className="modal">
            <div className="modal-content">
                <p>Ви впевнені, що бажаєте видалити цей контакт?</p>
                <button onClick={onCancel}>Скасувати</button>
                <button onClick={onConfirm}>Підтвердити</button>
            </div>
        </div>
    );
}

export default Modal;