import React from 'react';
import RecipeList from '../components/RecipeList';
import Navbar from '../components/Navbar';

const Home: React.FC = () => {
    return (
        <div>
            <Navbar />
            <h1>Recipe Manager</h1>
            <RecipeList />
        </div>
    );
};

export default Home;