import { ThemeProvider } from "antd-style";

export function rootContainer(container: any) {
  return (
    <ThemeProvider
      defaultThemeMode="light"
      theme={(appearance) => {
        if (appearance === "dark") {
          return {
            token: {
              colorPrimary: "#1890ff",
              colorPrimaryBg: "#1e375c",
              colorPrimaryBorder: "#1f4568",
              colorPrimaryText: "#1890ff",
              colorSuccess: "#45d96e",
              colorWarning: "#f1ca42",
              colorError: "#fc0000",
              colorInfo: "#177ddc",
              colorBgContainer: "#1A2035",
              colorBgElevated: "#1f2740",
              colorBgLayout: "#0f1421",
              wireframe: false,
              colorBorder: "rgba(100, 100, 100, 0.25)",
              colorBorderSecondary: "rgba(255, 255, 255, 0.1)",
              colorBgMask: "rgba(0, 0, 0, 0.4)",
              colorPrimaryBgHover: "#112a45",
              colorFill: "#132f5a",
              colorFillSecondary: "#273048",
              colorFillTertiary: "#1d355a",
              colorFillQuaternary: "#1d2541",
            },
          };
        }
        return {};
      }}
    >
      {container}
    </ThemeProvider>
  );
}
