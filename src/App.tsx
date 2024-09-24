import React from 'react';
import styles from './components/Site.module.css';
import {PageOne} from './components/pages/PageOne';
import {PageTwo} from './components/pages/PageTwo';
import {PageThree} from './components/pages/PageThree';
import {NavLink, Route, Routes} from 'react-router-dom';
import {Error404} from './components/pages/Error404';


function App() {


    return (
        <div>
            <div className={styles.header}><h1>HEADER</h1></div>
            <div className={styles.body}>
                <div className={styles.nav}>
                    <ul>
                        <div>
                            <NavLink to={'/page1'}>ADIDAS</NavLink>
                        </div>

                        <div>
                            <NavLink to={'/page2'}>PUMA</NavLink>
                        </div>
                        <div>
                            <NavLink to={'/page3'}>ABIBAS</NavLink>
                        </div>
                    </ul>
                </div>
                <div className={styles.content}>
                    <Routes>
                        <Route path={'/page1'} element={<PageOne/>}></Route>
                        <Route path={'/page2'} element={<PageTwo/>}></Route>
                        <Route path={'/page3'} element={<PageThree/>}></Route>
                        <Route path="*" element={<Error404/>} />
                    </Routes>
                </div>
            </div>
            <div className={styles.footer}>abibas 2023</div>
        </div>
    );
}


export default App;
