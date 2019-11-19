import React from 'react';
import Head from 'next/head';
import Nav from '../components/nav';
import MobileNav from '../components/mobile-nav';
import HeadContent from '../components/head';
import Footer from '../components/footer';
import FooterScripts from '../components/footer-scripts';
import Landing from '../components/landing';
import http from '../utils/http';
import '../styles/main.scss';

function Home() {
  React.useEffect(() => {
    if(typeof window !== 'undefined') {
      window.executeMain();
    }
  }, []);
  return (
    <div className="template-wrapper">
      <Head>
        <FooterScripts />
      </Head>
      <HeadContent />
      <Nav />
      <MobileNav />
      <Landing />
      <Footer />
    </div>
  );
}

// Home.getInitialProps = function getInitialProps() {
//   return http.get('/landing_pages').then(res => {
//     return {
//       images: res
//     };
//   }, err => {
//     console.warn(err);
//     throw err;
//   });
// }

export default Home;
