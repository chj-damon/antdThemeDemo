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
import { useMemoizedFn } from "ahooks";

const { Text } = Typography;

const useStyles = createStyles(({ token, css }) => ({
  container: {
    backgroundColor: token.colorBgLayout,
    borderRadius: token.borderRadiusLG,
    width: "100vw",
    height: "100vh",
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
  const isDarkMode = themeMode === "dark";

  const handle = useMemoizedFn((e: any) => {
    const html = document.querySelector("html")!;

    const isAppearanceTransition =
      // @ts-ignore
      document.startViewTransition &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!isAppearanceTransition) {
      setThemeMode(isDarkMode ? "light" : "dark");
      return;
    }

    const [x, y] = [e.clientX, e.clientY];
    const endRadius = Math.hypot(
      Math.max(x, innerWidth - x),
      Math.max(y, innerHeight - y)
    );

    // @ts-expect-error: Transition API
    const transition = document.startViewTransition(() => {
      html.className = isDarkMode ? "" : "dark";
      setThemeMode(isDarkMode ? "light" : "dark");
    });

    transition.ready.then(() => {
      const clipPath = [
        `circle(0px at ${x}px ${y}px)`,
        `circle(${endRadius}px at ${x}px ${y}px)`,
      ];
      document.documentElement.animate(
        {
          clipPath: isDarkMode ? [...clipPath].reverse() : clipPath,
        },
        {
          duration: 300,
          easing: "ease-in",
          pseudoElement: isDarkMode
            ? "::view-transition-old(root)"
            : "::view-transition-new(root)",
        }
      );
    });
  });

  return (
    <div className={styles.container}>
      <SwitchIcon isDark={isDarkMode} onClick={handle} />
      <div className={styles.card}>
        <Text type={"secondary"}>主题模式：</Text>
        {themeMode}
        <Divider type={"vertical"} />
        <Text type={"secondary"}>外观模式：</Text>
        {appearance}
        <Divider type={"vertical"} />
        <Text type={"secondary"}>浏览器外观：</Text>
        {browserPrefers}S
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

const SwitchIcon = ({
  isDark,
  onClick,
}: {
  isDark: boolean;
  onClick: (e: any) => void;
}) => {
  if (!isDark)
    return (
      <div onClick={onClick} style={{ cursor: "pointer" }}>
        <svg viewBox="0 0 24 24" width="20px" height="20px">
          <path
            fill="#000"
            d="m3.55 19.09l1.41 1.41l1.8-1.79l-1.42-1.42M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6s6-2.69 6-6c0-3.32-2.69-6-6-6m8 7h3v-2h-3m-2.76 7.71l1.8 1.79l1.41-1.41l-1.79-1.8M20.45 5l-1.41-1.4l-1.8 1.79l1.42 1.42M13 1h-2v3h2M6.76 5.39L4.96 3.6L3.55 5l1.79 1.81l1.42-1.42M1 13h3v-2H1m12 9h-2v3h2"
          ></path>
        </svg>
      </div>
    );

  return (
    <div onClick={onClick} style={{ cursor: "pointer" }}>
      <svg viewBox="0 0 24 24" width="20px" height="20px">
        <path
          fill="#fff"
          d="M2 12a10 10 0 0 0 13 9.54a10 10 0 0 1 0-19.08A10 10 0 0 0 2 12Z"
        ></path>
      </svg>
    </div>
  );
};
