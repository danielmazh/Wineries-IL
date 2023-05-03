// client\src\common\components\styled-components\NavBarWrapper.js
import styled from "styled-components";

const NavBarWrapper = styled.div`
  .MuiAvatar-root {
    width: 32px;
    height: 32px;
    margin-left: -0.5rem;
    margin-right: 1rem;
  }

  &:before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    right: 14px;
    width: 10px;
    height: 10px;
    background-color: #fff;
    transform: translateY(-50%) rotate(45deg);
    z-index: 0;
  }

  @media (max-width: 767px) {
    /* Styles for mobile devices */
    .MuiAvatar-root {
      width: 24px;
      height: 24px;
    }
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    /* Styles for tablets */
    .MuiAvatar-root {
      width: 28px;
      height: 28px;
    }
  }

  @media (min-width: 1025px) {
    /* Styles for desktops */
    .MuiAvatar-root {
      width: 32px;
      height: 32px;
    }
  }
`;

export default NavBarWrapper;

