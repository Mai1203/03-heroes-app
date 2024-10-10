import { useState } from 'react';
import '../styles';

export const SearchBar = ({ setFilter }) => {
  const [input, setInput] = useState('');

  const handleInputChange = (e) => {
    setInput(e.target.value);
    setFilter(e.target.value);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        value={input}
        onChange={handleInputChange}
        placeholder="Busca un héroe..."
      />
    </div>
  );
};

