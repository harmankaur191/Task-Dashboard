import searchIcon from '../../assets/search.png';
export default function SearchBar({onSearchChange}) {
    const handleSearch=(e)=>{
        onSearchChange(e.target.value);
    };

    return (<section className='flex border-1 border-blue-900 max-w-fit rounded-xl'>
        <input type="text" id="searchbar" className='rounded-l-lg border-1 border-blue-900 p-1' onChange={handleSearch} />
        <button type="submit" id="search" className='bg-blue-500 border-1 border-blue-900 rounded-r-lg'><img src={searchIcon} className="w-20 rounded-r-lg"/></button>
    </section>)
}