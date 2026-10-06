<script setup lang="ts">
import {
  IconMapPin,
  IconPhone,
  IconMail,
  IconBrandInstagram,
  IconBrandFacebook,
  IconBrandTiktok,
  IconBrandYoutube,
} from "@tabler/icons-vue";

useSeoMeta({
  title: "Contact | The Haven Event Space",
  description:
    "Get in touch with The Haven Event Space team — call, email, or fill out our contact form to start planning your event.",
});

const SOCIALS = [
  { icon: IconBrandInstagram, href: "https://www.instagram.com/thehavenkc", label: "Instagram @thehavenkc" },
  { icon: IconBrandFacebook, href: "https://www.facebook.com/thehavenkc", label: "Facebook @thehavenkc" },
  { icon: IconBrandTiktok, href: "https://www.tiktok.com/@thehaveneventspace", label: "TikTok @thehaveneventspace" },
  { icon: IconBrandYoutube, href: "https://www.youtube.com/channel/UClT7tf5gPqvwX86N7fOx35Q", label: "YouTube" },
];
</script>

<template>
  <div>
    <UiPageHeader
      label="Get in touch"
      title="Let's talk"
      title-italic="dates."
      subtitle="Tours available 7 days a week. Reach out and we'll get back to you within 24 hours."
    />

    <section class="section">
      <div class="container">
        <div class="contact cells">
          <!-- Left panel -->
          <UiReveal class="contact__left">
            <div class="cell contact__panel">
              <!-- Logo -->
              <div>
                <div class="logo__name">The Haven</div>
                <div class="logo__sub">Event Space</div>
              </div>

              <p class="body-text">Contact us to turn your dream event into a reality.</p>

              <!-- Info -->
              <div class="info">
                <div class="info__row">
                  <IconMapPin :size="14" class="info__icon" />
                  <div>
                    <div class="field-label">Address</div>
                    <p class="info__text">
                      2210 W 247th Street<br />
                      Louisburg, Kansas 66053
                    </p>
                  </div>
                </div>
                <div class="info__row">
                  <IconPhone :size="14" class="info__icon" />
                  <div>
                    <div class="field-label">Phone</div>
                    <a href="tel:9135628787" class="info__link info__link--phone">913-562-8787</a>
                  </div>
                </div>
                <div class="info__row">
                  <IconMail :size="14" class="info__icon" />
                  <div>
                    <div class="field-label">Email</div>
                    <a href="mailto:info@thehaveneventspace.com" class="info__link">info@thehaveneventspace.com</a>
                  </div>
                </div>
              </div>

              <!-- Socials -->
              <div>
                <div class="socials__title">Follow us</div>
                <div class="socials">
                  <a
                    v-for="social in SOCIALS"
                    :key="social.href"
                    :href="social.href"
                    target="_blank"
                    rel="noopener noreferrer"
                    :aria-label="social.label"
                    class="socials__link"
                  >
                    <component :is="social.icon" :size="16" />
                  </a>
                </div>
              </div>

              <a
                href="https://calendly.com/thehaveneventspace"
                target="_blank"
                rel="noopener noreferrer"
                class="btn btn--sm btn--solid contact__tour"
              >
                Schedule a Tour
              </a>
            </div>
          </UiReveal>

          <!-- Right: contact form -->
          <UiReveal :delay="0.1" class="contact__right">
            <div class="cell contact__form-wrap">
              <div class="socials__title contact__form-title">Send a message</div>

              <form class="form" action="#" method="POST">
                <div class="form__row">
                  <div>
                    <label class="field-label" for="first_name">First name</label>
                    <input id="first_name" class="field" type="text" name="first_name" required placeholder="First" />
                  </div>
                  <div>
                    <label class="field-label" for="last_name">Last name</label>
                    <input id="last_name" class="field" type="text" name="last_name" required placeholder="Last" />
                  </div>
                </div>

                <div>
                  <label class="field-label" for="email">Email address</label>
                  <input id="email" class="field" type="email" name="email" required placeholder="you@example.com" />
                </div>

                <div>
                  <label class="field-label" for="phone">Phone number</label>
                  <input id="phone" class="field" type="tel" name="phone" placeholder="(913) 000-0000" />
                </div>

                <div>
                  <label class="field-label" for="event_type">Event type</label>
                  <select id="event_type" class="field field--select" name="event_type">
                    <option value="">Select event type</option>
                    <option>Wedding</option>
                    <option>Corporate event</option>
                    <option>Private party</option>
                    <option>Styled shoot</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label class="field-label" for="event_date">Estimated event date</label>
                  <input id="event_date" class="field" type="date" name="event_date" />
                </div>

                <div>
                  <label class="field-label" for="message">Message</label>
                  <textarea
                    id="message"
                    class="field field--textarea"
                    name="message"
                    rows="5"
                    placeholder="Tell us about your event..."
                  ></textarea>
                </div>

                <button type="submit" class="btn btn--solid">Send Message</button>
              </form>
            </div>
          </UiReveal>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* 5-column grid on large screens: left panel 2, form 3 */
.contact {
  gap: 0;
}
.contact__panel {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  padding-block: 3rem;
}
.contact__form-wrap {
  padding-block: 3rem;
}
.contact__tour {
  align-self: flex-start;
  padding: 0.75rem 1.5rem;
}

.logo__name {
  font-family: var(--font-display);
  font-size: 28px;
  line-height: 1;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-ink);
}
.logo__sub {
  margin-top: 0.25rem;
  font-size: 9px;
  font-weight: 500;
  letter-spacing: 0.35em;
  text-transform: uppercase;
  color: var(--color-ink-mid);
}

.info {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}
.info__row {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
}
.info__icon {
  flex-shrink: 0;
  margin-top: 2px;
  color: var(--color-ink-mid);
}
.info__text,
.info__link {
  font-size: 12px;
  letter-spacing: 0.04em;
  line-height: 1.625;
  color: var(--color-ink-low);
  transition: color 0.15s;
}
.info__link--phone {
  letter-spacing: 0.06em;
}
.info__link:hover {
  color: var(--color-ink);
}

.field-label {
  display: block;
  margin-bottom: 0.25rem;
  font-size: 9px;
  font-weight: 500;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: var(--color-ink-mid);
}
.form .field-label {
  margin-bottom: 0.5rem;
}

.socials__title {
  margin-bottom: 0.75rem;
  font-size: 9px;
  font-weight: 500;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: var(--color-ink-mid);
}
.contact__form-title {
  margin-bottom: 2rem;
}
.socials {
  display: flex;
  gap: 1rem;
}
.socials__link {
  color: var(--color-ink-mid);
  transition: color 0.15s;
}
.socials__link:hover {
  color: var(--color-ink);
}

.form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}
.form__row {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
}

.field {
  width: 100%;
  padding: 0.75rem 1rem;
  font-family: var(--font-body);
  font-size: 12px;
  color: var(--color-ink);
  background: var(--color-canvas);
  border: 1px solid var(--color-rule);
  border-radius: 0;
  transition: border-color 0.15s;
}
.field::placeholder {
  color: var(--color-ink-low);
}
.field:focus {
  outline: none;
  border-color: var(--color-ink);
}
.field--select {
  appearance: none;
}
.field--textarea {
  resize: none;
}

@media (min-width: 640px) {
  .form__row {
    grid-template-columns: 1fr 1fr;
  }
}
@media (min-width: 1024px) {
  .contact {
    grid-template-columns: repeat(5, 1fr);
  }
  .contact__left {
    grid-column: span 2;
  }
  .contact__right {
    grid-column: span 3;
  }
}
</style>
