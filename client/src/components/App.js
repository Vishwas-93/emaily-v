import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './Header';
import {connect} from 'react-redux';
import * as actions from '../actions';
import Landing from '../components/Landing';


const Dashboard = () => <h2>Dashboard</h2>
const SurveyNew = () => <h2>SurveyNew</h2>


class App extends Component {
    componentDidMount(){
        this.props.fetchUser();
    }


    render(){  
    return(
        <div className="container">
            <BrowserRouter>
                <div>
                    <Header/>
                    <Route path="/" component={Landing} exact></Route>
                    <Route path="/dashboard" component={Dashboard} exact></Route>
                    <Route path="/surveys" component={SurveyNew} exact></Route>
                </div>
            </BrowserRouter>
        </div>
        
    )
    }
}



export default connect(null, actions)(App);