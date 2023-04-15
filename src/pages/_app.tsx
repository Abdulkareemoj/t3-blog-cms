import { type AppType } from "next/dist/shared/lib/utils";
import { useState, useEffect } from "react";

import { Header } from "../../components";
import "../styles/globals.scss";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <Header>
      <Component {...pageProps} />;
    </Header>
  );
};

export default MyApp;
