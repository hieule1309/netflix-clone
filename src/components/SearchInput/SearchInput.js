import { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import './SearchInput.css';

function SearchInput() {
    const [searchValue, setSearchValue] = useState('');

    const inputRef = useRef();

    const navigate = useNavigate();

    const handleChangeInput = (e) => {
        let keywords = e.target.value;
        setSearchValue(keywords);
        keywords.length > 0 ? navigate(`/search?keywords=${keywords.trim()}`) : navigate('/');
    };

    const handleClear = () => {
        setSearchValue('');
        navigate('/');
        document.querySelector('.input__search').classList.remove('toggle__input');
    };
    const handleBlur = () => {
        if (searchValue.length === 0) {
            document.querySelector('.input__search').classList.remove('toggle__input');
            navigate('/');
        } else {
            document.querySelector('.input__search').classList.add('toggle__input');
        }
    };

    const showInput = () => {
        document.querySelector('.input__search').classList.add('toggle__input');
        document.querySelector('.input__search').focus();
    };

    return (
        <div className="search__bar">
            <button className="btn__search" onClick={showInput}>
                <FontAwesomeIcon icon={faSearch} />
            </button>
            <input
                ref={inputRef}
                type="text"
                placeholder="Search"
                className="input__search"
                value={searchValue}
                onChange={handleChangeInput}
                onBlur={handleBlur}
            />
            {!!searchValue && (
                <button className="clear" onClick={handleClear}>
                    <FontAwesomeIcon icon={faXmark} />
                </button>
            )}
        </div>
    );
}

export default SearchInput;
