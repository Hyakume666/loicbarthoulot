<template>
  <div class="section-padding" style="min-height: 100vh;">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-8">
          <div class="text-center mb-5">
            <h1 class="display-4 fw-bold" style="color: var(--text) !important;">Me Contacter</h1>
            <p class="lead" style="color: var(--muted) !important;">
              Une question ? Un projet ? N'hésitez pas à me contacter pour un devis gratuit
            </p>
          </div>

          <!-- Informations de contact -->
          <div class="row g-4 mb-5 justify-content-center">
            <div class="col-md-4 text-center">
              <div class="card card-custom contact-form-card h-100">
                <div class="card-body p-4">
                  <div class="icon-feature">📧</div>
                  <h5 style="color: var(--text) !important;">Email</h5>
                  <p style="color: var(--text) !important;">barthoulot12@gmail.com</p>
                </div>
              </div>
            </div>
            <div class="col-md-3 text-center">
              <div class="card card-custom contact-form-card h-100">
                <div class="card-body p-4">
                  <div class="icon-feature">📱</div>
                  <h5 style="color: var(--text) !important;">Téléphone</h5>
                  <p style="color: var(--text) !important;">Après un premier contact</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Formulaire de contact -->
          <div class="card card-custom contact-form-card">
            <div class="card-body p-4">
              <h3 class="text-primary-custom mb-4">Formulaire de contact</h3>
              
              <div v-if="showSuccess" class="alert alert-success" role="alert">
                <i class="fas fa-check-circle me-2"></i>
                Votre message a été envoyé avec succès ! Je vous répondrai dans les plus brefs délais.
              </div>

              <form @submit.prevent="submitForm">
                <div class="row g-3">
                  <div class="col-md-6">
                    <label for="firstName" class="form-label" style="color: var(--text) !important;">Prénom *</label>
                    <input 
                      type="text" 
                      class="form-control" 
                      id="firstName" 
                      v-model="form.firstName" 
                      required
                    >
                  </div>
                  <div class="col-md-6">
                    <label for="lastName" class="form-label" style="color: var(--text) !important;">Nom *</label>
                    <input 
                      type="text" 
                      class="form-control" 
                      id="lastName" 
                      v-model="form.lastName" 
                      required
                    >
                  </div>
                  <div class="col-12">
                    <label for="email" class="form-label" style="color: var(--text) !important;">Email *</label>
                    <input 
                      type="email" 
                      class="form-control" 
                      id="email" 
                      v-model="form.email" 
                      required
                    >
                  </div>
                  <div class="col-12">
                    <label for="subject" class="form-label" style="color: var(--text) !important;">Sujet *</label>
                    <select 
                      class="form-select" 
                      id="subject" 
                      v-model="form.subject" 
                      required
                    >
                      <option value="">Choisissez un sujet</option>
                      <option value="montage">Montage PC</option>
                      <option value="depannage">Dépannage / Réparation</option>
                      <option value="nettoyage">Nettoyage / Entretien</option>
                      <option value="autre">Autre</option>
                    </select>
                  </div>
                  <div class="col-12">
                    <label for="message" class="form-label" style="color: var(--text) !important;">Message *</label>
                    <textarea 
                      class="form-control" 
                      id="message" 
                      rows="5" 
                      v-model="form.message" 
                      required
                      placeholder="Décrivez votre projet ou votre problème..."
                    ></textarea>
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
import emailjs from 'emailjs-com'

const form = ref({
  firstName: '',
  lastName: '',
  email: '',
  subject: '',
  message: ''
})

const isSubmitting = ref(false)
const showSuccess = ref(false)

const submitForm = async () => {
  isSubmitting.value = true
  
  try {
    // Configuration EmailJS (remplacez par vos propres IDs)
    await emailjs.send(
      'YOUR_SERVICE_ID', // Service ID EmailJS
      'YOUR_TEMPLATE_ID', // Template ID EmailJS
      {
        from_name: `${form.value.firstName} ${form.value.lastName}`,
        from_email: form.value.email,
        subject: form.value.subject,
        message: form.value.message,
        to_email: 'loic.barthoulot@email.com'
      },
      'YOUR_PUBLIC_KEY' // Public Key EmailJS
    )
    
    showSuccess.value = true
    // Reset form
    form.value = {
      firstName: '',
      lastName: '',
      email: '',
      subject: '',
      message: ''
    }
    
    // Hide success message after 5 seconds
    setTimeout(() => {
      showSuccess.value = false
    }, 5000)
  } catch (error) {
    console.error('Erreur lors de l\'envoi:', error)
    alert('Une erreur est survenue lors de l\'envoi. Veuillez réessayer.')
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
</style>