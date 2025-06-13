import { createStyles, css } from "antd-style";

export const useStyles = createStyles({
  page: css`
    height: 100%;
    width: 100%;
    align-content: center;
  `,
  container: css`
    justify-items: center;
    align-content: center;
  `,
  nav: css`
    position: fixed;
    top: 0;
    width: inherit; 
  `,
  bigHeading: css`
    font-size: 3rem;
    justify-content: center;
    align-items: center;
    justify-items: center;
  `,
  smallHeading: css`
    font-size: 2rem;
    justify-content: center;
    align-items: center;
    justify-items: center;
  `,
  buttonContainer: css`
    margin-top: 0.5rem;
  `,
  Button: css`
    margin-right: 0.5rem;
  `,
  mainBody: css`
  background: url(../public/backgroundImage.png);
  `
});
