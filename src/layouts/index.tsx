import { Outlet } from "umi";
import { Link } from "umi";
import { Divider, Typography } from "antd";
import { createStyles, useThemeMode } from "antd-style";
import { useMemoizedFn } from "ahooks";

const { Text } = Typography;

const useStyles = createStyles(({ token, css }) => ({
  page: {
    backgroundColor: token.colorBgLayout,
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingRight: 16
  },
  card: css`
    color: ${token.colorTextTertiary};
    padding: ${token.padding}px;
    border-radius: ${token.borderRadius}px;
    background: ${token.colorBgContainer};
    margin-bottom: 8px;
    cursor: pointer;
    &:hover {
      color: ${token.colorTextSecondary};
    }
  `,
}));

export default function Layout() {
  const { styles } = useStyles();
  const { themeMode, appearance, browserPrefers, setThemeMode, isDarkMode } =
    useThemeMode();

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
    <div className={styles.page}>
      <div className={styles.header}>
        <div className={styles.card}>
          <SwitchIcon isDark={isDarkMode} onClick={handle} />
          <Text type={"secondary"}>主题模式：</Text>
          {themeMode}
          <Divider type={"vertical"} />
          <Text type={"secondary"}>外观模式：</Text>
          {appearance}
          <Divider type={"vertical"} />
          <Text type={"secondary"}>浏览器外观：</Text>
          {browserPrefers}
        </div>
        <div>
          <Link to="/">首页</Link>
          <Link to="/echarts">图表</Link>
        </div>
      </div>
      <Outlet />
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
