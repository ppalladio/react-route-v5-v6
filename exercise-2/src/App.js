import { Route, Routes, Navigate } from 'react-router-dom';
//' redirect replaced ny navigate
import Welcome from './pages/Welcome';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import MainHeader from './components/MainHeader';

function App() {
    return (
        <div>
            <MainHeader />
            <main>
                <Routes>
                    <Route path="/" element={<Navigate replace to="/welcome" />} />
                    {/* //' without replace keyword we would be pushing the new page. */}
                    <Route path="/welcome/*" element={<Welcome />} />
                     {/* <Route path="new-user" element={ <p>Welcome, new user!</p>}/>
                    </Route> //# wen can also just put the nested route directly under thee parent route and add <Outlet/> in the place where it used to be*/}
                    <Route path="/products"  element={<Products />} />
                    <Route
                        path="/products/:productId"
                        element={<ProductDetail />}
                    />
                </Routes>
            </main>
        </div>
    );
}

export default App;

// our-domain.com/welcome => Welcome Component
// our-domain.com/products => Products Component
// our-domain.com/product-detail/a-book
