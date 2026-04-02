# 周彻个人简历网站

这是一个现代化、响应式的个人简历网站，专为周彻设计。网站采用HTML、CSS和JavaScript构建，具有美观的界面和完整的交互功能。

## 🌐 在线演示

部署到Vercel后，您的网站将拥有一个免费域名（例如：`https://zhouche-resume.vercel.app`）

## 🚀 功能特点

- ✅ **现代化设计** - 美观的UI，渐变色彩，阴影效果
- ✅ **完全响应式** - 适配所有设备（手机、平板、桌面）
- ✅ **交互丰富** - 动画效果、表单验证、技能条动画
- ✅ **多语言支持** - 中文界面，国际化友好
- ✅ **SEO友好** - 语义化HTML，结构化数据
- ✅ **快速加载** - 优化性能，最小化资源

## 📁 项目结构

```
resume-website/
├── index.html          # 主HTML文件
├── style.css           # 样式文件
├── script.js           # JavaScript交互
├── vercel.json         # Vercel部署配置
├── README.md           # 项目说明
└── assets/
    ├── resume.pdf      # PDF简历文件
    └── favicon.svg     # 网站图标
```

## 🎨 设计特色

### 颜色方案
- 主色: `#4361ee` (蓝色)
- 辅色: `#7209b7` (紫色)
- 强调色: `#f72585` (粉色)

### 字体
- 主字体: Inter (无衬线)
- 标题字体: Poppins (无衬线)

### 布局
- 12列网格系统
- Flexbox + CSS Grid
- 响应式断点: 992px, 768px, 576px, 400px

## 🚀 部署到Vercel (免费)

### 方法一：通过Vercel网站
1. 访问 [vercel.com](https://vercel.com)
2. 使用GitHub账户登录
3. 点击"New Project"
4. 导入此项目仓库
5. 点击"Deploy"

### 方法二：通过Vercel CLI
```bash
# 安装Vercel CLI
npm i -g vercel

# 登录Vercel
vercel login

# 进入项目目录
cd resume-website

# 部署
vercel

# 生产部署
vercel --prod
```

### 方法三：通过GitHub集成
1. 将项目推送到GitHub仓库
2. 在Vercel中连接GitHub账户
3. 选择仓库，自动部署

## 📝 自定义内容

### 1. 更新个人信息
编辑 `index.html` 文件，修改以下内容：
- 姓名（第12、46行）
- 职位标题（第47行）
- 个人简介（第48-50行）
- 联系方式（第85-100行）
- 教育经历（第124-155行）
- 工作经历（第160-220行）
- 技能列表（第225-290行）
- 项目经验（第295-360行）

### 2. 更新PDF简历
1. 将您的PDF简历文件重命名为 `resume.pdf`
2. 替换 `assets/resume.pdf` 文件
3. 确保HTML中的下载链接正确（第54行）

### 3. 更新社交链接
在 `index.html` 中更新以下链接：
- GitHub (第57行)
- LinkedIn (第58行)
- Twitter (第59行)
- 邮箱 (第60行)

### 4. 更新网站图标
替换 `assets/favicon.svg` 文件，或修改HTML中的链接（第11行）

## 🔧 本地开发

### 启动本地服务器
```bash
# 使用Python简单服务器
python -m http.server 8000

# 或使用Node.js
npx serve .
```

### 浏览器访问
打开浏览器，访问 `http://localhost:8000`

## 📱 响应式设计

网站支持以下设备尺寸：
- **桌面** (> 992px): 完整布局
- **平板** (768px - 992px): 适配布局
- **手机** (576px - 768px): 移动优化
- **小手机** (< 576px): 紧凑布局

## 🎯 性能优化

- 图片懒加载（如需添加图片）
- CSS压缩和合并
- JavaScript异步加载
- 字体预加载
- 浏览器缓存策略

## 🤝 贡献

欢迎提交Issue和Pull Request来改进这个项目。

## 📄 许可证

本项目采用MIT许可证。详见LICENSE文件。

## 🙏 致谢

- 字体: Google Fonts (Inter, Poppins)
- 图标: Font Awesome
- 颜色方案: Coolors.co
- 部署平台: Vercel

## 📞 支持

如有问题，请通过以下方式联系：
- 邮箱: zhouche@example.com
- GitHub Issues

---

**最后更新**: 2024年4月1日  
**版本**: 1.0.0