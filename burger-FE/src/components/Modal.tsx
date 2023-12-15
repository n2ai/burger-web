interface IModal{
    isVisible:boolean,
    onClose:()=>void,
    message:string
}

const Modal:React.FC<IModal> = ({isVisible,onClose,message})=>{

    if (!isVisible) return null

    return(
        <div className="fixed inset-0 bg-opacity-25 backdrop-blur-sm text-white flex justify-center items-center">
            <div className="bg-black w-[450px] h-[250px] border border-white relative flex items-center justify-center">
                <button onClick={onClose} className="w-[1.5rem] h-[1.5rem] border border-white absolute right-3 top-2">X</button>
                <div>
                    {message}
                </div>
            </div>
        </div>
    )
}

export default Modal;