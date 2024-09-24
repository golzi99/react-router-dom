import React from 'react';
import {PageOne} from './components/pages/PageOne';
import {PageTwo} from './components/pages/PageTwo';
import {PageThree} from './components/pages/PageThree';
import {NavLink, Route, Routes} from 'react-router-dom';
import {Error404} from './components/pages/Error404';
import {S} from './components/pages/_styles'

const PATH = {
    PAGE1: 'page1',
    PAGE2: 'page2',
    PAGE3: 'page3',
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
                        <Route path={PATH.PAGE1} element={<PageOne/>}></Route>
                        <Route path={PATH.PAGE2} element={<PageTwo/>}></Route>
                        <Route path={PATH.PAGE3} element={<PageThree/>}></Route>
                        <Route path={PATH.PAGE_ERROR} element={<Error404/>}></Route>
                        <Route path={'/*'} element={<Error404/>}/>
                        {/*<Route path={'/'} element={<Navigate to={PATH.PAGE1}/>}/>*/}
                        {/*<Route path="/*" element={<Navigate to={PATH.PAGE_ERROR}/>}/>*/}
                    </Routes>
                </S.Content>
            </S.Body>
            <S.Footer>abibas 2023</S.Footer>
        </div>
    );
}

export default App;

