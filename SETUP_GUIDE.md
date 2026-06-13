# Neuraplex — Setup Guide (Non-Technical)

> This guide covers three stages: running the site on your own laptop, sharing it with your team via GitHub, and deploying a live beta for external review.
>
> **Time estimate:** Stage 1 ~30 min · Stage 2 ~20 min · Stage 3 ~30 min

---

## Stage 1 — Run It on Your Laptop (Local)

You'll install two free tools, then start the site. You only do the installs once.

---

### Step 1 — Install Node.js

Node.js is the engine that runs the site on your machine.

1. Go to **https://nodejs.org**
2. Click the big green button labelled **"LTS"** (the recommended version)
3. Download and open the installer
4. Click **Next** through all the steps, accepting defaults — don't change anything
5. Click **Finish**

**Check it worked:** Open **Terminal** (Mac) or **Command Prompt** (Windows — press `Windows key`, type `cmd`, press Enter). Type this and press Enter:

```
node --version
```

You should see something like `v20.14.0`. Any number is fine — it just means it's installed.

---

### Step 2 — Install VS Code (optional but recommended)

VS Code is a free editor that makes it easier to view and manage the project files.

1. Go to **https://code.visualstudio.com**
2. Click **Download** and install it like any normal app

---

### Step 3 — Open the Project Folder

The project lives at:

```
C:\Users\ackhi\Claude\Projects\Neuraplex
```

**Option A — Using VS Code:**
1. Open VS Code
2. Click **File → Open Folder**
3. Navigate to `C:\Users\ackhi\Claude\Projects\Neuraplex` and click **Select Folder**
4. In the top menu, click **Terminal → New Terminal** — a panel opens at the bottom

**Option B — Using Command Prompt directly:**
1. Open Command Prompt
2. Type this exactly and press Enter:
```
cd C:\Users\ackhi\Claude\Projects\Neuraplex
```

---

### Step 4 — Install the Project's Dependencies

This downloads all the code libraries the site needs. You only do this once (or after any major update).

In your terminal, type and press Enter:

```
npm install
```

You'll see a lot of text scrolling — this is normal. Wait until it stops (about 1–2 minutes). You should see a line like `added 312 packages`.

> ⚠️ **If you see any red "error" lines**, send me a screenshot and I'll fix it. A few yellow "warn" lines are fine to ignore.

---

### Step 5 — Start the Site

In the same terminal, type and press Enter:

```
npm run dev
```

You'll see something like:

```
▲ Next.js 14.2.5
- Local:        http://localhost:3000
- Ready in 2.3s
```

**Open your browser and go to: http://localhost:3000**

You should see the Neuraplex home page. 🎉

---

### Stopping and Starting Again

- **To stop the site:** Click inside the terminal and press `Ctrl + C`
- **To start it again:** Run `npm run dev` again (you don't need to re-run `npm install`)

---

### What the Placeholder State Looks Like

Right now, a few things show placeholder content — this is expected:

| Section | What you'll see | Fixed when |
|---|---|---|
| Demo form | Form works but doesn't send anywhere | You add `GSHEET_WEBAPP_URL` in `.env.local` |
| Book a time calendar | "Calendar coming soon" placeholder | You add `NEXT_PUBLIC_HUBSPOT_MEETINGS_URL` |
| Testimonial | "Placeholder quote" | Phase 3 (Sanity CMS) |

---

---

## Stage 2 — Share With Your Team via GitHub

GitHub is where you store the code online so your team (or a developer) can access it, review it, and suggest changes. Think of it like Google Drive, but for code.

---

### Step 1 — Create a Free GitHub Account

1. Go to **https://github.com**
2. Click **Sign up**
3. Use your work email (`ackhil88@gmail.com` or your Neuraplex email)
4. Choose the **Free** plan
5. Verify your email

---

### Step 2 — Install Git (the tool that uploads to GitHub)

1. Go to **https://git-scm.com/downloads**
2. Download and install for Windows (click through defaults)

**Check it worked:** Open a new terminal and type:
```
git --version
```
You should see something like `git version 2.45.0`.

---

### Step 3 — Create a New Repository on GitHub

A "repository" (or "repo") is like a project folder stored on GitHub.

1. Log into GitHub
2. Click the **green "New"** button (top left, next to your repositories)
3. Fill in:
   - **Repository name:** `neuraplex` (all lowercase)
   - **Description:** `Neuraplex marketing site`
   - Set to **Private** (so only people you invite can see it)
   - Leave everything else as default
4. Click **Create repository**
5. You'll land on a page with setup instructions — **leave this tab open**, you'll need the URL shown

---

### Step 4 — Connect Your Local Project to GitHub

In your terminal (inside the Neuraplex folder), run these commands one at a time, pressing Enter after each:

```
git init
```

```
git add .
```

```
git commit -m "Phase 0+1: scaffold and home page"
```

Now connect it to your GitHub repo. Copy the URL from the GitHub page you left open — it looks like `https://github.com/YOUR-USERNAME/neuraplex.git`. Replace it below:

```
git remote add origin https://github.com/YOUR-USERNAME/neuraplex.git
```

```
git branch -M main
```

```
git push -u origin main
```

GitHub will ask for your **username** and **password**. 

> ⚠️ **Important:** GitHub no longer accepts your regular password here. You need a **Personal Access Token**:
> 1. Go to **https://github.com/settings/tokens**
> 2. Click **Generate new token (classic)**
> 3. Give it a name like "Neuraplex local"
> 4. Tick the **repo** checkbox
> 5. Click **Generate token** at the bottom
> 6. Copy the token (starts with `ghp_...`) — **you only see it once**
> 7. Paste it as your "password" when Git asks

After this, refresh your GitHub page — you should see all the Neuraplex files there.

---

### Step 5 — Invite Your Team

1. In your GitHub repo, click **Settings** (top tab)
2. Click **Collaborators** in the left menu
3. Click **Add people**
4. Type their GitHub username or email address
5. They'll get an email invite — once accepted, they can view and download the code

> 💡 **For non-technical reviewers** who just want to see the site running (not the code), skip to Stage 3 — Vercel gives you a live URL that anyone can open in a browser.

---

### Step 6 — Keeping GitHub Updated Going Forward

Every time you want to save new changes to GitHub, run these three commands:

```
git add .
git commit -m "Brief description of what changed"
git push
```

---

---

## Stage 3 — Live Beta on Vercel

Vercel hosts the site on a real URL so anyone can access it in a browser — no technical setup required on their end. Your team gets a link like `https://neuraplex.vercel.app`.

---

### Step 1 — Create a Free Vercel Account

1. Go to **https://vercel.com**
2. Click **Sign Up**
3. Choose **Continue with GitHub** — this links your GitHub account automatically

---

### Step 2 — Import the Neuraplex Project

1. After logging in, click **Add New → Project**
2. You'll see a list of your GitHub repositories — click **Import** next to `neuraplex`
3. Vercel will auto-detect it's a Next.js project and configure everything
4. **Before clicking Deploy**, scroll down to **Environment Variables** — see Step 3 below

---

### Step 3 — Add Your Environment Variables

This is where you give Vercel the secret keys it needs. For now, add placeholders — you can update them with real values later without redeploying.

Click **Add** for each one:

| Variable Name | Value to enter now |
|---|---|
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | `placeholder` |
| `NEXT_PUBLIC_SANITY_DATASET` | `production` |
| `SANITY_API_TOKEN` | `placeholder` |
| `NEXT_PUBLIC_SUPABASE_URL` | `https://placeholder.supabase.co` |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | `placeholder` |
| `SUPABASE_SERVICE_ROLE` | `placeholder` |
| `GSHEET_WEBAPP_URL` | `placeholder` |
| `NEXT_PUBLIC_HUBSPOT_MEETINGS_URL` | `placeholder` |

> You'll replace `placeholder` with real values as you set up each service (Google Sheets, HubSpot, etc.) — this is covered in the next section.

---

### Step 4 — Deploy

Click **Deploy**. Vercel will build the site — takes about 2 minutes. You'll see a progress bar.

When it finishes, you'll see a live URL like:
```
https://neuraplex-yourname.vercel.app
```

**Send this URL to your team.** Anyone with the link can view it in any browser.

---

### Step 5 — Connect a Custom Domain (Optional)

If you have `neuraplex.co.uk` already:

1. In Vercel, go to your project → **Settings → Domains**
2. Type `neuraplex.co.uk` and click **Add**
3. Vercel will show you DNS records to add
4. Log into wherever you bought your domain (e.g. GoDaddy, Namecheap, 123-reg)
5. Find the **DNS settings** section and add the records Vercel shows you
6. Wait up to 24 hours for it to go live (usually much faster)

---

### How Auto-Deploy Works Going Forward

Once Vercel is connected to GitHub, **every time you push code changes to GitHub, Vercel automatically rebuilds and redeploys the site.** You don't need to log into Vercel again. Your team always sees the latest version at the same URL.

---

---

## Quick Reference — What Needs to Be Set Up for Beta

Before you show this to external beta users, here's what needs real values (not placeholders):

| What | Where to set it | Needed for |
|---|---|---|
| **Google Sheet endpoint** | Google Apps Script → paste URL into `GSHEET_WEBAPP_URL` in Vercel | Demo form submissions to reach you |
| **HubSpot Meetings URL** | HubSpot → Meetings → copy your booking link → paste into `NEXT_PUBLIC_HUBSPOT_MEETINGS_URL` | Calendar on the Demo page |
| **Real testimonial quote** | Phase 3 (Sanity CMS) | Replace the placeholder quote |

> I can walk you through each of these one at a time when you're ready. The Google Sheet one takes about 10 minutes and requires no coding.

---

## If Something Goes Wrong

| Problem | Likely cause | What to do |
|---|---|---|
| `npm install` gives errors | Corrupted download | Delete the `node_modules` folder, run `npm install` again |
| Site won't start (`port in use`) | Another app is using port 3000 | Run `npm run dev -- -p 3001` instead, visit `http://localhost:3001` |
| Vercel build fails | Missing env variable | Check Vercel → Project → Settings → Environment Variables |
| GitHub push asks for password repeatedly | Token not saved | Google "git credential manager Windows" and install it |

---

*Guide written for Neuraplex Phase 0+1 · June 2026*
