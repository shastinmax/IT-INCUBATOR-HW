import React from 'react'
import {Route, Routes } from 'react-router-dom'
import {PreJunior} from "./pages/PreJunior";
import {Junior} from "./pages/Junior";
import {JuniorPlus} from "./pages/Junior-plus";
import Error404 from './pages/Error404';

export const PATH = {
    PRE_JUNIOR: '/pre-junior',
    JUNIOR: '/junior',
    JUNIOR_PLUS: '/junior-plus',
    ERROR: '/*',
    // add paths
}

export function Rout() {
    return (
        <div>
            {/*Switch выбирает первый подходящий роут*/}
            <Routes>
                <Route path={PATH.PRE_JUNIOR} element={<PreJunior/>}/>
                <Route path={PATH.JUNIOR} element={<Junior/>}/>
                <Route path={PATH.JUNIOR_PLUS} element={<JuniorPlus/>}/>
                <Route path={PATH.ERROR} element={<Error404/>}/>
            {/*в начале мы попадаем на страницу '/' и переходим сразу на страницу PRE_JUNIOR*/}
            {/*exact нужен чтоб указать полное совподение (что после '/' ничего не будет)*/}
            {/*<Route path={'/'} exact render={() => <Redirect to={PATH.PRE_JUNIOR}/>}/>*/}

            {/*<Route path={PATH.PRE_JUNIOR} render={() => <PreJunior/>}/>*/}
                // add routes

            {/*у этого роута нет пути, он отрисуется если пользователь захочет попасть на несуществующую страницу*/}
            {/*<Route render={() => <Error404/>}/>*/}

            </Routes>
        </div>
    )
}


