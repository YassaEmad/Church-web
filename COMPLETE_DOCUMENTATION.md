# 🧭 2. شريط التنقل (NAVBAR)

## Navbar Container

```tsx
className = "bg-white shadow-sm sticky top-0 z-50 border-b border-border";
```

### Properties:

- **Position:** `sticky` على أعلى الصفحة
- **Top:** `0`
- **Z-Index:** `50` (فوق كل العناصر)
- **Background:** `#ffffff` (أبيض)
- **Box Shadow:** `sm` (0 1px 2px 0 rgba(0, 0, 0, 0.05))
- **Border Bottom:**
  - **Width:** `1px`
  - **Color:** `rgba(212, 175, 55, 0.2)` (ذهبي خفيف)

### Animation (Initial):

```tsx
initial={{ y: -100 }}
animate={{ y: 0 }}
transition={{ type: "spring", stiffness: 100 }}
```

- **Initial Y:** `-100px` (فوق الشاشة)
- **Final Y:** `0`
- **Type:** `spring` (حركة زنبركية)
- **Stiffness:** `100`

---

## Inner Container

```tsx
className = "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8";
```

### Properties:

- **Max Width:** `1280px` (max-w-7xl)
- **Margin:** `0 auto` (centered)
- **Padding X:**
  - Mobile: `16px` (px-4)
  - Small screens (640px+): `24px` (sm:px-6)
  - Large screens (1024px+): `32px` (lg:px-8)

---

## Navbar Height Container

```tsx
className = "flex justify-between items-center h-16";
```

### Properties:

- **Height:** `64px` (h-16)
- **Display:** `flex`
- **Justify Content:** `space-between` (شعار على اليمين، روابط على اليسار)
- **Align Items:** `center` (vertical center)

---

## شعار الكنيسة (Logo Button)

### Button Container:

```tsx
className = "flex items-center gap-2 cursor-pointer";
```

### Properties:

- **Display:** `flex`
- **Align Items:** `center`
- **Gap:** `8px` (gap-2)
- **Cursor:** `pointer`

### Animation (Outer Motion Div):

```tsx
whileHover={{ scale: 1.05 }}
whileTap={{ scale: 0.95 }}
```

- **Hover Scale:** `1.05` (5% أكبر)
- **Tap Scale:** `0.95` (5% أصغر عند الضغط)

---

## Logo Icon Container

```tsx
className =
  "w-10 h-10 bg-primary rounded-full flex items-center justify-center";
```

### Properties:

- **Width:** `40px` (w-10)
- **Height:** `40px` (h-10)
- **Background:** `#1a4d7a` (primary blue)
- **Border Radius:** `50%` (rounded-full - دائرة كاملة)
- **Display:** `flex`
- **Align Items:** `center`
- **Justify Content:** `center`

### Icon Animation:

```tsx
whileHover={{ rotate: 360 }}
transition={{ duration: 0.6 }}
```

- **Hover Rotate:** `360deg` (دورة كاملة)
- **Duration:** `0.6s`

### Church Icon:

```tsx
<Church className="h-6 w-6 text-white" />
```

- **Size:** `24px × 24px` (w-6 h-6)
- **Color:** `#ffffff` (white)

---

## Logo Text

### Container:

```tsx
className = "flex flex-col";
```

- **Display:** `flex`
- **Direction:** `column`

### Main Text (Church Name):

```tsx
className = "text-primary tracking-tight";
```

- **Text:** "كنيسة مار جرجس"
- **Color:** `#1a4d7a` (primary)
- **Letter Spacing:** `-0.025em` (tracking-tight)
- **Font Size:** من globals.css (حسب العنصر)

### Subtitle (Location):

```tsx
className = "text-xs text-muted-foreground";
```

- **Text:** "الكابلات"
- **Font Size:** `0.75rem` (12px) - text-xs
- **Color:** `#6b7280` (muted-foreground)

---

## Desktop Navigation Links

### Container:

```tsx
className = "hidden md:flex items-center gap-1";
```

### Properties:

- **Display:** `hidden` على mobile, `flex` على md وأكبر
- **Breakpoint:** `768px` (md)
- **Align Items:** `center`
- **Gap:** `4px` (gap-1)

---

## Individual Nav Link

```tsx
className = `px-4 py-2 rounded-lg transition-all duration-300 ${
  isActive(link.path)
    ? "bg-primary text-white shadow-md"
    : "text-foreground hover:bg-secondary hover:shadow-sm"
}`;
```

### Default State (Inactive):

- **Padding X:** `16px` (px-4)
- **Padding Y:** `8px` (py-2)
- **Border Radius:** `8px` (rounded-lg)
- **Text Color:** `#2c2c2c` (foreground)
- **Background:** `transparent`
- **Transition:** `all 0.3s ease` (duration-300)

### Active State:

- **Background:** `#1a4d7a` (primary)
- **Text Color:** `#ffffff` (white)
- **Box Shadow:** `md` (0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1))

### Hover State (Inactive):

- **Background:** `#f5f1e8` (secondary)
- **Box Shadow:** `sm` (0 1px 2px 0 rgba(0, 0, 0, 0.05))

### Animation (Entry):

```tsx
initial={{ opacity: 0, y: -20 }}
animate={{ opacity: 1, y: 0 }}
transition={{ delay: index * 0.1 }}
```

- **Initial:** Opacity `0`, Moved up `20px`
- **Final:** Opacity `1`, Original position
- **Delay:** Staggered (`index × 0.1s`)

### Nav Links Array:

1. الرئيسية → `/`
2. الأخبار → `/news`
3. القداسات → `/masses`
4. العظات → `/sermons`
5. المعرض → `/gallery`
6. الخدمات → `/services`

---

## Mobile Menu Button

```tsx
className = "md:hidden p-2 rounded-lg hover:bg-secondary";
```

### Properties:

- **Display:** Visible على mobile, `hidden` على md+ (768px+)
- **Padding:** `8px` (p-2)
- **Border Radius:** `8px` (rounded-lg)
- **Hover Background:** `#f5f1e8` (secondary)

### Icons:

- **Menu Icon (Closed):** `<Menu className="w-6 h-6" />`
- **X Icon (Opened):** `<X className="w-6 h-6" />`
- **Size:** `24px × 24px`

---

## Mobile Menu Panel

```tsx
className = "md:hidden py-4 border-t border-border overflow-hidden";
```

### Properties:

- **Display:** `hidden` على md+, visible على mobile
- **Padding Y:** `16px` (py-4)
- **Border Top:**
  - **Width:** `1px`
  - **Color:** `rgba(212, 175, 55, 0.2)`
- **Overflow:** `hidden` (للحركة السلسة)

### Animation (Container):

```tsx
initial={{ opacity: 0, height: 0 }}
animate={{ opacity: 1, height: "auto" }}
exit={{ opacity: 0, height: 0 }}
transition={{ duration: 0.3 }}
```

- **Initial:** Opacity `0`, Height `0`
- **Animate In:** Opacity `1`, Height `auto`
- **Exit:** Opacity `0`, Height `0`
- **Duration:** `0.3s`

### Inner Container:

```tsx
className = "flex flex-col gap-2";
```

- **Display:** `flex`
- **Direction:** `column`
- **Gap:** `8px` (gap-2)

---

## Mobile Menu Link

```tsx
className = `px-4 py-3 rounded-lg transition-all duration-300 block text-right ${
  isActive(link.path)
    ? "bg-primary text-white shadow-md"
    : "text-foreground hover:bg-secondary"
}`;
```

### Default State:

- **Padding X:** `16px` (px-4)
- **Padding Y:** `12px` (py-3)
- **Border Radius:** `8px` (rounded-lg)
- **Display:** `block`
- **Text Align:** `right` (RTL)
- **Text Color:** `#2c2c2c`
- **Transition:** `all 0.3s`

### Active State:

- **Background:** `#1a4d7a` (primary)
- **Text Color:** `#ffffff` (white)
- **Shadow:** `md`

### Hover State:

- **Background:** `#f5f1e8` (secondary)

### Animation (Each Link):

```tsx
initial={{ opacity: 0, x: 20 }}
animate={{ opacity: 1, x: 0 }}
transition={{ delay: index * 0.1 }}
```

- **Initial:** Opacity `0`, Moved right `20px`
- **Final:** Opacity `1`, Original position
- **Delay:** Staggered (`index × 0.1s`)

---

## نافذة كلمة المرور (Admin Password Dialog)

### Dialog Container:

```tsx
<Dialog open={showPasswordDialog} onOpenChange={setShowPasswordDialog}>
  <DialogContent className="sm:max-w-md rounded-2xl">
```

### Properties:

- **Max Width:** `448px` (sm:max-w-md) على small+
- **Border Radius:** `16px` (rounded-2xl)
- **Background:** `#ffffff` (white) من ShadCN
- **Padding:** `24px` (من ShadCN Dialog)
- **Position:** Fixed, centered

---

## Lock Icon Container

```tsx
className =
  "w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4";
```

### Properties:

- **Width:** `64px` (w-16)
- **Height:** `64px` (h-16)
- **Background:** `#1a4d7a` (primary)
- **Border Radius:** `50%` (rounded-full)
- **Display:** `flex`
- **Align Items:** `center`
- **Justify Content:** `center`
- **Margin X:** `auto` (centered)
- **Margin Bottom:** `16px` (mb-4)

### Lock Icon:

```tsx
<Lock className="h-8 w-8 text-white" />
```

- **Size:** `32px × 32px`
- **Color:** `#ffffff` (white)

---

## Dialog Title & Description

### Title:

```tsx
className = "text-center";
```

- **Text:** "تسجيل دخول المسؤول"
- **Align:** `center`
- **Font:** من globals.css (DialogTitle styling)

### Description:

```tsx
className = "text-center";
```

- **Text:** "أدخل كلمة مرور المسؤول للوصول إلى لوحة التحكم"
- **Align:** `center`
- **Color:** `#6b7280` (muted) من ShadCN

---

## Password Input Field

### Label:

```tsx
<Label htmlFor="password">{t("password")}</Label>
```

- **Text:** "كلمة المرور"
- **Font Weight:** `500` (medium) من globals.css

### Input:

```tsx
className = "rounded-lg mt-2";
```

- **Type:** `password`
- **Border Radius:** `8px` (rounded-lg)
- **Margin Top:** `8px` (mt-2)
- **Background:** `#f5f1e8` (input-background)
- **Border:** `1px solid` `rgba(212, 175, 55, 0.2)`
- **Padding:** من ShadCN Input component
- **Placeholder:** "أدخل كلمة مرور المسؤول"

### Error Message:

```tsx
className = "text-destructive text-sm mt-2";
```

- **Color:** `#d4183d` (destructive)
- **Font Size:** `0.875rem` (14px) - text-sm
- **Margin Top:** `8px`
- **Text:** "كلمة مرور غير صحيحة. جرب '123'"

### Demo Hint:

```tsx
className = "text-xs text-muted-foreground mt-2";
```

- **Font Size:** `0.75rem` (12px) - text-xs
- **Color:** `#6b7280`
- **Margin Top:** `8px`
- **Text:** "كلمة المرور التجريبية: 123"

---

## Dialog Buttons

### Container:

```tsx
className = "flex gap-2";
```

- **Display:** `flex`
- **Gap:** `8px` (gap-2)

### Cancel Button:

```tsx
<Button
  type="button"
  variant="outline"
  className="flex-1 rounded-lg"
>
```

- **Type:** `button`
- **Variant:** `outline`
- **Flex:** `1` (نفس العرض)
- **Border Radius:** `8px` (rounded-lg)
- **Border:** `1px solid` `rgba(212, 175, 55, 0.2)`
- **Background:** `transparent`
- **Text Color:** `#2c2c2c`
- **Padding:** من ShadCN Button

### Login Button:

```tsx
<Button type="submit" className="flex-1 rounded-lg">
```

- **Type:** `submit`
- **Variant:** Default (primary)
- **Flex:** `1`
- **Border Radius:** `8px`
- **Background:** `#1a4d7a` (primary)
- **Text Color:** `#ffffff` (white)
- **Hover Background:** Darker shade

---

# 🏠 3. قسم HERO

## Hero Container

```tsx
className =
  "relative h-[500px] flex items-center justify-center overflow-hidden rounded-2xl mb-16";
```

### Properties:

- **Position:** `relative`
- **Height:** `500px` (h-[500px])
- **Display:** `flex`
- **Align Items:** `center`
- **Justify Content:** `center`
- **Overflow:** `hidden`
- **Border Radius:** `16px` (rounded-2xl)
- **Margin Bottom:** `64px` (mb-16)

### Animation:

```tsx
initial={{ opacity: 0, scale: 0.95 }}
animate={{ opacity: 1, scale: 1 }}
transition={{ duration: 0.8 }}
```

- **Initial:** Opacity `0`, Scale `95%`
- **Final:** Opacity `1`, Scale `100%`
- **Duration:** `0.8s`

---

## Background Image

```tsx
<ImageWithFallback
  src="https://images.unsplash.com/photo-1640544351861-930d12160bbb..."
  alt="St. George Church"
  className="absolute inset-0 h-full w-full object-cover"
/>
```

### Properties:

- **Position:** `absolute`
- **Inset:** `0` (covers whole container)
- **Width:** `100%`
- **Height:** `100%`
- **Object Fit:** `cover` (يملأ المساحة كاملة مع الحفاظ على النسبة)
- **Alt Text:** "St. George Church"

---

## Gradient Overlay

```tsx
className =
  "absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60";
```

### Properties:

- **Position:** `absolute`
- **Inset:** `0` (covers whole image)
- **Background:** Gradient من أعلى لأسفل
  - **From (Top):** `rgba(0, 0, 0, 0.5)` (50% black)
  - **Via (Middle):** `rgba(0, 0, 0, 0.3)` (30% black)
  - **To (Bottom):** `rgba(0, 0, 0, 0.6)` (60% black)

---

## Content Container

```tsx
className = "relative text-center text-white z-10 px-4";
```

### Properties:

- **Position:** `relative`
- **Text Align:** `center`
- **Text Color:** `#ffffff` (white)
- **Z-Index:** `10` (فوق الصورة والـ overlay)
- **Padding X:** `16px` (px-4)

---

## Hero Title (H1)

```tsx
<motion.h1
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.3, duration: 0.8 }}
  className="mb-4 text-white"
>
  {t("churchName")}
</motion.h1>
```

### Properties:

- **Text:** "كنيسة مار جرجس - الكابلات"
- **Color:** `#ffffff` (white)
- **Margin Bottom:** `16px` (mb-4)
- **Font Size:** من globals.css (h1 default size)

### Animation:

- **Initial:** Opacity `0`, Moved down `30px`
- **Final:** Opacity `1`, Original position
- **Delay:** `0.3s`
- **Duration:** `0.8s`

---

## Hero Subtitle (Paragraph)

```tsx
<motion.p
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.5, duration: 0.8 }}
  className="mx-auto max-w-2xl text-xl text-white/90"
>
  {t("heroSubtitle")}
</motion.p>
```

### Properties:

- **Text:** "مرحباً بكم في بيتنا الروحي. مكان للإيمان والشركة والنعمة الإلهية."
- **Font Size:** `1.25rem` (20px) - text-xl
- **Color:** `rgba(255, 255, 255, 0.9)` (white / 90%)
- **Max Width:** `672px` (max-w-2xl)
- **Margin:** `0 auto` (centered)

### Animation:

- **Initial:** Opacity `0`, Moved down `30px`
- **Final:** Opacity `1`, Original position
- **Delay:** `0.5s`
- **Duration:** `0.8s`

---

## Sunday Service Badge

```tsx
<motion.div
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ delay: 0.7, duration: 0.5 }}
  className="mt-6"
>
  <Badge className="bg-accent px-6 py-2 text-base text-white">
    {t("sundayService")}
  </Badge>
</motion.div>
```

### Badge Properties:

- **Background:** `#d4af37` (accent - gold)
- **Text Color:** `#ffffff` (white)
- **Padding X:** `24px` (px-6)
- **Padding Y:** `8px` (py-2)
- **Font Size:** `1rem` (16px) - text-base
- **Border Radius:** `9999px` (rounded-full من ShadCN Badge)
- **Text:** "قداس الأحد: 9:00 صباحاً"

### Animation:

- **Initial:** Opacity `0`, Scale `80%`
- **Final:** Opacity `1`, Scale `100%`
- **Delay:** `0.7s`
- **Duration:** `0.5s`

---

# 📰 4. بطاقات المحتوى (CONTENT CARDS)

## Section Preview Container

```tsx
<motion.section
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-100px" }}
  transition={{ duration: 0.5 }}
  className="mb-16"
>
```

### Properties:

- **Margin Bottom:** `64px` (mb-16) بين الأقسام
- **Trigger:** عند الدخول في viewport
- **Viewport Margin:** `-100px` (تبدأ الحركة قبل الظهور بـ 100px)
- **Once:** `true` (تحدث مرة واحدة)

### Animation:

- **Initial:** Opacity `0`, Moved down `20px`
- **Final:** Opacity `1`, Original position
- **Duration:** `0.5s`

---

## Section Header

```tsx
className = "flex justify-between items-center mb-6";
```

### Properties:

- **Display:** `flex`
- **Justify:** `space-between` (عنوان على اليمين، زر على اليسار)
- **Align Items:** `center`
- **Margin Bottom:** `24px` (mb-6)

### Section Title (H2):

```tsx
className = "text-primary";
```

- **Color:** `#1a4d7a` (primary)
- **Font Size:** من globals.css (h2 default)

---

## View More Button

```tsx
<Button
  variant="outline"
  className="gap-2 rounded-full transition-shadow hover:shadow-lg"
>
  {linkText}
  <ArrowLeft className="h-4 w-4" />
</Button>
```

### Properties:

- **Variant:** `outline`
- **Gap:** `8px` (gap-2) بين النص والأيقونة
- **Border Radius:** `9999px` (rounded-full - شكل pill)
- **Border:** `1px solid` `rgba(212, 175, 55, 0.2)`
- **Background:** `transparent`
- **Text Color:** `#2c2c2c`
- **Padding:** من ShadCN Button

### Hover State:

- **Box Shadow:** `lg` (0 10px 15px -3px, 0 4px 6px -4px)
- **Transition:** `shadow` only

### Icon:

- **Size:** `16px × 16px` (w-4 h-4)
- **Icon:** `ArrowLeft` (يشير لليسار في RTL = للخلف)

### Motion Wrapper:

```tsx
whileHover={{ scale: 1.05 }}
whileTap={{ scale: 0.95 }}
```

- **Hover Scale:** `1.05`
- **Tap Scale:** `0.95`

---

## News Card

```tsx
<motion.div
  variants={itemVariants}
  whileHover={{ y: -8, transition: { duration: 0.3 } }}
>
  <Card className="rounded-2xl hover:shadow-xl transition-all duration-300 h-full">
```

### Card Container:

- **Border Radius:** `16px` (rounded-2xl)
- **Height:** `100%` (h-full - لتساوي ارتفاعات الكروت)
- **Background:** `#ffffff` (card)
- **Border:** `1px solid` `rgba(212, 175, 55, 0.2)`
- **Padding:** `24px` (من ShadCN Card)

### Default Shadow:

- **Type:** `sm` (من ShadCN)
- **Value:** `0 1px 2px 0 rgba(0, 0, 0, 0.05)`

### Hover State:

- **Shadow:** `xl` (0 20px 25px -5px, 0 8px 10px -6px)
- **Transform Y:** `-8px` (يرتفع للأعلى)
- **Transition:** `all 0.3s`

### Item Variants (Stagger Animation):

```tsx
const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5 },
  },
};
```

---

## News Card Header

```tsx
<CardHeader>
  <div className="text-muted-foreground mb-2 flex items-center gap-2 text-sm">
    <Calendar className="h-4 w-4" />
    {newsItem.date}
  </div>
  <CardTitle>{newsItem.title}</CardTitle>
</CardHeader>
```

### Date Container:

- **Display:** `flex`
- **Align Items:** `center`
- **Gap:** `8px` (gap-2)
- **Color:** `#6b7280` (muted-foreground)
- **Font Size:** `0.875rem` (14px) - text-sm
- **Margin Bottom:** `8px` (mb-2)

### Calendar Icon:

- **Size:** `16px × 16px` (w-4 h-4)
- **Color:** `#6b7280` (inherited)

### Card Title:

- **Font Size:** من globals.css (CardTitle)
- **Color:** `#2c2c2c` (card-foreground)
- **Font Weight:** `500` (medium)

---

## News Card Content

```tsx
<CardContent>
  <CardDescription>{newsItem.description}</CardDescription>
</CardContent>
```

### Properties:

- **Color:** `#6b7280` (muted-foreground)
- **Line Height:** `1.5` من globals.css
- **Padding Top:** `0` (CardContent spacing من ShadCN)

---

## Mass Schedule Card

```tsx
<Card className="rounded-2xl hover:shadow-xl transition-all duration-300 border-l-4 border-l-accent h-full">
```

### Unique Properties:

- **Border Left:** (يصبح Border Right في RTL)
  - **Width:** `4px` (border-l-4)
  - **Color:** `#d4af37` (accent - gold)
- **Rest:** Same as News Card

---

## Mass Card Content

```tsx
<CardContent className="space-y-2">
  <div className="flex items-center gap-2 text-sm">
    <Clock className="text-accent h-4 w-4" />
    <span>{mass.time}</span>
  </div>
  <div className="flex items-center gap-2 text-sm">
    <MapPin className="text-accent h-4 w-4" />
    <span>{mass.location}</span>
  </div>
  <p className="text-muted-foreground pt-2">{mass.description}</p>
</CardContent>
```

### Info Row:

- **Display:** `flex`
- **Align Items:** `center`
- **Gap:** `8px` (gap-2)
- **Font Size:** `0.875rem` (14px) - text-sm

### Icon:

- **Size:** `16px × 16px`
- **Color:** `#d4af37` (accent)

### Description:

- **Color:** `#6b7280` (muted-foreground)
- **Padding Top:** `8px` (pt-2)

---

## Sermon Card

```tsx
<Card className="h-full rounded-2xl transition-all duration-300 hover:shadow-xl">
  <CardHeader>
    <CardTitle>{sermon.title}</CardTitle>
    <div className="text-muted-foreground mt-2 flex items-center gap-2 text-sm">
      <User className="h-4 w-4" />
      {sermon.speaker}
    </div>
    <div className="text-muted-foreground flex items-center gap-2 text-sm">
      <Calendar className="h-4 w-4" />
      {sermon.date}
    </div>
  </CardHeader>
  <CardContent>
    <CardDescription>{sermon.description}</CardDescription>
  </CardContent>
</Card>
```

### Metadata Rows:

- **Display:** `flex`
- **Align Items:** `center`
- **Gap:** `8px`
- **Font Size:** `0.875rem` (14px)
- **Color:** `#6b7280`
- **Margin Top:** `8px` (mt-2) للصف الأول

### Icons:

- **Size:** `16px × 16px`
- **Types:** User (speaker), Calendar (date)

---

## Service Card

```tsx
<Card className="h-full rounded-2xl transition-all duration-300 hover:shadow-xl">
  <CardHeader>
    <CardTitle>{service.title}</CardTitle>
    <Badge variant="secondary" className="w-fit rounded-full">
      {service.date}
    </Badge>
  </CardHeader>
  <CardContent>
    <CardDescription>{service.description}</CardDescription>
  </CardContent>
</Card>
```

### Badge (Date):

- **Variant:** `secondary`
- **Background:** `#f5f1e8` (secondary)
- **Text Color:** `#2c2c2c`
- **Border Radius:** `9999px` (rounded-full)
- **Width:** `fit-content` (w-fit)
- **Padding:** من ShadCN Badge

---

## Cards Grid Layout

### News Grid:

```tsx
className = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6";
```

- **Columns:** 1 (mobile) → 2 (md) → 3 (lg)
- **Gap:** `24px` (gap-6)

### Masses Grid:

```tsx
className = "grid grid-cols-1 md:grid-cols-2 gap-6";
```

- **Columns:** 1 (mobile) → 2 (md+)
- **Gap:** `24px`

### Sermons Grid:

```tsx
className = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6";
```

- **Columns:** 1 → 2 → 3
- **Gap:** `24px`

### Services Grid:

```tsx
className = "grid grid-cols-1 md:grid-cols-2 gap-6";
```

- **Columns:** 1 → 2
- **Gap:** `24px`

---

# 🖼️ 5. نظام المعرض (GALLERY SYSTEM)

## Gallery Page Header

```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.2 }}
  className="mb-8"
>
  <h1 className="text-primary mb-2">{t("photoGallery")}</h1>
  <p className="text-muted-foreground">{t("photoGalleryDesc")}</p>
</motion.div>
```

### Properties:

- **Margin Bottom:** `32px` (mb-8)

### H1:

- **Color:** `#1a4d7a` (primary)
- **Margin Bottom:** `8px` (mb-2)
- **Text:** "معرض الصور"

### Description:

- **Color:** `#6b7280` (muted-foreground)
- **Text:** "لحظات مُلتقطة من مجتمع كنيستنا وفعالياتنا واحتفالاتنا."

---

## Gallery Grid

```tsx
<motion.div
  variants={containerVariants}
  initial="hidden"
  animate="visible"
  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
>
```

### Properties:

- **Grid Columns:**
  - Mobile (default): `1` column
  - Small (640px+): `2` columns
  - Medium (768px+): `3` columns
  - Large (1024px+): `4` columns
- **Gap:** `24px` (gap-6)

### Container Variants:

```tsx
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};
```

- **Stagger:** `0.05s` بين كل صورة

---

## Gallery Item (Thumbnail)

```tsx
<motion.div
  variants={itemVariants}
  whileHover={{ scale: 1.05, zIndex: 10 }}
  className="group cursor-pointer"
  onClick={() => openLightbox(index)}
>
```

### Properties:

- **Cursor:** `pointer` (يدل على إمكانية الضغط)
- **Group:** للتحكم في hover states للعناصر الداخلية

### Hover State:

- **Scale:** `1.05` (5% أكبر)
- **Z-Index:** `10` (فوق العناصر المجاورة)

### Item Variants:

```tsx
const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5 },
  },
};
```

---

## Image Container

```tsx
className =
  "relative aspect-square rounded-2xl overflow-hidden mb-3 shadow-md hover:shadow-xl transition-shadow duration-300";
```

### Properties:

- **Position:** `relative`
- **Aspect Ratio:** `1:1` (aspect-square - مربع)
- **Border Radius:** `16px` (rounded-2xl)
- **Overflow:** `hidden`
- **Margin Bottom:** `12px` (mb-3)
- **Box Shadow:** `md` (default), `xl` (hover)
- **Transition:** `shadow 0.3s`

---

## Gallery Image

```tsx
<ImageWithFallback
  src={image.url}
  alt={image.title}
  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
/>
```

### Properties:

- **Width:** `100%`
- **Height:** `100%`
- **Object Fit:** `cover`
- **Transform:** Scale `1` (default) → `1.1` (hover)
- **Transition:** `transform 0.5s`

---

## Image Overlay (on Hover)

```tsx
className =
  "absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4";
```

### Properties:

- **Position:** `absolute`
- **Inset:** `0` (covers whole image)
- **Background:** Gradient من أسفل لأعلى
  - **From (Bottom):** `rgba(0, 0, 0, 0.7)` (70% black)
  - **Via (Middle):** `rgba(0, 0, 0, 0.2)` (20% black)
  - **To (Top):** `transparent`
- **Opacity:** `0` (default), `1` (on hover)
- **Transition:** `opacity 0.3s`
- **Display:** `flex`
- **Align Items:** `flex-end` (content at bottom)
- **Padding:** `16px` (p-4)

### Overlay Content:

```tsx
<div className="text-white">
  <p className="mb-1">{image.title}</p>
  <div className="flex items-center gap-1 text-sm text-white/80">
    <Calendar className="h-3 w-3" />
    {image.date}
  </div>
</div>
```

#### Title:

- **Color:** `#ffffff` (white)
- **Margin Bottom:** `4px` (mb-1)

#### Date:

- **Color:** `rgba(255, 255, 255, 0.8)` (white / 80%)
- **Font Size:** `0.875rem` (14px) - text-sm
- **Icon Size:** `12px × 12px` (w-3 h-3)

---

## Image Caption (Below Thumbnail)

```tsx
<div className="px-2">
  <h3 className="mb-1">{image.title}</h3>
  <div className="text-muted-foreground flex items-center gap-2 text-sm">
    <Calendar className="h-4 w-4" />
    {image.date}
  </div>
</div>
```

### Properties:

- **Padding X:** `8px` (px-2)

### Title (H3):

- **Margin Bottom:** `4px` (mb-1)
- **Font Size:** من globals.css (h3)

### Date:

- **Font Size:** `0.875rem` (14px)
- **Color:** `#6b7280` (muted-foreground)
- **Icon:** `16px × 16px`

---

## Gallery Lightbox

### Lightbox Backdrop

```tsx
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  exit={{ opacity: 0 }}
  transition={{ duration: 0.3 }}
  className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
  onClick={onClose}
>
```

### Properties:

- **Position:** `fixed`
- **Inset:** `0` (full screen)
- **Z-Index:** `100` (فوق كل شيء)
- **Background:** `rgba(0, 0, 0, 0.95)` (95% black)
- **Display:** `flex`
- **Align Items:** `center`
- **Justify Content:** `center`

### Animation:

- **Enter:** Fade in from `0` to `1` in `0.3s`
- **Exit:** Fade out from `1` to `0` in `0.3s`

---

## Close Button (Lightbox)

```tsx
<motion.button
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  exit={{ opacity: 0, y: -20 }}
  transition={{ delay: 0.1 }}
  onClick={onClose}
  className="absolute top-4 left-4 z-[102] flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/20"
>
  <X className="h-6 w-6" />
</motion.button>
```

### Properties:

- **Position:** `absolute`
- **Top:** `16px` (top-4)
- **Left:** `16px` (left-4) - في RTL يظهر على اليسار
- **Z-Index:** `102`
- **Width:** `48px` (w-12)
- **Height:** `48px` (h-12)
- **Background:** `rgba(255, 255, 255, 0.1)` (default)
- **Hover Background:** `rgba(255, 255, 255, 0.2)`
- **Border Radius:** `50%` (rounded-full)
- **Display:** `flex`
- **Align Items:** `center`
- **Justify Content:** `center`
- **Text Color:** `#ffffff`
- **Backdrop Filter:** `blur(4px)` (backdrop-blur-sm)
- **Transition:** `colors`

### Icon:

- **Size:** `24px × 24px` (w-6 h-6)

### Animation:

- **Initial:** Opacity `0`, Y `-20px`
- **Animate:** Opacity `1`, Y `0`
- **Delay:** `0.1s`

---

## Navigation Buttons (Lightbox)

### Previous Button (Right Side in RTL)

```tsx
<motion.button
  initial={{ opacity: 0, x: 20 }}
  animate={{ opacity: 1, x: 0 }}
  exit={{ opacity: 0, x: 20 }}
  transition={{ delay: 0.1 }}
  onClick={handlePrev}
  className="absolute right-4 z-[102] flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/20"
>
  <ChevronRight className="h-6 w-6" />
</motion.button>
```

### Properties:

- **Position:** `absolute`
- **Right:** `16px` (right-4) - زر Previous على اليمين في RTL
- **Z-Index:** `102`
- **Width:** `48px`
- **Height:** `48px`
- **Background:** `rgba(255, 255, 255, 0.1)`
- **Hover Background:** `rgba(255, 255, 255, 0.2)`
- **Border Radius:** `50%`
- **Icon:** `ChevronRight` (يشير لليمين = السابق في RTL)

### Animation:

- **Initial:** Opacity `0`, X `20px` (from right)
- **Animate:** Opacity `1`, X `0`
- **Delay:** `0.1s`

---

### Next Button (Left Side in RTL)

```tsx
<motion.button
  initial={{ opacity: 0, x: -20 }}
  animate={{ opacity: 1, x: 0 }}
  exit={{ opacity: 0, x: -20 }}
  transition={{ delay: 0.1 }}
  onClick={handleNext}
  className="absolute left-4 z-[102] flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/20"
>
  <ChevronLeft className="h-6 w-6" />
</motion.button>
```

### Properties:

- **Position:** `absolute`
- **Left:** `16px` (left-4) - زر Next على اليسار في RTL
- **Z-Index:** `102`
- **Icon:** `ChevronLeft` (يشير لليسار = التالي في RTL)

### Animation:

- **Initial:** Opacity `0`, X `-20px` (from left)
- **Animate:** Opacity `1`, X `0`

---

## Lightbox Image Display

```tsx
<AnimatePresence mode="wait" custom={direction}>
  <motion.div
    key={currentIndex}
    custom={direction}
    variants={slideVariants}
    initial="enter"
    animate="center"
    exit="exit"
    transition={{
      x: { type: "spring", stiffness: 300, damping: 30 },
      opacity: { duration: 0.3 },
    }}
    className="relative flex max-h-[90vh] max-w-[90vw] flex-col items-center"
  >
    <img
      src={currentImage.url}
      alt={currentImage.title}
      className="max-h-[80vh] max-w-full rounded-lg object-contain shadow-2xl"
      draggable={false}
    />
    {/* Image Info */}
  </motion.div>
</AnimatePresence>
```

### Container Properties:

- **Position:** `relative`
- **Max Width:** `90vw` (90% من عرض الشاشة)
- **Max Height:** `90vh` (90% من ارتفاع الشاشة)
- **Display:** `flex`
- **Flex Direction:** `column`
- **Align Items:** `center`

### Image Properties:

- **Max Width:** `100%`
- **Max Height:** `80vh` (80% من ارتفاع الشاشة)
- **Object Fit:** `contain` (تظهر كاملة دون قص)
- **Border Radius:** `8px` (rounded-lg)
- **Box Shadow:** `2xl` (0 25px 50px -12px)
- **Draggable:** `false` (منع السحب)

### Slide Variants:

```tsx
const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 100 : -100,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -100 : 100,
    opacity: 0,
  }),
};
```

#### Direction Logic:

- **Next (direction > 0):**
  - Enter من: `x: 100` (من اليمين)
  - Exit إلى: `x: -100` (إلى اليسار)
- **Previous (direction < 0):**
  - Enter من: `x: -100` (من اليسار)
  - Exit إلى: `x: 100` (إلى اليمين)

### Transition:

- **X Movement:** Spring animation
  - **Stiffness:** `300`
  - **Damping:** `30`
- **Opacity:** Duration `0.3s`

---

## Image Info (Below Image in Lightbox)

```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.2 }}
  className="mt-4 text-center text-white"
>
  <h3 className="mb-1 text-white">{currentImage.title}</h3>
  <p className="text-sm text-white/70">{currentImage.date}</p>
  <p className="mt-2 text-sm text-white/50">
    {currentIndex + 1} / {images.length}
  </p>
</motion.div>
```

### Properties:

- **Margin Top:** `16px` (mt-4)
- **Text Align:** `center`
- **Text Color:** `#ffffff` (white)

### Title (H3):

- **Color:** `#ffffff` (text-white override)
- **Margin Bottom:** `4px` (mb-1)

### Date:

- **Font Size:** `0.875rem` (14px) - text-sm
- **Color:** `rgba(255, 255, 255, 0.7)` (white / 70%)

### Counter:

- **Font Size:** `0.875rem` (14px)
- **Color:** `rgba(255, 255, 255, 0.5)` (white / 50%)
- **Margin Top:** `8px` (mt-2)
- **Format:** "5 / 20" (current / total)

### Animation:

- **Initial:** Opacity `0`, Y `20px`
- **Animate:** Opacity `1`, Y `0`
- **Delay:** `0.2s`

---

## Keyboard Navigation

```tsx
useEffect(() => {
  if (!isOpen) return;

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      onClose();
    } else if (e.key === "ArrowLeft") {
      handleNext(); // في RTL: Left = Next
    } else if (e.key === "ArrowRight") {
      handlePrev(); // في RTL: Right = Previous
    }
  };

  window.addEventListener("keydown", handleKeyDown);
  return () => window.removeEventListener("keydown", handleKeyDown);
}, [isOpen, currentIndex]);
```

### Keyboard Shortcuts:

- **Escape:** Close lightbox
- **Arrow Left:** Next image (في RTL)
- **Arrow Right:** Previous image (في RTL)

---

## Swipe Gestures (Mobile)

```tsx
const swipeHandlers = useSwipeable({
  onSwipedLeft: handleNext,
  onSwipedRight: handlePrev,
  trackMouse: false,
  preventScrollOnSwipe: true,
});
```

### Properties:

- **Swipe Left:** Next image
- **Swipe Right:** Previous image
- **Track Mouse:** `false` (touch only)
- **Prevent Scroll:** `true` (منع scroll أثناء swipe)

---

## Body Scroll Lock

```tsx
useEffect(() => {
  if (isOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }
  return () => {
    document.body.style.overflow = "";
  };
}, [isOpen]);
```

### Functionality:

- **When Open:** `overflow: hidden` (منع scroll للصفحة)
- **When Closed:** إعادة scroll للوضع الطبيعي

---

# 🔐 6. لوحة التحكم (ADMIN DASHBOARD)

## Admin Page Header

```tsx
<div className="mb-8 flex items-start justify-between">
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.2 }}
  >
    <h1 className="text-primary mb-2">{t("adminDashboard")}</h1>
    <p className="text-muted-foreground">{t("adminDashboardDesc")}</p>
  </motion.div>
  <Button variant="outline" onClick={logout} className="rounded-lg">
    {t("logout")}
  </Button>
</div>
```

### Properties:

- **Display:** `flex`
- **Justify:** `space-between`
- **Align Items:** `flex-start`
- **Margin Bottom:** `32px` (mb-8)

### H1:

- **Color:** `#1a4d7a` (primary)
- **Margin Bottom:** `8px`
- **Text:** "لوحة تحكم المسؤول"

### Description:

- **Color:** `#6b7280` (muted-foreground)
- **Text:** "إدارة محتوى الكنيسة والأخبار والقداسات والعظات والمزيد."

### Logout Button:

- **Variant:** `outline`
- **Border Radius:** `8px` (rounded-lg)
- **Text:** "تسجيل الخروج"

---

## Admin Tabs Navigation

```tsx
<TabsList className="bg-secondary grid w-full grid-cols-2 rounded-xl md:grid-cols-5">
  {/* Tab Triggers */}
</TabsList>
```

### Properties:

- **Display:** `grid`
- **Grid Columns:**
  - Mobile: `2` columns
  - Medium+ (768px): `5` columns
- **Width:** `100%`
- **Border Radius:** `12px` (rounded-xl)
- **Background:** `#f5f1e8` (secondary)
- **Padding:** من ShadCN TabsList

---

## Individual Tab Trigger

```tsx
<TabsTrigger value="news" className="gap-2 rounded-lg">
  <Newspaper className="h-4 w-4" />
  <span className="hidden sm:inline">{t("news")}</span>
</TabsTrigger>
```

### Properties:

- **Border Radius:** `8px` (rounded-lg)
- **Gap:** `8px` (gap-2) بين الأيقونة والنص
- **Padding:** من ShadCN TabsTrigger

### Default State:

- **Background:** `transparent`
- **Text Color:** `#2c2c2c`

### Active State:

- **Background:** `#ffffff` (white)
- **Text Color:** `#1a4d7a` (primary)
- **Box Shadow:** `sm`

### Icon:

- **Size:** `16px × 16px` (w-4 h-4)
- **Always Visible**

### Text:

- **Display:** `hidden` on mobile, `inline` on sm+ (640px+)

### Tabs:

1. **الأخبار** (News) - Newspaper icon
2. **القداسات** (Masses) - Church icon
3. **العظات** (Sermons) - Mic icon
4. **المعرض** (Gallery) - Image icon
5. **الخدمات** (Services) - Heart icon

---

## Admin Content Card

```tsx
<Card className="rounded-2xl">
  <CardHeader>
    <div className="flex items-center justify-between">
      <div>
        <CardTitle>Manage News</CardTitle>
        <CardDescription>Add, edit, or delete news articles</CardDescription>
      </div>
      <Button className="gap-2 rounded-lg">
        <Plus className="h-4 w-4" />
        {t("addNew")}
      </Button>
    </div>
  </CardHeader>
  <CardContent>{/* Items List */}</CardContent>
</Card>
```

### Card Properties:

- **Border Radius:** `16px` (rounded-2xl)
- **Background:** `#ffffff`
- **Border:** `1px solid` `rgba(212, 175, 55, 0.2)`
- **Padding:** `24px` (من ShadCN Card)

### Header Container:

- **Display:** `flex`
- **Justify:** `space-between`
- **Align Items:** `center`

### Add Button:

- **Border Radius:** `8px` (rounded-lg)
- **Gap:** `8px` (gap-2)
- **Background:** `#1a4d7a` (primary)
- **Text Color:** `#ffffff` (white)
- **Icon Size:** `16px × 16px`

---

## Admin Item Row

```tsx
<motion.div
  initial={{ opacity: 0, y: 10 }}
  animate={{ opacity: 1, y: 0 }}
  className="border-border hover:bg-secondary flex items-start justify-between rounded-lg border p-4 transition-colors"
>
  <div className="flex-1">
    <h4>{item.title}</h4>
    <p className="text-muted-foreground text-sm">{item.date}</p>
  </div>
  <div className="flex gap-2">
    <Button size="sm" variant="outline" className="rounded-lg">
      <Edit className="h-4 w-4" />
    </Button>
    <Button size="sm" variant="outline" className="text-destructive rounded-lg">
      <Trash2 className="h-4 w-4" />
    </Button>
  </div>
</motion.div>
```

### Container Properties:

- **Display:** `flex`
- **Align Items:** `flex-start`
- **Justify:** `space-between`
- **Padding:** `16px` (p-4)
- **Border:** `1px solid` `rgba(212, 175, 55, 0.2)`
- **Border Radius:** `8px` (rounded-lg)
- **Background:** `transparent` (default)
- **Hover Background:** `#f5f1e8` (secondary)
- **Transition:** `colors`

### Title (H4):

- **Font Size:** من globals.css (h4)
- **Color:** `#2c2c2c`

### Metadata:

- **Font Size:** `0.875rem` (14px) - text-sm
- **Color:** `#6b7280` (muted-foreground)

### Buttons Container:

- **Display:** `flex`
- **Gap:** `8px` (gap-2)

### Edit Button:

- **Size:** `sm`
- **Variant:** `outline`
- **Border Radius:** `8px`
- **Icon:** Edit (16px × 16px)

### Delete Button:

- **Size:** `sm`
- **Variant:** `outline`
- **Border Radius:** `8px`
- **Text Color:** `#d4183d` (destructive)
- **Icon:** Trash2 (16px × 16px)

### Animation:

- **Initial:** Opacity `0`, Y `10px`
- **Animate:** Opacity `1`, Y `0`

---

## Admin Edit/Create Dialog

```tsx
<Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
  <DialogContent className="max-h-[90vh] max-w-2xl overflow-y-auto rounded-2xl">
    <DialogHeader>
      <DialogTitle>{editingItem ? t("edit") : t("addNew")} News</DialogTitle>
    </DialogHeader>
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Form Fields */}
    </form>
  </DialogContent>
</Dialog>
```

### Dialog Content Properties:

- **Border Radius:** `16px` (rounded-2xl)
- **Max Width:** `672px` (max-w-2xl)
- **Max Height:** `90vh` (90% viewport height)
- **Overflow Y:** `auto` (scroll if content exceeds height)
- **Background:** `#ffffff`
- **Padding:** `24px` (من ShadCN Dialog)

### Form Container:

- **Space Between Fields:** `16px` (space-y-4)

---

## Form Input Field

```tsx
<div>
  <Label>{t("title")}</Label>
  <Input
    value={formData.title}
    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
    className="mt-2 rounded-lg"
    required
  />
</div>
```

### Label Properties:

- **Font Size:** من globals.css (label)
- **Font Weight:** `500` (medium)
- **Color:** `#2c2c2c`

### Input Properties:

- **Border Radius:** `8px` (rounded-lg)
- **Margin Top:** `8px` (mt-2)
- **Background:** `#f5f1e8` (input-background)
- **Border:** `1px solid` `rgba(212, 175, 55, 0.2)`
- **Padding:** من ShadCN Input
- **Font Size:** `1rem` (16px) - text-base

### Focus State:

- **Border Color:** `rgba(212, 175, 55, 0.4)`
- **Outline:** `2px solid` `rgba(212, 175, 55, 0.1)`

---

## Form Textarea Field

```tsx
<div>
  <Label>{t("description")}</Label>
  <Textarea
    value={formData.description}
    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
    className="mt-2 rounded-lg"
    rows={4}
    required
  />
</div>
```

### Textarea Properties:

- **Border Radius:** `8px` (rounded-lg)
- **Margin Top:** `8px` (mt-2)
- **Background:** `#f5f1e8` (input-background)
- **Border:** `1px solid` `rgba(212, 175, 55, 0.2)`
- **Rows:** `4` أو `5` حسب الحقل
- **Resize:** Allowed (default)
- **Padding:** من ShadCN Textarea

---

## Dialog Action Buttons

```tsx
<div className="flex gap-2">
  <Button
    type="button"
    variant="outline"
    onClick={() => {
      setIsDialogOpen(false);
      resetForm();
    }}
    className="flex-1 rounded-lg"
  >
    {t("cancel")}
  </Button>
  <Button type="submit" className="flex-1 rounded-lg">
    {t("save")}
  </Button>
</div>
```

### Container Properties:

- **Display:** `flex`
- **Gap:** `8px` (gap-2)

### Cancel Button:

- **Type:** `button`
- **Variant:** `outline`
- **Flex:** `1` (نصف العرض)
- **Border Radius:** `8px` (rounded-lg)
- **Text:** "إلغاء"

### Save Button:

- **Type:** `submit`
- **Variant:** Default (primary)
- **Flex:** `1`
- **Border Radius:** `8px`
- **Background:** `#1a4d7a` (primary)
- **Text Color:** `#ffffff` (white)
- **Text:** "حفظ"

---

## Gallery Admin (Unique Layout)

```tsx
<CardContent>
  <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
    {gallery.map((item) => (
      <motion.div className="group relative">
        <div className="aspect-square overflow-hidden rounded-lg">
          <img
            src={item.url}
            alt={item.title}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="absolute inset-0 flex items-center justify-center gap-2 rounded-lg bg-black/60 opacity-0 transition-opacity group-hover:opacity-100">
          {/* Edit & Delete Buttons */}
        </div>
        <p className="mt-2 text-sm">{item.title}</p>
      </motion.div>
    ))}
  </div>
</CardContent>
```

### Grid Properties:

- **Grid Columns:**
  - Mobile: `2` columns
  - Medium (768px+): `3` columns
  - Large (1024px+): `4` columns
- **Gap:** `16px` (gap-4)

### Image Container:

- **Aspect Ratio:** `1:1` (aspect-square)
- **Border Radius:** `8px` (rounded-lg)
- **Overflow:** `hidden`

### Hover Overlay:

- **Position:** `absolute`
- **Inset:** `0`
- **Background:** `rgba(0, 0, 0, 0.6)` (60% black)
- **Opacity:** `0` (default), `1` (on hover)
- **Display:** `flex`
- **Align Items:** `center`
- **Justify Content:** `center`
- **Gap:** `8px` (gap-2)

### Action Buttons (in Overlay):

- **Size:** `sm`
- **Variant:** `secondary`
- **Border Radius:** `8px`
- **Background:** `#f5f1e8` (secondary)

---

# 📍 7. الفوتر (FOOTER)

## Footer Container

```tsx
<footer className="bg-primary mt-20 text-white">
  <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
    {/* Footer Content */}
  </div>
</footer>
```

### Properties:

- **Background:** `#1a4d7a` (primary - blue)
- **Text Color:** `#ffffff` (white)
- **Margin Top:** `80px` (mt-20) من المحتوى
- **Max Width:** `1280px` (max-w-7xl)
- **Margin:** `0 auto` (centered)
- **Padding X:** `16px` / `24px` / `32px` (responsive)
- **Padding Y:** `48px` (py-12)

---

## Footer Grid

```tsx
className = "grid grid-cols-1 md:grid-cols-3 gap-8";
```

### Properties:

- **Grid Columns:**
  - Mobile: `1` column (stack)
  - Medium+ (768px): `3` columns
- **Gap:** `32px` (gap-8)

---

## Church Info Section (Column 1)

```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5 }}
>
  <div className="mb-4 flex items-center gap-2">
    <div className="bg-accent flex h-10 w-10 items-center justify-center rounded-full">
      <Church className="h-6 w-6 text-white" />
    </div>
    <div>
      <h3 className="text-white">كنيسة مار جرجس</h3>
      <p className="text-sm text-white/80">الكابلات</p>
    </div>
  </div>
  <p className="leading-relaxed text-white/90">{t("communityDesc")}</p>
</motion.div>
```

### Icon Container:

- **Width:** `40px` (w-10)
- **Height:** `40px` (h-10)
- **Background:** `#d4af37` (accent - gold)
- **Border Radius:** `50%` (rounded-full)
- **Display:** `flex`
- **Align Items:** `center`
- **Justify Content:** `center`

### Icon:

- **Size:** `24px × 24px` (w-6 h-6)
- **Color:** `#ffffff` (text-white)

### Church Name (H3):

- **Color:** `#ffffff` (text-white)
- **Font Size:** من globals.css (h3)

### Location:

- **Font Size:** `0.875rem` (14px) - text-sm
- **Color:** `rgba(255, 255, 255, 0.8)` (white / 80%)

### Description:

- **Color:** `rgba(255, 255, 255, 0.9)` (white / 90%)
- **Line Height:** `1.625` (leading-relaxed)
- **Text:** "مجتمع من الإيمان والأمل والمحبة. تعال واعبد معنا واختبر نعمة ال��ه."

### Animation:

- **Initial:** Opacity `0`, Y `20px`
- **Animate:** Opacity `1`, Y `0`
- **Duration:** `0.5s`
- **Viewport:** `once: true`

---

## Contact Info Section (Column 2)

```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5, delay: 0.1 }}
>
  <h3 className="mb-4 text-white">{t("contactUs")}</h3>
  <div className="space-y-3">{/* Contact Items */}</div>
</motion.div>
```

### Heading:

- **Color:** `#ffffff` (text-white)
- **Margin Bottom:** `16px` (mb-4)
- **Text:** "اتصل بنا"

### Container:

- **Space Between Items:** `12px` (space-y-3)

### Animation:

- **Delay:** `0.1s` (بعد العمود الأول)

---

## Address Item

```tsx
<div className="flex items-start gap-3">
  <MapPin className="text-accent mt-0.5 h-5 w-5 flex-shrink-0" />
  <p className="text-white/90">
    123 شارع الكنيسة
    <br />
    الكابلات، القاهرة
    <br />
    مصر
  </p>
</div>
```

### Properties:

- **Display:** `flex`
- **Align Items:** `flex-start` (للعناوين متعددة السطور)
- **Gap:** `12px` (gap-3)

### Icon:

- **Size:** `20px × 20px` (w-5 h-5)
- **Color:** `#d4af37` (accent - gold)
- **Flex Shrink:** `0` (لا يتقلص)
- **Margin Top:** `2px` (mt-0.5) - محاذاة مع السطر الأول

### Text:

- **Color:** `rgba(255, 255, 255, 0.9)` (white / 90%)
- **Line Breaks:** `<br />` بين الأسطر

---

## Phone Item

```tsx
<div className="flex items-center gap-3">
  <Phone className="text-accent h-5 w-5 flex-shrink-0" />
  <a
    href="tel:+201234567890"
    className="hover:text-accent text-white/90 transition-colors"
  >
    +20 123 456 7890
  </a>
</div>
```

### Properties:

- **Display:** `flex`
- **Align Items:** `center`
- **Gap:** `12px` (gap-3)

### Icon:

- **Size:** `20px × 20px`
- **Color:** `#d4af37` (accent)
- **Flex Shrink:** `0`

### Link:

- **Color:** `rgba(255, 255, 255, 0.9)` (default)
- **Hover Color:** `#d4af37` (accent)
- **Transition:** `colors`
- **Href:** `tel:+201234567890`

---

## Social & Links Section (Column 3)

```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5, delay: 0.2 }}
>
  <h3 className="mb-4 text-white">{t("connectWithUs")}</h3>
  <div className="mb-6 flex gap-4">{/* Social Icons */}</div>
  <div className="space-y-2">{/* Quick Links */}</div>
</motion.div>
```

### Heading:

- **Text:** "تواصل معنا"
- **Margin Bottom:** `16px`

### Social Container:

- **Display:** `flex`
- **Gap:** `16px` (gap-4)
- **Margin Bottom:** `24px` (mb-6)

### Links Container:

- **Space Between:** `8px` (space-y-2)

### Animation:

- **Delay:** `0.2s` (بعد العمود الثاني)

---

## Social Icon Button

```tsx
<motion.a
  whileHover={{ scale: 1.1, rotate: 5 }}
  whileTap={{ scale: 0.9 }}
  href="https://facebook.com"
  target="_blank"
  rel="noopener noreferrer"
  className="hover:bg-accent flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors"
>
  <Facebook className="h-5 w-5" />
</motion.a>
```

### Properties:

- **Width:** `40px` (w-10)
- **Height:** `40px` (h-10)
- **Background:** `rgba(255, 255, 255, 0.1)` (default)
- **Hover Background:** `#d4af37` (accent)
- **Border Radius:** `50%` (rounded-full)
- **Display:** `flex`
- **Align Items:** `center`
- **Justify Content:** `center`
- **Transition:** `colors`

### Icon:

- **Size:** `20px × 20px` (w-5 h-5)
- **Color:** `#ffffff` (inherited)

### Hover Animation:

- **Scale:** `1.1` (10% أكبر)
- **Rotate:** `5deg` للـ Facebook, `-5deg` للـ WhatsApp

### Tap Animation:

- **Scale:** `0.9` (10% أصغر)

### Icons:

1. **Facebook** - rotate `5deg`
2. **WhatsApp (MessageCircle)** - rotate `-5deg`

---

## Quick Link

```tsx
<Link
  to="/"
  className="hover:text-accent block text-white/90 transition-colors"
>
  {t("home")}
</Link>
```

### Properties:

- **Display:** `block`
- **Color:** `rgba(255, 255, 255, 0.9)` (default)
- **Hover Color:** `#d4af37` (accent)
- **Transition:** `colors`

### Links:

1. الرئيسية → `/`
2. القداسات → `/masses`
3. الخدمات → `/services`

---

## Copyright Section

```tsx
<motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5, delay: 0.3 }}
  className="mt-8 border-t border-white/20 pt-8 text-center"
>
  <p className="text-white/80">
    © {new Date().getFullYear()} {t("copyright")}
  </p>
</motion.div>
```

### Properties:

- **Border Top:**
  - **Width:** `1px`
  - **Color:** `rgba(255, 255, 255, 0.2)` (white / 20%)
- **Margin Top:** `32px` (mt-8)
- **Padding Top:** `32px` (pt-8)
- **Text Align:** `center`

### Text:

- **Color:** `rgba(255, 255, 255, 0.8)` (white / 80%)
- **Content:** "© 2025 كنيسة مار جرجس - الكابلات. جميع الحقوق محفوظة."
- **Year:** Dynamic من `new Date().getFullYear()`

### Animation:

- **Initial:** Opacity `0`
- **Animate:** Opacity `1`
- **Delay:** `0.3s` (آخر عنصر)
- **Duration:** `0.5s`

---

# 🎨 8. ملخص الألوان (COLORS SUMMARY)

## جدول الألوان الأساسية

| الاسم                  | HEX       | RGB                    | الاستخدام                           |
| ---------------------- | --------- | ---------------------- | ----------------------------------- |
| **Background**         | `#fdfcfa` | `rgb(253, 252, 250)`   | خلفية الموقع الرئيسية               |
| **Foreground**         | `#2c2c2c` | `rgb(44, 44, 44)`      | لون النص الأساسي                    |
| **Primary**            | `#1a4d7a` | `rgb(26, 77, 122)`     | الأزرق الأساسي - عناوين، أزرار، نشط |
| **Primary Foreground** | `#ffffff` | `rgb(255, 255, 255)`   | نص على الخلفية الزرقاء              |
| **Secondary**          | `#f5f1e8` | `rgb(245, 241, 232)`   | خلفية ثانوية، hover                 |
| **Accent**             | `#d4af37` | `rgb(212, 175, 55)`    | الذهبي - تفاصيل مميزة، borders      |
| **Card**               | `#ffffff` | `rgb(255, 255, 255)`   | خلفية الكروت                        |
| **Muted Foreground**   | `#6b7280` | `rgb(107, 114, 128)`   | نص ثانوي، تواريخ، أوصاف             |
| **Border**             | -         | `rgba(212,175,55,0.2)` | حدود الكروت والعناصر                |
| **Destructive**        | `#d4183d` | `rgb(212, 24, 61)`     | أحمر للحذف والتحذيرات               |
| **Input Background**   | `#f5f1e8` | `rgb(245, 241, 232)`   | خلفية حقول الإدخال                  |

---

## الألوان مع Opacity

| اللون      | Opacity | RGBA                       | الاستخدام                  |
| ---------- | ------- | -------------------------- | -------------------------- |
| **Black**  | 95%     | `rgba(0, 0, 0, 0.95)`      | Lightbox backdrop          |
| **Black**  | 70%     | `rgba(0, 0, 0, 0.7)`       | Hero gradient bottom       |
| **Black**  | 60%     | `rgba(0, 0, 0, 0.6)`       | Gallery hover overlay      |
| **Black**  | 50%     | `rgba(0, 0, 0, 0.5)`       | Hero gradient top          |
| **Black**  | 30%     | `rgba(0, 0, 0, 0.3)`       | Hero gradient middle       |
| **White**  | 90%     | `rgba(255, 255, 255, 0.9)` | Hero subtitle, footer text |
| **White**  | 80%     | `rgba(255, 255, 255, 0.8)` | Footer secondary text      |
| **White**  | 70%     | `rgba(255, 255, 255, 0.7)` | Lightbox date              |
| **White**  | 50%     | `rgba(255, 255, 255, 0.5)` | Lightbox counter           |
| **White**  | 20%     | `rgba(255, 255, 255, 0.2)` | Lightbox button hover      |
| **White**  | 10%     | `rgba(255, 255, 255, 0.1)` | Lightbox button default    |
| **Accent** | 20%     | `rgba(212, 175, 55, 0.2)`  | Borders default            |
| **Accent** | 40%     | `rgba(212, 175, 55, 0.4)`  | Input focus border         |

---

# 📏 9. ملخص المقاسات (SIZES SUMMARY)

## أحجام الخطوط (Font Sizes)

| Class         | Size       | Pixels | الاستخدام                  |
| ------------- | ---------- | ------ | -------------------------- |
| **text-xs**   | `0.75rem`  | `12px` | Labels, badges             |
| **text-sm**   | `0.875rem` | `14px` | Metadata, secondary text   |
| **text-base** | `1rem`     | `16px` | Body text, buttons, inputs |
| **text-lg**   | `1.125rem` | `18px` | Large body text            |
| **text-xl**   | `1.25rem`  | `20px` | Hero subtitle              |
| **text-2xl**  | `1.5rem`   | `24px` | Section headings (h2)      |
| **text-3xl**  | `1.875rem` | `30px` | -                          |
| **text-4xl**  | `2.25rem`  | `36px` | -                          |
| **text-5xl**  | `3rem`     | `48px` | -                          |

---

## المسافات (Spacing)

| Class     | Size      | Pixels | الاستخدام                |
| --------- | --------- | ------ | ------------------------ |
| **gap-1** | `0.25rem` | `4px`  | Nav links gap            |
| **gap-2** | `0.5rem`  | `8px`  | Button icon gap          |
| **gap-3** | `0.75rem` | `12px` | Footer contact items     |
| **gap-4** | `1rem`    | `16px` | General spacing          |
| **gap-6** | `1.5rem`  | `24px` | Card grids               |
| **gap-8** | `2rem`    | `32px` | Footer columns           |
| **mb-1**  | `0.25rem` | `4px`  | Tight spacing            |
| **mb-2**  | `0.5rem`  | `8px`  | Small margins            |
| **mb-3**  | `0.75rem` | `12px` | Gallery caption margin   |
| **mb-4**  | `1rem`    | `16px` | Hero title margin        |
| **mb-6**  | `1.5rem`  | `24px` | Section header margin    |
| **mb-8**  | `2rem`    | `32px` | Page header margin       |
| **mb-16** | `4rem`    | `64px` | Section bottom margin    |
| **mt-2**  | `0.5rem`  | `8px`  | Label-input gap          |
| **mt-4**  | `1rem`    | `16px` | Lightbox info margin     |
| **mt-6**  | `1.5rem`  | `24px` | Sunday badge margin      |
| **mt-20** | `5rem`    | `80px` | Footer top margin        |
| **px-4**  | `1rem`    | `16px` | Nav button padding       |
| **py-2**  | `0.5rem`  | `8px`  | Nav button padding       |
| **py-3**  | `0.75rem` | `12px` | Mobile nav padding       |
| **py-4**  | `1rem`    | `16px` | Mobile menu padding      |
| **py-6**  | `1.5rem`  | `24px` | Badge padding            |
| **py-12** | `3rem`    | `48px` | Footer padding           |
| **p-2**   | `0.5rem`  | `8px`  | Mobile button padding    |
| **p-3**   | `0.75rem` | `12px` | Icon container padding   |
| **p-4**   | `1rem`    | `16px` | Card padding, admin rows |
| **p-6**   | `1.5rem`  | `24px` | Card content padding     |

---

## أحجام العناصر (Element Sizes)

| Element                 | Size        | Pixels        |
| ----------------------- | ----------- | ------------- |
| **Navbar Height**       | `h-16`      | `64px`        |
| **Hero Height**         | `h-[500px]` | `500px`       |
| **Logo Icon**           | `w-10 h-10` | `40px × 40px` |
| **Church Icon**         | `w-6 h-6`   | `24px × 24px` |
| **Nav Icon**            | `w-6 h-6`   | `24px × 24px` |
| **Small Icon**          | `w-4 h-4`   | `16px × 16px` |
| **Tiny Icon**           | `w-3 h-3`   | `12px × 12px` |
| **Lock Icon Container** | `w-16 h-16` | `64px × 64px` |
| **Lock Icon**           | `w-8 h-8`   | `32px × 32px` |
| **Social Icon**         | `w-10 h-10` | `40px × 40px` |
| **Lightbox Button**     | `w-12 h-12` | `48px × 48px` |
| **Lightbox Icon**       | `w-6 h-6`   | `24px × 24px` |

---

## Border Radius

| Class            | Size      | Pixels | الاستخدام              |
| ---------------- | --------- | ------ | ---------------------- |
| **rounded-lg**   | `0.5rem`  | `8px`  | Buttons, inputs, cards |
| **rounded-xl**   | `0.75rem` | `12px` | Tabs, admin cards      |
| **rounded-2xl**  | `1rem`    | `16px` | Large cards, hero      |
| **rounded-full** | `9999px`  | Circle | Icons, badges, pills   |

---

## Max Widths (Containers)

| Class         | Size    | Pixels   | الاستخدام                     |
| ------------- | ------- | -------- | ----------------------------- |
| **max-w-sm**  | `24rem` | `384px`  | -                             |
| **max-w-md**  | `28rem` | `448px`  | Password dialog               |
| **max-w-2xl** | `42rem` | `672px`  | Hero subtitle, admin textarea |
| **max-w-4xl** | `56rem` | `896px`  | -                             |
| **max-w-6xl** | `72rem` | `1152px` | About, contact sections       |
| **max-w-7xl** | `80rem` | `1280px` | Main container, footer        |

---

# ⏱️ 10. توقيتات الحركات (ANIMATION TIMINGS)

## Transition Durations

| Element                    | Duration                  | Easing  | الاستخدام              |
| -------------------------- | ------------------------- | ------- | ---------------------- |
| **Navbar Slide In**        | `spring (stiffness: 100)` | spring  | Navbar entry animation |
| **Nav Links**              | `0.3s`                    | ease    | Hover transitions      |
| **Mobile Menu**            | `0.3s`                    | default | Open/close animation   |
| **Logo Hover**             | `0.6s`                    | default | 360° rotation          |
| **Hero Container**         | `0.8s`                    | default | Fade & scale in        |
| **Hero Title**             | `0.8s`                    | default | Slide up & fade        |
| **Hero Subtitle**          | `0.8s`                    | default | Slide up & fade        |
| **Sunday Badge**           | `0.5s`                    | default | Scale up & fade        |
| **Card Hover**             | `0.3s`                    | ease    | Lift & shadow          |
| **Card Entry**             | `0.5s`                    | default | Stagger fade in        |
| **Gallery Image Zoom**     | `0.5s`                    | ease    | Scale on hover         |
| **Gallery Overlay**        | `0.3s`                    | default | Fade in/out            |
| **Lightbox Backdrop**      | `0.3s`                    | default | Fade in/out            |
| **Lightbox Buttons**       | `instant`                 | -       | Opacity fade           |
| **Lightbox Image Slide**   | `spring (300, 30)`        | spring  | Horizontal slide       |
| **Lightbox Image Opacity** | `0.3s`                    | default | Fade during slide      |
| **Admin Row Entry**        | `instant`                 | -       | Fade & slide up        |
| **Footer Sections**        | `0.5s`                    | default | Stagger fade in        |
| **Button Hover**           | `0.3s`                    | ease    | All buttons            |
| **Link Hover**             | `instant`                 | -       | Color transitions      |

---

## Animation Delays

| Element              | Delay           | الملاحظات         |
| -------------------- | --------------- | ----------------- |
| **Logo**             | `0.2s`          | بعد تحميل الصفحة  |
| **Nav Link 1**       | `0s`            | -                 |
| **Nav Link 2**       | `0.1s`          | -                 |
| **Nav Link 3**       | `0.2s`          | -                 |
| **Nav Link 4**       | `0.3s`          | -                 |
| **Nav Link 5**       | `0.4s`          | -                 |
| **Nav Link 6**       | `0.5s`          | -                 |
| **Mobile Nav Link**  | `index × 0.1s`  | Staggered         |
| **Hero Title**       | `0.3s`          | -                 |
| **Hero Subtitle**    | `0.5s`          | -                 |
| **Sunday Badge**     | `0.7s`          | -                 |
| **Page Header**      | `0.2s`          | -                 |
| **Gallery Items**    | `0.05s × index` | Very fast stagger |
| **Lightbox Buttons** | `0.1s`          | -                 |
| **Lightbox Info**    | `0.2s`          | بعد ظهور الصورة   |
| **Footer Column 1**  | `0s`            | -                 |
| **Footer Column 2**  | `0.1s`          | -                 |
| **Footer Column 3**  | `0.2s`          | -                 |
| **Footer Copyright** | `0.3s`          | آخر عنصر          |

---

## Special Animation Values

### Spring Animations:

```tsx
// Navbar
type: "spring";
stiffness: 100;

// Lightbox Image Slide
type: "spring";
stiffness: 300;
damping: 30;
```

### Stagger Children:

```tsx
// Gallery Grid
staggerChildren: 0.05s

// Card Grids
implicit stagger through itemVariants
```

### Infinite Animations:

```tsx
// None in current implementation
// (كل الحركات تحدث مرة واحدة)
```

---

# 🎯 11. حالات Hover & Active (HOVER & ACTIVE STATES)

## جدول شامل لحالات التفاعل

| Element                 | Default                                  | Hover                                     | Active/Focus                        |
| ----------------------- | ---------------------------------------- | ----------------------------------------- | ----------------------------------- |
| **Nav Link (Inactive)** | text: foreground<br>bg: transparent      | bg: secondary<br>shadow: sm               | -                                   |
| **Nav Link (Active)**   | bg: primary<br>text: white<br>shadow: md | ثابت                                      | -                                   |
| **Mobile Menu Button**  | -                                        | bg: secondary                             | -                                   |
| **Logo Button**         | scale: 1                                 | scale: 1.05                               | scale: 0.95                         |
| **Logo Icon**           | rotate: 0                                | rotate: 360deg                            | -                                   |
| **View More Button**    | border: border<br>scale: 1               | shadow: lg<br>scale: 1.05                 | scale: 0.95                         |
| **News Card**           | shadow: sm<br>y: 0                       | shadow: xl<br>y: -8px                     | -                                   |
| **Mass Card**           | border-left: accent 4px<br>same as news  | border: blue-400/80<br>shadow: xl         | -                                   |
| **Gallery Item**        | scale: 1                                 | scale: 1.05                               | -                                   |
| **Gallery Image**       | scale: 1                                 | scale: 1.1                                | -                                   |
| **Gallery Overlay**     | opacity: 0                               | opacity: 1                                | -                                   |
| **Lightbox Button**     | bg: white/10                             | bg: white/20                              | -                                   |
| **Admin Row**           | bg: transparent                          | bg: secondary                             | -                                   |
| **Edit Button**         | border: border                           | border highlighted                        | -                                   |
| **Delete Button**       | text: destructive                        | highlighted                               | -                                   |
| **Form Input**          | border: border                           | -                                         | border: blue-400/60<br>outline: 2px |
| **Textarea**            | same as input                            | -                                         | same as input                       |
| **Primary Button**      | bg: primary                              | bg darker                                 | -                                   |
| **Outline Button**      | border: border<br>bg: transparent        | bg: secondary                             | -                                   |
| **Footer Social**       | bg: white/10<br>scale: 1<br>rotate: 0    | bg: accent<br>scale: 1.1<br>rotate: ±5deg | scale: 0.9                          |
| **Footer Link**         | text: white/90                           | text: accent                              | -                                   |
| **Phone Link**          | text: white/90                           | text: accent                              | -                                   |

---

## Shadow Transitions

| Element               | Default Shadow          | Hover Shadow          |
| --------------------- | ----------------------- | --------------------- |
| **View More Button**  | none                    | lg (0 10px 15px -3px) |
| **News Card**         | sm (0 1px 2px 0)        | xl (0 20px 25px -5px) |
| **Gallery Thumbnail** | md (0 4px 6px -1px)     | xl (0 20px 25px -5px) |
| **Lightbox Image**    | 2xl (0 25px 50px -12px) | ثابت                  |

---

## Transform Transitions

| Element              | Default Transform   | Hover Transform           |
| -------------------- | ------------------- | ------------------------- |
| **Logo Button**      | scale(1)            | scale(1.05)               |
| **Logo Icon**        | rotate(0)           | rotate(360deg)            |
| **View More Button** | scale(1)            | scale(1.05)               |
| **News Card**        | translateY(0)       | translateY(-8px)          |
| **Gallery Item**     | scale(1)            | scale(1.05)               |
| **Gallery Image**    | scale(1)            | scale(1.1)                |
| **Social Icon (FB)** | scale(1), rotate(0) | scale(1.1), rotate(5deg)  |
| **Social Icon (WA)** | scale(1), rotate(0) | scale(1.1), rotate(-5deg) |

---

# 📱 12. Responsive Breakpoints

## Mobile (< 640px)

### Navbar:

- Hamburger menu shown
- Desktop nav hidden
- Logo and menu button visible

### Hero:

- Height: 500px (ثابت)
- Padding: px-4 (16px)

### Typography:

- h1: Default size من globals.css
- h2: Default size
- text-xl: 20px (hero subtitle)

### Grids:

- News: 1 column
- Masses: 1 column
- Sermons: 1 column
- Services: 1 column
- Gallery: 1 column

### Admin:

- Tabs: 2 columns (grid-cols-2)
- Gallery admin: 2 columns

### Footer:

- 1 column (stack)

---

## Small (≥ 640px)

### Padding:

- Container: px-6 (24px)

### Typography:

- Tab labels: visible (hidden → inline)

### Grids:

- Gallery: 2 columns (sm:grid-cols-2)
- Gallery admin: still 2 columns

---

## Medium (≥ 768px)

### Navbar:

- Desktop menu shown (md:flex)
- Hamburger hidden (md:hidden)
- Full nav links visible

### Padding:

- Container: still px-6 (24px)

### Grids:

- News: 2 columns (md:grid-cols-2)
- Masses: 2 columns (md:grid-cols-2)
- Sermons: 2 columns (md:grid-cols-2)
- Services: 2 columns (md:grid-cols-2)
- Gallery: 3 columns (md:grid-cols-3)
- Gallery admin: 3 columns (md:grid-cols-3)

### Admin:

- Tabs: 5 columns (md:grid-cols-5)

### Dialog:

- Max width: 448px (sm:max-w-md)

### Footer:

- 3 columns (md:grid-cols-3)

---

## Large (≥ 1024px)

### Padding:

- Container: px-8 (32px)

### Grids:

- News: 3 columns (lg:grid-cols-3)
- Sermons: 3 columns (lg:grid-cols-3)
- Gallery: 4 columns (lg:grid-cols-4)
- Gallery admin: 4 columns (lg:grid-cols-4)

---

## Breakpoint Summary Table

| Element               | Mobile (<640px) | Small (≥640px) | Medium (≥768px) | Large (≥1024px) |
| --------------------- | --------------- | -------------- | --------------- | --------------- |
| **Container Padding** | 16px            | 24px           | 24px            | 32px            |
| **Navbar**            | Hamburger       | Hamburger      | Desktop         | Desktop         |
| **News Grid**         | 1 col           | 1 col          | 2 cols          | 3 cols          |
| **Masses Grid**       | 1 col           | 1 col          | 2 cols          | 2 cols          |
| **Sermons Grid**      | 1 col           | 1 col          | 2 cols          | 3 cols          |
| **Services Grid**     | 1 col           | 1 col          | 2 cols          | 2 cols          |
| **Gallery Grid**      | 1 col           | 2 cols         | 3 cols          | 4 cols          |
| **Admin Tabs**        | 2 cols          | 2 cols         | 5 cols          | 5 cols          |
| **Gallery Admin**     | 2 cols          | 2 cols         | 3 cols          | 4 cols          |
| **Footer**            | 1 col           | 1 col          | 3 cols          | 3 cols          |

---

# 🌐 13. RTL-Specific Details

## Text Direction

### Global:

```css
html {
  direction: rtl;
}

body {
  direction: rtl;
}
```

### Font:

```css
font-family: "Noto Kufi Arabic", sans-serif;
```

---

## Layout Mirroring

### Automatic Mirroring:

- **Flex Direction:** تلقائياً من اليمين لليسار
- **Padding/Margin:** `px-4` يطبق على اليمين واليسار بشكل صحيح
- **Text Align:** `text-right` تلقائي للنصوص العربية
- **Grid:** يبدأ من اليمين

### Manual Adjustments:

#### Navbar:

```tsx
// Logo على اليمين (الجهة الأولى في RTL)
// Desktop nav على اليسار
// Mobile button على اليسار
justify - between; // يعكس المواقع تلقائياً
```

#### Icons with Text:

```tsx
// الأيقونة تأتي بعد النص في الكود
<Button>
  {text}
  <Icon /> {/* يظهر على يسار النص في RTL */}
</Button>
```

#### Arrow Directions:

- **ArrowLeft:** يستخدم للرجوع/السابق (في RTL يشير لليمين منطقياً)
- **ChevronLeft:** Next في lightbox (يشير لليسار = للأمام في RTL)
- **ChevronRight:** Previous في lightbox (يشير لليمين = للخلف في RTL)

---

## Border Adjustments

### Border Left → Border Right:

```tsx
// في الكود:
border-l-4 border-l-accent

// في RTL يصبح تلقائياً:
// border على اليمين (right)
```

---

## Position Adjustments

### Absolute Positioning:

```tsx
// Lightbox buttons:
// Close button: left-4 → يظهر على اليسار (صحيح في RTL)
// Previous: right-4 → يظهر على اليمين (صحيح في RTL)
// Next: left-4 → يظهر على اليسار (صحيح في RTL)
```

---

## Slide Animations

### Lightbox Slides:

```tsx
// في RTL:
// Previous (السابق) يأتي من اليمين (x: 100)
// Next (التالي) يأتي من اليسار (x: -100)
// عكس LTR تماماً
```

---

# 📊 14. Component Hierarchy

## Page Structure

```
App
├── Router
    ├── AuthProvider
    └── DataProvider
        ├── Navbar
        │   ├── Logo Button
        │   │   └── Password Dialog
        │   ├── Desktop Nav Links (6)
        │   └── Mobile Menu
        │       └── Mobile Nav Links (6)
        │
        ├── Main Content
        │   ├── HomePage
        │   │   ├── Hero Section
        │   │   │   ├── Background Image
        │   │   │   ├── Gradient Overlay
        │   │   │   └── Content
        │   │   │       ├── Title
        │   │   │       ├── Subtitle
        │   │   │       └── Sunday Badge
        │   │   │
        │   │   ├── News Section
        │   │   │   ├── Section Header
        │   │   │   │   ├── Title
        │   │   │   │   └── View More Button
        │   │   │   └── News Cards Grid (3 items)
        │   │   │
        │   │   ├── Masses Section
        │   │   │   └── Mass Cards Grid (2 items)
        │   │   │
        │   ���   ├── Sermons Section
        │   │   │   └── Sermon Cards Grid (3 items)
        │   │   │
        │   │   ├── Gallery Section
        │   │   │   └── Gallery Thumbnails Grid (4 items)
        │   │   │
        │   │   └── Services Section
        │   │       └── Service Cards Grid (2 items)
        │   │
        │   ├── NewsPage
        │   │   ├── Back to Home Button
        │   │   ├── Page Header
        │   │   └── News Cards Grid (all items)
        │   │
        │   ├── MassesPage
        │   │   └── Mass Cards Grid (all items)
        │   │
        │   ├── SermonsPage
        │   │   └── Sermon Cards Grid (all items)
        │   │
        │   ├── GalleryPage
        │   │   ├── Gallery Grid (all items)
        │   │   └── Gallery Lightbox
        │   │       ├── Backdrop
        │   │       ├── Close Button
        │   │       ├── Previous Button
        │   │       ├── Next Button
        │   │       ├── Image Display
        │   │       └── Image Info
        │   │
        │   ├── ServicesPage
        │   │   └── Service Cards Grid (all items)
        │   │
        │   └── AdminPage
        │       ├── Admin Header
        │       │   ├── Title & Description
        │       │   └── Logout Button
        │       │
        │       └── Tabs
        │           ├── TabsList (5 tabs)
        │           ├── News Tab
        │           │   ├── Admin Card
        │           │   │   ├── Header (Title + Add Button)
        │           │   │   └── Item Rows
        │           │   └── Edit/Create Dialog
        │           │       └── Form
        │           │
        │           ├── Masses Tab
        │           ├── Sermons Tab
        │           ├── Gallery Tab (Grid Layout)
        │           └── Services Tab
        │
        └── Footer
            ├── Footer Grid (3 columns)
            │   ├── Church Info
            │   │   ├── Icon + Name
            │   │   └── Description
            │   │
            │   ├── Contact Info
            │   │   ├── Address
            │   │   └── Phone
            │   │
            │   └── Social & Links
            │       ├── Social Icons (2)
            │       └── Quick Links (3)
            │
            └── Copyright Section
```

---

# ✅ توثيق مكتمل

## ما يتضمنه هذا التوثيق:

- ✅ كل الألوان بالـ HEX و RGB و RGBA
- ✅ كل الأحجام بالـ rem و pixels
- ✅ كل className مذكور بالتفصيل
- ✅ كل حالات الـ hover والـ active
- ✅ كل الـ transitions مع المدة الزمنية
- ✅ كل الـ animations مع التفاصيل
- ✅ كل الـ spacing والـ padding بالأرقام
- ✅ كل الـ borders والـ shadows
- ✅ كل الـ responsive breakpoints
- ✅ كل تفاصيل RTL
- ✅ Component hierarchy كاملة
- ✅ Keyboard shortcuts
- ✅ Swipe gestures
- ✅ Opacity values
- ✅ جداول مقارنة شاملة

**إجمالي العناصر الموثقة:** كل element ظاهر على الشاشة  
**آخر تحديث:** 15 نوفمبر 2025  
**اللغة:** عربي كامل مع قيم تقنية بالإنجليزية  
**التنسيق:** Markdown مع جداول وأكواد

---

**END OF DOCUMENTATION**
