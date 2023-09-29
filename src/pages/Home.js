import React, { useState } from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer'

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
  EuiCheckbox
} from '@elastic/eui';

function Home() {
  const [loading, setLoading] = useState(false);
  
  return (
    <>
    <Header />
    <div style={{ alignItems: 'center', textAlign: 'center', paddingTop: 50 }}>
        Hello World
    </div>
    <Footer />
    </>
  );
}

export default Home;