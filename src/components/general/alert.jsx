const Alert = ({title, text, color}) => {
    const colorStyle = () =>{
        let colorS = ""
        if (color === "red"){
            colorS = "bg-red-200 border-red-500 text-red-700"
        }
        else{
            colorS = "bg-green-100 border-green-500 text-green-700"
        }
        return colorS

    }
    return (
        <div className={` border-l-4 ${colorStyle()} p-1 absolute bottom-0 right-0 w-5/6 sm:w-4/6`} role="alert" >
            <p className="font-bold">{title}</p>
            <p>{text}</p>
        </div>
    );
}

export default Alert;