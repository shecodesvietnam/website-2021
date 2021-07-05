function Button({ children, onClick }) {
  return (
    <button
      className="
        outline-none
        block
        btn 
        bg-gradient-to-br 
        from-malibu 
        via-lavender 
        to-illusion 
        transition 
        duration-500 
        ease-in-out 
        transform 
        hover:text-gray-50
        hover:bg-gradient-to-br 
        hover:from-ruby 
        hover:to-governor
        hover:scale-110
      "
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;