# CSS & Tailwind Cheatsheet

## FLEXBOX - Temel

| Ne Yapmak İstiyorsun | CSS | Tailwind |
|----------------------|-----|----------|
| Flex container yap | `display: flex` | `flex` |
| Yan yana diz (varsayılan) | `flex-direction: row` | `flex-row` |
| Alt alta diz | `flex-direction: column` | `flex-col` |
| Ters sırala (sağdan sola) | `flex-direction: row-reverse` | `flex-row-reverse` |
| Ters sırala (aşağıdan yukarı) | `flex-direction: column-reverse` | `flex-col-reverse` |

---

## FLEXBOX - Yatay Hizalama (justify-content)

| Ne Yapmak İstiyorsun | CSS | Tailwind |
|----------------------|-----|----------|
| Sola yasla | `justify-content: flex-start` | `justify-start` |
| Ortala | `justify-content: center` | `justify-center` |
| Sağa yasla | `justify-content: flex-end` | `justify-end` |
| Aralarına boşluk koy | `justify-content: space-between` | `justify-between` |
| Eşit boşluk dağıt | `justify-content: space-around` | `justify-around` |
| Tam eşit boşluk | `justify-content: space-evenly` | `justify-evenly` |

---

## FLEXBOX - Dikey Hizalama (align-items)

| Ne Yapmak İstiyorsun | CSS | Tailwind |
|----------------------|-----|----------|
| Yukarı yasla | `align-items: flex-start` | `items-start` |
| Ortala | `align-items: center` | `items-center` |
| Aşağı yasla | `align-items: flex-end` | `items-end` |
| Uzat (tam yükseklik) | `align-items: stretch` | `items-stretch` |

---

## FLEXBOX - Gap (Aralarındaki Boşluk)

| Ne Yapmak İstiyorsun | CSS | Tailwind |
|----------------------|-----|----------|
| 4px boşluk | `gap: 4px` | `gap-1` |
| 8px boşluk | `gap: 8px` | `gap-2` |
| 16px boşluk | `gap: 16px` | `gap-4` |
| 24px boşluk | `gap: 24px` | `gap-6` |
| 32px boşluk | `gap: 32px` | `gap-8` |

---

## FLEXBOX - Sarmalama (Wrap)

| Ne Yapmak İstiyorsun | CSS | Tailwind |
|----------------------|-----|----------|
| Tek satırda kalsın | `flex-wrap: nowrap` | `flex-nowrap` |
| Alt satıra geç | `flex-wrap: wrap` | `flex-wrap` |

---

## PADDING (İç Boşluk)

| Ne Yapmak İstiyorsun | CSS | Tailwind |
|----------------------|-----|----------|
| Her yönden 4px | `padding: 4px` | `p-1` |
| Her yönden 8px | `padding: 8px` | `p-2` |
| Her yönden 16px | `padding: 16px` | `p-4` |
| Her yönden 32px | `padding: 32px` | `p-8` |
| Sadece üst | `padding-top: 16px` | `pt-4` |
| Sadece alt | `padding-bottom: 16px` | `pb-4` |
| Sadece sol | `padding-left: 16px` | `pl-4` |
| Sadece sağ | `padding-right: 16px` | `pr-4` |
| Yatay (sol-sağ) | `padding: 0 16px` | `px-4` |
| Dikey (üst-alt) | `padding: 16px 0` | `py-4` |

---

## MARGIN (Dış Boşluk)

| Ne Yapmak İstiyorsun | CSS | Tailwind |
|----------------------|-----|----------|
| Her yönden 4px | `margin: 4px` | `m-1` |
| Her yönden 8px | `margin: 8px` | `m-2` |
| Her yönden 16px | `margin: 16px` | `m-4` |
| Sadece üst | `margin-top: 16px` | `mt-4` |
| Sadece alt | `margin-bottom: 16px` | `mb-4` |
| Sadece sol | `margin-left: 16px` | `ml-4` |
| Sadece sağ | `margin-right: 16px` | `mr-4` |
| Yatay (sol-sağ) | `margin: 0 16px` | `mx-4` |
| Dikey (üst-alt) | `margin: 16px 0` | `my-4` |
| Otomatik ortala | `margin: 0 auto` | `mx-auto` |

---

## BOYUTLAR (Width & Height)

| Ne Yapmak İstiyorsun | CSS | Tailwind |
|----------------------|-----|----------|
| Tam genişlik | `width: 100%` | `w-full` |
| Ekran genişliği | `width: 100vw` | `w-screen` |
| Sabit genişlik 64px | `width: 64px` | `w-16` |
| Sabit genişlik 256px | `width: 256px` | `w-64` |
| Tam yükseklik | `height: 100%` | `h-full` |
| Ekran yüksekliği | `height: 100vh` | `h-screen` |
| Minimum ekran yüksekliği | `min-height: 100vh` | `min-h-screen` |

---

## YAZI (Typography)

| Ne Yapmak İstiyorsun | CSS | Tailwind |
|----------------------|-----|----------|
| Küçük yazı | `font-size: 14px` | `text-sm` |
| Normal yazı | `font-size: 16px` | `text-base` |
| Büyük yazı | `font-size: 18px` | `text-lg` |
| Çok büyük yazı | `font-size: 24px` | `text-2xl` |
| Dev yazı | `font-size: 36px` | `text-4xl` |
| Kalın | `font-weight: bold` | `font-bold` |
| Yarı kalın | `font-weight: 600` | `font-semibold` |
| Normal kalınlık | `font-weight: 400` | `font-normal` |
| Sola yasla | `text-align: left` | `text-left` |
| Ortala | `text-align: center` | `text-center` |
| Sağa yasla | `text-align: right` | `text-right` |

---

## RENKLER

| Ne Yapmak İstiyorsun | CSS | Tailwind |
|----------------------|-----|----------|
| Beyaz arka plan | `background: white` | `bg-white` |
| Siyah arka plan | `background: black` | `bg-black` |
| Gri arka plan | `background: #6b7280` | `bg-gray-500` |
| Mavi arka plan | `background: #3b82f6` | `bg-blue-500` |
| Yeşil arka plan | `background: #10b981` | `bg-emerald-500` |
| Kırmızı arka plan | `background: #ef4444` | `bg-red-500` |
| Beyaz yazı | `color: white` | `text-white` |
| Siyah yazı | `color: black` | `text-black` |
| Gri yazı | `color: #6b7280` | `text-gray-500` |

---

## BORDER (Kenarlık)

| Ne Yapmak İstiyorsun | CSS | Tailwind |
|----------------------|-----|----------|
| İnce kenarlık | `border: 1px solid` | `border` |
| Kalın kenarlık | `border: 2px solid` | `border-2` |
| Gri kenarlık | `border-color: gray` | `border-gray-300` |
| Yuvarlak köşe (az) | `border-radius: 4px` | `rounded` |
| Yuvarlak köşe (orta) | `border-radius: 8px` | `rounded-lg` |
| Yuvarlak köşe (çok) | `border-radius: 16px` | `rounded-2xl` |
| Tam yuvarlak | `border-radius: 9999px` | `rounded-full` |

---

## GÖLGE (Shadow)

| Ne Yapmak İstiyorsun | CSS | Tailwind |
|----------------------|-----|----------|
| Hafif gölge | `box-shadow: ...` | `shadow-sm` |
| Normal gölge | `box-shadow: ...` | `shadow` |
| Orta gölge | `box-shadow: ...` | `shadow-md` |
| Büyük gölge | `box-shadow: ...` | `shadow-lg` |
| Çok büyük gölge | `box-shadow: ...` | `shadow-xl` |

---

## HOVER & GEÇİŞ

| Ne Yapmak İstiyorsun | CSS | Tailwind |
|----------------------|-----|----------|
| Hover'da renk değiş | `:hover { background: blue }` | `hover:bg-blue-600` |
| Hover'da büyü | `:hover { transform: scale(1.05) }` | `hover:scale-105` |
| Geçiş animasyonu | `transition: all 0.3s` | `transition-all` |
| Hızlı geçiş | `transition-duration: 150ms` | `duration-150` |
| Yavaş geçiş | `transition-duration: 500ms` | `duration-500` |

---

## POSITION (Konumlandırma)

| Ne Yapmak İstiyorsun | CSS | Tailwind |
|----------------------|-----|----------|
| Relative | `position: relative` | `relative` |
| Absolute | `position: absolute` | `absolute` |
| Fixed | `position: fixed` | `fixed` |
| Sticky | `position: sticky` | `sticky` |
| Üste yapış | `top: 0` | `top-0` |
| Sola yapış | `left: 0` | `left-0` |
| Sağa yapış | `right: 0` | `right-0` |
| Alta yapış | `bottom: 0` | `bottom-0` |

---

## RESPONSIVE (Ekran Boyutuna Göre)

| Ekran | Prefix | Min Genişlik |
|-------|--------|--------------|
| Mobil (varsayılan) | - | 0px |
| Tablet | `sm:` | 640px |
| Küçük laptop | `md:` | 768px |
| Laptop | `lg:` | 1024px |
| Masaüstü | `xl:` | 1280px |

**Örnek:**
```html
<div class="flex-col md:flex-row">
  <!-- Mobilde alt alta, tablette yan yana -->
</div>

<div class="text-sm md:text-base lg:text-lg">
  <!-- Ekran büyüdükçe yazı büyür -->
</div>
```

---

## SIK KULLANILAN KOMBİNASYONLAR

### Tam Ortala (Yatay + Dikey)
```html
<div class="flex items-center justify-center h-screen">
  Ortadayım
</div>
```

### Navbar (Logo solda, linkler sağda)
```html
<nav class="flex items-center justify-between p-4">
  <img src="logo.png" />
  <div class="flex gap-4">
    <a href="#">Link 1</a>
    <a href="#">Link 2</a>
  </div>
</nav>
```

### Kart
```html
<div class="bg-white rounded-lg shadow-md p-6">
  <h2 class="text-xl font-bold mb-2">Başlık</h2>
  <p class="text-gray-600">Açıklama</p>
</div>
```

### Buton
```html
<button class="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded transition-all">
  Tıkla
</button>
```

### Grid (3 Sütun)
```html
<div class="grid grid-cols-1 md:grid-cols-3 gap-4">
  <div>1</div>
  <div>2</div>
  <div>3</div>
</div>
```

---

## TAILWIND SAYILARI

| Sayı | Değer |
|------|-------|
| 1 | 4px (0.25rem) |
| 2 | 8px (0.5rem) |
| 3 | 12px (0.75rem) |
| 4 | 16px (1rem) |
| 5 | 20px (1.25rem) |
| 6 | 24px (1.5rem) |
| 8 | 32px (2rem) |
| 10 | 40px (2.5rem) |
| 12 | 48px (3rem) |
| 16 | 64px (4rem) |
| 20 | 80px (5rem) |
| 24 | 96px (6rem) |

---

## HIZLI İPUÇLARI

1. **Flexbox:** Yan yana = `flex`, alt alta = `flex flex-col`
2. **Ortala:** `flex items-center justify-center`
3. **Boşluk:** Aralarına `gap-4`, içine `p-4`, dışına `m-4`
4. **Responsive:** Önce mobil yaz, sonra `md:` ile büyük ekran ekle
5. **Hover:** `hover:` prefix'i ekle → `hover:bg-blue-600`
