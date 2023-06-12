const Alert = ({title, text}) => {
    return (
        <div class="bg-green-100 border-l-4 border-green-500 text-green-700 p-1 absolute bottom-0 right-0 w-5/6 sm:w-4/6" role="alert" >
            <p class="font-bold">{title}</p>
            <p>{text}</p>
        </div>
    );
}

export default Alert;