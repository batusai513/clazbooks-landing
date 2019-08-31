import React from 'react';
import Head from 'next/head';

export default function HeadContent() {
  return (
    <Head>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1"
      />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta
        name="apple-mobile-web-app-status-bar-style"
        content="black-transcluent"
      />
      <meta name="format-detection" content="telephone=no" />
      <title>Clazbooks</title>
    </Head>
  );
}
