import React from 'react';
import { Helmet } from 'react-helmet';
const AdSenseComponent = () => {
    return (
      <>
        <Helmet>
          <script
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9860316423118093"
            crossorigin="anonymous"
          />
        </Helmet>
        {/* Add your ad unit code below */}
        <ins
          className="adsbygoogle"
          style={{ display: 'block' }}
          data-ad-client="ca-pub-9860316423118093"
          data-ad-slot="4832194664"
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
        <script>{`(adsbygoogle = window.adsbygoogle || []).push({});`}</script>
      </>
    );
  };
  
  export default AdSenseComponent;
  