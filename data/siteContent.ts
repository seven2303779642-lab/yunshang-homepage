export type Locale = "zh" | "en";

export type FeatureCardContent = {
  title: string;
  imageAlt: string;
  iconAlt: string;
  lines: string[];
  nowrap?: boolean;
  mobileTitleLines?: string[];
};

export type MenuShowcaseItemContent = {
  title: string;
  text: string;
};

export type PlaceholderPageContent = {
  title: string;
  subtitle: string;
};

export type FooterLinkContent = {
  label: string;
  href: string;
};

export type FooterSocialContent = {
  label: string;
  ariaLabel: string;
};

export type NavContent = {
  logoAlt: string;
  home: string;
  about: string;
  menu: string;
  stores: string;
  events: string;
  languageSwitch: string;
  orderOnline: string;
  mobileMenuOpenLabel: string;
  mobileMenuCloseLabel: string;
  homeAriaLabel: string;
  languageSwitchAriaLabel: string;
  homeHref: string;
  languageHref: string;
  orderHref: string;
};

export type FooterContent = {
  logoAlt: string;
  homeAriaLabel: string;
  homeHref: string;
  linksLeft: FooterLinkContent[];
  linksRight: FooterLinkContent[];
  social: FooterSocialContent[];
  wechatSupport: string;
  wechatQrAlt: string;
  copyright: string;
  copyrightMobile: string;
};

export type SiteContent = {
  locale: Locale;
  nav: NavContent;
  home: {
    heroSlider: {
      slideAlts: string[];
      slideIndicatorAriaLabelTemplate: string;
    };
    aboutIntro: {
      headingLines: [string, string];
      body: string;
      titleImageAlt: string;
      aboutButton: string;
      aboutButtonHref: string;
      boneSoupImageAlt: string;
      playVideoAriaLabel: string;
      videoDialogAriaLabel: string;
      closeVideoAriaLabel: string;
      videoTitle: string;
    };
    featureCards: {
      features: FeatureCardContent[];
    };
    storeBanner: {
      imageAlt: string;
      title: string;
      subtitle: string;
      storesButton: string;
      storesButtonHref: string;
    };
    menuShowcase: {
      leftLabelAlt: string;
      rightLabelAlt: string;
      items: MenuShowcaseItemContent[];
      viewMenuButton: string;
      viewMenuHref: string;
    };
    orderBanner: {
      imageAlt: string;
      headingLines: [string, string];
      pickupButton: string;
      deliveryButton: string;
      orderButtonHref: string;
    };
  };
  footer: FooterContent;
  placeholderPages: {
    comingSoon: string;
    about: PlaceholderPageContent;
    menu: PlaceholderPageContent;
    stores: PlaceholderPageContent;
    events: PlaceholderPageContent;
    order: PlaceholderPageContent;
  };
};

export const zhContent: SiteContent = {
  locale: "zh",
  nav: {
    logoAlt: "云尚米线",
    home: "首页",
    about: "关于",
    menu: "菜单",
    stores: "门店",
    events: "活动",
    languageSwitch: "English",
    orderOnline: "线上点单",
    mobileMenuOpenLabel: "打开菜单",
    mobileMenuCloseLabel: "关闭菜单",
    homeAriaLabel: "返回首页",
    languageSwitchAriaLabel: "切换语言",
    homeHref: "/",
    languageHref: "/en",
    orderHref: "/order",
  },
  home: {
    heroSlider: {
      slideAlts: [
        "云尚首页轮播图 1",
        "云尚首页轮播图 2",
        "云尚首页轮播图 3",
        "云尚首页轮播图 4",
        "云尚首页轮播图 5",
      ],
      slideIndicatorAriaLabelTemplate: "切换到第 {n} 张轮播图",
    },
    aboutIntro: {
      headingLines: ["一碗有温度的米线，", "从匠心开始"],
      body:
        "云尚米线，传承云南百年米线文化，以滚烫鲜骨浓汤激发食材本味，醇厚鲜香，一口暖心！严选央企华润五丰米线，100%纯大米研磨，0胶添加，爽滑Q弹，吸汁入味。高汤精选优质鲜骨，慢熬12小时以上，浓郁纯正，无添加更安心。搭配本地新鲜食材，锁住天然美味。每一碗都是实打实的真材实料，肉足菜丰，汤鲜味美，满足感拉满！",
      titleImageAlt: "不想做饭？来碗云尚米线！",
      aboutButton: "关于云尚",
      aboutButtonHref: "/about",
      boneSoupImageAlt: "云尚米线骨汤熬制画面",
      playVideoAriaLabel: "播放云尚米线介绍视频",
      videoDialogAriaLabel: "云尚米线介绍视频播放窗口",
      closeVideoAriaLabel: "关闭视频",
      videoTitle: "云尚米线介绍视频",
    },
    featureCards: {
      features: [
        {
          title: "12小时鲜骨熬汤",
          imageAlt: "鲜骨熬汤",
          iconAlt: "12小时鲜骨熬汤图标",
          lines: [
            "拒绝科技与狠活，",
            "只用猪骨、老母鸡、火腿等新鲜好料。100%无添加，天天熬汤看得见！",
          ],
          nowrap: true,
        },
        {
          title: "米线无限续",
          imageAlt: "米线",
          iconAlt: "米线无限续图标",
          lines: ["纯大米米线，", "堂食无限量供应，", "想续就续，吃饱吃好不加价！"],
          nowrap: true,
        },
        {
          title: "新鲜食材,本地优选",
          imageAlt: "新鲜番茄食材",
          iconAlt: "新鲜食材图标",
          lines: ["实打实的真材实料，品质无忧，每一口都放心！"],
          nowrap: true,
          mobileTitleLines: ["新鲜食材,", "本地优选"],
        },
      ],
    },
    storeBanner: {
      imageAlt: "云尚米线门店环境",
      title: "全加拿大18家分店",
      subtitle: "寻找离您最近的云尚米线分店",
      storesButton: "查看附近门店",
      storesButtonHref: "/stores",
    },
    menuShowcase: {
      leftLabelAlt: "一碗好米线",
      rightLabelAlt: "半碗都是料",
      items: [
        {
          title: "过桥米线",
          text: "源自云南的非物质文化遗产，凭借“一汤锁鲜”的匠心智慧传承百年。云尚过桥米线提供多种汤底口味选择，并搭配12款精美配菜。食材与滚烫高汤分开出品，食用时按“先荤后素”依次烫熟，最后加入爽滑米线，滚烫高汤瞬间激发食材本味，鲜香扑鼻！",
        },
        {
          title: "特色米线",
          text: "除了经典过桥米线，我们还将传统骨汤米线与独特风味完美融合，打造惊喜满满的特色米线系列！酸辣开胃的老坛酸菜鱼米线、甘香爽口的番茄肥牛米线、麻辣过瘾的川香爆肠旺米线……每一款都让人一口接一口，停不下来！还能自由搭配配菜，想怎么吃就怎么吃，打造你的专属米线体验！",
        },
        {
          title: "凉菜小吃",
          text: "云尚米线菜品丰富，除了经典米线，还有各式精美凉菜、小吃和甜品。香辣开胃的口水鸡、酸甜爽脆的土豆丝、每桌必点的夫妻肺片，款款都是开胃神器！还有盐酥鸡、奥尔良鸡翅、蒜泥炸豆腐等特色小吃，香酥可口，一口接一口，停不下来！",
        },
      ],
      viewMenuButton: "查看菜单",
      viewMenuHref: "/menu",
    },
    orderBanner: {
      imageAlt: "云尚米线热汤与米线",
      headingLines: ["累了别开火,来碗热乎的!", "价格实惠,份量实在"],
      pickupButton: "自取外卖",
      deliveryButton: "送餐到家",
      orderButtonHref: "/order",
    },
  },
  footer: {
    logoAlt: "云尚米线",
    homeAriaLabel: "返回首页",
    homeHref: "/",
    linksLeft: [
      { label: "关于云尚", href: "/about" },
      { label: "活动", href: "/events" },
    ],
    linksRight: [
      { label: "门店", href: "/stores" },
      { label: "菜单", href: "/menu" },
      { label: "线上点单", href: "/order" },
    ],
    social: [
      { label: "Facebook", ariaLabel: "Facebook" },
      { label: "Instagram", ariaLabel: "Instagram" },
      { label: "Redbook", ariaLabel: "小红书" },
    ],
    wechatSupport: "微信小客服",
    wechatQrAlt: "微信客服二维码",
    copyright: "© 2023 YUNSHANG RICE NOODLE.",
    copyrightMobile: " ALL RIGHTS RESERVED.",
  },
  placeholderPages: {
    comingSoon: "页面建设中，敬请期待。",
    about: {
      title: "关于云尚",
      subtitle: "了解云尚米线的品牌故事与匠心传承。",
    },
    menu: {
      title: "菜单",
      subtitle: "浏览云尚米线完整菜单与特色菜品。",
    },
    stores: {
      title: "门店",
      subtitle: "查找离您最近的云尚米线门店。",
    },
    events: {
      title: "活动",
      subtitle: "查看最新优惠与品牌活动。",
    },
    order: {
      title: "线上点单",
      subtitle: "在线下单，自取或送餐到家。",
    },
  },
};

export const enContent: SiteContent = {
  locale: "en",
  nav: {
    logoAlt: "Yunshang Rice Noodle",
    home: "Home",
    about: "About",
    menu: "Menu",
    stores: "Stores",
    events: "Events",
    languageSwitch: "中文",
    orderOnline: "Order Online",
    mobileMenuOpenLabel: "Open menu",
    mobileMenuCloseLabel: "Close menu",
    homeAriaLabel: "Go to home page",
    languageSwitchAriaLabel: "Toggle language",
    homeHref: "/en",
    languageHref: "/",
    orderHref: "/en/order",
  },
  home: {
    heroSlider: {
      slideAlts: [
        "Yunshang homepage slider image 1",
        "Yunshang homepage slider image 2",
        "Yunshang homepage slider image 3",
        "Yunshang homepage slider image 4",
        "Yunshang homepage slider image 5",
      ],
      slideIndicatorAriaLabelTemplate: "Go to slide {n}",
    },
    aboutIntro: {
      headingLines: [
        "A bowl of rice noodles with heart,",
        "crafted with care from the start",
      ],
      body:
        "Yunshang Rice Noodle carries forward Yunnan's century-old rice noodle culture. Our rich bone broth brings out the natural flavor of every ingredient in a warm, satisfying bowl. We use China Resources Wufeng rice noodles made from 100% rice with no additives—smooth, springy, and full of flavor. Our broth is slow-simmered for over 12 hours from quality fresh bones, pure and additive-free. Paired with locally sourced ingredients, every bowl is generous, hearty, and deeply satisfying.",
      titleImageAlt: "No time to cook? Try Yunshang Rice Noodle!",
      aboutButton: "About Yunshang",
      aboutButtonHref: "/en/about",
      boneSoupImageAlt: "Yunshang bone broth preparation",
      playVideoAriaLabel: "Play Yunshang introduction video",
      videoDialogAriaLabel: "Yunshang introduction video player",
      closeVideoAriaLabel: "Close video",
      videoTitle: "Yunshang introduction video",
    },
    featureCards: {
      features: [
        {
          title: "12-Hour Fresh Bone Broth",
          imageAlt: "Fresh bone broth",
          iconAlt: "12-hour fresh bone broth icon",
          lines: [
            "No shortcuts—just pork bones, old hens, ham, and other quality ingredients.",
            "100% additive-free broth, made fresh every day.",
          ],
          nowrap: true,
        },
        {
          title: "Unlimited Noodle Refills",
          imageAlt: "Rice noodles",
          iconAlt: "Unlimited noodle refills icon",
          lines: [
            "Pure rice noodles,",
            "unlimited refills for dine-in,",
            "eat your fill at no extra cost!",
          ],
          nowrap: true,
        },
        {
          title: "Fresh, Locally Sourced Ingredients",
          imageAlt: "Fresh tomato ingredients",
          iconAlt: "Fresh ingredients icon",
          lines: [
            "Real ingredients you can trust—every bite with confidence!",
          ],
          nowrap: true,
          mobileTitleLines: ["Fresh ingredients,", "locally sourced"],
        },
      ],
    },
    storeBanner: {
      imageAlt: "Yunshang restaurant interior",
      title: "18 Locations Across Canada",
      subtitle: "Find the Yunshang location nearest to you",
      storesButton: "Find Nearby Stores",
      storesButtonHref: "/en/stores",
    },
    menuShowcase: {
      leftLabelAlt: "A great bowl of rice noodles",
      rightLabelAlt: "Half a bowl of toppings",
      items: [
        {
          title: "Crossing-the-Bridge Rice Noodles",
          text: "A Yunnan intangible cultural heritage dish, perfected over generations with broth that locks in freshness. Yunshang offers multiple broth flavors with 12 premium side dishes. Ingredients and hot broth are served separately—add meat first, then vegetables, then noodles for an aromatic, flavorful experience.",
        },
        {
          title: "Signature Rice Noodles",
          text: "Beyond the classic crossing-the-bridge style, we blend traditional bone broth with bold flavors for a signature series you'll love. Try sour and spicy pickled fish noodles, tomato beef noodles, or spicy intestine noodles—and customize your bowl your way.",
        },
        {
          title: "Cold Dishes & Snacks",
          text: "Our menu goes beyond rice noodles with cold dishes, snacks, and desserts. From mouth-watering chicken to crispy potato shreds and classic couple's lung slices—plus salt-and-pepper chicken, wings, and fried tofu bites.",
        },
      ],
      viewMenuButton: "View Menu",
      viewMenuHref: "/en/menu",
    },
    orderBanner: {
      imageAlt: "Yunshang hot broth and rice noodles",
      headingLines: [
        "Skip the stove—enjoy a warm bowl!",
        "Great value, generous portions",
      ],
      pickupButton: "Pickup",
      deliveryButton: "Delivery",
      orderButtonHref: "/en/order",
    },
  },
  footer: {
    logoAlt: "Yunshang Rice Noodle",
    homeAriaLabel: "Go to home page",
    homeHref: "/en",
    linksLeft: [
      { label: "About Yunshang", href: "/en/about" },
      { label: "Events", href: "/en/events" },
    ],
    linksRight: [
      { label: "Stores", href: "/en/stores" },
      { label: "Menu", href: "/en/menu" },
      { label: "Order Online", href: "/en/order" },
    ],
    social: [
      { label: "Facebook", ariaLabel: "Facebook" },
      { label: "Instagram", ariaLabel: "Instagram" },
      { label: "Redbook", ariaLabel: "Redbook" },
    ],
    wechatSupport: "WeChat Support",
    wechatQrAlt: "WeChat customer service QR code",
    copyright: "© 2023 YUNSHANG RICE NOODLE.",
    copyrightMobile: " ALL RIGHTS RESERVED.",
  },
  placeholderPages: {
    comingSoon: "This page is under construction.",
    about: {
      title: "About",
      subtitle: "Learn about Yunshang Rice Noodle and our heritage.",
    },
    menu: {
      title: "Menu",
      subtitle: "Browse our full menu and signature dishes.",
    },
    stores: {
      title: "Stores",
      subtitle: "Find the Yunshang location nearest to you.",
    },
    events: {
      title: "Events",
      subtitle: "See the latest promotions and brand events.",
    },
    order: {
      title: "Order Online",
      subtitle: "Order online for pickup or delivery.",
    },
  },
};

export function getLanguageFromPathname(pathname: string): Locale {
  return pathname === "/en" || pathname.startsWith("/en/") ? "en" : "zh";
}

export function getSiteContent(pathname: string): SiteContent {
  return getLanguageFromPathname(pathname) === "en" ? enContent : zhContent;
}
