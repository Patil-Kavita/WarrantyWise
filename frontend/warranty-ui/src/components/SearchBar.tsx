import React from 'react';
import { FiSearch } from 'react-icons/fi';
import { InputField } from './InputField';

type SearchBarProps = React.InputHTMLAttributes<HTMLInputElement>;

export const SearchBar: React.FC<SearchBarProps> = (props) => {
  return (
    <InputField 
      icon={<FiSearch size={18} />}
      placeholder="Search products..."
      className="md:w-80"
      {...props}
    />
  );
};
