# Prompt 1

# Phase 1: Project Foundation

Act as a senior frontend developer. We are building a Montessori Pre-Nursery Class Management Portal for one individual teacher and the parents of children aged 3–4 years.

For this phase, ONLY set up the project foundation. Do not build the website UI or implement features yet.

## Requirements

1. Inspect the existing project directory before making changes.
2. If this is a new project, create:
   - `index.html`
   - `style.css`
   - `script.js`
3. Preserve existing useful files and work. Do not overwrite files unnecessarily.
4. Connect the CSS and JavaScript files correctly.
5. Use HTML5, CSS3, and vanilla JavaScript only. No React, Vue, or other frontend frameworks.
6. Create an accessible HTML document with a page title, viewport meta tag, and semantic structure.
7. Add empty section containers with these IDs:
   - `navbar`
   - `hero`
   - `classroom-overview`
   - `classwork-homework`
   - `attendance`
   - `activities-gallery`
   - `announcements`
   - `weekly-plan`
   - `learning-resources`
   - `parent-communication`
   - `ai-assistant`
   - `faq`
   - `footer`
8. Add a separate placeholder for the future teacher dashboard.
9. Keep the initial CSS minimal. Do not create the design system yet.
10. Do not add sample content, illustrations, authentication, backend integration, language switching, or functional features in this phase.

## Verification

- Verify all required files exist and are connected.
- Check that every required section ID exists.
- Check for obvious HTML and JavaScript errors.
- If browser testing is available, open the page and verify it loads.
- Report any checks that could not be performed.

## Strict Scope

Complete Phase 1 only. Do not proceed to Phase 2.

At the end, briefly report:
- Files created or modified.
- Checks performed and their results.
- How to run the project.
- Any remaining issues.

Wait for my approval before making further changes.

---

# Prompt 2

# Phase 2: Montessori Design System

Continue working in the existing project. Phase 1 is complete.

Act as a senior UI/UX designer and frontend developer. Build a consistent, reusable design system for a premium Montessori Pre-Nursery Class Management Portal for children aged 3–4 years and their parents.

## 1. Design Direction

Create a playful, warm, colorful, and professional visual identity.

Use a balanced pastel palette:
- Soft yellow.
- Sky blue.
- Mint green.
- Peach.
- Lavender.
- Soft pink.
- Warm white and neutral backgrounds.
- Dark, readable text colors.

The design should feel friendly for families but remain organized and practical for everyday use. Avoid excessive decoration and overly childish styling.

## 2. CSS Design Tokens

In `style.css`, define reusable CSS custom properties for:
- Primary and secondary colors.
- Backgrounds and surface colors.
- Text and muted text colors.
- Borders and focus states.
- Spacing scale.
- Typography sizes and weights.
- Border radii.
- Shadows.
- Content widths.
- Responsive breakpoints where appropriate.

Use consistent naming conventions and avoid repeating hardcoded values unnecessarily.

## 3. Typography

- Use Nunito or Quicksand for English text.
- Prepare font variables and fallbacks for Urdu typography.
- Keep headings friendly and body text highly readable.
- Do not implement the full Urdu language switcher yet.

## 4. Reusable Component Styles

Create reusable CSS classes for:
- Main content containers.
- Section headings and subtitles.
- Primary, secondary, and outline buttons.
- Cards and summary cards.
- Badges and status labels.
- Form inputs, textareas, selects, and labels.
- Icon containers.
- Dividers.
- Empty-state containers.
- Consistent spacing between components.

Include hover, active, disabled, and keyboard-focus states where relevant.

## 5. Accessibility and Responsive Foundation

- Maintain readable color contrast.
- Use visible keyboard focus indicators.
- Respect `prefers-reduced-motion`.
- Avoid unnecessary animation.
- Prevent horizontal overflow.
- Ensure the styles can support mobile, tablet, and desktop layouts.
- Prefer CSS logical properties such as `margin-inline`, `padding-inline`, and `text-align: start` to prepare for future Urdu RTL support.

## 6. Scope Restrictions

- Modify `style.css` primarily.
- Make only necessary changes to `index.html` or `script.js`.
- Do not build the navbar, hero, cards, dashboard, or other actual website sections.
- Do not add authentication, backend, AI Chat, or language-switching functionality.
- Preserve all Phase 1 section IDs and project structure.
- Do not install frameworks or unnecessary dependencies.

## 7. Verification

Check that:
- CSS variables are defined and consistently named.
- Reusable component classes are available.
- No existing section structure is broken.
- There are no obvious CSS syntax errors.
- The project still loads correctly.

Complete Phase 2 only. Do not start Phase

---

# Prompt 3

# Phase 3: Responsive Navbar + Hero Section

Continue working in the existing Montessori Class Portal project. Phase 1 and Phase 2 are complete.

Act as a senior UI/UX designer and frontend developer. Implement ONLY the navbar and hero section using the existing design system.

## 1. Navbar

Create a clean, premium, colorful Montessori-inspired navigation bar.

Include:
- A friendly classroom logo using a simple icon or CSS-based mark.
- Brand name: "Little Learners".
- Navigation links: Home, Classwork, Homework, Activities, Announcements, Ask Teacher.
- A visible English / اردو language switcher UI.
- A Parent Login button.

Requirements:
- Use the existing section IDs for navigation.
- Make the navbar sticky only if it improves usability.
- Create a working hamburger menu for mobile.
- Ensure navigation links close the mobile menu after selection.
- Use clear hover, active, and keyboard-focus states.
- Keep the navbar compact and uncluttered.
- The language switcher is UI-only in this phase; full translation and RTL/LTR functionality will be implemented later.
- Parent Login should link to a clearly defined placeholder or existing login section without pretending that authentication works.

## 2. Hero Section

Create an attractive hero section with a two-column desktop layout and a stacked mobile layout.

Content:
- Small introductory label: "A Happy Place to Learn".
- Main heading: "Welcome to Our Little Learning World!"
- Description: "Growing, learning, and smiling together every day."
- Primary button: "Explore Classwork".
- Secondary button: "Meet Your Learning Space".

Visual direction:
- Use the existing pastel color palette.
- Include a high-quality, child-friendly Montessori classroom illustration.
- Use playful educational motifs such as alphabet blocks, stars, books, shapes, or clouds.
- Keep the illustration tasteful and the text easy to read.
- Avoid excessive decoration and clutter.

Button behavior:
- "Explore Classwork" should navigate to the existing `classwork-homework` section.
- The secondary button should navigate to an appropriate existing section or a clearly defined placeholder.
- Do not create additional website sections in this phase.

## 3. Responsive Behavior

- Desktop: balanced two-column hero layout.
- Tablet: adjust column proportions and spacing.
- Mobile: stack content vertically and keep buttons comfortable to tap.
- Ensure the mobile menu and hero work at widths down to 320px.
- Avoid horizontal overflow.

## 4. Implementation Rules

- Reuse the existing CSS design tokens and component classes.
- Modify only the files necessary for the navbar and hero.
- Use HTML, CSS, and vanilla JavaScript.
- Do not introduce frameworks.
- Do not build other sections.
- Do not implement the backend, AI Chat, or actual language switching yet.
- Preserve all existing section IDs and project structure.

## 5. Testing

Verify:
- Navigation links target the correct existing sections.
- The mobile menu opens, closes, and responds to navigation.
- Both hero buttons perform their intended actions.
- The layout works on desktop, tablet, and mobile.
- No JavaScript or CSS errors are introduced.
- Existing project structure and design tokens remain intact.

Complete Phase 3 only. Do not proceed to Phase 4 automatically.

At the end, summarize files changed, features implemented, tests performed, and remaining limitations. Wait for my approval before continuing.

---

# Prompt 4

(Phase 3 Redesign — Navbar and Hero. Note: no screenshot was actually attached to the chat; implemented from the written spec below.)

# Phase 3 — Redesign Navbar and Hero Section

Act as a senior UI/UX designer and frontend developer specializing in premium, playful educational websites.

The previous navbar and hero implementation does not meet the desired visual quality. Redesign both sections from scratch while preserving the existing project structure and Phase 2 design system.

Use the first user-provided screenshot as the primary visual reference for visual quality, layout proportions, typography, colors, and illustration placement. Do not copy its branding or exact content.

## 1. Design Goal
Create a polished Montessori website that feels warm, cheerful, premium, and visually engaging. Sophisticated pastel palette; bold friendly typography; spacious layout; beautiful educational illustrations; clear hierarchy; strong CTA buttons; professional alignment and spacing. Avoid generic template look / excessive empty space / weak hero illustration.

## 2. Navbar Redesign
Slim elegant white navbar, full viewport.
- Left: circular pastel logo container with sunflower/Montessori icon; brand "Sunshine Sprouts Montessori" — "Sunshine Sprouts" dark charcoal, "Montessori" playful pink.
- Right links: Home, Daily Classwork, Homework, Activities, Announcements, Ask Teacher, Parent Login.
- White bg; subtle bottom border/soft shadow; balanced spacing; medium-semibold type; Parent Login as outlined button with user icon; centered within max-width container; logo+links vertically aligned.
- Hamburger on small screens. English/Urdu switcher comes in Phase 10 — do not add a non-functional one unless already present.

## 3. Hero Redesign
Spacious two-column. Warm cream/ivory bg; generous vertical padding; left ~52%, right ~48%; centered max-width container; balanced, not empty.
- Left: pastel-yellow rounded label "PRE-NURSERY · AGES 3–4"; heading "Welcome to Our Little Learning World!" (large bold rounded, dark charcoal, pink-to-coral accent on "Little Learning World!"); description "Growing, learning, and smiling together every day." (muted gray).
- CTAs: primary "View Today's Classwork" (coral-to-pink gradient, pill, book icon, white bold) → `classwork-homework`; secondary "Ask the Teacher" (white, blue outline, chat icon, dark text, pill) → `parent-communication`.
- Right illustration (inline SVG/CSS, no external/broken images): pastel rainbow, alphabet/number blocks, friendly geometric child figures (no realistic faces), large soft-yellow sun, small stars/clouds/flowers/books; balanced, substantial, no overlap with text/buttons.

## 4–7. Quality, responsive, restrictions, testing
Consistent max-width container; align navbar+hero to same grid; reuse Phase 2 tokens (new only if needed); avoid unnecessary gradients/shadows/borders; don't change the design system. Responsive desktop/tablet/mobile; hamburger; stack hero on mobile; no horizontal overflow; heading wraps naturally. Work only on navbar+hero; preserve IDs/structure/design system; no other sections, backend, auth, AI chat, or full EN/UR switching/RTL. Replace previous navbar/hero CSS rather than stacking conflicting rules. No frameworks. Test against screenshot direction, alignment, CTA navigation, mobile menu, all breakpoints, no overflow, illustrations load, rest of project intact.

Complete this redesign only. Do not proceed to Phase 4.

---

# Prompt 5

(Phase 3 corrections — language switcher, hero label, hero illustration. Note: no screenshot attached; implemented from written spec.)

# Phase 3 — Navbar and Hero Design Corrections

Make ONLY the following corrections. Do not proceed to Phase 4.

## 1. Add the English / Urdu Language Switcher
Visible, functional UI control in the navbar, between "Ask Teacher" and "Parent Login". Options English / اردو. Compact elegant toggle/dropdown; clearly indicate selected language; visible on desktop; included in mobile menu; no overcrowding/wrapping; match existing typography/colors/borders/spacing. UI + selected-state interaction only — full translation/persistence/RTL comes in Phase 10.

## 2. Remove the Age Label
Remove hero badge "PRE-NURSERY · AGES 3–4" (no children's ages). Replace with "LET'S LEARN & GROW", soft pastel rounded pill.

## 3. Redesign the Hero Illustration
Replace the rainbow/figures/sun illustration (not merely recolor). Create a polished, premium Montessori classroom learning scene: colorful alphabet blocks, counting objects, books, educational toys; soft pastel shapes; balanced composition; clean modern style. Local asset if available else well-composed inline SVG; no broken external links. Avoid overly simplistic geometric figures, excessive floating decorations, oversized empty circles, clutter, realistic facial details.

## 4. Preserve Existing Hero Design
Keep heading "Welcome to Our Little Learning World!", supporting text, primary "View Today's Classwork", secondary "Ask the Teacher", cream bg + pastel direction, two-column desktop layout. May refine spacing/alignment only.

## 5. Testing
EN/UR selector visible + works (selected-state), fits desktop + mobile, age label removed, new illustration renders, both CTAs navigate to correct IDs, no horizontal overflow / JS errors. Modify only required files; preserve design system + other work.

Complete these corrections only. Do not proceed to Phase 4. Report the changes and wait for my approval.

---

# Prompt 6

# Phase 4: Today's Classroom Overview

Continue working in the existing Montessori Class Portal project. Phases 1–3 completed and approved. Implement ONLY the Today's Classroom Overview section.

## 1. Section Design
Welcoming section directly below the hero. Use existing design system/pastels/typography/spacing/cards. Include: heading "A Little Look at Today"; supporting text "Here's what's happening in our classroom."; today's date formatted dynamically via JS; a friendly greeting that does not rely on an inaccurate fixed time of day.

## 2. Summary Cards (four)
- Card 1 Today's Classwork — book/notebook icon — "See what we learned today." — button "View Classwork" → `classwork-homework`.
- Card 2 Homework — backpack/pencil icon — "A little practice for home." — button "View Homework" → `classwork-homework`.
- Card 3 Upcoming Activities — calendar/art icon — "See what's coming up next." — button "View Activities" → `activities-gallery`.
- Card 4 Teacher's Announcements — bell/message icon — "Important classroom updates." — button "View Announcements" → `announcements`.

## 3. Visual
Four balanced cards, soft pastel accents, each a distinct but coordinated accent color; rounded corners, subtle shadows, clear typography; consistent icon style/size; comfortable spacing; engaging but not over-decorated; match navbar/hero; polished, not generic admin widgets.

## 4. Responsive
Desktop four in a row where space allows; tablet two per row; mobile one or two per row; no horizontal overflow or text clipping; tappable buttons.

## 5. Functional
Dynamic current date; all card buttons navigate to correct existing IDs; semantic HTML + accessible labels; reuse tokens/components; no frameworks; no duplicate sections/IDs; don't modify navbar/hero; no real data/backend.

## 6. Testing
Section below hero; date correct; four cards render; links navigate correctly; desktop/tablet/mobile; no JS/CSS errors; navbar/hero/other structure intact.

Complete Phase 4 only. Do not proceed to Phase 5 automatically. Summarize files changed, tests, remaining issues. Wait for approval.

---

# Prompt 7

# Phase 5: Daily Classwork & Homework

Implement ONLY the Daily Classwork & Homework section. Preserve navbar, hero, overview.

## 1. Header
Heading "What We Learned Today"; description "Little steps, big discoveries! Explore our daily learning and practise together at home." Use existing design system.

## 2. Date + Navigation
Today's date; date selector or prev/next-day controls; clear current-day indicator; previous dates show corresponding sample posts; future dates show no invented classwork; friendly empty state when none. Consistent date values in data model, format for display separately.

## 3. Subject Filters
All Subjects, English, Mathematics, Urdu, Practical Life, Art & Craft. Filter updates posts without reload; active filter distinct; works on mobile.

## 4. Classwork/Homework Cards
Each post supports: date, subject label, topic title, what children learned, classwork instructions, homework instructions, required materials, teacher's notes, optional illustration. Realistic sample content: English (Letter A recognition/tracing/apple vocab), Mathematics (counting 1–5 with objects), Urdu (basic letter), Practical Life (sorting & pouring), Art & Craft (paper butterfly). Distinguish classwork vs homework via headings/icons/subtle backgrounds. No invented real announcements or child-specific info.

## 5. Visual
Polished colorful Montessori layout; coordinated pastel subject accents; spacious rounded cards + subtle shadows; homework easy to scan; friendly typography + consistent icons; match navbar/hero/overview.

## 6. JS Data Structure
Clean reusable data (not duplicated cards); stable post IDs; consistent dates; i18n-ready (title.en/ur, classwork.en/ur, homework.en/ur). Full translation in Phase 10 — don't implement language system now.

## 7. Functional
Filters work; date nav works with sample data; cards update on date/subject change; empty states; clear control behavior; semantic + accessible; maintainable, no deps. Do NOT implement backend/db, teacher CMS, parent accounts, AI chat, full EN/UR switching, later-phase features.

## 8. Testing
Filters; date nav shows correct posts; future dates no fabricated posts; empty states; classwork/homework distinguishable; responsive; no JS/CSS errors; existing sections unchanged.

Complete Phase 5 only. Do not proceed to Phase 6 automatically. Summarize files, tests, remaining issues. Wait for approval.

---

# Prompt 8

# Fix Date Selector UI and Functionality

Fix only the Daily Classwork & Homework date navigation component.

## 1. Add Direct Date and Month Selection
Keep prev/next arrows. Make displayed date clickable → opens clean calendar popover/date-picker. Select specific day/month/year; month+year navigation; highlight selected date; clear close; on select update displayed date + show matching posts; empty state if none; no fabricated posts; keyboard navigation + accessible labels. Use existing JS date/post data; no framework/deps.

## 2. Fix Date Selector Width Shifting
Stable consistent width; date text centered between arrows; fixed-width arrow areas; flexible center for longer date strings; short→long date must not move arrows/layout; keep centered/aligned in parent; appropriate min/max-width + box-sizing; date text must not push arrows apart; no horizontal scroll; small screens responsive fixed/full width without overflow. Visually stable across any date/month/year.

## 3. Preserve Existing Design
Keep rounded pill selector, existing colors/typography/shadows/arrow styling, Montessori consistency; don't change surrounding classwork section; modify only necessary HTML/CSS/JS.

## 4. Testing
Direct date select; month/year nav; select updates feed; arrows still work; width/arrow positions stable across date strings; desktop+mobile; nothing else broken.

Complete only this fix. Do not proceed to the next development phase.

---

# Prompt 9

# Phase 6: Activities Gallery and Announcements

Implement ONLY the Activities & Learning Gallery and Announcements sections. Preserve navbar, hero, overview, classwork feed, date selector.

## 1. Activities & Learning Gallery
Heading "Little Hands, Big Discoveries!"; subtitle "Explore the fun activities that make learning special every day." Categories: All Activities, Art & Craft, Alphabet, Numbers, Practical Life, Fine Motor Skills. Sample activities: Colorful Paper Butterfly, Letter A with Apple, Counting with Colorful Blocks, Sorting Shapes and Colors, Pouring and Transferring Practice, Finger Painting with Shapes. Each card: illustration/image, title, category label, short description, optional date. Imagery for ages 3–4; prefer local/inline SVG; no broken links or identifiable kids' photos. Interactions: working category filters; show only matching; friendly empty state; clickable card → accessible detail modal/panel with close control + keyboard; no needless interactions.

## 2. Announcements
Heading "What's Happening in Our Classroom?"; subtitle "Important updates and little reminders for our families." Sample cards: Please Bring Art Supplies, Upcoming Classroom Activity, Notebook Reminder, Holiday Notice, Special Activity Day. Each: date, title, description, label (Important/Reminder/Event), icon. Coordinated pastel accents per type. Important noticeable but not overwhelming; clickable → expand/detail; mouse+touch+keyboard; empty state when none. Do NOT invent real school dates/holidays/contacts/teacher announcements — all clearly sample data.

## 3. Design
Existing design system; warm backgrounds, colorful rounded cards, subtle shadows; consistent spacing/type; engaging not cluttered; responsive image proportions, no stretching; scannable announcements; logical properties for future RTL.

## 4. Responsive
Desktop multi-column; tablet fewer columns; mobile compact cards + comfortable touch; no horizontal overflow; modal fits small screens.

## 5. Rules
HTML/CSS/vanilla JS; reuse variables/components; clean JS data structures; no duplicate IDs/sections; don't modify navbar/hero/date selector/classwork; no teacher dashboard/backend/AI/translation; keep extensible for future teacher-managed content.

## 6. Testing
Filters work; detail interactions work; announcements correct; empty states; images render; desktop/tablet/mobile; no JS/CSS errors; prior sections still functional.

Complete Phase 6 only. Do not proceed to Phase 7 automatically. Summarize files, features, tests, remaining issues. Wait for approval.

---

# Prompt 10

# Phase 7: Weekly Learning Plan and Parent FAQ

Implement ONLY the Weekly Learning Plan and Parent FAQ sections. Preserve all existing sections/functionality.

## 1. Weekly Learning Plan
Heading "Our Little Learning Journey"; subtitle "A week full of fun, discovery, and learning." Colorful Mon–Fri schedule. Each day: day name + date, main topic, subject/area, planned activity, materials to prepare, optional special-activity indicator. Sample activities: Mon Alphabet recognition, Tue Counting and sorting, Wed Urdu letter recognition, Thu Practical Life, Fri Art & Craft. These are sample, not confirmed plans; consistent data structure for future teacher dashboard. Design: day cards / horizontal weekly schedule desktop; stacked/scrollable mobile only if needed; highlight current day; empty state if none; not overcrowded; reuse design system.

## 2. Parent FAQ
Heading "Questions Parents Often Ask"; subtitle "Quick answers to help make learning at home easier." Accessible accordion, 7 Q&A: (1) What should my child bring to class? (2) How can I help my child practise at home? (3) Where can I check daily homework? (4) How can I contact the teacher? (5) What should I do if my child misses class? (6) How much practice is suitable for a child aged 3–4? (7) How can I support my child's independence? Short friendly practical answers. Don't invent teacher contacts/policies/attendance rules — where it depends on teacher policy, advise contacting the teacher. Interactions: click expands/collapses; ARIA; keyboard; visible focus; readable on mobile.

## 3. Design
Existing colors/typography/spacing/cards; consistent with approved sections; soft pastels + subtle shadows; scannable schedule; avoid unnecessary animation; logical properties for future RTL.

## 4. Restrictions
HTML/CSS/vanilla JS; reuse components/tokens; no duplicate sections; don't change navbar/hero/classwork/date selector/gallery/announcements; no teacher dashboard/backend/AI/full language switching; keep sample data separate from markup.

## 5. Testing
Five weekdays display; responsive; current-day indicator; FAQ expand/collapse; keyboard + ARIA; empty states; existing intact; no JS/CSS errors.

Complete Phase 7 only. Do not proceed to Phase 8 automatically. Summarize files, features, tests, remaining issues. Wait for approval.
