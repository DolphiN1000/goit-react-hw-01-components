import  Profile  from './components/Profile/Profile';
import user from './components/Profile/user.json'

// import Statistics from 'components/Statistics/Statistics';

export const App = () => {
  return (
    <>
     <Profile 
     avatar={user.avatar}
     username={user.username}
     tag={user.tag}
     location={user.location}
     stats={user.stats}
     />
     {/* <Statistics /> */}
    </>
  );
};
