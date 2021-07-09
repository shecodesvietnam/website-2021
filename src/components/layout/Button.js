function Button({ children, onClick, small = false }) {
  return (
    <button
      className={`
        outline-none
        block
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
      `}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
