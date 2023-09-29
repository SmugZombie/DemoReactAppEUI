import React, { useState } from 'react';
import config from '../config/config';
import { useGlobalContext } from '../components/Global'; // Import your GlobalProvider

import {
  EuiBottomBar,
  EuiFlexGroup,
  EuiFlexItem,
} from '@elastic/eui';

export default () => {
  const { userData, isMobileDevice } = useGlobalContext();

  let bottomBar;
  if (!isMobileDevice) {
    bottomBar = (
      <EuiBottomBar colorMode={'light'} >
        <EuiFlexGroup justifyContent="spaceBetween">
          <EuiFlexItem grow={false}>
            <EuiFlexGroup gutterSize="s">
              
            </EuiFlexGroup>
          </EuiFlexItem>
          <EuiFlexItem grow={false}>
            <EuiFlexGroup gutterSize="s">
              <EuiFlexItem grow={false}>
                  Version: {config.app.version}
              </EuiFlexItem>
              
            </EuiFlexGroup>
          </EuiFlexItem>
        </EuiFlexGroup>
      </EuiBottomBar>
    );
  }else{
    bottomBar = (
      <>
      <br /><br />
      <center>
        Version: {config.app.version}
      </center>
      </>
    )
  }

  return (
    <div>
      {bottomBar}
    </div>
  );
};
