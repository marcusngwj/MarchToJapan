import { forwardRef, ReactNode } from "react";
import NextLink, { LinkProps as NextLinkProps } from "next/link";
import { styled, SxProps, Theme } from "@mui/material/styles";
import MuiButton from "@mui/material/Button";

/**************************************************************************************
 * References:
 * - https://mui.com/material-ui/guides/routing/
 * - https://github.com/mui/material-ui/blob/HEAD/examples/material-next-ts/src/Link.tsx
 ***************************************************************************************/
export default function Button({ to, children, sx }: ButtonProp) {
  return (
    <MuiButton component={NextLinkComposed} to={to} sx={sx}>
      {children}
    </MuiButton>
  );
}

const NextLinkComposed = forwardRef<HTMLAnchorElement, NextLinkComposedProps>(
  function NextLinkComposed(props, ref) {
    const {
      to,
      linkAs,
      replace,
      scroll,
      shallow,
      prefetch,
      legacyBehavior = true,
      locale,
      ...other
    } = props;

    return (
      <NextLink
        href={to}
        prefetch={prefetch}
        as={linkAs}
        replace={replace}
        scroll={scroll}
        shallow={shallow}
        passHref
        locale={locale}
        legacyBehavior={legacyBehavior}
      >
        <Anchor ref={ref} {...other} />
      </NextLink>
    );
  }
);

// Add support for the sx prop for consistency with the other branches.
const Anchor = styled("a")({});

interface NextLinkComposedProps
  extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href">,
    Omit<
      NextLinkProps,
      "href" | "as" | "passHref" | "onMouseEnter" | "onClick" | "onTouchStart"
    > {
  to: NextLinkProps["href"];
  linkAs?: NextLinkProps["as"];
}

type ButtonProp = {
  to: NextLinkProps["href"];
  children?: ReactNode;
  sx?: SxProps<Theme> | undefined
};
