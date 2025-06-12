import { createStyles, css } from "antd-style";

export const useStyles = createStyles({
  header: css`
    display: flex;
    background-color: gainsboro;
    justify-content: space-between;
    align-items: center;
    width: inherit;
  `,
  Button: css`
    margin: 0.5rem;
  `,
  Image: css`
    margin: 1rem;
  `,
  ButtonsContainer: css`
    padding: 1rem;
    
  `,
});
