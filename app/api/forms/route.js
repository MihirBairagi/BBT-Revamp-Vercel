import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Map form types to env var names for recipients
const FORM_TO_ENV = {
  contact_us: 'EMAIL_TO_CONTACT_US',
  services_contact: 'EMAIL_TO_SERVICES',
  request_call: 'EMAIL_TO_REQUEST_CALL',
  project_estimate: 'EMAIL_TO_PROJECT',
  services_our_process: 'EMAIL_TO_SERVICES',
  collection_contact: 'EMAIL_TO_COLLECTION',
  collection_form: 'EMAIL_TO_COLLECTION',
  car_detailing: 'EMAIL_TO_CAR_DETAILING',
  sellcarbrand_contact: 'EMAIL_TO_SELLCARBRAND',
  modifications: 'EMAIL_TO_MODIFICATIONS',
  workshop_visit: 'EMAIL_TO_WORKSHOP',
  whyus_sell_your_car: 'EMAIL_TO_WHYUS_SELLYOURCAR',
  sellyourcar_benefits: 'EMAIL_TO_SELLYOURCAR_BENEFITS',
  sell_your_car: 'EMAIL_TO_SELL_YOUR_CAR',
  squad: 'EMAIL_TO_SQUAD',
  career_opening: 'EMAIL_TO_CAREER',
  africa_hilux: 'EMAIL_TO_AFRICA_HILUX',
  associates: 'EMAIL_TO_ASSOCIATES',
  // BBT Realty form types
  realty_homepage: 'EMAIL_TO_REALTY_HOMEPAGE',
  realty_floating: 'EMAIL_TO_REALTY_FLOATING',
  realty_contact: 'EMAIL_TO_REALTY_CONTACT',
  realty_visit: 'EMAIL_TO_REALTY_VISIT',
  realty_callback: 'EMAIL_TO_REALTY_CALLBACK',
};

function getRecipients(formType) {
  const specificEnv = FORM_TO_ENV[formType];
  const to = (specificEnv && process.env[specificEnv]) || process.env.EMAIL_DEFAULT_TO || '';
  // allow comma-separated list
  return to
    .split(',')
    .map((e) => e.trim())
    .filter(Boolean);
}

function makeSubject(formType) {
  const pretty = (formType || 'form_submission')
    .replace(/_/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase());
  return `[BBT] ${pretty}`;
}

function objectToHtmlList(obj) {
  const safe = (val) =>
    typeof val === 'string'
      ? val.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      : typeof val === 'number' || typeof val === 'boolean'
      ? String(val)
      : typeof val === 'object' && val !== null
      ? JSON.stringify(val)
      : '';
  return (
    '<ul style="font-family:Inter,Arial,sans-serif;line-height:1.5">' +
    Object.entries(obj)
      .filter(([k]) => k !== 'attachments' && k !== 'files')
      .map(([k, v]) => `<li><strong>${safe(k)}:</strong> ${safe(v)}</li>`)
      .join('') +
    '</ul>'
  );
}

async function filesFromFormData(formData) {
  const attachments = [];
  for (const [key, value] of formData.entries()) {
    if (value instanceof File) {
      const arrayBuffer = await value.arrayBuffer();
      const content = Buffer.from(arrayBuffer);
      // Cap single file at 6MB for email attachments
      const maxBytes = 6 * 1024 * 1024;
      if (content.length > maxBytes) {
        throw new Error(`Attachment ${value.name} too large.`);
      }
      attachments.push({
        content,
        filename: value.name || key,
        contentType: value.type || 'application/octet-stream',
      });
    }
  }
  return attachments;
}

function pickReplyTo(data) {
  const candidate = data.email || data.userEmail || data.contactEmail || '';
  if (!candidate) return undefined;
  return candidate;
}

function getCustomerEmail(data) {
  return data.email || data.userEmail || data.contactEmail || '';
}

function getCustomerName(data) {
  return data.name || data.userName || data.contactName || '';
}

function getCustomerEmailTemplate(formType, customerName) {
  // "Buy a Car" Enquiries - Collection/Product enquiries
  if (['collection_contact', 'collection_form', 'contact_us', 'request_call'].includes(formType)) {
    return {
      subject: 'Thank You for Your Interest in Big Boy Toyz',
      html: `
        <div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Arial,sans-serif;max-width:600px;margin:0 auto;padding:40px 20px;background-color:#ffffff">
          <div style="border-bottom:1px solid #e5e5e5;padding-bottom:20px;margin-bottom:30px">
            <p style="margin:0;font-size:13px;color:#666;text-transform:uppercase;letter-spacing:0.5px">Big Boy Toyz</p>
          </div>
          
          <h2 style="color:#000;margin:0 0 24px 0;font-size:16px;font-weight:400">Hi ${customerName},</h2>
          
          <p style="color:#333;line-height:1.6;margin:0 0 16px 0;font-size:15px">
            Thank you for your interest in owning a luxury car with Big Boy Toyz.
          </p>
          
          <p style="color:#333;line-height:1.6;margin:0 0 30px 0;font-size:15px">
            Our sales team has received your enquiry and will connect with you shortly to guide you through the next steps.
          </p>
          
          <div style="padding:16px 0;margin:30px 0;border-top:1px solid #e5e5e5;border-bottom:1px solid #e5e5e5">
            <p style="color:#666;margin:0 0 6px 0;font-size:12px">For quicker assistance</p>
            <p style="color:#000;margin:0;font-size:16px">
              <a href="tel:+919999999983" style="color:#000;text-decoration:none">+91 9999 9999 83</a>
            </p>
          </div>
          
          <div style="margin-top:40px;padding-top:30px;border-top:1px solid #e5e5e5">
            <p style="color:#666;margin:0 0 8px 0;font-size:14px">
              Warm regards,<br>
              Team Big Boy Toyz
            </p>
            <p style="margin:12px 0 0 0">
              <a href="https://www.bigboytoyz.com" style="color:#666;text-decoration:none;font-size:13px">www.bigboytoyz.com</a>
            </p>
          </div>
          
          <div style="margin-top:40px;padding-top:20px;border-top:1px solid #e5e5e5">
            <p style="color:#999;margin:0;font-size:11px;line-height:1.5">
              © ${new Date().getFullYear()} Big Boy Toyz. All rights reserved.
            </p>
          </div>
        </div>
      `
    };
  }
  
  // "Sell Your Car" Enquiries
  if (['sell_your_car', 'whyus_sell_your_car', 'sellyourcar_benefits', 'sellcarbrand_contact'].includes(formType)) {
    return {
      subject: "We've Received Your Car Selling Enquiry",
      html: `
        <div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Arial,sans-serif;max-width:600px;margin:0 auto;padding:40px 20px;background-color:#ffffff">
          <div style="border-bottom:1px solid #e5e5e5;padding-bottom:20px;margin-bottom:30px">
            <p style="margin:0;font-size:13px;color:#666;text-transform:uppercase;letter-spacing:0.5px">Big Boy Toyz</p>
          </div>
          
          <h2 style="color:#000;margin:0 0 24px 0;font-size:16px;font-weight:400">Hi ${customerName},</h2>
          
          <p style="color:#333;line-height:1.6;margin:0 0 16px 0;font-size:15px">
            Thank you for choosing Big Boy Toyz to sell your luxury car.
          </p>
          
          <p style="color:#333;line-height:1.6;margin:0 0 30px 0;font-size:15px">
            Our valuation team has received your details and will get in touch soon to take it forward.
          </p>
          
          <div style="padding:16px 0;margin:30px 0;border-top:1px solid #e5e5e5;border-bottom:1px solid #e5e5e5">
            <p style="color:#666;margin:0 0 6px 0;font-size:12px">For faster communication</p>
            <p style="color:#000;margin:0;font-size:16px">
              <a href="tel:+919999999915" style="color:#000;text-decoration:none">+91 9999 9999 15</a>
            </p>
          </div>
          
          <div style="margin-top:40px;padding-top:30px;border-top:1px solid #e5e5e5">
            <p style="color:#666;margin:0 0 8px 0;font-size:14px">
              Best regards,<br>
              Team Big Boy Toyz
            </p>
            <p style="margin:12px 0 0 0">
              <a href="https://www.bigboytoyz.com" style="color:#666;text-decoration:none;font-size:13px">www.bigboytoyz.com</a>
            </p>
          </div>
          
          <div style="margin-top:40px;padding-top:20px;border-top:1px solid #e5e5e5">
            <p style="color:#999;margin:0;font-size:11px;line-height:1.5">
              © ${new Date().getFullYear()} Big Boy Toyz. All rights reserved.
            </p>
          </div>
        </div>
      `
    };
  }
  
  // "Modifications" Enquiries
  if (['modifications', 'car_detailing', 'workshop_visit', 'project_estimate', 'services_contact', 'services_our_process'].includes(formType)) {
    return {
      subject: 'Thank You for Your Interest in Big Boy Toyz Modifications',
      html: `
        <div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Arial,sans-serif;max-width:600px;margin:0 auto;padding:40px 20px;background-color:#ffffff">
          <div style="border-bottom:1px solid #e5e5e5;padding-bottom:20px;margin-bottom:30px">
            <p style="margin:0;font-size:13px;color:#666;text-transform:uppercase;letter-spacing:0.5px">Big Boy Toyz</p>
          </div>
          
          <h2 style="color:#000;margin:0 0 24px 0;font-size:16px;font-weight:400">Hi ${customerName},</h2>
          
          <p style="color:#333;line-height:1.6;margin:0 0 16px 0;font-size:15px">
            Thank you for reaching out to Big Boy Toyz for your car modification needs.
          </p>
          
          <p style="color:#333;line-height:1.6;margin:0 0 30px 0;font-size:15px">
            Our customization team has received your enquiry and will get in touch with you shortly to discuss the details.
          </p>
          
          <div style="padding:16px 0;margin:30px 0;border-top:1px solid #e5e5e5;border-bottom:1px solid #e5e5e5">
            <p style="color:#666;margin:0 0 6px 0;font-size:12px">For faster assistance</p>
            <p style="color:#000;margin:0;font-size:16px">
              <a href="tel:+918999999627" style="color:#000;text-decoration:none">+91 8999 9996 27</a>
            </p>
          </div>
          
          <div style="margin-top:40px;padding-top:30px;border-top:1px solid #e5e5e5">
            <p style="color:#666;margin:0 0 8px 0;font-size:14px">
              Best regards,<br>
              Team Big Boy Toyz
            </p>
            <p style="margin:12px 0 0 0">
              <a href="https://www.bigboytoyz.com" style="color:#666;text-decoration:none;font-size:13px">www.bigboytoyz.com</a>
            </p>
          </div>
          
          <div style="margin-top:40px;padding-top:20px;border-top:1px solid #e5e5e5">
            <p style="color:#999;margin:0;font-size:11px;line-height:1.5">
              © ${new Date().getFullYear()} Big Boy Toyz. All rights reserved.
            </p>
          </div>
        </div>
      `
    };
  }
  
  // "Associates" Enquiries
  if (formType === 'associates') {
    return {
      subject: 'Thank You for Your Interest in Partnering with Big Boy Toyz',
      html: `
        <div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Arial,sans-serif;max-width:600px;margin:0 auto;padding:40px 20px;background-color:#ffffff">
          <div style="border-bottom:1px solid #e5e5e5;padding-bottom:20px;margin-bottom:30px">
            <p style="margin:0;font-size:13px;color:#666;text-transform:uppercase;letter-spacing:0.5px">Big Boy Toyz</p>
          </div>
          
          <h2 style="color:#000;margin:0 0 24px 0;font-size:16px;font-weight:400">Hi ${customerName},</h2>
          
          <p style="color:#333;line-height:1.6;margin:0 0 16px 0;font-size:15px">
            Thank you for your interest in partnering with Big Boy Toyz.
          </p>
          
          <p style="color:#333;line-height:1.6;margin:0 0 30px 0;font-size:15px">
            Our media team has received your enquiry and will reach out to you shortly to discuss potential collaboration opportunities.
          </p>
          
          <div style="padding:16px 0;margin:30px 0;border-top:1px solid #e5e5e5;border-bottom:1px solid #e5e5e5">
            <p style="color:#666;margin:0 0 6px 0;font-size:12px">For quicker response</p>
            <p style="color:#000;margin:0;font-size:16px">
              <a href="mailto:media@bigboytoyz.com" style="color:#000;text-decoration:none">media@bigboytoyz.com</a>
            </p>
          </div>
          
          <div style="margin-top:40px;padding-top:30px;border-top:1px solid #e5e5e5">
            <p style="color:#666;margin:0 0 8px 0;font-size:14px">
              Best regards,<br>
              Team Big Boy Toyz
            </p>
            <p style="margin:12px 0 0 0">
              <a href="https://www.bigboytoyz.com" style="color:#666;text-decoration:none;font-size:13px">www.bigboytoyz.com</a>
            </p>
          </div>
          
          <div style="margin-top:40px;padding-top:20px;border-top:1px solid #e5e5e5">
            <p style="color:#999;margin:0;font-size:11px;line-height:1.5">
              © ${new Date().getFullYear()} Big Boy Toyz. All rights reserved.
            </p>
          </div>
        </div>
      `
    };
  }
  
  // BBT Realty Enquiries
  if (['realty_homepage', 'realty_floating', 'realty_contact', 'realty_visit', 'realty_callback'].includes(formType)) {
    return {
      subject: 'Thank You for Your Interest in BBT Realty',
      html: `
        <div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Arial,sans-serif;max-width:600px;margin:0 auto;padding:40px 20px;background-color:#ffffff">
          <div style="border-bottom:1px solid #e5e5e5;padding-bottom:20px;margin-bottom:30px">
            <p style="margin:0;font-size:13px;color:#666;text-transform:uppercase;letter-spacing:0.5px">BBT Realty</p>
          </div>
          
          <h2 style="color:#000;margin:0 0 24px 0;font-size:16px;font-weight:400">Hi ${customerName},</h2>
          
          <p style="color:#333;line-height:1.6;margin:0 0 16px 0;font-size:15px">
            Thank you for your interest in our real estate projects.
          </p>
          
          <p style="color:#333;line-height:1.6;margin:0 0 30px 0;font-size:15px">
            Our realty team has received your enquiry and will connect with you shortly to share project details, pricing, availability, or schedule a site visit as per your request.
          </p>
          
          <div style="padding:16px 0;margin:30px 0;border-top:1px solid #e5e5e5;border-bottom:1px solid #e5e5e5">
            <p style="color:#666;margin:0 0 6px 0;font-size:12px">For quicker assistance</p>
            <p style="color:#000;margin:0;font-size:16px">
              <a href="tel:+919999999030" style="color:#000;text-decoration:none">+91 99999 990 30</a>
            </p>
            <p style="color:#000;margin:8px 0 0 0;font-size:14px">
              <a href="mailto:realty@bigboytoyz.com" style="color:#000;text-decoration:none">realty@bigboytoyz.com</a>
            </p>
          </div>
          
          <div style="margin-top:40px;padding-top:30px;border-top:1px solid #e5e5e5">
            <p style="color:#666;margin:0 0 8px 0;font-size:14px">
              Warm regards,<br>
              Team BBT Realty
            </p>
            <p style="margin:12px 0 0 0">
              <a href="https://bigboytoyz.com/realty" style="color:#666;text-decoration:none;font-size:13px">bigboytoyz.com/realty</a>
            </p>
          </div>
          
          <div style="margin-top:40px;padding-top:20px;border-top:1px solid #e5e5e5">
            <p style="color:#999;margin:0;font-size:11px;line-height:1.5">
              © ${new Date().getFullYear()} Big Boy Toyz Realty. All rights reserved.
            </p>
          </div>
        </div>
      `
    };
  }
  
  // Return null for other form types (no automated email)
  return null;
}

export async function POST(request) {
  try {
    // Configure SMTP settings for Nodemailer
    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = process.env.SMTP_PORT || 587;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const fromEmail = process.env.EMAIL_FROM || 'developer@bigboytoyz.com';

    if (!smtpHost || !smtpUser || !smtpPass) {
      return NextResponse.json(
        { success: false, message: 'SMTP configuration missing. Please set SMTP_HOST, SMTP_USER, and SMTP_PASS environment variables.' },
        { status: 500 }
      );
    }

    // Create Nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: parseInt(smtpPort),
      secure: parseInt(smtpPort) === 465, // true for 465, false for other ports
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    const contentType = request.headers.get('content-type') || '';
    let formType = 'form_submission';
    let data = {};
    let attachments = [];

    if (contentType.includes('multipart/form-data')) {
      const formData = await request.formData();
      formType = String(formData.get('form_type') || 'form_submission');
      // Convert non-file entries
      formData.forEach((value, key) => {
        if (!(value instanceof File)) {
          data[key] = value;
        }
      });
      attachments = await filesFromFormData(formData);
    } else {
      const body = await request.json();
      formType = String(body.form_type || 'form_submission');
      data = body.data || {};
      // Allow base64 attachments via JSON if provided
      if (Array.isArray(body.attachments)) {
        // Convert SendGrid-style attachments to Nodemailer format
        attachments = body.attachments
          .filter(Boolean)
          .slice(0, 10)
          .map(att => ({
            content: att.content,
            filename: att.filename,
            contentType: att.type || att.contentType || 'application/octet-stream',
          }));
      }
    }

    const to = getRecipients(formType);
    if (!to.length) {
      return NextResponse.json(
        { success: false, message: `Recipient for form_type ${formType} is not configured` },
        { status: 500 }
      );
    }

    const subject = makeSubject(formType);
    const html = `
      <div style="font-family:Inter,Arial,sans-serif">
        <h2 style="margin:0 0 8px 0">${subject}</h2>
        <p style="margin:0 0 12px 0;color:#555">You have received a new submission from the website.</p>
        ${objectToHtmlList(data)}
        <p style="margin-top:16px;color:#888;font-size:12px">This email was sent automatically by the website.</p>
      </div>
    `;

    const mailOptions = {
      from: `"BBT Website" <${fromEmail}>`,
      to: to.join(', '),
      subject,
      html,
      replyTo: pickReplyTo(data),
      attachments: attachments.length ? attachments : undefined,
    };

    // Send internal notification email
    await transporter.sendMail(mailOptions);

    // Send automated confirmation email to customer
    const customerEmail = getCustomerEmail(data);
    const customerName = getCustomerName(data);
    const customerTemplate = getCustomerEmailTemplate(formType, customerName);
    
    if (customerEmail && customerTemplate) {
      try {
        const customerMailOptions = {
          from: `"Big Boy Toyz" <${fromEmail}>`,
          to: customerEmail,
          subject: customerTemplate.subject,
          html: customerTemplate.html,
        };
        await transporter.sendMail(customerMailOptions);
      } catch (customerEmailErr) {
        // Log the error but don't fail the entire request
        console.error('Error sending customer confirmation email:', customerEmailErr);
      }
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Email sending error:', err);
    const message = err.message || 'Unknown error';
    return NextResponse.json({ success: false, message }, { status: 500 });
  }
}





