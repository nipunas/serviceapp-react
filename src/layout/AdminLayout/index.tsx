import React, { Component, Suspense } from 'react';
import routes from '../../core/routes';
import Aux from '../../hoc/_Aux';
import {connect} from 'react-redux';
import {Route, Switch, Redirect} from 'react-router-dom';
import './app.scss';
import Navigation from './Navigation';
import Loader from "../Loader";
import * as actionTypes from "./../../core/store/actions";
import windowSize from 'react-window-size';

class AdminLayout extends Component<any, any> {

    componentWillMount() {
        if (this.props.windowWidth > 992 && this.props.windowWidth <= 1024 && this.props.layout !== 'horizontal') {
            this.props.onComponentWillMount();
        }
    }

    render() {
        const menu = routes.map((route, index) => {
            return (route.component) ? (
                <Route
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    name={route.name}
                    render={props => (
                        <route.component {...props} />
                    )} />
            ) : (null);
        });
        
        return (
            <Aux>
                <Navigation />
                <div className="pcoded-main-container">
                    <div className="pcoded-wrapper">
                        <div className="pcoded-content">
                            <div className="pcoded-inner-content">
                                <div className="main-body">
                                    <div className="page-wrapper">
                                        <Suspense fallback={<Loader/>}>
                                            <Switch>
                                                {menu}
                                                {/* <Redirect from="/" to={this.props.defaultPath} /> */}
                                            </Switch>
                                        </Suspense>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Aux>
        );
    }
}

const mapStateToProps = state => {
    return {
        defaultPath: state.defaultPath,
        isFullScreen: state.isFullScreen,
        collapseMenu: state.collapseMenu,
        configBlock: state.configBlock,
        layout: state.layout
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onFullScreenExit: () => dispatch({type: actionTypes.FULL_SCREEN_EXIT}),
        onComponentWillMount: () => dispatch({type: actionTypes.COLLAPSE_MENU})
    }
};

export default connect(mapStateToProps, mapDispatchToProps) (windowSize(AdminLayout));