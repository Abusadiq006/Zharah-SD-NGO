const Button = ({children,variant='primary',...props})=>{
    return(
        <button 
            className={`button button--${variant}`} 
            {...props}
        >   Donate Now
            {children}
        </button>
    )
}

export default Button