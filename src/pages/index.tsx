import { primaryColorAtom } from "@/atoms";
import {
  Button,
  ColorPicker,
  Divider,
  Form,
  Segmented,
  Typography,
} from "antd";
import { ThemeMode, createStyles, useThemeMode } from "antd-style";
import { useSetAtom } from "jotai";
import { MouseEventHandler } from "react";

const { Text } = Typography;

const useStyles = createStyles(({ token, css }) => ({
  container: {
    backgroundColor: token.colorBgLayout,
    borderRadius: token.borderRadiusLG,
    width: '100vw',
    height: '100vh',
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    marginLeft: "auto",
    marginRight: "auto",
  },
  card: css`
    color: ${token.colorTextTertiary};
    box-shadow: ${token.boxShadow};
    &:hover {
      color: ${token.colorTextSecondary};
      box-shadow: ${token.boxShadowSecondary};
    }

    padding: ${token.padding}px;
    border-radius: ${token.borderRadius}px;
    background: ${token.colorBgContainer};

    margin-bottom: 8px;
    cursor: pointer;
  `,
}));

export default function HomePage() {
  const { styles } = useStyles();
  const changePrimaryColor = useSetAtom(primaryColorAtom);
  const { themeMode, appearance, browserPrefers, setThemeMode } =
    useThemeMode();

  const handle = (e: any) => {
    const isAppearanceTransition =
      // @ts-ignore
      document.startViewTransition &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!isAppearanceTransition) return;

    const [x, y] = [e.clientX, e.clientY];
    const endRadius = Math.hypot(
      Math.max(x, innerWidth - x),
      Math.max(y, innerHeight - y)
    );

    // @ts-expect-error: Transition API
    const transition = document.startViewTransition(async () => {
      setThemeMode(themeMode === "light" ? "dark" : "light");
    });

    transition.ready.then(() => {
      const clipPath = [
        `circle(0px at ${x}px ${y}px)`,
        `circle(${endRadius}px at ${x}px ${y}px)`,
      ];
      document.documentElement.animate(
        {
          clipPath: themeMode == "dark" ? [...clipPath].reverse() : clipPath,
        },
        {
          duration: 400,
          easing: "ease-out",
          pseudoElement:
            themeMode == "dark"
              ? "::view-transition-old(root)"
              : "::view-transition-new(root)",
        }
      );
    });
  };

  return (
    <div className={styles.container}>
      <h2>Yay! Welcome to umi!</h2>
      <div className={styles.card}>
        <Text type={"secondary"}>主题模式：</Text>
        {themeMode}
        <Divider type={"vertical"} />
        <Text type={"secondary"}>外观模式：</Text>
        {appearance}
        <Divider type={"vertical"} />
        <Text type={"secondary"}>浏览器外观：</Text>
        {browserPrefers}
      </div>
      <Segmented
        value={themeMode}
        onChange={(v) => setThemeMode(v as ThemeMode)}
        options={[
          { label: "自动", value: "auto" },
          { label: "亮色", value: "light" },
          { label: "暗色", value: "dark" },
        ]}
      />
      <Button type="primary" onClick={handle}>
        我是按钮
      </Button>
      <Form.Item
        valuePropName="color"
        name="colorPrimary"
        label="Primary Color"
      >
        <ColorPicker onChange={(_, hex) => changePrimaryColor(hex)} />
      </Form.Item>
    </div>
  );
}
