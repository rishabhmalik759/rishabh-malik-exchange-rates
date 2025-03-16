import { Route, Routes } from 'react-router';
import ExchangeRates from './pages/ExchangeRates';
import Home from './pages/home';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    return (
        <Routes>
            <Route index element={<Home />} />
            <Route path="/exchange-rates" element={<ExchangeRates />} />
        </Routes>
    );
};

export default App;
