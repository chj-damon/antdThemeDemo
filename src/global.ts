import "normalize.css";
import * as echarts from 'echarts';
import { darkTheme, lightTheme } from "./theme";

echarts.registerTheme('td-dark', darkTheme);
echarts.registerTheme('td-light', lightTheme);
