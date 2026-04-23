<template>
  <div class="section-padding" style="min-height: 100vh;">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-8">
          <div class="text-center mb-5">
            <h1 class="display-4 fw-bold">Me Contacter</h1>
            <p class="lead">
              Une question ? Un projet ? N'hésitez pas à me contacter pour un devis gratuit
            </p>
          </div>

          <!-- Informations de contact -->
          <div class="row g-4 mb-5 justify-content-center">
            <div class="col-md-4 text-center">
              <div class="card card-custom contact-form-card h-100">
                <div class="card-body p-4">
                  <div class="icon-feature"><i class="fas fa-envelope"></i></div>
                  <h5>Email</h5>
                  <p>contact@loicbarthoulot.ch</p>
                </div>
              </div>
            </div>
            <div class="col-md-3 text-center">
              <div class="card card-custom contact-form-card h-100">
                <div class="card-body p-4">
                  <div class="icon-feature"><i class="fas fa-mobile-alt"></i></div>
                  <h5>Téléphone</h5>
                  <p>Après un premier contact</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Formulaire de contact -->
          <div class="card card-custom contact-form-card">
            <div class="card-body p-4">
              <h3 class="text-primary-custom mb-4">Formulaire de contact</h3>
              
              <div v-if="showSuccess" class="alert alert-success alert-dismissible" role="alert">
                <i class="fas fa-check-circle me-2"></i>
                Votre message a été envoyé avec succès ! Je vous répondrai dans les plus brefs délais.
                <button type="button" class="btn-close" @click="showSuccess = false" aria-label="Fermer"></button>
              </div>

              <div v-if="showError" class="alert alert-danger alert-dismissible" role="alert">
                <i class="fas fa-exclamation-circle me-2"></i>
                Une erreur est survenue lors de l'envoi. Veuillez réessayer.
                <button type="button" class="btn-close" @click="showError = false" aria-label="Fermer"></button>
              </div>

              <form @submit.prevent="submitForm" novalidate>
                <div class="row g-3">
                  <div class="col-md-6">
                    <label for="firstName" class="form-label text-color">Prénom *</label>
                    <input
                      type="text"
                      class="form-control"
                      :class="{ 'is-invalid': errors.firstName }"
                      id="firstName"
                      v-model="form.firstName"
                      aria-required="true"
                      :aria-invalid="errors.firstName ? true : undefined"
                      aria-describedby="firstName-error"
                    >
                    <div class="invalid-feedback" id="firstName-error">{{ errors.firstName }}</div>
                  </div>
                  <div class="col-md-6">
                    <label for="lastName" class="form-label text-color">Nom *</label>
                    <input
                      type="text"
                      class="form-control"
                      :class="{ 'is-invalid': errors.lastName }"
                      id="lastName"
                      v-model="form.lastName"
                      aria-required="true"
                      :aria-invalid="errors.lastName ? true : undefined"
                      aria-describedby="lastName-error"
                    >
                    <div class="invalid-feedback" id="lastName-error">{{ errors.lastName }}</div>
                  </div>
                  <div class="col-12">
                    <label for="email" class="form-label text-color">Email *</label>
                    <input
                      type="email"
                      class="form-control"
                      :class="{ 'is-invalid': errors.email }"
                      id="email"
                      v-model="form.email"
                      aria-required="true"
                      :aria-invalid="errors.email ? true : undefined"
                      aria-describedby="email-error"
                    >
                    <div class="invalid-feedback" id="email-error">{{ errors.email }}</div>
                  </div>
                  <div class="col-12">
                    <label for="subject" class="form-label text-color">Sujet *</label>
                    <select
                      class="form-select"
                      :class="{ 'is-invalid': errors.subject }"
                      id="subject"
                      v-model="form.subject"
                      aria-required="true"
                      :aria-invalid="errors.subject ? true : undefined"
                      aria-describedby="subject-error"
                    >
                      <option value="">Choisissez un sujet</option>
                      <option value="montage">Montage PC</option>
                      <option value="depannage">Dépannage / Réparation</option>
                      <option value="nettoyage">Nettoyage / Entretien</option>
                      <option value="autre">Autre</option>
                    </select>
                    <div class="invalid-feedback" id="subject-error">{{ errors.subject }}</div>
                  </div>
                  <div class="col-12">
                    <label for="message" class="form-label text-color">Message *</label>
                    <textarea
                      class="form-control"
                      :class="{ 'is-invalid': errors.message }"
                      id="message"
                      rows="5"
                      v-model="form.message"
                      placeholder="Décrivez votre projet ou votre problème..."
                      aria-required="true"
                      :aria-invalid="errors.message ? true : undefined"
                      aria-describedby="message-error"
                    ></textarea>
                    <div class="invalid-feedback" id="message-error">{{ errors.message }}</div>
                  </div>
                  <div class="col-12">
                    <button 
                      type="submit" 
                      class="btn btn-primary-custom btn-lg"
                      :disabled="isSubmitting"
                    >
                      <span v-if="isSubmitting">
                        <i class="fas fa-spinner fa-spin me-2"></i>Envoi en cours...
                      </span>
                      <span v-else>
                        <i class="fas fa-paper-plane me-2"></i>Envoyer le message
                      </span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { usePageMeta } from '@/composables/usePageMeta'
import emailjs from '@emailjs/browser'

usePageMeta(
  'Contact | Loïc Barthoulot',
  'Contactez Loïc Barthoulot pour un devis, une question ou une démo gratuite. Réponse rapide.',
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
  if (!form.value.email.trim()) errors.value.email = 'L\'adresse email est requise.'
  else if (!EMAIL_RE.test(form.value.email)) errors.value.email = 'Adresse email invalide.'
  if (!form.value.subject) errors.value.subject = 'Veuillez choisir un sujet.'
  if (!form.value.message.trim()) errors.value.message = 'Le message est requis.'
  else if (form.value.message.trim().length < 10) errors.value.message = 'Le message doit contenir au moins 10 caractères.'
  return Object.values(errors.value).every(e => !e)
}

const submitForm = async () => {
  if (!validate()) return
  isSubmitting.value = true
  showError.value = false

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
    setTimeout(() => { showSuccess.value = false }, 5000)
  } catch (error) {
    void error
    showError.value = true
    setTimeout(() => { showError.value = false }, 5000)
  } finally {
    isSubmitting.value = false
  }
}
</script>

<style scoped>
.form-control, .form-select {
  background-color: var(--surface) !important;
  border-color: var(--border) !important;
  color: var(--text) !important;
}

.form-control:focus, .form-select:focus {
  background-color: var(--surface) !important;
  border-color: var(--primary) !important;
  color: var(--text) !important;
  box-shadow: 0 0 0 0.2rem rgba(11, 94, 215, 0.25) !important;
}

.form-control::placeholder {
  color: var(--muted) !important;
}

.btn-primary-custom {
  background-color: #0d6efd; /* Bleu Bootstrap par défaut */
  color: #fff;
  border: none;
  transition: all 0.3s ease;
}
</style>