import React from 'react';

export default function FooterScripts() {
  return (
    <React.Fragment>
      <script src="static/vendors/jquery/jquery.js"></script>
      <script src="static/vendors/magnific-popup/jquery.magnific-popup.min.js"></script>

      <script src="static/vendors/gsap/TweenMax.min.js"></script>

      <script src="static/vendors/in-view/jquery.inview.min.js"></script>

      <script src="static/vendors/scrollmagick/scrollmagic.js"></script>
      <script src="static/vendors/scrollmagick/scrollmagic-gsap.js"></script>

      {/*<script defer src="http://scrollmagic.io/scrollmagic/uncompressed/plugins/debug.addIndicators.js"></script>*/}

      <script src="static/js/main.js"></script>
    </React.Fragment>
  );
}
