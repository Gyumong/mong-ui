import React, {
  ComponentType,
  forwardRef,
  ReactNode,
  Ref,
  RefObject,
} from "react";
import withDefaults from "../../utils/with-defaults";
import { CSS } from "../../theme/stitches.config";
import { StyledText, TextVariantsProps } from "./text.styles";

type As = keyof JSX.IntrinsicElements | ComponentType<any>;

export interface Props {
  tag: keyof JSX.IntrinsicElements;
  children?: ReactNode;
  css?: CSS;
  as?: As;
}

type NativeAttrs = Omit<React.HTMLAttributes<unknown>, keyof Props>;

export type TextChildProps = Props & NativeAttrs & TextVariantsProps;

export const TextChild = forwardRef(
  (props: TextChildProps, ref: Ref<HTMLElement>) => {
    const { children, tag, css, ...otherProps } = props;

    return (
      <StyledText as={tag} css={{ ...(css as any) }}>
        {children}
      </StyledText>
    );
  }
);

const MemoTextChild = React.memo(TextChild);

export default withDefaults(MemoTextChild, {});
