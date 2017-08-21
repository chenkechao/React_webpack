/**
 * Created by 14566 on 2016/10/16.
 */
import React from 'react';
import ReactDom from 'react-dom';
import {HashRouter as Router, Route } from 'react-router-dom';
import Component1 from '../components/Component1.jsx';
import HomeLayout from '../layouts/HomeLayout.jsx';

ReactDom.render(
    <Router>
        <Route path='/' component={HomeLayout} />
    </Router>,
    document.getElementById('content')
);