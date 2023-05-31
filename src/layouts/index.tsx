import { Outlet } from "umi";
import { ThemeProvider } from "antd-style";
import { useAtomValue } from "jotai";
import { primaryColorAtom } from "@/atoms";

export default function Layout() {
  const primaryColor = useAtomValue(primaryColorAtom);

  return (
    <ThemeProvider
      defaultThemeMode="light"
      theme={{
        token: {
          colorPrimary: primaryColor,
        },
      }}
    >
      <Outlet />
    </ThemeProvider>
  );
}