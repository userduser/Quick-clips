# Button CSS Classes Guide

## New Simplified Button Classes

Instead of using long Tailwind strings, you can now use these clean CSS classes:

### 🟠 `.btn-primary` - Orange Gradient Buttons
**Use for**: Primary actions, CTAs, signup buttons
```jsx
<Button className="btn-primary">Get Started</Button>
```
**Includes**:
- Orange gradient background
- Black text
- Glow shadow effects
- Hover shadow transitions
- Gradient border
- Float animation

### ⚪ `.btn-secondary` - Clear/Outline Buttons  
**Use for**: Secondary actions, "See more" buttons
```jsx
<Button variant="outline" className="btn-secondary">Learn More</Button>
```
**Includes**:
- Glass card effect
- Border styling
- Hover glow effects
- Smooth transitions

### 👻 `.btn-ghost` - Transparent Buttons
**Use for**: Navigation links, subtle actions
```jsx
<Button variant="ghost" className="btn-ghost">Sign In</Button>
```
**Includes**:
- Transparent background
- Hover orange glow
- Smooth transitions

## Before vs After

### Before (Long Tailwind):
```jsx
<Button className="bg-gradient-orange text-black shadow-glow hover:shadow-card transition-all duration-300 gradient-border animate-float">
  Get Started
</Button>
```

### After (Clean CSS):
```jsx
<Button className="btn-primary">
  Get Started  
</Button>
```

## Updated Files

- ✅ `/app/src/styles/globals.css` - Added button classes
- ✅ `/app/src/app/page.tsx` - Updated all homepage buttons
- ✅ `/app/src/components/nav-header.tsx` - Updated navigation buttons

## Usage Examples

```jsx
// Hero section CTA
<Button className="btn-primary" size="lg">
  Start Creating Clips
</Button>

// Secondary action
<Button variant="outline" className="btn-secondary" size="lg">
  See How It Works
</Button>

// Navigation
<Button variant="ghost" className="btn-ghost">
  Sign In
</Button>

// Pricing cards
<Button className={plan.isPopular ? "btn-primary" : "btn-secondary"}>
  {plan.buttonText}
</Button>
```

This makes the code much cleaner and easier to maintain!