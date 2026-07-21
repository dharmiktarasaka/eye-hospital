import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export const Breadcrumbs = ({ items = [] }) => {
  return (
    <nav className="flex items-center space-x-2 text-xs text-navy/60 my-4 overflow-x-auto" aria-label="Breadcrumb">
      <Link to="/" className="flex items-center hover:text-cyan-iris transition-colors">
        <Home className="w-3.5 h-3.5 mr-1 text-cyan-iris" />
        <span>Home</span>
      </Link>
      {items.map((item, idx) => (
        <React.Fragment key={idx}>
          <ChevronRight className="w-3 h-3 text-navy/30 flex-shrink-0" />
          {item.link ? (
            <Link to={item.link} className="hover:text-cyan-iris transition-colors whitespace-nowrap">
              {item.label}
            </Link>
          ) : (
            <span className="font-semibold text-navy whitespace-nowrap">{item.label}</span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};

export default Breadcrumbs;
