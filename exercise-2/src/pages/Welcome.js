import { Route, Routes ,Outlet} from 'react-router-dom';

const Welcome = () => {
    return (
        <section>
            <h1>The Welcome Page</h1>
            <Routes>
            <Route path="new-user" element={ <p>Welcome, new user!</p>}/>
         {/* //'every route has to be wrapped with routes, and for the path, there is no need to repeat the parent path. it will only need to be relative path */}
            </Routes>
            {/* <Outlet/> */}
        </section>
    );
};

export default Welcome;
