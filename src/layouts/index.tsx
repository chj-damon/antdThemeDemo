import { Outlet } from "umi";
import { ThemeProvider } from "antd-style";
import { ConfigProvider } from "antd";
import { useAtomValue } from "jotai";
import { primaryColorAtom } from "@/atoms";

export default function Layout() {
  return (
    <ThemeProvider defaultThemeMode="light">
      <App />
    </ThemeProvider>
  );
}

const App = () => {
  const primaryColor = useAtomValue(primaryColorAtom);
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: primaryColor,
        },
      }}
    >
      <Outlet />
    </ConfigProvider>
  );
};
