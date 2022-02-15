import HomePage from '../Home';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<HomePage />} />
            </Routes>
        </Router>
    );
};

export default App;