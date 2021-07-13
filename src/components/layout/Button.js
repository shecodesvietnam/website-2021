function Button({
  children,
  className,
  onClick,
  small = false,
  ...otherProps
}) {
  return (
    <button
      className={`
        outline-none
        block
        text-black
        ${small ? "btn-sm" : "btn"} 
        bg-gradient-to-br 
        from-malibu 
        via-lavender 
        to-illusion 
        hover:text-gray-50
        transition 
        duration-500 
        ease-in-out 
        transform 
        hover:bg-gradient-to-br 
        hover:from-ruby 
        hover:to-governor
        ${className ? className : ""}
      `}
      onClick={onClick}
      {...otherProps}
    >
      {children}
    </button>
  );
}

export default Button;
