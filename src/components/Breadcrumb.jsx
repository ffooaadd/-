
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, Home } from 'lucide-react';

const Breadcrumb = ({ items }) => {
  return (
    <nav className="flex items-center space-x-2 space-x-reverse text-sm text-gray-600 mb-6">
      <Link to="/" className="flex items-center hover:text-blue-600 transition-colors">
        <Home className="h-4 w-4 ml-1" />
        الرئيسية
      </Link>
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <ChevronLeft className="h-4 w-4 text-gray-400" />
          {item.href ? (
            <Link to={item.href} className="hover:text-blue-600 transition-colors">
              {item.label}
            </Link>
          ) : (
            <span className="text-gray-800 font-medium">{item.label}</span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};

export default Breadcrumb;
