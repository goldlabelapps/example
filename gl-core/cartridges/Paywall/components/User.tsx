// /Users/goldlabel/GitHub/core/gl-core/cartridges/Paywall/components/User.tsx
'use client';
import * as React from 'react';
import { Badge, CardHeader, Avatar } from '@mui/material';
import { useUser, setPaywallKey, usePaywall } from '../../Paywall';
import { Icon } from '../../DesignSystem';
import { useDispatch } from '../../Uberedux';

export default function User() {
  const user = useUser();
  const dispatch = useDispatch();
  const paywall = usePaywall();
  const provider = user?.providerData?.[0] ?? null;

  if (!user) return null;

  const toggleDialogOpen = () => {
    dispatch(setPaywallKey('dialog', !paywall.dialog));
  };

  // Map Firebase providerId → your Icon names
  const providerIconMap: Record<string, string> = {
    'github.com': 'github',
    'google.com': 'google',
    'twitter.com': 'twitter',
  };

  const providerIcon =
    provider && providerIconMap[provider.providerId]
      ? providerIconMap[provider.providerId]
      : null;

  const avatarSrc = user.photoURL || provider?.photoURL || '/png/favicon.png';

  return (
    <CardHeader
      title={user.displayName || provider?.displayName || ''}
      subheader={user.email || provider?.email}
      onClick={toggleDialogOpen}
      avatar={
        <Badge
          badgeContent={
            providerIcon ? (
              <Icon icon={providerIcon as any} color="primary" />
            ) : null
          }
        >
          <Avatar src={avatarSrc} />
        </Badge>
      }
    />
  );
}
