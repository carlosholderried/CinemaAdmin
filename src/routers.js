import { createRouter, createWebHistory } from 'vue-router';
import AddMovie from './components/Movies/AddMovie';
import EditMovies from './components/Movies/EditMovies';
import UpdateMovie from './components/Movies/UpdateMovie';
import AddSession from './components/Sessions/AddSession';
import EditSessions from './components/Sessions/EditSessions';
import UpdateSession from './components/Sessions/UpdateSession'; 
import AddRoom from './components/Rooms/AddRoom';
import EditRooms from './components/Rooms/EditRooms';
import UpdateRoom from './components/Rooms/UpdateRoom';
import HomePage from './components/HomePage';


const routes = [
    {
        name: "EditSessions",
        component: EditSessions,
        path: "/edit-sessions/",      
    },    
    {
        name: "AddMovie",
        component: AddMovie,
        path: "/add-movie/",      
    },    
    {
        name: "EditMovies",
        component: EditMovies,
        path: "/edit-movies/",
    },    
    {
        name: "UpdateMovie",
        component: UpdateMovie,
        path: "/update-movie/:id",      
    },
    {
        name: "AddSession",
        component: AddSession,
        path: "/add-session/",      
    },    
    {
        name: "UpdateSession",
        component: UpdateSession,
        path: "/update-session/:id",      
    },
    {
        name: "AddRoom",
        component: AddRoom,
        path: "/add-room/",      
    },    
    {
        name: "EditRooms",
        component: EditRooms,
        path: "/edit-rooms/",      
    },    
    {
        name: "UpdateRoom",
        component: UpdateRoom,
        path: "/update-room/:id",      
    },
    {
        name: "HomePage",
        component: HomePage,
        path: "/",      
    },       
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;