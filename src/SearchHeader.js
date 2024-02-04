import { useState } from 'react';

function SearchHeader({ search }) {
  const [valueInput, setValue] = useState('');
  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log("Test");
    search(valueInput);
  };

  const handleChange = (event) => {
   
    setValue(event.target.value);
  };


  return (
    <div className="searchDiv">
      <form onSubmit={handleFormSubmit}>
        <label>What Are You Looking For ?</label>
        <input value={valueInput} onChange={handleChange} />
        <button onClick={handleFormSubmit}>Search</button>
      </form>
    </div>
  );
}

export default SearchHeader;
