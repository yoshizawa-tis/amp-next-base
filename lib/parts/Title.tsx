import React, { ReactNode } from 'react';
import Typography from '@material-ui/core/Typography';

type Props = {
  children: ReactNode
}

const Title: React.FC<Props> = ({children}) => {
  return (
    <Typography component="h2" variant="h6" color="primary" gutterBottom>
      {children}
    </Typography>
  );
}

export default Title;