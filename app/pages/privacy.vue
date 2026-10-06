<script setup lang="ts">
useSeoMeta({
  title: "Privacy Policy | The Haven Event Space",
  description: "Privacy policy for thehaveneventspace.com.",
});

const year = new Date().getFullYear();
</script>

<template>
  <div>
    <UiPageHeader label="Legal" title="Privacy Policy" />

    <section class="section">
      <div class="policy-wrap">
        <UiReveal>
          <div class="policy">
            <div>
              <h2 class="policy__heading">Information We Collect</h2>
              <p>
                When you submit a contact form, schedule a tour, or apply for a
                position on this website, we collect the information you
                provide — such as your name, email address, phone number, and
                event details. We use this information solely to respond to
                your inquiry and communicate with you about your event.
              </p>
            </div>

            <div>
              <h2 class="policy__heading">How We Use Your Information</h2>
              <p>
                We use the information you provide to respond to your
                inquiries, process booking requests, and communicate relevant
                event information. We do not sell, trade, or rent your personal
                information to third parties.
              </p>
            </div>

            <div>
              <h2 class="policy__heading">Cookies</h2>
              <p>
                This website may use cookies to improve your browsing
                experience. You can choose to disable cookies through your
                browser settings, though some features of the site may not
                function as intended.
              </p>
            </div>

            <div>
              <h2 class="policy__heading">Third-Party Services</h2>
              <p>
                We use Calendly for tour scheduling. When you interact with
                Calendly, their privacy policy governs the collection of your
                information. Please review their privacy policy at
                calendly.com.
              </p>
            </div>

            <div>
              <h2 class="policy__heading">Contact</h2>
              <p>
                If you have questions about this privacy policy or how we
                handle your information, contact us at
                <a href="mailto:info@thehaveneventspace.com" class="policy__link">info@thehaveneventspace.com</a>
                or call
                <a href="tel:9135628787" class="policy__link">913-562-8787</a>.
              </p>
            </div>

            <p class="policy__updated">
              Last updated: {{ year }}. The Haven Event Space ·
              2210 W 247th Street, Louisburg, KS 66053.
            </p>
          </div>
        </UiReveal>
      </div>
    </section>
  </div>
</template>

<style scoped>
.policy-wrap {
  width: 100%;
  max-width: 800px;
  margin-inline: auto;
  padding-inline: 1.5rem;
}

.policy {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  font-size: 13px;
  font-weight: 300;
  line-height: 2;
  color: var(--color-ink-low);
}

.policy__heading {
  margin-bottom: 0.75rem;
  font-family: var(--font-display);
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-ink);
}

.policy__link {
  color: var(--color-ink);
}
.policy__link:hover {
  text-decoration: underline;
}

.policy__updated {
  padding-top: 1.5rem;
  font-size: 11px;
  letter-spacing: 0.05em;
  color: var(--color-ink-mid);
  border-top: 1px solid var(--color-rule);
}

@media (min-width: 768px) {
  .policy-wrap {
    padding-inline: 2.5rem;
  }
}
</style>
