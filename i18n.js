/**
 * i18n.js - 多语言切换模块
 * 仅包含翻译数据和语言切换功能
 */
            
// ======================================
// 翻译数据配置
// ======================================
const translations = {
    "zh": {
       // 添加品牌名称
         "GameName": "植物反击",
        "title":"植物反击",
        "innerHTML":'植物<span>反击</span>',
        "textContent":"植物反击",
        "nav": {
            "home": "首页",
            "features": "特色功能",
            "screenshots": "游戏截图",
            "community": "社区",
            "download": "立即下载"
        },
        "hero": {
            "subtitle": "欢迎来到植物反击世界",
            "description": "别再隔着屏幕当指挥官了！这次，植物<span>反击</span>带你直接穿越进花园。"
            +"<br><br>在这里，你得真动起来：弯腰亲手埋下种子，转身伸手抓取阳光。当一大波僵尸\"骑脸\"冲锋，你左手种下土豆雷、右手种下豌豆射手，那种手忙脚乱的沉浸感简直太上头！"
            +"<br><br>这是只有 VR 能给你的极致解压体验——亲手把僵尸轰飞！快戴上头显，为了脑子，亲自上阵吧！",

            "watchTrailer": "观看预告片",
            "learnMore": "了解更多"
        },
        "features": {
            "subtitle": "体验策略防御",
            "title": "游戏特色",
            "description": "探索植物反击成为最受欢迎植物防御游戏的原因",
            "plants": {
                "title": "多样植物系统",
                "description": "收集和培养数十种独特植物，每种植物都有不同的防御能力和进化路线。"
            },
            "alliance": {
                "title": "联盟系统",
                "description": "加入或创建联盟，与其他玩家合作防御，共同抵御大规模入侵。"
            },
            "levels": {
                "title": "挑战关卡",
                "description": "挑战各种难度的入侵波次，面对不同类型的敌人和特殊事件。"
            },
            "base": {
                "title": "基地建设",
                "description": "自定义你的防御布局，升级植物能力，打造坚不可摧的防线。"
            }
        },
        "screenshots": {
            "subtitle": "视觉盛宴",
            "title": "游戏截图",
            "description": "体验精致的植物设计和刺激的防御战斗",
            "image1": "植物防御阵地",
            "image2": "激烈战斗场景",
            "image3": "植物进化系统",
            "image4": "基地建设界面"
        },
        "footer": {
            "copyright": "© 2025 云科视觉. 保留所有权利。"
        }
    },
    "en": {
        "GameName": "Plant Counter Attack",
        "title":"Plant Counter Attack",
        "innerHTML":'PLANT <span>COUNTER ATTACK</span>',
        "textContent":"Plant Counter Attack",
        "nav": {
            "home": "Home",
            "features": "Features",
            "screenshots": "Screenshots",
            "community": "Community",
            "download": "Download Now"
        },
        "hero": {
            "subtitle": "WELCOME TO THE PLANT DEFENSE WORLD",
            "description": "Stop commanding from behind a screen. This time, PLANT <span>COUNTER ATTACK</span> drops you straight into the garden."
            +"<br><br>You have to physically move: bend down to plant seeds and spin around to grab sun power. When a massive wave charges right in your face, you’ll be frantically juggling Potato Mines and Peashooters with your own two hands. The chaotic immersion is absolutely addictive!"
            +"<br><br>This is the ultimate stress relief only VR can deliver. Strap on your headset and defend your brains—in person!",
            
            "watchTrailer": "Watch Trailer",
            "learnMore": "Learn More"
        },
        "features": {
            "subtitle": "EXPERIENCE STRATEGIC DEFENSE",
            "title": "Game Features",
            "description": "Discover what makes Plant Counter Attack the most popular plant defense game",
            "plants": {
                "title": "Diverse Plant System",
                "description": "Collect and cultivate dozens of unique plants, each with different defensive abilities and evolution paths."
            },
            "alliance": {
                "title": "Alliance System",
                "description": "Join or create alliances, cooperate with other players for defense, and resist large-scale invasions together."
            },
            "levels": {
                "title": "Challenge Levels",
                "description": "Challenge invasion waves of various difficulties, facing different types of enemies and special events."
            },
            "base": {
                "title": "Base Building",
                "description": "Customize your defense layout, upgrade plant abilities, and create an impregnable defense line."
            }
        },
        "screenshots": {
            "subtitle": "VISUAL FEAST",
            "title": "Game Screenshots",
            "description": "Experience exquisite plant designs and thrilling defense battles",
            "image1": "Plant Defense Position",
            "image2": "Intense Battle Scene",
            "image3": "Plant Evolution System",
            "image4": "Base Building Interface"
        },
        "footer": {
           
            "copyright": "© 2025 YunKe ViSion. All rights reserved."
        }
    }
};

// ======================================
// 多语言工具函数
// ======================================
const i18n = {
    // 当前语言（默认英文）
    currentLang: 'en',
    
    // 初始化语言
    init() {
        // 检查本地存储中的语言偏好
        const savedLang = localStorage.getItem('preferredLanguage');
        if (savedLang && (savedLang === 'zh' || savedLang === 'en')) {
            this.currentLang = savedLang;
        } else {
            // 强制默认使用英文
            this.currentLang = 'en';
        }
        
        // 应用初始语言
        this.applyLanguage(this.currentLang);
        return this.currentLang;
    },
    
    // 获取翻译
    getTranslation(key) {
        const keys = key.split('.');
        let result = translations[this.currentLang];
        
        for (const k of keys) {
            if (result && typeof result === 'object' && k in result) {
                result = result[k];
            } else {
                console.warn(`翻译键未找到: ${key} (语言: ${this.currentLang})`);
                return key; // 返回键名作为后备
            }
        }
        
        return result;
    },
    
    // 应用语言
    applyLanguage(lang) {
        this.currentLang = lang;
        
        // 设置html lang属性
        document.documentElement.lang = lang;
        
        // 更新所有带data-i18n属性的元素
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            const translation = this.getTranslation(key);
            if (translation) {
              // 特殊处理包含HTML的翻译
              if (key === 'brand.title' || key === 'hero.description') {
                  element.innerHTML = translation; // 使用innerHTML支持HTML标签
              } else {
                  element.textContent = translation; // 普通文本
              }
            }
        });
        
        // 更新页面标题
        document.title = translations[lang].title;
        
        // 更新特殊元素（非data-i18n控制的）
        this.updateSpecialElements(lang);
        
        // 保存偏好
        localStorage.setItem('preferredLanguage', lang);
    },
    
    // 更新特殊元素
    updateSpecialElements(lang) {
        // Hero标题
        const heroTitle = document.getElementById('main-title');
        if (heroTitle) {
            heroTitle.innerHTML = translations[lang].innerHTML;
        }
        
        // 页脚Logo
        const footerLogo = document.getElementById('footer-logo');
        if (footerLogo) {
          footerLogo.textContent =  translations[lang].textContent;
        }
        
        // 语言下拉框
        const langSelect = document.getElementById('langSelect');
        if (langSelect) {
            langSelect.value = lang;
        }
    },
    
    // 切换语言
    switchLanguage(lang) {
        if (lang === this.currentLang) return;
        
        // 添加过渡效果
        document.querySelectorAll('[data-i18n]').forEach(el => {
            el.classList.add('lang-transition');
            el.style.opacity = '0.7';
        });
        
        // 短暂延迟后更新内容
        setTimeout(() => {
            this.applyLanguage(lang);
            
            // 恢复透明度
            document.querySelectorAll('[data-i18n]').forEach(el => {
                el.style.opacity = '1';
                setTimeout(() => {
                    el.classList.remove('lang-transition');
                }, 300);
            });
        }, 150);
    },
    
    // 获取当前语言
    getCurrentLanguage() {
        return this.currentLang;
    }
};

// 导出到全局
window.i18n = i18n;