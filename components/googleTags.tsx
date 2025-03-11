import React from "react";

const GoogleTags: React.FC = () => (
  <>
    {/* Google tag (gtag.js) */}
    <script
      async
      src="https://www.googletagmanager.com/gtag/js?id=AW-16660635407"
    ></script>
    <script
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-16660635407');
        `,
      }}
    />
  </>
);

export default GoogleTags;
