// /Users/goldlabel/GitHub/core/gl-core/cartridges/DesignSystem/components/NewContent.tsx
'use client';
import * as React from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { Box, Badge, Typography, Alert, ButtonBase } from '@mui/material';
import { Icon, routeTo, useDispatch } from '../../../../gl-core';
import { useBySlug } from '../../Uberedux';
import { setDesignSystemKey } from '../../DesignSystem';

export interface INewContent {
  slug?: string;
}

export default function NewContent({ slug }: INewContent) {

  const content = useBySlug(slug || '');
  const dispatch = useDispatch();
  const router = useRouter();
  const pathname = usePathname();
  if (!content) return null;
  // If current path matches slug, do not render
  if (pathname === `${slug}`) return null;
  console.log('slug', slug);
  console.log('pathname', pathname);

  const { paywall } = content;

  return (
    <>
      <ButtonBase
        sx={{
          textAlign: 'left',
          mt: 1,
          width: '100%',
        }}
        onClick={() => {
          dispatch(routeTo(slug as string, router));
          dispatch(setDesignSystemKey('dialog', null));
        }}
      >
        <Alert
          sx={{ width: '100%' }}
          severity="success"
          variant="outlined"
          icon={
            <Box sx={{ mt: 0.5, mr: 0.5 }}>
              <Badge color="primary" badgeContent={paywall ? '!' : null}>
                <Icon icon={content.icon || 'home'} />
              </Badge>
            </Box>
          }
        >
          <Typography variant="body1">{content.title}</Typography>
          <Typography variant="body2" noWrap>
            {content.excerpt}
          </Typography>
        </Alert>
      </ButtonBase>
    </>
  );
}
