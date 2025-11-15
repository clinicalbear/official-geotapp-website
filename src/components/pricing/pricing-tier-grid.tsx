"use client";

import Link from "next/link";
import { useState } from "react";
import type { SiteContent } from "@/lib/siteContentSchema";
import { Button, Grid, Paper, Stack, Typography, type TypographyProps } from "@mui/material";

type HtmlTypographyProps = TypographyProps & {
  html?: string | null;
};

function HtmlTypography({ html, ...props }: HtmlTypographyProps) {
  if (!html) return null;
  return <Typography {...props} dangerouslySetInnerHTML={{ __html: html }} />;
}

type PricingTierGridProps = {
  pricing: SiteContent["pricing"];
  note?: string;
  showHeading?: boolean;
};

export default function PricingTierGrid({ pricing, note, showHeading = true }: PricingTierGridProps) {
  const [isEmphasisHovered, setIsEmphasisHovered] = useState(false);
  return (
    <Stack spacing={showHeading ? 4 : 0}>
      {showHeading && (
        <Stack spacing={1.5} alignItems="center" textAlign="center" sx={{ mb: 2 }}>
          <Typography variant="overline" color="text.secondary" sx={{ letterSpacing: 4 }}>
            Piani e condizioni
          </Typography>
          <Typography variant="h3" sx={{ fontSize: { xs: "2.2rem", md: "2.6rem" } }}>
            {pricing.title}
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 640 }}>
            {pricing.subtitle}
          </Typography>
        </Stack>
      )}
      <Grid container spacing={3}>
        {pricing.tiers.map((tier) => {
          const isEmphasized = Boolean(tier.emphasized);
          const blurred = isEmphasisHovered && !isEmphasized;
          return (
            <Grid key={tier.name} item xs={12} md={pricing.tiers.length === 3 ? 4 : 6}>
              <Paper
                variant="outlined"
                onMouseEnter={() => {
                  if (isEmphasized) setIsEmphasisHovered(true);
                }}
                onMouseLeave={() => {
                  if (isEmphasized) setIsEmphasisHovered(false);
                }}
                sx={{
                  height: "100%",
                  borderRadius: 3,
                  borderColor: isEmphasized ? "primary.main" : "rgba(15,23,42,0.08)",
                  bgcolor: isEmphasized ? "rgba(143,196,54,0.08)" : "background.paper",
                  p: 4,
                  filter: blurred ? "blur(2px)" : "none",
                  boxShadow: isEmphasisHovered && isEmphasized ? "0 0 7px #333" : blurred ? "0 0 7px #333" : "none",
                  transition: "filter 0.3s ease, box-shadow 0.3s ease",
                }}
              >
                <Stack spacing={1}>
                  <Typography variant="overline" color="text.secondary" sx={{ letterSpacing: 4 }}>
                    {tier.cadence}
                  </Typography>
                  <Typography variant="h5">{tier.name}</Typography>
                  <HtmlTypography html={tier.description} component="p" sx={{ color: "text.secondary" }} />
                  <Typography variant="h3" color="primary.main" sx={{ mt: 1 }}>
                    {tier.price}
                  </Typography>
                  <Button
                    component={Link}
                    href={tier.ctaHref}
                    variant={isEmphasized ? "contained" : "outlined"}
                    color="primary"
                    sx={{
                      mt: 2,
                      alignSelf: "flex-start",
                      transition: "box-shadow 0.3s ease",
                      outline: "none",
                      ...(isEmphasized
                        ? {
                            "&:hover, &:focus, &:focus-visible": {
                              boxShadow: "0 0 13px #8FC436 !important",
                            },
                          }
                        : {}),
                    }}
                  >
                    {tier.ctaLabel}
                  </Button>
                  <Stack component="ul" spacing={1.25} sx={{ listStyle: "none", pl: 0, mt: 2 }}>
                    {tier.highlights.map((highlight, index) => (
                      <Stack
                        key={`${tier.name}-highlight-${index}`}
                        direction="row"
                        spacing={1}
                        alignItems="flex-start"
                        component="li"
                      >
                        <i className="fa-solid fa-circle-check" aria-hidden="true" />
                        <HtmlTypography html={highlight} component="p" sx={{ color: "text.primary", m: 0 }} />
                      </Stack>
                    ))}
                  </Stack>
                </Stack>
              </Paper>
            </Grid>
          );
        })}
      </Grid>
      {note && (
        <Typography variant="body2" color="text.secondary" textAlign="center" sx={{ mt: 4 }}>
          {note}
        </Typography>
      )}
    </Stack>
  );
}
