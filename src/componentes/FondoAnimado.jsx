import React from 'react';
import { Container } from 'reactstrap';

const AnimatedBackground = () => {
  const animatedBackgroundStyle = {
    position: 'relative',
    width: '100%',
    height: '100vh', // Full viewport height
    overflow: 'hidden',
    background: 'linear-gradient(270deg, #ffb3a7, #ffd6a7, #b7ff99, #a7ffd6)',
    backgroundSize: '800% 800%',
    animation: 'gradientAnimation 10s ease infinite',
  };

  const containerStyle = {
    position: 'relative',
    zIndex: 1,
  };

  const beforeStyle = {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'rgba(0, 0, 0, 0.3)', // Optional: lighter overlay for better text visibility
    zIndex: 0,
  };

  return (
    <div style={animatedBackgroundStyle}>
      <div style={beforeStyle}></div>
      <Container style={containerStyle}>
        <h1 className="text-light">Your Content Here</h1>
      </Container>
    </div>
  );
};

// Keyframes for animation
const styleSheet = document.styleSheets[0];

const keyframes = `
@keyframes gradientAnimation {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}`;

styleSheet.insertRule(keyframes, styleSheet.cssRules.length);

export default AnimatedBackground;



