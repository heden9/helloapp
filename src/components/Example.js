import React, { PropTypes } from 'react';
import {
  Framework7App, Statusbar, Panel, View, Navbar, Pages, Page, ContentBlock, ContentBlockTitle,
  List, ListItem, Views, NavLeft, Link, NavCenter, NavRight, GridRow, GridCol, Button, Popup,
  LoginScreen, LoginScreenTitle, ListButton, ListLabel, FormLabel, FormInput,
} from 'framework7-react';

export const MainViews = (props, context) => {
  return (
    <Views>
      <View id="main-view" navbarThrough dynamicNavbar main url="/">
        {/* Navbar */}
        {context.framework7AppContext.theme.ios ? (
          <Navbar>
            <NavLeft>
              <Link icon="icon-bars" openPanel="left" />
            </NavLeft>
            <NavCenter sliding>Framework7</NavCenter>
            <NavRight>
              <Link icon="icon-bars" openPanel="right" />
            </NavRight>
          </Navbar>
        ) : null}
        {/* Pages */}
        <Pages>
          <Page>
            {context.framework7AppContext.theme.material ? (
              <Navbar>
                <NavLeft>
                  <Link icon="icon-bars" openPanel="left" />
                </NavLeft>
                <NavCenter sliding>Framework7</NavCenter>
                <NavRight>
                  <Link icon="icon-bars" openPanel="right" />
                </NavRight>
              </Navbar>
            ) : null}
            <ContentBlockTitle>Welcome to my App</ContentBlockTitle>
            <ContentBlock inner>
              <p>Duis sed erat ac eros ultrices pharetra id ut tellus. Praesent rhoncus enim ornare ipsum aliquet ultricies. Pellentesque sodales erat quis elementum sagittis.</p>
            </ContentBlock>
            <ContentBlockTitle>Navigation</ContentBlockTitle>
            <List>
              <ListItem link="/about/" title="About" />
              <ListItem link="/form/" title="Form" />
            </List>
            <ContentBlockTitle>Side Panels</ContentBlockTitle>
            <ContentBlock>
              <GridRow>
                <GridCol width={50}>
                  <Button openPanel="left">Left Panel</Button>
                </GridCol>
                <GridCol width={50}>
                  <Button openPanel="right">Right Panel</Button>
                </GridCol>
              </GridRow>
            </ContentBlock>
            <ContentBlockTitle>Modals</ContentBlockTitle>
            <ContentBlock>
              <GridRow>
                <GridCol width={50}>
                  <Button openPopup="#popup">Popup</Button>
                </GridCol>
                <GridCol width={50}>
                  <Button openLoginScreen="#login-screen">Login Screen</Button>
                </GridCol>
              </GridRow>
            </ContentBlock>
          </Page>
        </Pages>
      </View>
    </Views>
  );
};

MainViews.contextTypes = {
  framework7AppContext: PropTypes.object,
};

// Create Component for About page

export const About = () => {
  return (
    <Page>
      <Navbar title="About" backLink="Back" sliding />
      <ContentBlock inner>
        <p>Here is About page!</p>
        <p>You can go <f7-link back>back</f7-link>.</p>
        <p>Mauris posuere sit amet metus id venenatis. Ut ante dolor, tempor nec commodo rutrum, varius at sem. Nullam ac nisi non neque ornare pretium. Nulla mauris mauris, consequat et elementum sit amet, egestas sed orci. In hac habitasse platea dictumst.</p>
        <p>Fusce eros lectus, accumsan eget mi vel, iaculis tincidunt felis. Nulla tincidunt pharetra sagittis. Fusce in felis eros. Nulla sit amet aliquam lorem, et gravida ipsum. Mauris consectetur nisl non sollicitudin tristique. Praesent vitae metus ac quam rhoncus mattis vel et nisi.       Aenean aliquet, felis quis dignissim iaculis, lectus quam tincidunt ligula, et venenatis turpis risus sed lorem. Morbi eu metus elit. Ut vel diam dolor.</p>
      </ContentBlock>
    </Page>
  );
};

// Create Component for Login page
export const Login = () => (
  <Page name="login">say login</Page>
);
