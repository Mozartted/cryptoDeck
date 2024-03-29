import color from 'color';

import { Platform, Dimensions, PixelRatio } from 'react-native';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;
const platform = Platform.OS;
const platformStyle = undefined;
const isIphoneX = platform === 'ios' && deviceHeight === 812 && deviceWidth === 375;

export default {
  platformStyle,
  platform,
  // AndroidRipple
  androidRipple: true,
  androidRippleColor: 'rgba(256, 256, 256, 0.3)',
  androidRippleColorDark: 'rgba(0, 0, 0, 0.15)',

  // Badge
  badgeBg: '#ED1727',
  badgeColor: '#fff',
  // New Variable
  badgePadding: platform === 'ios' ? 3 : 0,

  // Button
  btnFontFamily: platform === 'ios' ? 'Avenir' : 'Roboto',
  btnDisabledBg: '#b5b5b5',
  btnDisabledClr: '#f1f1f1',

  // Android
  btnUppercaseAndroidText: false,

  // CheckBox
  CheckboxRadius: platform === 'ios' ? 13 : 0,
  CheckboxBorderWidth: platform === 'ios' ? 1 : 2,
  CheckboxPaddingLeft: platform === 'ios' ? 4 : 2,
  CheckboxPaddingBottom: platform === 'ios' ? 0 : 5,
  CheckboxIconSize: platform === 'ios' ? 21 : 14,
  CheckboxIconMarginTop: platform === 'ios' ? undefined : 1,
  CheckboxFontSize: platform === 'ios' ? 23 / 0.9 : 18,
  DefaultFontSize: 17,
  checkboxBgColor: '#039BE5',
  checkboxSize: 20,
  checkboxTickColor: '#fff',

  // Segment
  segmentBackgroundColor: '#fff',
  segmentActiveBackgroundColor: '#F9A084',
  segmentTextColor: '#444444',
  segmentActiveTextColor: '#fff',
	segmentBorderColor: '#e5e3e3',
  segmentBorderColorMain: '#F9A084',

  // New Variable
  get defaultTextColor() {
    return this.textColor;
  },

  get btnPrimaryBg() {
    return this.brandPrimary;
  },
  get btnPrimaryColor() {
    return this.inverseTextColor;
  },
  get btnInfoBg() {
    return this.brandInfo;
  },
  get btnInfoColor() {
    return this.inverseTextColor;
  },
  get btnSuccessBg() {
    return this.brandSuccess;
  },
  get btnSuccessColor() {
    return this.inverseTextColor;
  },
  get btnDangerBg() {
    return this.brandDanger;
  },
  get btnDangerColor() {
    return this.inverseTextColor;
  },
  get btnWarningBg() {
    return this.brandWarning;
  },
  get btnWarningColor() {
    return this.inverseTextColor;
  },
  get btnTextSize() {
    return platform === 'ios' ? this.fontSizeBase : this.fontSizeBase - 1;
  },
  get btnTextSizeLarge() {
    return this.fontSizeBase * 1.5;
  },
  get btnTextSizeSmall() {
    return this.fontSizeBase * 0.8;
  },
  get borderRadiusLarge() {
    return this.fontSizeBase * 3.8;
  },

  buttonPadding: 6,

  get iconSizeLarge() {
    return this.iconFontSize * 1.5;
  },
  get iconSizeSmall() {
    return this.iconFontSize * 0.6;
  },

  // Card
  cardDefaultBg: '#fff',

  // Color
  brandPrimary: '#6C63FF',
  brandInfo: '#62B1F6',
  brandSuccess: '#5cb85c',
  brandDanger: '#d9534f',
  brandWarning: '#f0ad4e',
  brandSidebar: '#252932',
  brandDark: '#202020',
  brandLight: '#f4f4f4',

  // Font
  fontFamily: platform === 'ios' ? 'System' : 'Roboto',
  fontSizeBase: 15,

  get fontSizeH1() {
    return this.fontSizeBase * 2.2;
  },
  get fontSizeH2() {
    return this.fontSizeBase * 1.8;
  },
  get fontSizeH3() {
    return this.fontSizeBase * 1.5;
  },

  // Footer
  footerHeight: isIphoneX ? 89 : 55,
  footerDefaultBg: '#2874F0',
  footerPaddingBottom: isIphoneX ? 34 : 0,

  // FooterTab
  tabBarTextColor: '#8bb3f4',
  tabBarTextSize: platform === 'ios' ? 14 : 11,
  activeTab: platform === 'ios' ? '#007aff' : '#fff',
  tabBarActiveTextColor: '#007aff',
  tabBarActiveTextColor: '#fff',
  tabActiveBgColor: platform === 'ios' ? '#1569f4' : undefined,

  // Tab
  tabDefaultBg: '#fff',
  topTabBarTextColor: '#707070',
  topTabBarActiveTextColor: '#DEAB93',
  topTabActiveBgColor: platform === 'ios' ? '#DEAB93' : undefined,
  topTabBarBorderColor: '#fff',
  topTabBarActiveBorderColor: '#DEAB93',

  // Header
  toolbarBtnColor: this.brandPrimary,
  toolbarDefaultBg: 'transparent',
  toolbarHeight: platform === 'ios' ? (isIphoneX ? 88 : 64) : 56,
  toolbarIconSize: platform === 'ios' ? 20 : 22,
  toolbarSearchIconSize: platform === 'ios' ? 20 : 23,
  toolbarInputColor: platform === 'ios' ? '#CECDD2' : '#fff',
  searchBarHeight: platform === 'ios' ? 30 : 40,
  searchBarInputHeight: platform === 'ios' ? 30 : 50,
  toolbarInverseBg: '#222',
  toolbarTextColor: '#202020',
  iosStatusbar: 'dark-content',
  toolbarDefaultBorder: 'transparent',
  get statusBarColor() {
    return color(this.brandPrimary)
      .darken(0.2)
      .string();
  },

  // Icon
  iconFamily: 'Ionicons',
  iconFontSize: platform === 'ios' ? 30 : 28,
  iconMargin: 7,
  iconHeaderSize: platform === 'ios' ? 33 : 24,

  // InputGroup
  inputFontSize: 14,
  inputBorderColor: '#D9D5DC',
  inputSuccessBorderColor: '#2b8339',
  inputErrorBorderColor: '#ed2f2f',

  get inputColor() {
    return this.textColor;
  },
  get inputColorPlaceholder() {
    return '#575757';
  },

  inputGroupMarginBottom: 10,
  inputHeightBase: 50,
  inputPaddingLeft: 5,

  get inputPaddingLeftIcon() {
    return this.inputPaddingLeft * 8;
  },

  // Line Height
  btnLineHeight: 19,
  lineHeightH1: 38,
  lineHeightH2: 32,
  lineHeightH3: 26,
  iconLineHeight: platform === 'ios' ? 37 : 30,
  lineHeight: platform === 'ios' ? 20 : 24,

  // List
  listBg: '#fff',
  listBorderColor: '#c9c9c9',
  listDividerBg: '#f4f4f4',
  listBtnUnderlayColor: '#DDD',

  // Card
  cardBorderColor: '#202020',

  // Changed Variable
  listItemPadding: platform === 'ios' ? 10 : 12,

  listNoteColor: '#808080',
  listNoteSize: 13,

  // Progress Bar
  defaultProgressColor: '#E4202D',
  inverseProgressColor: '#1A191B',

  // Radio Button
  radioBtnSize: platform === 'ios' ? 25 : 23,
  radioSelectedColorAndroid: '#5067FF',

  // New Variable
  radioBtnLineHeight: platform === 'ios' ? 29 : 24,

  radioColor: '#7e7e7e',

  get radioSelectedColor() {
    return color(this.radioColor)
      .darken(0.2)
      .string();
  },

  // Spinner
  defaultSpinnerColor: '#45D56E',
  inverseSpinnerColor: '#1A191B',

  // Tabs
  tabBgColor: '#F8F8F8',
  tabFontSize: 15,
  tabTextColor: '#222222',

  // Text
  textColor: '#202020',
  inverseTextColor: '#fff',
  noteFontSize: 10,

  // Title
  titleFontfamily: platform === 'ios' ? 'Avenir' : 'Roboto',
  titleFontSize: platform === 'ios' ? 19 : 20,
  subTitleFontSize: platform === 'ios' ? 12 : 14,
  subtitleColor: '#FFF',

  // New Variable
  titleFontColor: '#202020',

  // Other
  borderRadiusBase: platform === 'ios' ? 5 : 2,
  borderWidth: 1 / PixelRatio.getPixelSizeForLayoutSize(1),
  contentPadding: 15,

  get darkenHeader() {
    return color(this.tabBgColor)
      .darken(0.03)
      .string();
  },

  dropdownBg: '#000',
  dropdownLinkColor: '#414142',
  inputLineHeight: 19,
  jumbotronBg: '#C9C9CE',
  jumbotronPadding: 30,
  deviceWidth,
  deviceHeight,
  isIphoneX,

  // New Variable
  inputGroupRoundedBorderRadius: 30,
};
