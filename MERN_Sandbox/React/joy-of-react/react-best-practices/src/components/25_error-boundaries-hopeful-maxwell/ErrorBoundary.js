import React from "react";

class ErrorBoundary extends React.Component {
  // Equivalent to:
  // const [hasError, setHasError] = useState(false);
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    // Update state to display fallback UI
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Log error information
    console.error(error);
    console.info({ errorInfo });
  }

  render() {
    if (this.state.hasError) {
      // Render fallback UI
      return this.props.fallback || null;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
