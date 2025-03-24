import { useEffect, useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import Spinner from '../components/layout/Spinner';
import GithubContext from '../context/github/GithubContext';
import Repolist from '../components/repos/Repolist';
import UserStats from '../components/users/UserStats';
import { getUserAndRepos } from '../context/github/GithubActions';

function User() {
  const { user, dispatch, repos, loading } = useContext(GithubContext);
  const params = useParams();

  const {
    name,
    type,
    avatar_url,
    location,
    bio,
    blog,
    twitter_username,
    login,
    html_url,
    hireable,
  } = user;

  useEffect(() => {
    dispatch({ type: 'SET_LOAD' });
    const getUserData = async () => {
      const userData = await getUserAndRepos(params.login);
      dispatch({ type: 'GET_USER_AND_REPOS', payload: userData });
    };

    getUserData();
  }, [dispatch, params.login]);

  if (loading) {
    return <Spinner />;
  }
  return (
    <>
      {/* RETURN BUTTON */}
      <div className='w-full mx-auto lg:w-10/12'>
        <div className='mb-4'>
          <Link to='/' className='btn btn-ghost'>
            Back to research
          </Link>
        </div>
        {/* USER PROFILE */}
        <div className='grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 mb-8 md:gap-8'>
          <div className='custom-card-image mb-6 md:mb-0'>
            <div className='rounded-lg shadow-xl card image-full'>
              <figure>
                <img src={avatar_url} alt='' />
              </figure>
              <div className='card-body justify-end '>
                <h2 className='card-title  mb-0 text-white'>{name}</h2>
                <p className='flex-grow-0 text-white'>{login}</p>
              </div>
            </div>
          </div>
          {/* Profile TOP TİTLE */}
          <div className='col-span-2'>
            <div className='mb-6'>
              <h1 className='text-3xl card-title'>
                {name}
                <div className='ml-2 mr-1 p-3 badge badge-success'>
                  {type}
                </div>
                {hireable && (
                  <div className='mx-1 p-3 badge badge-info'>Hireable</div>
                )}
              </h1>
              <p>{bio}</p>
              <div className='mt-4 card-actions'>
                <a
                  href={html_url}
                  target='_blank'
                  rel='noreferrer'
                  className='btn btn-outline'
                >
                  Visit Github Profile
                </a>
              </div>
            </div>
            {/*PROFILE ISTATISTIC*/}
            <div className='w-full rounded-lg shadow-md bg-base-100 stats'>
              {location && (
                <div className='stat'>
                  <div className='stat-title-text-md'>Location</div>
                  <div className='text-lg stat-value'>{location}</div>
                </div>
              )}
              {blog && (
                <div className='stat'>
                  <div className='stat-title-text-md'>Blog</div>
                  <div className='text-lg stat-value'>
                    <a
                      href={`https://${blog}`}
                      target='_blank'
                      rel='noreferrer'
                    >
                      {blog}
                    </a>
                  </div>
                </div>
              )}
              {twitter_username && (
                <div className='stat'>
                  <div className='stat-title-text-md'>Twitter</div>
                  <div className='text-lg stat-value'>
                    <a
                      href={`https://twitter.com/${twitter_username}}`}
                      target='_blank'
                      rel='noreferrer'
                    >
                      {twitter_username}
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        {/* USER STATS */}
        <UserStats />

        {/* REPO LIST */}
        <Repolist repos={repos} />
      </div>
    </>
  );
}

export default User;
