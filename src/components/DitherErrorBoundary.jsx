import React from 'react';

class DitherErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  
  render() {
    if (this.state.hasError) {
      return <div className="w-full h-full bg-gradient-to-b from-gray-100 to-white" />;
    }
    return this.props.children;
  }
}

export default DitherErrorBoundary;

