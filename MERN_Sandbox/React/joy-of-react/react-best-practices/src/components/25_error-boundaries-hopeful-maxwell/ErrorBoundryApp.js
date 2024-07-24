/** Usage :
 *
 * If application throws an error during rendering, React will remove its UI from
 * the screen. To prevent this, you can wrap a part of your UI into an error
 * boundary. An error boundary is a special component that lets you display some fallback UI
 * instead of the part that crashed—for example, an error message.
 *
 */

import React from "react";

import "../../utils/reset.css";
import "./styles.css";

import Header from "./Header";
import Ticker from "./Ticker";
import Stories from "./Stories";
import ErrorBoundary from "./ErrorBoundary";

function ErrorBoundaryApp() {
  return (
    <>
      <Header />

      <ErrorBoundary
        fallback={<div className="error">Stock ticker doesn't load</div>}
      >
        <Ticker />
      </ErrorBoundary>

      <main>
        <h1>Top Stories</h1>
        <Stories />
      </main>
    </>
  );
}

export default ErrorBoundaryApp;
