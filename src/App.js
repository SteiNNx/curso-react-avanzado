import React, { Fragment } from 'react'
import { ListOfCategories } from './components/ListOfCategories';
import { ListOfPhotoCards } from './components/ListOfPhotoCards';
import Logo from './components/Logo';

import { GlobalStyle } from './styles/GlobalStyles';

const App = () => {
    return (
        <div>
            <GlobalStyle />
            <Logo />
            <ListOfCategories />
            <ListOfPhotoCards />
        </div>
    )
}

export default App
