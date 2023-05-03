// // client\src\common\components\styled-components\ResponsiveWrapper.js
// import styled from "styled-components";

// const ResponsiveWrapper = styled.div`
//   width: 100%;

//   @media (max-width: 767px) {
//     /* Styles for mobile devices */
//   }

//   @media (min-width: 768px) and (max-width: 1024px) {
//     /* Styles for tablets */
//   }

//   @media (min-width: 1025px) {
//     /* Styles for desktops */
//   }
// `;

// export default ResponsiveWrapper;


// client\src\common\components\styled-components\ResponsiveWrapper.js
import styled from "styled-components";

const ResponsiveWrapper = styled.div`
  width: 100%;

  h1 {
    text-align: center;
  }

  h2 {
    text-align: center;
  }

  @media (max-width: 767px) {
    /* Styles for mobile devices */
    h1 {
      font-size: 24px;
    }

    h2 {
      font-size: 18px;
    }
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    /* Styles for tablets */
    h1 {
      font-size: 32px;
    }

    h2 {
      font-size: 24px;
    }
  }

  @media (min-width: 1025px) {
    /* Styles for desktops */
    h1 {
      font-size: 40px;
    }

    h2 {
      font-size: 28px;
    }
  }
`;

export default ResponsiveWrapper;
