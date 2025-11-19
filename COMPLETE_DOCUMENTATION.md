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
