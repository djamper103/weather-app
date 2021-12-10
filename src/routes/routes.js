import Currentdata from '../components/currentData';
import DetailPage from './../components/detailPage/detailPage';


export const routes = [
    { path: "/", element: <Currentdata></Currentdata>, exact: true },
    { path: "/home", element: <Currentdata></Currentdata>, exact: true },
    { path: "/detailPage", element: <DetailPage></DetailPage>, exact: true }
]