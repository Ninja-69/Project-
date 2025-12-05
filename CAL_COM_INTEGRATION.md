# 📅 CAL.COM INTEGRATION GUIDE

Step-by-step guide to integrate Cal.com booking widget into your booking page.

---

## 🚀 QUICK SETUP (3 steps)

### STEP 1: Add Cal.com Script to `index.html`

Open `c:\Users\Administrator\Desktop\iw\index.html` and add this script before the closing `</body>` tag:

```html
<!-- Cal.com Embed Script -->
<script type="text/javascript">
  (function (C, A, L) {
    let p = function (a, ar) {
      a.q.push(ar);
    };
    let d = C.document;
    C.Cal =
      C.Cal ||
      function () {
        let cal = C.Cal;
        let ar = arguments;
        if (!cal.loaded) {
          cal.ns = {};
          cal.q = cal.q || [];
          d.head.appendChild(d.createElement("script")).src = A;
          cal.loaded = true;
        }
        if (ar[0] === L) {
          const api = function () {
            p(api, arguments);
          };
          const namespace = ar[1];
          api.q = api.q || [];
          typeof namespace === "string"
            ? (cal.ns[namespace] = api) && p(api, ar)
            : p(cal, ar);
          return;
        }
        p(cal, ar);
      };
  })(window, "https://app.cal.com/embed/embed.js", "init");

  Cal("init", { origin: "https://cal.com" });
</script>
```

---

### STEP 2: Get Your Cal.com Event Link

1. Go to https://cal.com and sign up/log in
2. Create a new event type:
   - **Event name**: "Strategy Call" or "AI Automation Strategy Session"
   - **Duration**: 20 minutes
   - **Description**: Copy from `BOOKING_COPY_ASSETS.md`
3. Go to **Event Type Settings** → **Advanced** → **Custom Questions**
4. Add these custom questions:

   **Question 1:**
   - **Type**: Long text
   - **Label**: "What's your #1 bottleneck right now?"
   - **Placeholder**: "E.g., 'Can't scale outreach without hiring' or 'Low reply rates on cold email'"
   - **Required**: Yes

   **Question 2:**
   - **Type**: Long text
   - **Label**: "What have you already tried to fix it?"
   - **Placeholder**: "E.g., 'Hired a VA,' 'Tried Instantly,' 'Built Zapier workflows,' or 'Nothing yet'"
   - **Required**: Yes

5. Copy your event link (e.g., `your-username/20min` or `your-username/strategy-call`)

---

### STEP 3: Replace Widget Code in `Booking.tsx`

In `c:\Users\Administrator\Desktop\iw\components\Booking.tsx`, find this section (around line 442):

```tsx
{/* Cal.com Embed */}
<div className="w-full min-h-[700px] p-8">
  {/* Replace this with your actual Cal.com embed code */}
  <div className="w-full h-full flex items-center justify-center text-center">
    ...PLACEHOLDER CODE...
  </div>
</div>
```

**Replace with:**

```tsx
{/* Cal.com Embed */}
<div className="w-full min-h-[700px]">
  <div 
    data-cal-link="YOUR-USERNAME/YOUR-EVENT-SLUG"
    data-cal-config='{"layout":"month_view","theme":"dark"}'
    style={{ width: "100%", height: "100%", overflow: "auto" }}
  />
</div>
```

**Example with real data:**
```tsx
<div 
  data-cal-link="john-doe/strategy-call"
  data-cal-config='{"layout":"month_view","theme":"dark"}'
  style={{ width: "100%", height: "100%", overflow: "auto" }}
/>
```

---

## 🎨 CUSTOMIZATION OPTIONS

### Theme Configuration

You can customize the Cal.com widget appearance:

```tsx
data-cal-config='{
  "layout": "month_view",
  "theme": "dark",
  "styles": {
    "branding": {
      "brandColor": "#ea580c"
    }
  }
}'
```

Available options:
- **layout**: `"month_view"`, `"week_view"`, `"column_view"`
- **theme**: `"dark"`, `"light"`, `"auto"`
- **branding.brandColor**: Your primary color (use `#ea580c` for orange)

---

### Pre-fill User Data (Optional)

If you want to pre-fill name/email from a form:

```tsx
data-cal-config='{
  "name": "John Doe",
  "email": "john@example.com",
  "layout": "month_view",
  "theme": "dark"
}'
```

---

## 📧 EMAIL REMINDERS SETUP

### In Cal.com Dashboard:

1. Go to **Settings** → **Email Notifications**
2. Enable these notifications:
   - ✅ **Booking Confirmation** (to booker)
   - ✅ **Reminder Email** (24 hours before)
   - ✅ **Reminder Email** (1 hour before)

3. Customize email templates using copy from `BOOKING_COPY_ASSETS.md`:
   - **Confirmation Email**: Use template from "CONFIRMATION EMAIL (Immediate)"
   - **24hr Reminder**: Use "REMINDER EMAIL (24 hours before)"
   - **1hr Reminder**: Use "REMINDER EMAIL (1 hour before)"

---

## 🔧 TROUBLESHOOTING

### Widget Not Showing?

1. **Check console for errors**: Open DevTools (F12) → Console
2. **Verify script is loaded**: Look for `embed.js` in Network tab
3. **Check your event link**: Make sure it matches your Cal.com URL exactly
4. **Try inline initialization**:

```tsx
useEffect(() => {
  if (typeof window !== 'undefined' && window.Cal) {
    window.Cal("inline", {
      elementOrSelector: "#cal-booking-widget",
      calLink: "YOUR-USERNAME/YOUR-EVENT-SLUG",
      config: {
        layout: "month_view",
        theme: "dark"
      }
    });
  }
}, []);

// Then in JSX:
<div id="cal-booking-widget" style={{ width: "100%", height: "700px" }} />
```

---

### Widget Too Small on Mobile?

Add this CSS to `index.css`:

```css
[data-cal-link] iframe {
  min-height: 700px !important;
}

@media (max-width: 768px) {
  [data-cal-link] iframe {
    min-height: 900px !important;
  }
}
```

---

### Want Custom Styling?

Cal.com allows CSS customization. Add to your `index.css`:

```css
/* Cal.com Widget Overrides */
.cal-embed {
  border-radius: 1rem;
  overflow: hidden;
}

.cal-embed iframe {
  border: none;
}
```

---

## 🔗 ALTERNATIVE: Use Cal.com Inline (Advanced)

If you want more control, use the inline initialization:

**Add to `Booking.tsx`:**

```tsx
import { useEffect } from 'react';

export const Booking: React.FC<BookingProps> = ({ onBack }) => {
  useEffect(() => {
    // Initialize Cal.com when component mounts
    if (typeof window !== 'undefined' && window.Cal) {
      window.Cal("inline", {
        elementOrSelector: "#my-cal-inline",
        calLink: "YOUR-USERNAME/20min",
        layout: "month_view",
        config: {
          theme: "dark",
          styles: {
            branding: {
              brandColor: "#ea580c"
            }
          }
        }
      });
    }
  }, []);

  return (
    // ... rest of component
    <div id="my-cal-inline" style={{ width: "100%", height: "700px" }} />
  );
};
```

---

## 📊 TRACKING & ANALYTICS

### Track Bookings in Google Analytics

Add this to Cal.com webhook settings:

1. Go to **Settings** → **Developer** → **Webhooks**
2. Add webhook URL (if you have analytics endpoint)
3. Or use Cal.com native integrations:
   - Google Analytics
   - Facebook Pixel
   - Custom tracking scripts

---

## 🎯 QUICK CHECKLIST

Before going live, verify:

- [ ] Cal.com script added to `index.html`
- [ ] Event type created with 20-minute duration
- [ ] Custom questions added (bottleneck + what you've tried)
- [ ] Email reminders enabled (confirmation + 24hr + 1hr)
- [ ] Email templates customized with your copy
- [ ] Widget code updated in `Booking.tsx` with your event link
- [ ] Test booking end-to-end
- [ ] Verify email notifications arrive
- [ ] Check mobile responsiveness
- [ ] Replace `hello@youragency.com` with your real email

---

## 📝 NOTES

- Cal.com free tier: 1 event type, unlimited bookings
- Paid tier unlocks: custom branding, more event types, workflows
- If you need round-robin scheduling (multiple team members), upgrade to Teams plan

---

**Last Updated:** 2025-12-05  
**Cal.com Version:** Latest (Embed API v2)
