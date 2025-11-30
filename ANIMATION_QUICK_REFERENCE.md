# 🎨 Quick Animation Reference Guide

## 🚀 Reveal Component - Effect Cheat Sheet

### **Instant Load (Hero Section)**
```tsx
<Reveal effect="scale-in" delay={0}>
  {/* Appears immediately on page load */}
</Reveal>
```

### **Smooth Entrances**
```tsx
// Gentle fade up
<Reveal effect="fade-up" delay={0.2}>

// Fade down
<Reveal effect="fade-down" delay={0.2}>

// Simple fade
<Reveal effect="fade-in" delay={0.2}>

// Blur + scale
<Reveal effect="blur-in" delay={0.2}>
```

### **Directional Slides**
```tsx
// From left
<Reveal effect="slide-left" delay={0.2}>

// From right
<Reveal effect="slide-right" delay={0.2}>

// From top
<Reveal effect="slide-down" delay={0.2}>

// From bottom
<Reveal effect="slide-up" delay={0.2}>
```

### **Scale Effects**
```tsx
// Smooth zoom
<Reveal effect="zoom-in" delay={0.2}>

// Dramatic scale
<Reveal effect="scale-in" delay={0.2}>
```

### **Rotation Effects**
```tsx
// Rotate + scale
<Reveal effect="rotate-in" delay={0.2}>

// Swing entrance
<Reveal effect="swing-in" delay={0.2}>
```

### **3D Effects**
```tsx
// Y-axis flip
<Reveal effect="flip-in" delay={0.2}>

// X-axis flip with perspective
<Reveal effect="3d-flip" delay={0.2}>
```

### **Physics-Based**
```tsx
// Bouncy entrance
<Reveal effect="bounce-in" delay={0.2}>

// Spring effect
<Reveal effect="spring" delay={0.2}>

// Elastic bounce
<Reveal effect="elastic" delay={0.2}>

// Magnetic pull
<Reveal effect="magnetic" delay={0.2}>
```

---

## 🎯 Tailwind Animation Classes

### **Continuous Loops**
```tsx
className="animate-glow-pulse"      // Pulsing glow (2s)
className="animate-shimmer"         // Horizontal shine (2.5s)
className="animate-wave"            // Gentle wave (3s)
className="animate-tilt"            // Subtle rotation (10s)
className="animate-bounce-subtle"   // Soft bounce (2s)
className="animate-scale-pulse"     // Scale pulse (2s)
className="animate-rotate-slow"     // Full rotation (20s)
className="animate-gradient-shift"  // Gradient animation (3s)
```

### **One-Time Animations**
```tsx
className="animate-card-hover"      // Card lift (0.3s)
className="animate-text-reveal"     // Text appears (0.6s)
className="animate-border-draw"     // SVG border (1.5s)
className="animate-slide-in-bounce" // Bouncy slide (0.6s)
```

---

## 💡 Common Patterns

### **Staggered Cards**
```tsx
{items.map((item, i) => (
  <Reveal effect="spring" delay={0.2 + (i * 0.1)} key={i}>
    <Card />
  </Reveal>
))}
```

### **Hover State with Micro-Interactions**
```tsx
const [hovered, setHovered] = useState(false);

<div
  onMouseEnter={() => setHovered(true)}
  onMouseLeave={() => setHovered(false)}
  className={`
    transition-all duration-500
    ${hovered ? 'scale-105 -translate-y-3 shadow-2xl' : ''}
  `}
>
  {hovered && <div className="animate-shimmer">✨</div>}
</div>
```

### **Section Headers**
```tsx
<Reveal effect="bounce-in" delay={0.1}>
  <Badge />
</Reveal>

<Reveal effect="magnetic" delay={0.2} width="100%">
  <h2>Heading</h2>
</Reveal>

<Reveal effect="fade-up" delay={0.3}>
  <p>Description</p>
</Reveal>
```

---

## 🎨 Recommended Combinations

### **Premium Card**
- Reveal: `spring`
- Hover: `scale-105 -translate-y-4`
- Shadow: `shadow-2xl`
- Glow: `shadow-[0_0_40px_rgba(255,107,0,0.2)]`

### **Hero Element**
- Reveal: `scale-in` or `blur-in`
- Delay: `0` to `0.2`
- Duration: `0.6` to `0.8`

### **Feature Card**
- Reveal: `spring`
- Icon: `animate-glow-pulse` on hover
- Border: Animate to orange on hover
- Particles: `animate-float-slow`

### **Pricing Card**
- Reveal: `spring`
- Transform: `translateY(-16px) scale(1.02)` on hover
- Shadow: Enhanced with orange glow
- Transition: `duration-500`

---

## ⚡ Performance Tips

1. **Use `will-change` sparingly** - Already built into Reveal
2. **Prefer transforms over position** - GPU accelerated
3. **Keep durations reasonable** - 300ms-700ms for most
4. **Stagger delays** - 0.1s increments
5. **Limit simultaneous animations** - Max 3-4 at once

---

## 🎯 Effect Selection Guide

| Use Case | Recommended Effect |
|----------|-------------------|
| Hero badge | `scale-in` |
| Section heading | `magnetic` or `3d-flip` |
| Badge/pill | `bounce-in` |
| Card entrance | `spring` |
| Text content | `fade-up` |
| Side panel | `slide-right` |
| Modal | `zoom-in` |
| Dramatic reveal | `flip-in` or `3d-flip` |
| Playful element | `elastic` or `bounce-in` |
| Smooth entrance | `blur-in` |

---

## 🔥 Pro Tips

1. **Hero loads instantly** - Use `delay={0}` for above-the-fold content
2. **Stagger for flow** - Increment delays by 0.1s
3. **Match to brand** - Spring/elastic for playful, magnetic for premium
4. **Test on scroll** - Ensure animations trigger at right viewport position
5. **Mobile-first** - Reduce complexity on smaller screens

---

**Quick Copy-Paste Templates:**

```tsx
// Premium card with all effects
<Reveal effect="spring" delay={0.2} width="100%">
  <div 
    className="group relative p-8 rounded-2xl bg-surface-light border border-white/5 
               hover:border-orange-500/30 hover:-translate-y-4 hover:shadow-2xl 
               transition-all duration-500 cursor-pointer"
    onMouseEnter={() => setHovered(true)}
    onMouseLeave={() => setHovered(false)}
  >
    {/* Content */}
  </div>
</Reveal>

// Section header pattern
<Reveal effect="bounce-in" delay={0.1}>
  <Badge>Label</Badge>
</Reveal>
<Reveal effect="magnetic" delay={0.2} width="100%">
  <h2 className="text-6xl font-bold bg-gradient-to-b from-white to-white/40 
                 bg-clip-text text-transparent">
    Heading
  </h2>
</Reveal>
<Reveal effect="fade-up" delay={0.3}>
  <p className="text-gray-400">Description</p>
</Reveal>
```

---

**Happy Animating! 🎉**
