import { Divider, Space, Typography } from "antd";
import { createStyles, useThemeMode } from "antd-style";
import { useMemoizedFn } from "ahooks";
import ButtonDemo from "./components/ButtonDemo";
import TypographyDemo from "./components/TypographyDemo";
import BreadcrumbDemo from "./components/BreadcrumbDemo";
import DropdownDemo from "./components/DropdownDemo";
import MenuDemo from "./components/MenuDemo";
import PaginationDemo from "./components/PaginationDemo";
import StepsDemo from "./components/StepsDemo";
import CascaderDemo from "./components/CascaderDemo";
import CheckboxDemo from "./components/CheckboxDemo";
import ColorPickerDemo from "./components/ColorPickerDemo";
import DatePickerDemo from "./components/DatePickerDemo";
import FormDemo from "./components/FormDemo";
import InputDemo from "./components/InputDemo";
import InputNumberDemo from "./components/InputNumberDemo";
import MentionsDemo from "./components/MentionsDemo";
import RadioDemo from "./components/RadioDemo";
import RateDemo from "./components/RateDemo";
import SelectDemo from "./components/SelectDemo";
import SliderDemo from "./components/SliderDemo";
import SwitchDemo from "./components/SwitchDemo";
import TransferDemo from "./components/TransferDemo";
import TreeSelectDemo from "./components/TreeSelectDemo";
import UploadDemo from "./components/UploadDemo";
import AvatarDemo from "./components/AvatarDemo";
import BadgeDemo from "./components/BadgeDemo";
import CalendarDemo from "./components/CalendarDemo";
import CarouselDemo from "./components/CarouselDemo";
import CollapseDemo from "./components/CollapseDemo";
import DescriptionsDemo from "./components/DescriptionsDemo";
import ListDemo from "./components/ListDemo";
import PopoverDemo from "./components/PopoverDemo";
import SegmentedDemo from "./components/SegmentedDemo";
import StatisticDemo from "./components/StatisticDemo";
import TableDemo from "./components/TableDemo";
import TabsDemo from "./components/TabsDemo";
import TagDemo from "./components/TagDemo";
import TimelineDemo from "./components/TimelineDemo";
import TooltipDemo from "./components/TooltipDemo";
import TreeDemo from "./components/TreeDemo";
import AlertDemo from "./components/AlertDemo";
import DrawerDemo from "./components/DrawerDemo";
import MessageDemo from "./components/MessageDemo";
import ModalDemo from "./components/ModalDemo";
import NotificationDemo from "./components/NotificationDemo";
import PopconfirmDemo from "./components/PopconfirmDemo";
import ProgressDemo from "./components/ProgressDemo";
import ResultDemo from "./components/ResultDemo";
import SpinDemo from "./components/SpinDemo";
import EmptyDemo from "./components/EmptyDemo";

const { Text } = Typography;

const useStyles = createStyles(({ token, css }) => ({
  container: {
    backgroundColor: token.colorBgLayout,
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

export default function HomePage() {
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
    <div className={styles.container}>
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

      <Space wrap>
        <ButtonDemo />
        <TypographyDemo />
        <BreadcrumbDemo />
        <DropdownDemo />
        <MenuDemo />
        <PaginationDemo />
        <StepsDemo />
        <CascaderDemo />
        <CheckboxDemo />
        <ColorPickerDemo />
        <DatePickerDemo />
        <FormDemo />
        <InputDemo />
        <InputNumberDemo />
        <MentionsDemo />
        <RadioDemo />
        <RateDemo />
        <SelectDemo />
        <SliderDemo />
        <SwitchDemo />
        <TransferDemo />
        <TreeSelectDemo />
        <UploadDemo />
        <AvatarDemo />
        <BadgeDemo />
        <CalendarDemo />
        <CarouselDemo />
        <CollapseDemo />
        <DescriptionsDemo />
        <EmptyDemo />
        <ListDemo />
        <PopoverDemo />
        <SegmentedDemo />
        <StatisticDemo />
        <TableDemo />
        <TabsDemo />
        <TagDemo />
        <TimelineDemo />
        <TooltipDemo />
        <TreeDemo />
        <AlertDemo />
        <DrawerDemo />
        <MessageDemo />
        <ModalDemo />
        <NotificationDemo />
        <PopconfirmDemo />
        <ProgressDemo />
        <ResultDemo />
        <SpinDemo />
      </Space>
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
