import { useState } from "react";
import Alert from "./alert";

const Button = ({ children, onClick, width, title, text, alert }) => {
    const [showAlert, setShowAlert] = useState(false)
    const handleClick = () => {
        setShowAlert(true)
        onClick()
        setTimeout(() => {
            setShowAlert(false);
        }, 1500);
    };
    return (
        <>
            <button onClick={() => handleClick()} className={`bg-blue1 hover:bg-blue2 rounded-full ${width} text-white h-8`}>{children}</button>
            <>
                {alert ?
                    showAlert && (
                        <Alert
                            title={title}
                            text={text}
                        />
                    )
                :
                <></>
                }
            </>

        </>
    )
}

export default Button;