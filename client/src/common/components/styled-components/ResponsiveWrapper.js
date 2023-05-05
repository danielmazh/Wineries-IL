import styled from "styled-components";

const ResponsiveWrapper = styled.div`
  width: 100%;

  h1, h4 {
    text-align: center;
  }

  /* Add styles for input fields, labels, buttons, divs and Box components */
  input, label, button, div, Box {
    /* Your styles here */
  }

  @media (max-width: 767px) {
    /* Styles for mobile devices */
    h1 {
      font-size: 24px;
    }

    h2, h4 {
      font-size: 18px;
    }

    /* Add styles specific to mobile devices for the input fields, labels, buttons, divs and Box components */
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    /* Styles for tablets */
    h1 {
      font-size: 32px;
    }

    h2, h4 {
      font-size: 24px;
    }

    /* Add styles specific to tablets for the input fields, labels, buttons, divs and Box components */
  }

  @media (min-width: 1025px) {
    /* Styles for desktops */
    h1 {
      font-size: 40px;
    }

    h2, h4 {
      font-size: 28px;
    }

    /* Add styles specific to desktops for the input fields, labels, buttons, divs and Box components */
  }
`;

export default ResponsiveWrapper;

