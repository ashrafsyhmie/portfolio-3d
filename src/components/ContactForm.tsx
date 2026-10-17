import { useState, type FormEvent } from 'react';
import { ArrowUpRight } from 'lucide-react';

export function ContactForm() {
  const [draftOpened, setDraftOpened] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const fields = new FormData(form);
    const name = String(fields.get('name') ?? '').trim();
    const email = String(fields.get('email') ?? '').trim();
    const message = String(fields.get('message') ?? '').trim();
    if (!name || !email || !message || !form.reportValidity()) return;

    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:icerafsyahmie12@gmail.com?subject=${subject}&body=${body}`;
    setDraftOpened(true);
  }

  return (
    <form onSubmit={handleSubmit} onChange={() => setDraftOpened(false)} aria-label="Contact Ashraf" aria-describedby="contact-form-note" className="rounded-[28px] border border-[var(--button-border)] bg-[var(--card-bg)] p-6 sm:p-8">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className="mb-2 block text-sm font-medium">Your name</label>
          <input id="contact-name" name="name" autoComplete="name" required maxLength={100} pattern=".*\S.*" title="Enter your name." className="contact-input" />
        </div>
        <div>
          <label htmlFor="contact-email" className="mb-2 block text-sm font-medium">Email address</label>
          <input id="contact-email" name="email" type="email" autoComplete="email" required maxLength={254} className="contact-input" />
        </div>
      </div>
      <div className="mt-6">
        <label htmlFor="contact-message" className="mb-2 block text-sm font-medium">What would you like to discuss?</label>
        <textarea id="contact-message" name="message" required maxLength={1500} rows={5} onInput={(event) => event.currentTarget.setCustomValidity(event.currentTarget.value.trim() ? '' : 'Please enter a message.')} className="contact-input resize-y" />
      </div>
      <div className="mt-6 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <p id="contact-form-note" className="max-w-sm text-sm leading-relaxed text-[var(--page-muted)]">Opens a draft in your email app. Review it and press Send there, or email me directly below.</p>
        <button type="submit" className="inline-flex min-h-12 shrink-0 items-center justify-center gap-3 rounded-full bg-[var(--page-fg)] px-7 py-3 font-medium text-[var(--page-bg)] transition-opacity hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--page-fg)]">
          Open email draft <ArrowUpRight size={18} aria-hidden="true" />
        </button>
      </div>
      <p role="status" className="mt-4 text-sm text-[var(--page-muted)]">{draftOpened ? 'If your email app opened, send your message there. If it didn’t, use the email address below. Your details are still here to copy.' : ''}</p>
    </form>
  );
}
