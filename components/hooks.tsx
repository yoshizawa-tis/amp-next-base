import { Box, Button, Typography } from "@material-ui/core";
import React, { useState } from "react";

// カウンターつけてみる
// 奇数偶数判定つけてみる


const HookTest: React.FC = () => {
  const [count, setCount] = useState<number>(0)

  return (
    <React.Fragment>
      <Box>
        <Typography>count:{count}</Typography>
        <Typography>count*2:{count*2}</Typography>
      </Box>
      <Box>
        <Button variant="outlined" onClick={() => setCount(count+1)}>count up</Button>
      </Box>
    </React.Fragment>
  );
};

export default HookTest;
