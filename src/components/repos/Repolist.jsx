import PropTypes from 'prop-types';
import RepoItem from './RepoItem';
function Repolist({ repos }) {
  return (
    <div className='rounded-lg shadow-lg card bg-base-100'>
      <div className='card-body'>
        <h2 className='text-3xl my-4 font-bold card-title'>Top Repository</h2>
        {repos.map((repo, key) => (
          <RepoItem key={key} repo={repo} />
        ))}
      </div>
    </div>
  );
}

Repolist.propTypes = {
  repos: PropTypes.array.isRequired,
};
export default Repolist;
