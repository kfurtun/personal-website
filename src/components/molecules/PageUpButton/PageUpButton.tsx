import React, { useState, useEffect } from 'react';
import { Wrapper } from './PageUptButton.styles';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
import theme from 'theme/theme';
import Icon from 'atoms/Icon';

function PageUpButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let scrollTimeout: ReturnType<typeof setTimeout>;
    // Show the button when the user scrolls down a certain amount
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const shouldShowButton = scrollTop > 200;

      if (shouldShowButton) {
        setIsVisible(true);
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
          setIsVisible(false);
        }, 2000);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on unmount
    return () => {
      clearTimeout(scrollTimeout);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const onUpButtonClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <Wrapper onClick={onUpButtonClick} isVisible={isVisible}>
      <Icon icon={faAngleUp} fontSize={20} color={theme.colors.white1} />
    </Wrapper>
  );
}

export default PageUpButton;
