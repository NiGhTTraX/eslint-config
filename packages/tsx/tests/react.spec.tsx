import { forwardRef, Fragment, useEffect, useMemo, useState } from "react";

// eslint-disable-next-line @eslint-react/kit/function-component-definition
function NamedComponent() {
  return <span>Hello</span>;
}

function NotAComponent() {
  return 42;
}

type Props = {
  initial: number;
  // eslint-disable-next-line @eslint-react/no-unused-props
  loading?: boolean;
  count: number;
};

// eslint-disable-next-line @eslint-react/no-forward-ref
const WithProps = forwardRef((props: Props) => {
  const [count, setCount] = useState(props.initial);

  useEffect(() => {
    // eslint-disable-next-line @eslint-react/set-state-in-effect
    setCount(props.initial);
  }, [props.initial]);

  useEffect(() => {
    console.log(props.count);
    // eslint-disable-next-line @eslint-react/exhaustive-deps
  }, []);

  // eslint-disable-next-line @eslint-react/use-memo
  useMemo(
    () => props.count + 1,
    // eslint-disable-next-line @eslint-react/exhaustive-deps
    [],
  );

  const increment = () => {
    setCount((p) => p + 1);
  };

  return (
    <button
      type="button"
      onClick={increment}
      //eslint-disable-next-line @stylistic/jsx-shorthand-boolean
      disabled={true}
      //eslint-disable-next-line @stylistic/jsx-curly-brace-presence
      className={"foo"}
    >
      {/* eslint-disable-next-line @stylistic/jsx-shorthand-fragment,@eslint-react/jsx-no-useless-fragment */}
      <Fragment>{count}</Fragment>
      {/* eslint-disable-next-line @eslint-react/no-leaked-conditional-rendering */}
      {props.count && " ..."}
    </button>
  );
});

const Dropdown = (props: {
  items: string[];
  onChange: (value: string) => void;
}) => {
  const [selected] = useState(props.items[0]);

  useEffect(() => {
    // eslint-disable-next-line @no-effect/no-pass-live-state-to-parent
    props.onChange(selected);
    // The plugin wants the entire `props` object, see
    // https://github.com/facebook/react/issues/16265#issuecomment-517518539
    // eslint-disable-next-line @eslint-react/exhaustive-deps
  }, [props.onChange, selected]);

  return null;
};

console.log(WithProps, NamedComponent, NotAComponent, Dropdown);
