import { useState, useContext } from 'react';
import { FaX } from 'react-icons/fa6';
import GithubContext from '../../context/github/GithubContext';
import AlertContext from '../../context/alert/alertContext';
import { searchUsers } from '../../context/github/GithubActions';

function UserSearch() {
  const [text, setText] = useState('');

  const { users, dispatch } = useContext(GithubContext);
  const { setAlert } = useContext(AlertContext);

  const handleChange = (e) => setText(e.target.value);

  const deleteText = (e) => {
    e.preventDefault();
    setText('');
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (text === '') {
      setAlert('Please enter something', 'error');
    } else {
      dispatch({
        type: 'SET_LOADING',
      });
      const users = await searchUsers(text);
      dispatch({
        type: 'GET_USERS',
        payload: users,
      });
    }
    setText('');
  };

  return (
    <div className='grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8'>
      <div>
        <form onSubmit={handleSubmit}>
          <div className='form-control '>
            <div className='relative '>
              <input
                type='text'
                className='w-full pr-60 bg-gray-200 input input-lg text-black'
                placeholder='Search'
                onChange={handleChange}
                value={text}
              />
              <button
                type='reset'
                className='btn btn-ghost absolute top-2.5 right-40 z-5 rounded-full'
                style={
                  text === '' ? { display: 'none' } : { display: 'block' }
                }
                onClick={deleteText}
              >
                <FaX />
              </button>
              <button
                type='submit'
                className='absolute top-0 right-0 rounded-l-none w-36 btn btn-lg'
              >
                GO
              </button>
            </div>
          </div>
        </form>
      </div>
      {users.length > 0 && (
        <div>
          <button
            className='btn btn-ghost btn-large text-white h-full'
            placeholder='Search'
            onClick={() => dispatch({ type: 'CLEAR_USERS' })}
          >
            Clear
          </button>
        </div>
      )}
    </div>
  );
}

export default UserSearch;
