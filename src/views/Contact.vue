<template>
  <section class="hero hero--compact">
    <div class="container">
      <div class="row">
        <div class="col-lg-8">
          <p class="surtitre">Contact</p>
          <h1 class="hero__titre mb-3">Me contacter</h1>
          <p class="hero__texte mb-0">
            Décrivez votre projet ou votre problème. Je réponds par écrit.
          </p>
        </div>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div class="row gy-5 gx-4">
        <div class="col-lg-5">
          <div class="fiche">
            <div class="fiche__ligne">
              <span class="fiche__cle">Courriel</span>
              <span class="fiche__valeur">
                <a href="mailto:contact@loicbarthoulot.ch">contact@loicbarthoulot.ch</a>
              </span>
            </div>
            <div class="fiche__ligne">
              <span class="fiche__cle">Zone d'intervention</span>
              <span class="fiche__valeur">Neuchâtel et Suisse romande</span>
            </div>
            <div class="fiche__ligne">
              <span class="fiche__cle">Délai de réponse</span>
              <span class="fiche__valeur">Par écrit, sous quelques jours</span>
            </div>
          </div>
        </div>

        <div class="col-lg-7">
          <div class="panneau">
            <h2 class="h5 mb-4">Formulaire</h2>

            <div aria-live="polite">
              <div v-if="showSuccess" class="alert alert-success" role="status">
                Votre message a été envoyé. Je vous réponds dès que possible.
              </div>
              <div v-if="showError" class="alert alert-danger" role="alert">
                L'envoi a échoué. Réessayez, ou écrivez directement à
                contact@loicbarthoulot.ch.
              </div>
            </div>

            <form @submit.prevent="submitForm" novalidate>
              <div class="row g-3">
                <div class="col-md-6">
                  <label for="firstName" class="form-label">Prénom</label>
                  <input
                    id="firstName"
                    type="text"
                    class="form-control"
                    :class="{ 'is-invalid': errors.firstName }"
                    v-model="form.firstName"
                    required
                    aria-required="true"
                    :aria-invalid="errors.firstName ? true : undefined"
                    aria-describedby="firstName-error"
                  >
                  <div id="firstName-error" class="invalid-feedback">{{ errors.firstName }}</div>
                </div>

                <div class="col-md-6">
                  <label for="lastName" class="form-label">Nom</label>
                  <input
                    id="lastName"
                    type="text"
                    class="form-control"
                    :class="{ 'is-invalid': errors.lastName }"
                    v-model="form.lastName"
                    required
                    aria-required="true"
                    :aria-invalid="errors.lastName ? true : undefined"
                    aria-describedby="lastName-error"
                  >
                  <div id="lastName-error" class="invalid-feedback">{{ errors.lastName }}</div>
                </div>

                <div class="col-12">
                  <label for="email" class="form-label">Adresse électronique</label>
                  <input
                    id="email"
                    type="email"
                    class="form-control"
                    :class="{ 'is-invalid': errors.email }"
                    v-model="form.email"
                    required
                    aria-required="true"
                    :aria-invalid="errors.email ? true : undefined"
                    aria-describedby="email-error"
                  >
                  <div id="email-error" class="invalid-feedback">{{ errors.email }}</div>
                </div>

                <div class="col-12">
                  <label for="subject" class="form-label">Sujet</label>
                  <select
                    id="subject"
                    class="form-select"
                    :class="{ 'is-invalid': errors.subject }"
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
                  <div id="subject-error" class="invalid-feedback">{{ errors.subject }}</div>
                </div>

                <div class="col-12">
                  <label for="message" class="form-label">Message</label>
                  <textarea
                    id="message"
                    rows="6"
                    class="form-control"
                    :class="{ 'is-invalid': errors.message }"
                    v-model="form.message"
                    placeholder="Décrivez votre projet ou votre problème."
                    required
                    aria-required="true"
                    :aria-invalid="errors.message ? true : undefined"
                    aria-describedby="message-error"
                  ></textarea>
                  <div id="message-error" class="invalid-feedback">{{ errors.message }}</div>
                </div>

                <!--
                  Champ leurre. Invisible à l'écran, retiré de l'ordre de
                  tabulation et masqué aux lecteurs d'écran : une personne ne
                  le remplit jamais, un robot qui remplit tout le remplit.
                  Ce n'est pas de la sécurité, c'est du filtrage de spam.
                -->
                <div class="champ-leurre" aria-hidden="true">
                  <label for="site-web">Ne remplissez pas ce champ</label>
                  <input
                    id="site-web"
                    type="text"
                    v-model="form.siteWeb"
                    tabindex="-1"
                    autocomplete="off"
                  >
                </div>

                <div class="col-12">
                  <button type="submit" class="btn btn-primary" :disabled="isSubmitting">
                    <span
                      v-if="isSubmitting"
                      class="spinner-border spinner-border-sm me-2"
                      aria-hidden="true"
                    ></span>
                    {{ isSubmitting ? 'Envoi en cours…' : 'Envoyer le message' }}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
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

const emptyForm = () => ({ firstName: '', lastName: '', email: '', subject: '', message: '', siteWeb: '' })
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

  // Champ leurre rempli : c'est un robot. On affiche le même message que
  // pour un envoi réussi, sans rien envoyer — lui signaler l'échec
  // reviendrait à lui apprendre à contourner le piège.
  if (form.value.siteWeb) {
    form.value = emptyForm()
    showSuccess.value = true
    return
  }

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
