import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Container from 'components/Container/Container';
import { FormSearch, InputSearch, ButtonSubmit } from './SearchBar.styled';
import { FaSearch } from 'react-icons/fa';

const SearchBar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [value, setValue] = useState('');

  function onSubmitForm(e) {
    e.preventDefault();
    const value = e.target.elements.query.value;

    navigate({
      ...location,
      search: `query=${value}`,
    });
  }

  return (
    <Container>
      <FormSearch onSubmit={onSubmitForm}>
        <InputSearch
          type="text"
          name="query"
          onChange={e => setValue(e.target.value)}
          value={value}
        />
        <ButtonSubmit type="submit">
          <FaSearch />
        </ButtonSubmit>
      </FormSearch>
    </Container>
  );
};

export { SearchBar };

// const SearchBar = ({ onSubmit }) => {
//   const [value, setValue] = useState('');

//   const handleSubmit = e => {
//     e.preventDefault();
//     onSubmit(value);
//     setValue('');
//     e.currentTarget.reset();
//   };

//   return (
//     <Container>
//       <FormSearch onSubmit={handleSubmit}>
//         <InputSearch
//           type="text"
//           name="search"
//           placeholder="Enter movie name..."
//           onChange={e => setValue(e.target.value)}
//         />
//         <ButtonSubmit type="submit">
//           <FaSearch />
//         </ButtonSubmit>
//       </FormSearch>
//     </Container>
//   );
// };

// export default SearchBar;
