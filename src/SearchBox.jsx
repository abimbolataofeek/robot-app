import react from 'react';

const SearchBox= ({searchfield, searchChange}) => {
    return (
        <div className='pa2'>
        <input
        classname= 'pa3 ba b--green bg-lightest-green'
        type="search"
         placeholder="Search for friends" 
         onChange={searchChange}
         />
        </div>
    )
}
export default SearchBox;