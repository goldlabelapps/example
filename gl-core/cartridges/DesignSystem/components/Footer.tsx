// /Users/goldlabel/GitHub/example-app/gl-core/cartridges/DesignSystem/components/Footer.tsx
'use client';
import React from 'react';
import {
  Box,
  AppBar,
  Toolbar,
  Container,
  Grid,
  Typography,
} from '@mui/material';
import { useIsMobile } from '../../../../gl-core';
import { Search } from '../../DesignSystem';

export type TFooter = {};

export default function Footer({}: TFooter) {
  const isMobile = useIsMobile();
  // if (isMobile) return null;
  return (
    <>
      <AppBar
        position="fixed"
        color="secondary"
        sx={{
          top: 'auto',
          bottom: 0,
          background: 0,
        }}
      >
        <Toolbar color="secondary">
          <Container>
            <Box
              sx={{
                flexGrow: 1,
              }}
            >
              <Grid container spacing={1}>
                <Grid
                  size={{
                    xs: 12,
                    sm: 6,
                  }}
                >
                  <Box sx={{}}>
                    <Search />
                  </Box>
                </Grid>

                {/* <Grid
                  size={{
                    xs: 12,
                    sm: 6,
                  }}
                >
                  <Box
                    sx={{
                      mt: 1,
                      textAlign: isMobile ? 'center' : 'right',
                    }}
                  >
                    <Typography variant="caption">
                      Goldlabel Apps Ltd
                    </Typography>
                  </Box>
                </Grid> */}
              </Grid>
            </Box>
          </Container>
        </Toolbar>
      </AppBar>
    </>
  );
}
