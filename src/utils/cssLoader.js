/**
 * CSS 动态加载工具
 * 用于在组件中动态加载和卸载 CSS，确保 CSS 只在当前页面生效
 */

// 存储已加载的 CSS link 元素
const loadedCSSLinks = new Map();

/**
 * 动态加载 CSS 文件
 * @param {string} cssPath - CSS 文件路径
 * @param {string} componentId - 组件标识（用于卸载时识别）
 * @returns {HTMLLinkElement} link 元素
 */
export function loadCSS(cssPath, componentId) {
  // 检查是否已经加载
  const existingLink = document.querySelector(`link[data-css-path="${cssPath}"][data-component="${componentId}"]`);
  if (existingLink) {
    return existingLink;
  }

  // 创建 link 元素
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.type = 'text/css';
  link.href = cssPath;
  link.setAttribute('data-css-path', cssPath);
  link.setAttribute('data-component', componentId);

  // 添加到 head
  document.head.appendChild(link);

  // 存储到 Map 中
  if (!loadedCSSLinks.has(componentId)) {
    loadedCSSLinks.set(componentId, []);
  }
  loadedCSSLinks.get(componentId).push(link);

  return link;
}

/**
 * 批量加载 CSS 文件
 * @param {string[]} cssPaths - CSS 文件路径数组
 * @param {string} componentId - 组件标识
 */
export function loadCSSFiles(cssPaths, componentId) {
  cssPaths.forEach(cssPath => {
    loadCSS(cssPath, componentId);
  });
}

/**
 * 卸载指定组件的所有 CSS
 * @param {string} componentId - 组件标识
 */
export function unloadCSS(componentId) {
  const links = loadedCSSLinks.get(componentId);
  if (links) {
    links.forEach(link => {
      if (link.parentNode) {
        link.parentNode.removeChild(link);
      }
    });
    loadedCSSLinks.delete(componentId);
  }
}

/**
 * 卸载所有 CSS（清理函数）
 */
export function unloadAllCSS() {
  loadedCSSLinks.forEach((links, componentId) => {
    unloadCSS(componentId);
  });
}

