// /Users/goldlabel/GitHub/core/gl-core/cartridges/DesignSystem/components/PushButton.tsx
'use client';
import * as React from 'react';
import { IconButton, Tooltip, Avatar } from '@mui/material';
import { useDispatch, Icon } from '../../../../gl-core';
import { setPaywallKey, useUser, usePaywall } from '../../Paywall';

export default function PushButton() {
  const dispatch = useDispatch();
  const user = useUser();
  const paywall = usePaywall();
  const { userDialog } = paywall || false;

  const toggleUserDialog = () => {
    dispatch(setPaywallKey('userDialog', !userDialog));
  };

  const photo =
    user?.photoURL ||
    user?.providerData?.[0]?.photoURL ||
    null;

  const tooltipTitle = user?.displayName || null;

  return (
    <Tooltip title={tooltipTitle}>
      <IconButton
        onClick={toggleUserDialog}
        color="primary"
        sx={{
          zIndex: (theme) => theme.zIndex.modal - 2,
          boxShadow: 0,
          position: 'fixed',
          bottom: 8,
          right: 8,
          p: 0,
          width: 40,
          height: 40,
        }}
      >
        {photo ? (
          <Avatar
            src={photo}
            sx={{ width: 40, height: 40 }}
          />
        ) : (
          <Icon icon="paywall" />
        )}
      </IconButton>
    </Tooltip>
  );
}
