import { FaCodepen, FaStore, FaUserFriends, FaUsers } from 'react-icons/fa';
import { useContext } from 'react';
import GithubContext from '../../context/github/GithubContext';

function UserStats() {
  const {
    user: { followers, following, public_repos, public_gits },
  } = useContext(GithubContext);

  return (
    <>
      <div className='w-full py-5 mb-6 rounded-lg shadew-md bg-base-100 stats'>
        <div className='stat'>
          <div className='stat-figure text-secondary'>
            <FaUsers className='text-3xl md:text-2xl' />
          </div>
          <div className='stat-title pr-5'>Followers</div>
          <div className='stat-value pr-5 text-3xl md:text-4xl'>
            {followers}
          </div>
        </div>
        <div className='stat'>
          <div className='stat-figure text-secondary'>
            <FaUserFriends className='text-3xl md:text-2xl' />
          </div>
          <div className='stat-title pr-5'>Following</div>
          <div className='stat-value pr-5 text-3xl md:text-4xl'>
            {following}
          </div>
        </div>
        <div className='stat'>
          <div className='stat-figure text-secondary'>
            <FaCodepen className='text-3xl md:text-2xl' />
          </div>
          <div className='stat-title pr-5'>Public Repos</div>
          <div className='stat-value pr-5 text-3xl md:text-4xl'>
            {public_repos}
          </div>
        </div>
        <div className='stat'>
          <div className='stat-figure text-secondary'>
            <FaStore className='text-3xl md:text-2xl' />
          </div>
          <div className='stat-title pr-5'>Public Gist</div>
          <div className='stat-value pr-5 text-3xl md:text-4xl'>
            {public_gits}
          </div>
        </div>
      </div>
    </>
  );
}

export default UserStats;
