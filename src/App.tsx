import React from 'react';
import {Adidas} from './components/pages/Adidas';
import {Puma} from './components/pages/Puma';
import {Navigate, NavLink, Route, Routes} from 'react-router-dom';
import {Error404} from './components/pages/Error404';
import {S} from './components/pages/_styles'
import {Model} from './components/pages/Model';
import {Abibas} from './components/pages/Abibas';

const PATH = {
    PAGE1: 'adidas',
    PAGE2: 'puma',
    PAGE3: 'abibas',
    PAGE_ERROR: '/page/error'
} as const

function App() {
    return (
        <div>
            <S.Header><h1>HEADER</h1></S.Header>
            <S.Body>
                <S.NavBar>
                    <ul>
                        <S.NavWrapper>
                            <NavLink to={PATH.PAGE1}>ADIDAS</NavLink>
                        </S.NavWrapper>
                        <S.NavWrapper>
                            <NavLink to={PATH.PAGE2}>PUMA</NavLink>
                        </S.NavWrapper>
                        <S.NavWrapper>
                            <NavLink to={PATH.PAGE3}>ABIBAS</NavLink>
                        </S.NavWrapper>
                    </ul>
                </S.NavBar>
                <S.Content>
                    <Routes>
                        <Route path={'/'} element={<Navigate to={PATH.PAGE1}/>}/>
                        <Route path={PATH.PAGE1} element={<Adidas/>}></Route>
                        <Route path={PATH.PAGE2} element={<Puma/>}></Route>
                        <Route path={PATH.PAGE3} element={<Abibas/>}></Route>
                        <Route path={'adidas/:id'} element={<Model/>}></Route>
                        <Route path={PATH.PAGE_ERROR} element={<Error404/>}></Route>
                        <Route path="/*" element={<Navigate to={PATH.PAGE_ERROR}/>}/>
                    </Routes>
                </S.Content>
            </S.Body>
            <S.Footer>abibas 2023</S.Footer>
        </div>
    );
}

export default App;

