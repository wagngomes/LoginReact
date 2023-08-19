import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate
} from 'react-router-dom'
import LoginPage from './pages/loginPages';
import HomePage from './pages/homePages';


const AppRoutes = () => {
    return(
        <Router>
            <Routes>
                <Route exact path='/login' element={<LoginPage />}/>
                <Route exact path='/' element={<HomePage />}/>
            </Routes>
        </Router>
    )
}

export default AppRoutes