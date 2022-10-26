import { Route, Routes } from 'react-router-dom';
//' switch is replaced by Routes
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
                    <Route path="/welcome" element={<Welcome />} />
                    {/* //'no child component, use element tag instead, and self-closing tag */}
                    <Route path="/products" element={<Products />} />
                    {/* //' no 'exact' keyword needed */}
                    <Route
                        path="/products/:productId"
                        element={<ProductDetail />}
                    />
                    {/* //'the order of route doesnt matter */}
                </Routes>
            </main>
        </div>
    );
}

export default App;

// our-domain.com/welcome => Welcome Component
// our-domain.com/products => Products Component
// our-domain.com/product-detail/a-book
