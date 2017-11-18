import React from 'react';
import { connect } from 'dva';
import {
  Framework7App,
} from 'framework7-react';

import 'framework7/dist/css/framework7.ios.min.css';
import 'framework7/dist/css/framework7.ios.colors.min.css';
import { MainViews, About, Login } from '../components/Example';

function App() {
  return (
    <Framework7App
      themeType="ios" routes={[
        {
          path: '/about/',
          component: About,
        },
        {
          path: '/login/',
          component: Login,
        },
      ]}
    >
      <MainViews />
    </Framework7App>
  );
}

App.propTypes = {
};

export default connect()(App);
