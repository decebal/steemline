/* eslint-disable no-unused-vars,import/no-unresolved */
import { Helmet } from 'react-helmet';
import { Heading, Avatar, Toolbar } from 'reakit';
// import MenuIcon from 'react-icons/lib/md/menu';
import App from '../components/App';
import withData from '../libraries/withData';

export default withData(props => (
  <App>
    <Helmet>
      <title>SteemLine</title>
    </Helmet>

    <Toolbar background="white" gutter="8px 16px">
      {/* <Toolbar.Content> */}
      {/* <Toolbar.Focusable as={MenuIcon} fontSize={20} /> */}
      {/* </Toolbar.Content> */}
      <Toolbar.Content align="center">
        <Heading fontSize={24} margin={0}>
          Reakit
        </Heading>
      </Toolbar.Content>
      <Toolbar.Content align="end">
        <Toolbar.Focusable as={Avatar} src="https://placekitten.com/150/200" />
      </Toolbar.Content>
    </Toolbar>
  </App>
));
