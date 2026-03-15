import { NavLink } from 'react-router-dom';

export default function NavItem({ to, label, end, mobile = false, onClick }) {
  return (
    <NavLink
      to={to}
      end={end}
      onClick={onClick}
      className={({ isActive }) => `
        ${mobile 
          ? "text-xs uppercase tracking-[0.3em] font-light" 
          : "text-[11px] uppercase tracking-[0.25em] font-medium relative group"}
        transition-all ${isActive 
          ? "text-gray-950" 
          : "text-gray-400 hover:text-gray-600"}`}
    >
      {label}
      {!mobile && (
        <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gray-800 transition-all duration-300 group-hover:w-full" />
      )}
    </NavLink>
  );
}
