'use client';

import * as React from 'react';
import { Box } from '@mui/material';
import { useDispatch } from '../../../../gl-core';
import { useTing } from '../../Paywall';
import { createTing } from '../actions/createTing';

export default function Tings() {
  const ting = useTing();
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (!ting) {
      dispatch(createTing());
    }
  }, [ting, dispatch]);

  return (
    <Box>
      {/* <pre style={{ fontSize: '10px' }}>
        ting: {JSON.stringify(ting, null, 2)}
      </pre> */}
    </Box>
  );
}
