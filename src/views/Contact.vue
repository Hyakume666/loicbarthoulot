<template>
  <section class="section">
    <div class="contenu">
      <header class="tete">
        <h1>Me contacter</h1>
        <p class="tete__intro">
          Décrivez votre projet ou votre problème. Je réponds par écrit.
        </p>
      </header>

      <div class="coordonnees">
        <div>
          <h2 class="coordonnees__titre">Courriel</h2>
          <p><a href="mailto:contact@loicbarthoulot.ch">contact@loicbarthoulot.ch</a></p>
        </div>
        <div>
          <h2 class="coordonnees__titre">Zone d'intervention</h2>
          <p>Neuchâtel et Suisse romande</p>
        </div>
      </div>
    </div>
  </section>

  <section class="section section--net">
    <div class="contenu">
      <h2 class="formulaire__titre">Formulaire</h2>

      <div aria-live="polite">
        <p v-if="showSuccess" class="avis">
          Votre message a été envoyé. Je vous réponds dès que possible.
        </p>
        <p v-if="showError" class="avis avis--erreur">
          L'envoi a échoué. Réessayez, ou écrivez directement à
          contact@loicbarthoulot.ch.
        </p>
      </div>

      <form class="formulaire" @submit.prevent="submitForm" novalidate>
        <div class="colonnes colonnes--2">
          <div class="champ-groupe">
            <label for="firstName" class="champ-libelle">Prénom</label>
            <input
              id="firstName"
              class="champ"
              type="text"
              v-model="form.firstName"
              required
              aria-required="true"
              :aria-invalid="errors.firstName ? true : undefined"
              aria-describedby="firstName-error"
            >
            <p v-if="errors.firstName" id="firstName-error" class="champ-erreur">
              {{ errors.firstName }}
            </p>
          </div>

          <div class="champ-groupe">
            <label for="lastName" class="champ-libelle">Nom</label>
            <input
              id="lastName"
              class="champ"
              type="text"
              v-model="form.lastName"
              required
              aria-required="true"
              :aria-invalid="errors.lastName ? true : undefined"
              aria-describedby="lastName-error"
            >
            <p v-if="errors.lastName" id="lastName-error" class="champ-erreur">
              {{ errors.lastName }}
            </p>
          </div>
        </div>

        <div class="champ-groupe">
          <label for="email" class="champ-libelle">Adresse électronique</label>
          <input
            id="email"
            class="champ"
            type="email"
            v-model="form.email"
            required
            aria-required="true"
            :aria-invalid="errors.email ? true : undefined"
            aria-describedby="email-error"
          >
          <p v-if="errors.email" id="email-error" class="champ-erreur">
            {{ errors.email }}
          </p>
        </div>

        <div class="champ-groupe">
          <label for="subject" class="champ-libelle">Sujet</label>
          <select
            id="subject"
            class="champ"
            v-model="form.subject"
            required
            aria-required="true"
            :aria-invalid="errors.subject ? true : undefined"
            aria-describedby="subject-error"
          >
            <option value="">Choisissez un sujet</option>
            <option value="application-metier">Application métier</option>
            <option value="processus">Digitalisation de processus</option>
            <option value="site-web">Site web</option>
            <option value="support-materiel">Support et matériel</option>
            <option value="autre">Autre</option>
          </select>
          <p v-if="errors.subject" id="subject-error" class="champ-erreur">
            {{ errors.subject }}
          </p>
        </div>

        <div class="champ-groupe">
          <label for="message" class="champ-libelle">Message</label>
          <textarea
            id="message"
            class="champ"
            rows="6"
            v-model="form.message"
            placeholder="Décrivez votre projet ou votre problème."
            required
            aria-required="true"
            :aria-invalid="errors.message ? true : undefined"
            aria-describedby="message-error"
          ></textarea>
          <p v-if="errors.message" id="message-error" class="champ-erreur">
            {{ errors.message }}
          </p>
        </div>

        <div>
          <button type="submit" class="bouton" :disabled="isSubmitting">
            {{ isSubmitting ? 'Envoi en cours…' : 'Envoyer le message' }}
          </button>
        </div>
      </form>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { usePageMeta } from '@/composables/usePageMeta'
import emailjs from '@emailjs/browser'

usePageMeta(
  'Me contacter | Loïc Barthoulot',
  'Contactez Loïc Barthoulot au sujet d\'une application métier, d\'un processus à digitaliser, d\'un site web ou d\'un poste de travail.',
  { path: '/contact' }
)

const emptyForm = () => ({ firstName: '', lastName: '', email: '', subject: '', message: '' })
const emptyErrors = () => ({ firstName: '', lastName: '', email: '', subject: '', message: '' })

const form = ref(emptyForm())
const errors = ref(emptyErrors())
const isSubmitting = ref(false)
const showSuccess = ref(false)
const showError = ref(false)

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const validate = (): boolean => {
  errors.value = emptyErrors()
  if (!form.value.firstName.trim()) errors.value.firstName = 'Le prénom est requis.'
  if (!form.value.lastName.trim()) errors.value.lastName = 'Le nom est requis.'
  if (!form.value.email.trim()) errors.value.email = 'L\'adresse est requise.'
  else if (!EMAIL_RE.test(form.value.email)) errors.value.email = 'Adresse invalide.'
  if (!form.value.subject) errors.value.subject = 'Choisissez un sujet.'
  if (!form.value.message.trim()) errors.value.message = 'Le message est requis.'
  else if (form.value.message.trim().length < 10) errors.value.message = 'Le message doit contenir au moins 10 caractères.'
  return Object.values(errors.value).every(e => !e)
}

const submitForm = async () => {
  showSuccess.value = false
  showError.value = false
  if (!validate()) return
  isSubmitting.value = true

  try {
    await emailjs.send(
      'service_01r3h6v',
      'template_en5rdnk',
      {
        from_name: `${form.value.firstName} ${form.value.lastName}`,
        from_email: form.value.email,
        subject: form.value.subject,
        message: form.value.message
      },
      'bPELV2NdtsMXZ_THB'
    )
    form.value = emptyForm()
    showSuccess.value = true
  } catch (error) {
    void error
    showError.value = true
  } finally {
    isSubmitting.value = false
  }
}
</script>

<style scoped>
.tete {
  margin-bottom: var(--e-7);
}

.tete__intro {
  margin-top: var(--e-4);
  font-size: var(--pas-2);
  color: var(--texte-faible);
  max-width: 42ch;
}

.coordonnees {
  display: grid;
  gap: var(--e-5) var(--e-8);
  border-top: 1px solid var(--trait);
  padding-top: var(--e-5);
}

@media (min-width: 48rem) {
  .coordonnees {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

.coordonnees__titre {
  font-size: var(--pas-0);
  font-weight: 500;
  color: var(--texte-faible);
  margin-bottom: var(--e-2);
}

.section--net {
  background-color: var(--blanc);
  border-top: 1px solid var(--trait);
}

.formulaire__titre {
  margin-bottom: var(--e-6);
}

.formulaire {
  display: flex;
  flex-direction: column;
  gap: var(--e-5);
  max-width: 40rem;
}

.avis {
  margin-bottom: var(--e-5);
  max-width: 40rem;
}
</style>
