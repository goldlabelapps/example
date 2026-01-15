// /Users/goldlabel/GitHub/example/gl-core/Core.tsx
'use client';

import configRaw from './config.json';
import { TCore, TConfig } from './types';
import * as React from 'react';
import { usePathname } from 'next/navigation';
import {
  Box,
  CardHeader,
  Container,
  Collapse,
  Grid,
  Typography,
} from '@mui/material';
import {
  PageBreadcrumb,
  useIsMobile,
  useVersionCheck,
  useDispatch,
  SharePopup,
  Icon,
} from '../gl-core';
import { Paywall, SigninGate, useUser } from './cartridges/Paywall';
import {
  DesignSystem,
  useDesignSystem,
  NewContent,
  toggleLoading,
  Tags,
  Navigation,
  RenderMarkdown,
} from './cartridges/DesignSystem';
import {
  useNewContent,
  fetchGlobalNav,
  useSearch,
} from './cartridges/Uberedux';

import FeaturedImage from './cartridges/DesignSystem/components/FeaturedImage';

const config = configRaw as TConfig;

export default function Goldlabel({ frontmatter, body = null }: TCore) {
  const { noImage, image, icon, title, description, paywall, tags } =
    frontmatter ?? {};
  const dispatch = useDispatch();
  const newContent = useNewContent();
  const pathname = usePathname();
  const { themeMode } = useDesignSystem();
  const isMobile = useIsMobile();
  const user = useUser();

  const fetchedNavRef = React.useRef(false);

  React.useEffect(() => {
    if (fetchedNavRef.current) return;
    fetchedNavRef.current = true;
    dispatch(fetchGlobalNav());
  }, [dispatch]);

  React.useEffect(() => {
    dispatch(toggleLoading(false));
  }, [dispatch]);

  useVersionCheck();

  const effectiveThemeMode = themeMode === null ? 'light' : themeMode;
  const isAuthed = !!(user && user.uid);

  const mdSize = React.useMemo(() => {
    if (!newContent) return 6;
    const count = newContent.length;
    return count % 3 === 0 ? 4 : 6;
  }, [newContent]);

  return (
    <DesignSystem theme={config.themes[effectiveThemeMode]}>
      <Paywall />
      <Container id="goldlabel" sx={{ mt: 2 }}>
        <Box sx={{ minHeight: '100vh' }}>
          <Grid container spacing={isMobile ? 0 : 1}>
            {!isMobile && (
              <Grid size={{ xs: 1, md: 3 }}>
                <Box>
                  <Navigation />
                </Box>
              </Grid>
            )}
            <Grid size={{ xs: 12, md: 9 }}>

              <Collapse in={true} unmountOnExit>
                <Grid container spacing={1} sx={{ mt: 1 }}>
                  {newContent?.map((item: any, i: number) => (
                    <Grid key={`page_${i}`} size={{ xs: 12 }}>
                      <NewContent slug={item.slug} />
                    </Grid>
                  ))}
                </Grid>
              </Collapse>

              <CardHeader
                sx={{ flexGrow: 1 }}
                avatar={<Icon icon={icon as any} color="primary" />}
                title={
                  <Typography
                    variant="h1"
                    color="primary"
                    sx={{
                      fontSize: { xs: '1.6rem', md: '2rem' },
                    }}
                  >
                    {title !== 'Home' ? title : 'Goldlabel'}
                  </Typography>
                }
                subheader={
                  <Typography
                    variant="h2"
                    sx={{
                      fontSize: { xs: '1.1rem', md: '1.25rem' },
                    }}
                  >
                    {description}
                  </Typography>
                }
                action={
                  <>
                    <SharePopup />
                    {isMobile && (
                      <>
                        <Navigation />
                      </>
                    )}
                  </>
                }
              />

              {title !== 'Home' && pathname !== '/' && <PageBreadcrumb />}

              <Box sx={{ mt: 2, mb: '80px' }}>
                {paywall === true && !isAuthed ? (
                  <Grid container spacing={2}>
                    <Grid size={{ xs: 12, md: 6 }}>
                      <Box sx={{ mt: 2 }}>
                        <FeaturedImage
                          image={!noImage ? image : null}
                          title={title}
                          maxHeight={420}
                        />
                      </Box>
                    </Grid>

                    <Grid size={{ xs: 12, md: 6 }}>
                      <SigninGate />
                    </Grid>
                  </Grid>
                ) : (
                  <>
                    <FeaturedImage
                      image={!noImage ? image : null}
                      title={title}
                      maxHeight={315}
                    />
                    <RenderMarkdown>{body}</RenderMarkdown>
                  </>
                )}
                {/* <Tags tags={tags} /> */}
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </DesignSystem>
  );
}
