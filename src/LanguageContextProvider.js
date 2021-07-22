import React, {useState} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';
import Header from './components/header/Header';
import Home from './pages/home/Home';
import AboutUs from './pages/aboutUs/AboutUs';
import AllPlants from './pages/allPlants/AllPlants';
import { LanguageContext } from "./context/LanguageContext";

function LanguageContextProvider({children}) {
    const [language, toggleLanguage] = useState('es')
    function changeLanguage(language) {
        toggleLanguage(language)
    }
    const data = {
        activeLanguage: language,
        changeLanguage: changeLanguage
    }
    return (
        <Router>
            <LanguageContext.Provider value={data}>
                <Header />
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/about-us">
                        <AboutUs />
                    </Route>
                    <Route path="/all-plants">
                        <AllPlants />
                    </Route>
                </Switch>
            </LanguageContext.Provider>
        </Router>

    );
}

export default LanguageContextProvider;