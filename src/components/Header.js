import React, { useState } from 'react';
import config from '../config/config';
import {
  EuiTitle,
  EuiSpacer,
  EuiPanel,
  EuiFlexGroup,
  EuiFlexItem,
  EuiFieldText,
  EuiFormRow,
  EuiFieldPassword,
  EuiButton,
  EuiProgress,
  EuiCallOut,
  EuiSelect,
  EuiCheckbox,
  EuiHeaderLogo,
  EuiLink,
  EuiHeader,
  EuiHeaderSectionItem,
  EuiHeaderLinks,
  EuiHeaderLink
} from '@elastic/eui';

function Header(){
    return (
        <>
        <EuiHeader>
          <EuiHeaderSectionItem border="right">
            <EuiHeaderLink href="/">
              <img style={{height: "32px", marginTop: "3px"}} src='/logo192.png' />
            </EuiHeaderLink>
            <EuiHeaderLink href="/">
                Demo App
            </EuiHeaderLink>
          </EuiHeaderSectionItem>
    
          <EuiHeaderLinks>
            <EuiHeaderLink href="/docs">
              Docs
            </EuiHeaderLink>
    
            <EuiHeaderLink href="/code">Code</EuiHeaderLink>
    
            <EuiHeaderLink iconType="help" href="/help">
              Help
            </EuiHeaderLink>
          </EuiHeaderLinks>
        </EuiHeader>
        </>
      );
}

export default Header;