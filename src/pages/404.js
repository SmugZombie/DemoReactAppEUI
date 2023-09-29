import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom'

import {
  EuiTitle,
  EuiLink,
} from '@elastic/eui';

function Error(){

    let navigate = useNavigate();

    return (
        <>
            <Header />
            <div style={{ textAlign: "center", marginTop: 50 }}>
                <EuiTitle size="l">
                    <h1>
                    404
                    </h1>
                </EuiTitle>
                <EuiTitle size="xs">
                    <h3>This page can't be found or simply doesn't exist yet.</h3>
                </EuiTitle>
                <p>
                    <EuiLink onClick={() => { window.location.href = "/"; }}>Click here to go back home</EuiLink>
                </p>
            </div>
            <Footer />
        </>
      );
}

export default Error;