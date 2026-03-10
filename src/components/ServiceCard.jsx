import { Link } from "react-router-dom";

const ServiceCard = ({ title, description, image, options, id }) => {
  const textStyle = {
    fontFamily: "'Montserrat', sans-serif",
    color: "#777777",
  };

  return (
    <div className="bg-white rounded-sm shadow-xl flex flex-col overflow-hidden min-h-[550px] transition-all duration-500 ease-out hover:scale-[1.01] hover:shadow-2xl">
      
      {/* Kuva */}
      {image && (
        <div className="h-56 w-full flex-shrink-0 relative">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover"
          />
          {/* Hillitty väripesu overlay */}
          <div className="absolute inset-0 bg-gray-100/8 pointer-events-none"></div>
        </div>
      )}

      {/* Sisältöosa */}
      <div className="p-8 flex flex-col flex-grow">
        <h2 className="text-2xl mb-4 font-light tracking-wide uppercase" style={textStyle}> 
          {title} 
        </h2>
        
        <p className="mb-8 leading-relaxed font-light text-sm" style={textStyle}> 
          {description} 
        </p>

        {/* Hinnasto-osio */}
        {options && options.length > 0 && (
          <div className="mb-8 border-t border-gray-100 pt-6">
            <ul className="space-y-4">
              {options.map((opt, idx) => (
                <li 
                  key={idx} 
                  className="flex justify-between items-center text-xs tracking-widest uppercase" 
                  style={textStyle}
                >
                  <span className="font-light">{opt.time} min</span>
                  <span className="font-semibold">{opt.price} €</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Nappi */}
        <div className="mt-auto pt-2">
          <Link
            to={`/services/${id}`}
            className="inline-block px-8 py-3 bg-gray-100 text-gray-600 text-[10px] tracking-[0.2em] uppercase font-medium rounded-sm hover:bg-gray-200 transition-colors duration-200"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Katso lisää
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;