# EmailJS Setup Instructions

Follow these steps to enable email functionality for your contact form:

## 1. Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## 2. Add Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions to connect your email
5. **Copy the Service ID** - you'll need this later

## 3. Create Email Template
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template content:

```
Subject: New Inquiry from {{from_name}} - ElevateMax Website

Hello {{to_name}},

You have received a new inquiry through your website contact form.

Customer Details:
- Name: {{from_name}}
- Email: {{from_email}}
- Phone: {{phone}}
- Service Needed: {{service}}

Message:
{{message}}

---
This email was sent from your ElevateMax website contact form.
```

4. **Copy the Template ID** - you'll need this later

## 4. Get Public Key
1. Go to "Account" → "General"
2. Find your **Public Key** in the API Keys section
3. Copy this key

## 5. Update Your Website
1. Open `src/config/emailjs.ts`
2. Replace the placeholder values:
   ```typescript
   export const emailConfig = {
     serviceId: 'YOUR_ACTUAL_SERVICE_ID',
     templateId: 'YOUR_ACTUAL_TEMPLATE_ID', 
     publicKey: 'YOUR_ACTUAL_PUBLIC_KEY'
   };
   ```

## 6. Update Contact Component
1. Open `src/components/Contact.tsx`
2. Find lines 18-20 and replace with your actual IDs:
   ```typescript
   const serviceId = 'YOUR_ACTUAL_SERVICE_ID';
   const templateId = 'YOUR_ACTUAL_TEMPLATE_ID';
   const publicKey = 'YOUR_ACTUAL_PUBLIC_KEY';
   ```

## 7. Test the Form
1. Fill out and submit the contact form on your website
2. Check your email inbox for the inquiry
3. Verify all customer information is included correctly

## Free Plan Limits
- 200 emails per month
- EmailJS branding in emails
- Basic support

## Upgrade Options
- Paid plans remove branding and increase limits
- Starting at $15/month for 1,000 emails

## Troubleshooting
- **Emails not arriving**: Check spam folder, verify service connection
- **Form errors**: Check browser console for error messages
- **Template issues**: Ensure all variables match exactly (case-sensitive)

## Security Note
The public key is safe to use in frontend code - it's designed for client-side use and has limited permissions.

---

Once configured, customers will be able to send you real emails through your website contact form!
</parameter>