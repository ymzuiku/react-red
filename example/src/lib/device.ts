const ua = navigator.userAgent;
export const isAndroid = /(?:Android)/.test(ua);
// const isAndroid = true;
export const isFireFox = /(?:Firefox)/.test(ua);
export const isChrome = /(?:Chrome|CriOS)/.test(ua);
export const isTablet =
  /(?:iPad|PlayBook)/.test(ua) || (isAndroid && !/(?:Mobile)/.test(ua)) || (isFireFox && /(?:Tablet)/.test(ua));
export const isPhone = /(?:iPhone)/.test(ua) && !isTablet;
export const isWechat = /MicroMessenger/.test(ua);
export const isPc = !isPhone && !isAndroid;
export const isLow = false;

// iPhone X、iPhone XS
export const isIPhoneX =
  /iphone/gi.test(window.navigator.userAgent) &&
  window.devicePixelRatio &&
  window.devicePixelRatio === 3 &&
  window.screen.width === 375 &&
  window.screen.height === 812;

// iPhone XS Max
export const isIPhoneXSMax =
  /iphone/gi.test(window.navigator.userAgent) &&
  window.devicePixelRatio &&
  window.devicePixelRatio === 3 &&
  window.screen.width === 414 &&
  window.screen.height === 896;

// iPhone XR
export const isIPhoneXR =
  /iphone/gi.test(window.navigator.userAgent) &&
  window.devicePixelRatio &&
  window.devicePixelRatio === 2 &&
  window.screen.width === 414 &&
  window.screen.height === 896;

export const isNeedIPhoneSafe = isIPhoneX || isIPhoneXSMax || isIPhoneXR;

// 获取是否是 ios 或 android
export const isNative = !isWechat && !isPc && window.innerHeight > 722;

export const topSafe = isNative ? (isNeedIPhoneSafe ? 43 : 20) : 0;

export const bottomSafe = isNative ? (isNeedIPhoneSafe ? 25 : 0) : 0;

document.body.style.width = '100%';
document.body.style.minHeight = '100vh';
document.body.style.backgroundColor = '#fff';
document.body.style.margin = '0px';
document.body.style.padding = '0px';
document.body.style.position = 'relative';

// 给root-div添加默认样式
const rootEle = document.getElementById('root');
if (rootEle) {
  rootEle.style.width = '100%';
  rootEle.style.height = '100%';
  // rootEle.style.position = 'relative';
}

// relative

// 阻止双指放大
document.addEventListener('touchstart', function(event) {
  if (event.touches.length > 1) {
    event.preventDefault();
  }
});

// 阻止双指放大
document.addEventListener('gesturestart', (event) => {
  event.preventDefault();
});

// let lastTouchEnd = 0;
// // 阻止双击放大
// document.addEventListener(
//   'touchend',
//   function(event) {
//     const now = new Date().getTime();
//     if (now - lastTouchEnd <= 300) {
//       event.preventDefault();
//     }
//     lastTouchEnd = now;
//   },
//   false,
// );
