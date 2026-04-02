// 等待DOM完全加载
document.addEventListener('DOMContentLoaded', function() {
    // 导航菜单切换
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (navToggle) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            const icon = this.querySelector('i');
            if (navMenu.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }

    // 关闭移动端菜单当点击链接时
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                navMenu.classList.remove('active');
                const icon = navToggle.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    });

    // 返回顶部按钮
    const backToTopButton = document.getElementById('backToTop');

    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopButton.classList.add('visible');
        } else {
            backToTopButton.classList.remove('visible');
        }
    });

    if (backToTopButton) {
        backToTopButton.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // 表单提交处理
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // 获取表单数据
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                subject: document.getElementById('subject').value,
                message: document.getElementById('message').value
            };

            // 简单验证
            if (!formData.name || !formData.email || !formData.message) {
                alert('请填写所有必填字段');
                return;
            }

            // 这里应该发送到服务器，现在只显示成功消息
            alert('消息发送成功！我会尽快回复您。');
            contactForm.reset();
        });
    }

    // 新闻简报表单
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const emailInput = this.querySelector('input[type="email"]');
            if (emailInput.value) {
                alert('感谢订阅！您将收到我的最新动态。');
                emailInput.value = '';
            }
        });
    }

    // 滚动时高亮导航链接
    const sections = document.querySelectorAll('section[id]');

    function highlightNavLink() {
        let scrollY = window.pageYOffset;

        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute('id');
            const navLink = document.querySelector(`.nav-menu a[href="#${sectionId}"]`);

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                if (navLink) {
                    navLink.style.color = 'var(--primary-color)';
                    navLink.style.fontWeight = '600';
                }
            } else {
                if (navLink) {
                    navLink.style.color = '';
                    navLink.style.fontWeight = '';
                }
            }
        });
    }

    window.addEventListener('scroll', highlightNavLink);

    // 技能条动画
    function animateSkills() {
        const skillLevels = document.querySelectorAll('.skill-level');

        // 检查技能条是否在视图中
        function checkScroll() {
            const skillsSection = document.getElementById('skills');
            if (skillsSection) {
                const sectionTop = skillsSection.offsetTop;
                const sectionHeight = skillsSection.offsetHeight;
                const scrollY = window.pageYOffset;

                if (scrollY > sectionTop - window.innerHeight + 200 &&
                    scrollY < sectionTop + sectionHeight) {
                    skillLevels.forEach(level => {
                        const width = level.style.width;
                        level.style.width = '0%';

                        setTimeout(() => {
                            level.style.width = width;
                        }, 100);
                    });

                    // 移除监听器，只执行一次
                    window.removeEventListener('scroll', checkScroll);
                }
            }
        }

        window.addEventListener('scroll', checkScroll);
        // 初始检查
        checkScroll();
    }

    // 延迟执行技能动画，确保页面加载完成
    setTimeout(animateSkills, 500);

    // 项目卡片悬停效果增强
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // 简历下载按钮点击效果
    const downloadBtn = document.querySelector('a[download]');
    if (downloadBtn) {
        downloadBtn.addEventListener('click', function(e) {
            if (!this.getAttribute('href') || this.getAttribute('href') === '#') {
                e.preventDefault();
                alert('请将您的PDF简历文件放置在assets/resume.pdf路径下');
            }
        });
    }

    // 页面加载动画
    function pageLoadAnimation() {
        document.body.style.opacity = '0';
        document.body.style.transition = 'opacity 0.5s ease';

        setTimeout(() => {
            document.body.style.opacity = '1';
        }, 100);
    }

    pageLoadAnimation();

    // 社交图标动画
    const socialIcons = document.querySelectorAll('.social-link, .social-icon');
    socialIcons.forEach(icon => {
        icon.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) rotate(5deg)';
        });

        icon.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) rotate(0deg)';
        });
    });

    // 统计卡片计数器动画
    function animateCounters() {
        const statNumbers = document.querySelectorAll('.stat-number');

        statNumbers.forEach(stat => {
            const target = parseInt(stat.textContent);
            let current = 0;
            const increment = target / 50;
            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    stat.textContent = target + (stat.textContent.includes('+') ? '+' : '');
                    clearInterval(timer);
                } else {
                    stat.textContent = Math.floor(current) + (stat.textContent.includes('+') ? '+' : '');
                }
            }, 30);
        });
    }

    // 当统计部分进入视图时触发
    function checkStatsScroll() {
        const statsSection = document.querySelector('.about-stats');
        if (statsSection) {
            const sectionTop = statsSection.offsetTop;
            const scrollY = window.pageYOffset;

            if (scrollY > sectionTop - window.innerHeight + 200) {
                animateCounters();
                window.removeEventListener('scroll', checkStatsScroll);
            }
        }
    }

    window.addEventListener('scroll', checkStatsScroll);
    // 初始检查
    checkStatsScroll();

    // 当前年份更新
    const currentYear = new Date().getFullYear();
    const yearElements = document.querySelectorAll('.footer-bottom p:first-child');
    yearElements.forEach(element => {
        element.textContent = element.textContent.replace('2024', currentYear);
    });

    // 复制邮箱功能
    const emailElements = document.querySelectorAll('.contact-item p');
    emailElements.forEach(element => {
        if (element.textContent.includes('@')) {
            element.style.cursor = 'pointer';
            element.title = '点击复制邮箱';

            element.addEventListener('click', function() {
                const email = this.textContent.trim();
                navigator.clipboard.writeText(email).then(() => {
                    const originalText = this.textContent;
                    this.textContent = '已复制到剪贴板！';
                    this.style.color = 'var(--success-color)';

                    setTimeout(() => {
                        this.textContent = originalText;
                        this.style.color = '';
                    }, 2000);
                });
            });
        }
    });
});