import React from 'react';
import ErrorBoundary from './components/ErrorBoundary';


import AdminComponent from './components/AdminComponent';
import CategoriesComponent from './components/CategoriesComponent';
import PostsComponent from './components/PostComponents/PostsComponent/PostsComponent';
import PostDetailsComponent from './components/PostComponents/PostDetailsComponent/PostDetailsComponent';
import PostDetailsAddEditComponent from './components/PostComponents/PostDetailsAddEditComponent/PostDetailsAddEditComponent';
import ProfileDisplayComponent from './components/ProfileComponents/ProfileDisplayComponent/ProfileDisplayComponent';
import ContactComponent from './components/ContactComponent';
import AboutComponent from './components/AboutComponent/AboutComponent';
import LoginComponent from './components/LoginComponent';
// import AppState from './components/AppState';
// views using sample data
const MyProfilePage = (props) => <ProfileDisplayComponent {...props} />;
const CategoriesPage = (props) => <CategoriesComponent  {...props} />;
const AboutPage = (props) => <AboutComponent  {...props} />;
let HomePage = (props) => <PostsComponent  {...props} />;
let PostDetailsPage = (props) => <PostDetailsComponent {...props} />;
let PostDetailsAddEditPage = (props) => <PostDetailsAddEditComponent  {...props} />;

export const arrHeaders = ["Home", "My Profile", "Contacts","About", "Login"];

export const arrRoutes = [
  {
    exact:true,
    path: '/',
    component: HomePage
  },
  {
    exact:false,
    path: '/about',
    component: AboutPage
  },{
    exact:false,
    path: '/contact',
    component: ContactComponent
  },{
    exact:false,
    path: '/posts/:userId',
    component: HomePage
  },{
    exact:true,
    path: '/postDetails/:id',
    component: PostDetailsPage
  },{
    exact:false,
    path: '/postDetails/Add',
    component: PostDetailsAddEditPage
  },{
    exact:true,
    path: '/postDetails/:id',
    component: PostDetailsAddEditPage
  },{
    exact:false,
    path: '/users/:id',
    component: MyProfilePage
  },{
    exact:false,
    path: '/genres',
    component: CategoriesPage
  },{
    exact:false,
    path: '/admin',
    component: AdminComponent
  },{
    exact:false,
    path: '/login',
    component: LoginComponent
  }
];

export const arrCategories = ["Classical", "House", "Home Made", "Nature Sounds", "Silence"];

export const arrUsers = [
  {
    id: 1,
    username: 'ttaydus',
    nameLast: 'Taydus',
    nameFirst: 'Tyler',
    email: 'asdf@asdf.com',
    password: 'asdfasdfasdfasdf1111'
  },
  {
    id: 2,
    username: 'ttaydus',
    nameLast: 'Tayaaadus',
    nameFirst: 'Tyler',
    email: 'asdf@asdf.com',
    password: 'asdfasdfasdfasdf22222'
  },
  {
    id: 3,
    username: 'ttaydus',
    nameFirst: 'Ty3ler',
    email: 'asdf@asdf.com',
    password: 'asdfasdfasdfasdf33333'
  },
];

export const arrPosts = [
  {
    id: 1,
    header: 'image below',
    title: 'this is the title',
    description: 'this is the description',
    image: 'https://mdbootstrap.com/img/Photos/Avatars/img%20(20).jpg',
    genre: 'genre',
    userId: 1
  }, {
    id: 2,
    header: '',
    title: 'this is the 2',
    description: 'this has no header',
    genre: 'genre',
    userId: 1
  }, {
    id: 3,
    header: 'test header',
    title: 'this is the 3',
    description: 'this is the description',
    genre: 'genre',
    userId: 1
  }, {
    id: 4,
    header: '',
    title: 'this is the title4',
    description: 'no image, no header',
    image: '',
    genre: 'genre',
    userId: 1
  },
];

/*
export default {
  arrHeaders,
  arrUsers,
  arrPosts,
  arrCategories
};
*/
