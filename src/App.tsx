import React from 'react';
import {PageOne} from './components/pages/PageOne';
import {PageTwo} from './components/pages/PageTwo';
import {PageThree} from './components/pages/PageThree';
import {Navigate, NavLink, Route, Routes} from 'react-router-dom';
import {Error404} from './components/pages/Error404';
import {S} from './components/pages/_styles'

function App() {
    return (
        <div>
            <S.Header><h1>HEADER</h1></S.Header>
            <S.Body>
                <S.NavBar>
                    <ul>
                        <S.NavWrapper>
                            <NavLink to={'/page1'}>ADIDAS</NavLink>
                        </S.NavWrapper>
                        <S.NavWrapper>
                            <NavLink to={'/page2'}>PUMA</NavLink>
                        </S.NavWrapper>
                        <S.NavWrapper>
                            <NavLink to={'/page3'}>ABIBAS</NavLink>
                        </S.NavWrapper>
                    </ul>
                </S.NavBar>
                <S.Content>
                    <Routes>
                        <Route path={'/page1'} element={<PageOne/>}></Route>
                        <Route path={'/page2'} element={<PageTwo/>}></Route>
                        <Route path={'/page3'} element={<PageThree/>}></Route>
                        <Route path={'/page/error'} element={<Error404/>}></Route>
                        <Route path={'/'} element={<Navigate to={'/page1'}/>}/>
                        <Route path="/*" element={<Navigate to={'/page/error'}/>}/>
                    </Routes>
                </S.Content>
            </S.Body>
            <S.Footer>abibas 2023</S.Footer>
        </div>
    );
}

export default App;

