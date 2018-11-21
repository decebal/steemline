// @flow
import * as React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider, injectGlobal } from 'styled-components';
import color from 'color';
import { Provider } from 'reakit';
import reakitTheme from 'reakit-theme-default';
import themeList from '../libraries/theme';
import { App as ThemedApp } from './Theme';

let offlineInstalled = false;

type Props = {
  children: React.Node,
  theme?: string
};

const App = ({ children, theme }: Props) => {
  const themeName = !themeList[theme] ? 'main' : theme;
  if (!themeList[themeName].helper) themeList[themeName].helper = color;

  if (process.env.OFFLINE_SUPPORT && process.browser && !offlineInstalled) {
    const OfflinePlugin = require('offline-plugin/runtime'); // eslint-disable-line global-require

    OfflinePlugin.install({
      onUpdateReady() {
        OfflinePlugin.applyUpdate();
      },
      onUpdated() {
        window.location.reload();
      }
    });
    offlineInstalled = true;
  }

  return (
    <ThemeProvider theme={themeList[themeName]}>
      <Provider theme={reakitTheme}>
        <ThemedApp>{children}</ThemedApp>
      </Provider>
    </ThemeProvider>
  );
};

App.defaultProps = {
  theme: 'main'
};

App.propTypes = {
  children: PropTypes.array.isRequired,
  theme: PropTypes.string
};

injectGlobal`
  * {
    font-family: Menlo, Monaco, "Lucida Console", "Liberation Mono", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Courier New", monospace, serif;
  }
  body {
    margin: 0;
    padding: 0;
  }
`;

export default App;
