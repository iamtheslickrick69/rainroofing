import { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogPostClient } from "./blog-post-client";

const CDN = "https://pub-82e4016d6e17421ebc1eaa174644bee3.r2.dev";

// Blog post data
const blogPosts: Record<string, any> = {
  "spot-storm-damage-lubbock-hailstorm": {
    title: "How to Spot Storm Damage on Your Roof After a Lubbock Hailstorm",
    excerpt: "West Texas storms can be brutal. Learn the signs of hail and wind damage so you can act fast and protect your home.",
    image: `${CDN}/000working.jpg`,
    date: "January 10, 2026",
    category: "Storm Damage",
    readTime: "6 min",
    content: `
## West Texas Storms Don't Play Nice

Living in Lubbock means dealing with some of the most intense weather in Texas. From spring hailstorms to summer thunderstorms, your roof takes a beating year after year. Knowing how to spot damage early can save you thousands in repairs.

## Signs of Hail Damage

### On Asphalt Shingles
- **Dents or bruises** - Look for soft spots that feel like a bruised apple
- **Missing granules** - Check your gutters for excessive granule buildup
- **Cracks or splits** - Hail impact can cause shingles to crack
- **Exposed fiberglass mat** - Severe hits can expose the underlying material

### On Metal Roofing
- **Visible dents** - Even small hail can leave marks
- **Scratched coating** - Can lead to rust if not addressed
- **Loosened fasteners** - Impact can shake screws loose

## Signs of Wind Damage

- **Lifted or curled shingles** - High winds can peel shingles back
- **Missing shingles** - Check after every major storm
- **Debris impact** - Branches can puncture or crack roofing
- **Damaged flashing** - Wind can pull flashing away from edges

## What to Do After a Storm

1. **Stay safe** - Never climb on a wet or damaged roof
2. **Document everything** - Take photos from the ground if possible
3. **Call a professional** - Get a free inspection ASAP
4. **Contact your insurance** - Report damage within 24-48 hours
5. **Don't wait** - Small leaks become big problems fast

## When to Call Rain Roofing

If you notice any of these signs, don't hesitate to call us at **806-808-1317**. We offer free storm damage inspections and can help you navigate the insurance claims process.

**Remember:** Most storm damage isn't visible from the ground. A professional inspection is the only way to know for sure if your roof needs attention.
    `,
  },
  "signs-time-replace-roof": {
    title: "5 Signs It's Time to Replace Your Roof (Not Just Repair It)",
    excerpt: "Sometimes repairs aren't enough. Here's how to know when a full roof replacement is the smarter investment.",
    image: `${CDN}/000shingle.jpg`,
    date: "January 5, 2026",
    category: "Roof Replacement",
    readTime: "5 min",
    content: `
## When Repairs Aren't Enough

Your roof has served you well, but nothing lasts forever. Here are five clear signs that it's time to consider a full replacement instead of another round of patches.

## 1. Your Roof Is Over 20 Years Old

Most asphalt shingle roofs last 20-25 years. If yours is approaching or past this age, it's likely at the end of its useful life—even if it looks okay from the ground.

**What to look for:**
- Original roof from when the home was built
- Multiple layers of shingles (often means it's been patched before)
- Outdated materials that don't meet current codes

## 2. Widespread Shingle Damage

A few damaged shingles can be repaired. But when damage is widespread, replacement makes more financial sense.

**Signs of widespread damage:**
- Curling or buckling across large areas
- Missing shingles in multiple spots
- Significant granule loss (bald patches)
- Cracking throughout the roof

## 3. Sagging Roof Deck

This is serious. A sagging roof indicates structural problems that repairs can't fix.

**Warning signs:**
- Visible dips or waves in the roofline
- Soft spots when walking on the roof
- Interior ceiling damage that spreads

## 4. Daylight Through the Roof Boards

If you can see light coming through your attic, water can get through too.

**Check for:**
- Light visible through roof boards in attic
- Dark streaks or stains on wood
- Signs of moisture or mold

## 5. Rising Energy Bills

An old or damaged roof loses energy efficiency, making your HVAC work harder.

**Indicators:**
- Sudden increases in heating/cooling costs
- Uneven temperatures between rooms
- Ice dams in winter (in colder climates)

## The Bottom Line

If you're seeing two or more of these signs, replacement is likely the better investment. A new roof:
- Adds value to your home
- Improves energy efficiency
- Gives you 20+ years of protection
- May qualify for insurance discounts

**Ready to find out if it's time?** Call Rain Roofing at **806-808-1317** for a free inspection and honest assessment.
    `,
  },
  "navigating-insurance-claims-storm-damage": {
    title: "Navigating Insurance Claims After Storm Damage: A Homeowner's Guide",
    excerpt: "Filing an insurance claim can be overwhelming. We break down the process step by step to help you get the coverage you deserve.",
    image: `${CDN}/000NEWHOME.jpg`,
    date: "December 28, 2025",
    category: "Insurance",
    readTime: "7 min",
    content: `
## Insurance Claims Don't Have to Be Stressful

After a storm damages your roof, the last thing you want is to fight with your insurance company. Here's how to navigate the process smoothly and get the coverage you're entitled to.

## Step 1: Document Everything Immediately

Before touching anything (if it's safe):

- **Take photos** from multiple angles
- **Record videos** showing the extent of damage
- **Note the date and time** of the storm
- **Save any weather reports** for that day

## Step 2: Prevent Further Damage

Your policy requires you to mitigate additional damage:

- Cover holes with tarps
- Move valuables away from leaks
- **Keep receipts** for any emergency supplies

## Step 3: Call Your Insurance Company

Report the claim as soon as possible:

- Have your policy number ready
- Provide documentation you've gathered
- Ask about your deductible
- Get a claim number and adjuster contact

## Step 4: Get a Professional Inspection

Before the adjuster arrives:

- Hire a reputable roofing contractor
- Get a detailed inspection report
- Obtain a written repair estimate
- Document all findings with photos

## Step 5: Meet with the Insurance Adjuster

When the adjuster visits:

- Have your contractor present if possible
- Point out all documented damage
- Share your inspection report
- Take notes during the meeting

## Step 6: Review the Settlement Offer

Don't accept immediately:

- Compare to your contractor's estimate
- Check what's covered vs. excluded
- Ask questions about any discrepancies
- Request re-inspection if needed

## Common Mistakes to Avoid

- **Waiting too long** to file a claim
- **Accepting the first offer** without review
- **Not documenting** pre-repair conditions
- **Hiring unlicensed** contractors
- **Signing anything** you don't understand

## How Rain Roofing Helps

We handle insurance claims every week. Our team will:

- Provide detailed damage documentation
- Meet with adjusters on your behalf
- Ensure nothing is missed
- Help you get fair compensation

**Need help with a claim?** Call **806-808-1317** for a free consultation.
    `,
  },
  "metal-roofing-vs-asphalt-shingles": {
    title: "Metal Roofing vs. Asphalt Shingles: Which Is Best for Lubbock Homes?",
    excerpt: "Both have their pros and cons. We compare durability, cost, and performance in West Texas weather.",
    image: `${CDN}/000metalrof.jpg`,
    date: "December 20, 2025",
    category: "Roofing Materials",
    readTime: "6 min",
    content: `
## Choosing the Right Roof for West Texas

When it's time for a new roof, Lubbock homeowners face a crucial decision: metal or asphalt? Both have their merits, but West Texas weather makes this choice particularly important.

## Asphalt Shingles

### Pros
- **Lower upfront cost** - Typically 30-50% less than metal
- **Easy repairs** - Individual shingles can be replaced
- **Wide variety** - Many colors and styles available
- **Proven performance** - Decades of reliable use

### Cons
- **Shorter lifespan** - 20-25 years typical
- **Heat absorption** - Can increase cooling costs
- **Storm vulnerability** - Hail and wind can cause damage
- **Maintenance needed** - Regular inspections required

## Metal Roofing

### Pros
- **Exceptional longevity** - 40-70 years lifespan
- **Energy efficient** - Reflects heat, reducing cooling costs
- **Hail resistant** - Most dents don't affect performance
- **Low maintenance** - Rarely needs attention
- **Fire resistant** - Class A fire rating

### Cons
- **Higher upfront cost** - 2-3x more than asphalt
- **Noise** - Can be louder during rain (mitigated by insulation)
- **Denting** - Large hail can leave visible dents
- **Expansion/contraction** - Requires proper installation

## For Lubbock Specifically

Consider these local factors:

### Weather Resilience
- **Wind**: Metal handles high winds better
- **Hail**: Both can be damaged, but metal is more durable
- **Heat**: Metal reflects UV, reducing cooling costs
- **Sun exposure**: Metal doesn't degrade as fast from UV

### Cost Comparison (Average 2,000 sq ft home)
- **Asphalt**: $8,000 - $15,000
- **Metal**: $15,000 - $30,000

### Long-Term Value
Over 50 years:
- Asphalt: 2-3 replacements = $24,000 - $45,000
- Metal: 1 installation = $15,000 - $30,000

## Our Recommendation

For most Lubbock homeowners, **metal roofing is the better long-term investment** if your budget allows. The energy savings alone can offset the higher initial cost over time.

However, **quality asphalt shingles** (like GAF Timberline) remain an excellent choice for homeowners who:
- Plan to sell within 10-15 years
- Have budget constraints
- Prefer traditional aesthetics

**Not sure which is right for you?** Call Rain Roofing at **806-808-1317** for a free consultation. We install both and can help you make the best choice for your home and budget.
    `,
  },
  "spring-roof-maintenance-checklist": {
    title: "Spring Roof Maintenance Checklist for Texas Homeowners",
    excerpt: "Get your roof ready for storm season with this comprehensive maintenance guide.",
    image: `${CDN}/000modern.jpg`,
    date: "December 15, 2025",
    category: "Maintenance",
    readTime: "4 min",
    content: `
## Prepare Your Roof Before Storm Season

Spring in West Texas means storm season is coming. A little maintenance now can prevent major problems later. Here's your complete checklist.

## Visual Inspection (From the Ground)

- [ ] Check for missing or damaged shingles
- [ ] Look for sagging areas
- [ ] Inspect flashing around chimneys and vents
- [ ] Check gutters for damage or sagging
- [ ] Look for debris accumulation

## Gutter Maintenance

- [ ] Remove leaves and debris
- [ ] Check for proper drainage
- [ ] Ensure downspouts direct water away from foundation
- [ ] Look for rust or damage
- [ ] Verify secure attachment to fascia

## Attic Check

- [ ] Look for daylight through roof boards
- [ ] Check for water stains or damage
- [ ] Inspect insulation for moisture
- [ ] Ensure proper ventilation
- [ ] Look for signs of pests

## Tree Trimming

- [ ] Cut back branches within 10 feet of roof
- [ ] Remove dead branches that could fall
- [ ] Clear debris from roof surface

## Professional Inspection

Even if everything looks okay, schedule a professional inspection:

- Identifies hidden damage
- Documents roof condition
- Catches small problems early
- Provides maintenance recommendations

## When to Call a Pro Immediately

- Visible damage after storms
- Active leaks
- Sagging or structural concerns
- Multiple missing shingles
- Damaged flashing

**Schedule your spring inspection today!** Call Rain Roofing at **806-808-1317** for a free roof assessment.
    `,
  },
  "emergency-roof-tarping-guide": {
    title: "Emergency Roof Tarping: What to Do Before the Pros Arrive",
    excerpt: "When disaster strikes, here's how to minimize damage while waiting for professional help.",
    image: `${CDN}/000barn.jpg`,
    date: "December 10, 2025",
    category: "Emergency",
    readTime: "5 min",
    content: `
## When Every Minute Counts

A damaged roof during a storm can cause thousands in water damage. If you can't get immediate professional help, here's how to protect your home temporarily.

## Safety First

**Before going on any roof:**
- Wait until the storm has passed
- Never work on a wet roof
- Use proper fall protection
- Have someone spot you
- Know your limits

**If in doubt, don't climb up.** Interior protection may be safer.

## Interior Protection Steps

If you can't safely access the roof:

1. **Move valuables** away from leak areas
2. **Place buckets** to catch water
3. **Put down plastic sheeting** to protect floors
4. **Turn off electricity** in affected areas if water is near outlets

## Emergency Tarping (If Safe)

### What You'll Need
- Heavy-duty tarp (minimum 6 mil thickness)
- 2x4 boards or sandbags
- Utility knife
- Rope or bungee cords
- Ladder

### Steps
1. Unroll tarp over damaged area
2. Extend at least 4 feet past damage on all sides
3. Secure with boards/sandbags (never nail through!)
4. Tuck edges under shingles where possible
5. Ensure water will run off, not pool

## What NOT to Do

- Don't use nails or screws through the tarp
- Don't cover vents or exhausts
- Don't attempt in ongoing storms
- Don't use undersized tarps
- Don't ignore electrical hazards

## After Temporary Repairs

1. **Document damage** with photos
2. **Call your insurance** company
3. **Contact a professional** roofer
4. **Save all receipts** for materials

## Rain Roofing Emergency Service

We offer **24/7 emergency response** for Lubbock homeowners. When disaster strikes, call **806-808-1317** immediately. We'll dispatch a crew to secure your roof properly.

**Don't risk your safety.** We're here to help.
    `,
  },
  "understanding-roof-warranty": {
    title: "Understanding Your Roof Warranty: What's Covered and What's Not",
    excerpt: "Roof warranties can be confusing. We explain the different types and what they actually protect.",
    image: `${CDN}/000spanish.jpg`,
    date: "December 5, 2025",
    category: "Education",
    readTime: "6 min",
    content: `
## Warranties: Not All Are Created Equal

That roof warranty sounds great—until you need to use it. Understanding what's actually covered can save you from unpleasant surprises.

## Types of Roof Warranties

### Manufacturer's Material Warranty
**What it covers:** Defects in roofing materials
**Typical length:** 20-50 years
**What it doesn't cover:** Installation errors, weather damage, normal wear

### Workmanship Warranty
**What it covers:** Installation errors by the contractor
**Typical length:** 1-10 years
**What it doesn't cover:** Material defects, weather damage, lack of maintenance

### Extended/Enhanced Warranty
**What it covers:** Both materials and workmanship
**Typical length:** 25-50 years
**Requirements:** Usually requires certified installer

## What Voids Your Warranty

- **Improper installation** (by non-certified contractors)
- **Lack of maintenance**
- **Unauthorized repairs**
- **Adding items to roof** (satellite dishes, etc.)
- **Improper ventilation**
- **Power washing**

## What's Typically NOT Covered

- Storm damage (hail, wind, lightning)
- Acts of God
- Normal wear and tear
- Damage from foot traffic
- Color fading
- Moss or algae growth
- Damage during other home repairs

## Questions to Ask Your Contractor

1. What warranties come with this installation?
2. Are you a certified installer for this manufacturer?
3. How long is the workmanship warranty?
4. What would void the warranty?
5. Is the warranty transferable if I sell?

## Rain Roofing Warranty

We provide:
- **Manufacturer warranties** on all materials
- **10-year workmanship warranty** on installation
- **Transferable coverage** to new homeowners
- **No fine print surprises**

**Questions about your current warranty?** Call **806-808-1317** for a free consultation.
    `,
  },
  "west-texas-weather-roof-lifespan": {
    title: "How West Texas Weather Affects Your Roof's Lifespan",
    excerpt: "Sun, wind, hail, and temperature swings all take a toll. Here's what you need to know.",
    image: `${CDN}/0000solar.jpg`,
    date: "November 28, 2025",
    category: "Education",
    readTime: "5 min",
    content: `
## West Texas Is Tough on Roofs

Living in Lubbock means your roof faces challenges that other parts of the country don't. Understanding these factors helps you protect your investment.

## The Sun Factor

**Average sunny days in Lubbock:** 261 per year

UV radiation degrades roofing materials:
- Asphalt shingles lose granules faster
- Colors fade more quickly
- Materials become brittle over time

**Impact:** Can reduce roof lifespan by 2-5 years compared to shaded climates

## Wind Exposure

**Average wind speed:** 12+ mph year-round

Constant wind causes:
- Lifted shingle edges
- Worn seals between shingles
- Debris impact damage
- Premature aging

**Impact:** Regular inspections are essential

## Hailstorms

**Lubbock averages:** 3-5 significant hail events per year

Hail damage includes:
- Cracked or broken shingles
- Dented metal components
- Compromised seals
- Hidden structural damage

**Impact:** Can take years off roof life with each storm

## Temperature Extremes

**Temperature range:** 100°F+ summers to below-freezing winters

Thermal cycling causes:
- Expansion and contraction stress
- Cracked caulking and seals
- Nail pops
- Material fatigue

**Impact:** Materials age faster than in stable climates

## How to Maximize Your Roof's Life

1. **Choose appropriate materials** - Impact-resistant shingles or metal
2. **Schedule regular inspections** - At least annually
3. **Address repairs promptly** - Small problems grow fast
4. **Maintain proper ventilation** - Reduces heat buildup
5. **Keep trees trimmed** - Prevents debris damage

## Realistic Lifespan Expectations in Lubbock

| Material | National Average | West Texas Reality |
|----------|-----------------|-------------------|
| 3-Tab Asphalt | 15-20 years | 12-17 years |
| Architectural Shingles | 25-30 years | 20-25 years |
| Metal Roofing | 40-70 years | 35-60 years |
| Tile | 50+ years | 40-50 years |

**Want to know your roof's condition?** Call Rain Roofing at **806-808-1317** for a free inspection and honest assessment.
    `,
  },
};

export async function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts[slug];

  if (!post) {
    return {
      title: "Post Not Found | Rain Roofing",
    };
  }

  return {
    title: `${post.title} | Rain Roofing Lubbock`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts[slug];

  if (!post) {
    notFound();
  }

  return <BlogPostClient post={post} slug={slug} />;
}
