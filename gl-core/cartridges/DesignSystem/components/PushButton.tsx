'use client';
import * as React from 'react';
import { IconButton, Tooltip, Avatar, Badge } from '@mui/material';
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

  const provider = user?.providerData?.[0] ?? null;

  const providerIconMap: Record<string, string> = {
    'github.com': 'github',
    'google.com': 'google',
    'twitter.com': 'twitter',
  };

  const providerIcon =
    provider && providerIconMap[provider.providerId]
      ? providerIconMap[provider.providerId]
      : null;

  const photo = user?.photoURL || provider?.photoURL || null;

  const tooltipTitle = user?.displayName || null;

  return (
    <Tooltip title={tooltipTitle}>
      <IconButton
        onClick={toggleUserDialog}
        color="secondary"
        sx={{
          zIndex: (theme) => theme.zIndex.modal - 2,
          boxShadow: 0,
          position: 'fixed',
          bottom: 8,
          right: 32,
          p: 0,
          width: 40,
          height: 40,
        }}
      >
        <Badge
          badgeContent={
            providerIcon ? (
              <Icon icon={providerIcon as any} color="primary" />
            ) : null
          }
        >
          {photo ? (
            <Avatar src={photo} sx={{ width: 40, height: 40 }} />
          ) : (
            <Icon icon="paywall" />
          )}
        </Badge>
      </IconButton>
    </Tooltip>
  );
}
