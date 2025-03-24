import Spinner from '../layout/Spinner';
import UserItem from './UserItem';
import GithubContext from '../../context/github/GithubContext';
import { useContext } from 'react';

function UserResult() {
  const { users, loading } = useContext(GithubContext);

  if (!loading) {
    return (
      <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
        {users.map((user, key) => (
          <UserItem key={key} user={user}></UserItem>
        ))}
      </div>
    );
  } else {
    return <Spinner />;
  }
}

export default UserResult;
