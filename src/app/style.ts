import { createStyles, css } from "antd-style";

export const useStyles = createStyles({
  container: css`
    align-tems: center;
    justify-items: center;
    justify-content: center;
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
  butContainer: css`
    margin-top: 0.5rem;
  `,
  Button: css`
    margin-right: 0.5rem;
  `,
  mainBody: css`
  background: url(../public/backgroundImage.png);
  `
});
