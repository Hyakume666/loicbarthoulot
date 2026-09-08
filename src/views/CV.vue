<template>
  <section class="hero">
    <div class="container">
      <div class="row">
        <div class="col-lg-8">
          <p class="surtitre">Parcours</p>
          <h1 class="hero__titre mb-3">Mon parcours</h1>
          <p class="hero__texte mb-4">
            Développement web, sécurité opérationnelle et support informatique
            pour PME romandes
          </p>

          <p class="disponibilite">
            Je termine mon Bachelor HES-SO en juillet 2027 et je cherche un
            poste à partir de cette date.
          </p>

          <div class="d-flex flex-wrap gap-3">
            <router-link to="/contact" class="btn btn-primary">Me contacter</router-link>
            <a
              href="https://www.linkedin.com/in/loic-barthoulot/"
              class="btn btn-outline-light"
              target="_blank"
              rel="noopener noreferrer"
            >LinkedIn</a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div class="row gy-5 gx-4">
        <div class="col-lg-8">

          <!-- Profil -->
          <h2 class="h4 mb-4">À propos</h2>
          <p class="text-body-secondary">
            Je suis en dernière année de Bachelor HES-SO en informatique de gestion
            à la HE-Arc, à Neuchâtel. Mon travail consiste à comprendre comment une
            entreprise fonctionne, puis à construire l'outil qui lui fait gagner du
            temps : site web, automatisation d'un processus, application métier ou
            reprise d'une infrastructure existante.
          </p>
          <p class="text-body-secondary">
            Mon parcours est passé par un CFC d'employé de commerce avant l'informatique.
            C'est ce qui me permet de parler comptabilité, processus et contraintes
            d'organisation avec un client, pas seulement technique.
          </p>
          <p class="text-body-secondary mb-5">
            En parallèle de mes études, j'interviens en prestation indépendante pour
            PC-Shop Informatique sur la sécurité opérationnelle de leur parc client,
            et je réalise des mandats de développement web pour mes propres clients.
          </p>

          <!-- Expériences -->
          <h2 class="h4 mb-4">Expérience</h2>

          <article class="entree-cv">
            <div class="entree-cv__tete mb-2">
              <h3 class="h6 mb-0">Développement web &amp; prestations informatiques</h3>
              <p class="entree-cv__date mb-0">2023 – aujourd'hui</p>
            </div>
            <p class="entree-cv__lieu mb-3">Activité indépendante — loicbarthoulot.ch</p>
            <ul class="liste-marquee">
              <li>Conception et développement de sites web sur mesure (Vue 3 / TypeScript, WordPress)</li>
              <li>Analyse du besoin client et cadrage avant développement</li>
              <li>Assemblage, diagnostic et remise en état de postes de travail</li>
              <li>Conseil en choix de matériel et accompagnement des utilisateurs</li>
            </ul>
          </article>

          <article class="entree-cv">
            <div class="entree-cv__tete mb-2">
              <h3 class="h6 mb-0">Prestataire IT — sécurité opérationnelle</h3>
              <p class="entree-cv__date mb-0">07/2023 – aujourd'hui</p>
            </div>
            <p class="entree-cv__lieu mb-3">PC-Shop Informatique, Corcelles-Cormondrèche — mandat indépendant</p>
            <ul class="liste-marquee">
              <li>Administration de la console XDR (Trend Micro) sur le parc client de l'entreprise</li>
              <li>Surveillance des détections, qualification et traitement des alertes</li>
              <li>Suivi de l'état de protection des postes et remontée des cas nécessitant une intervention</li>
            </ul>
          </article>

          <article class="entree-cv">
            <div class="entree-cv__tete mb-2">
              <h3 class="h6 mb-0">Hotline — service informatique</h3>
              <p class="entree-cv__date mb-0">Année académique 2026 – 2027</p>
            </div>
            <p class="entree-cv__lieu mb-0">
              HE-Arc, Neuchâtel — support de premier niveau aux étudiants et au personnel,
              en parallèle du cursus.
            </p>
          </article>

          <article class="entree-cv mb-5">
            <div class="entree-cv__tete mb-2">
              <h3 class="h6 mb-0">Stagiaire en informatique</h3>
              <p class="entree-cv__date mb-0">08/2020 – 08/2021</p>
            </div>
            <p class="entree-cv__lieu mb-3">PC-Shop Informatique, Corcelles-Cormondrèche</p>
            <ul class="liste-marquee">
              <li>Installation et configuration de postes de travail</li>
              <li>Diagnostic et réparation matérielle et logicielle</li>
              <li>Support utilisateur et suivi des interventions</li>
            </ul>
          </article>

          <!-- Formation -->
          <h2 class="h4 mb-4">Formation</h2>

          <article class="entree-cv">
            <div class="entree-cv__tete mb-2">
              <h3 class="h6 mb-0">Bachelor of Science HES-SO en informatique de gestion</h3>
              <p class="entree-cv__date mb-0">2023 – 2027</p>
            </div>
            <p class="entree-cv__lieu mb-3">HE-Arc Gestion, Neuchâtel — cursus à temps partiel, dernière année en cours</p>
            <div class="row g-4">
              <div class="col-md-6">
                <p class="small fw-semibold mb-2">Axes principaux</p>
                <ul class="liste-marquee small">
                  <li>Développement logiciel et technologies web</li>
                  <li>Bases de données et modélisation</li>
                  <li>Analyse métier et urbanisation des SI</li>
                </ul>
              </div>
              <div class="col-md-6">
                <p class="small fw-semibold mb-2">Également étudiés</p>
                <ul class="liste-marquee small">
                  <li>Sécurité informatique et gouvernance des SI</li>
                  <li>Gestion de projet et conduite d'équipe</li>
                  <li>Comptabilité, marketing et organisation d'entreprise</li>
                </ul>
              </div>
            </div>
          </article>

          <article class="entree-cv">
            <div class="entree-cv__tete mb-2">
              <h3 class="h6 mb-0">Bachelor HES-SO en ingénierie logicielle</h3>
              <p class="entree-cv__date mb-0">2021 – 2023</p>
            </div>
            <p class="entree-cv__lieu mb-0">
              HE-Arc, Neuchâtel — deux ans validés, puis réorientation vers l'informatique
              de gestion pour rapprocher la technique des enjeux d'entreprise.
            </p>
          </article>

          <article class="entree-cv">
            <div class="entree-cv__tete mb-2">
              <h3 class="h6 mb-0">CFC d'employé de commerce et maturité professionnelle</h3>
              <p class="entree-cv__date mb-0">2012 – 2015</p>
            </div>
            <p class="entree-cv__lieu mb-0">CIFOM ESTER, La Chaux-de-Fonds</p>
          </article>

        </div>

        <!-- Compétences -->
        <div class="col-lg-4">
          <div class="panneau">
            <h2 class="h5 mb-4">Compétences</h2>

            <h3 class="h6 mb-1">Analyse et processus métier</h3>
            <p class="small text-body-secondary mb-2">
              Traduire un fonctionnement d'entreprise en système utilisable.
            </p>
            <ul class="liste-marquee small mb-4">
              <li>Analyse des besoins et des processus métiers</li>
              <li>Modélisation BPMN et UML</li>
              <li>Gestion documentaire (GED)</li>
              <li>Conception de données : MERISE, MCD / MLD / MPD</li>
              <li>Progiciels de gestion intégrés (ERP)</li>
              <li>Conduite de projet et méthodes agiles</li>
            </ul>

            <h3 class="h6 mb-1">Développement</h3>
            <p class="small text-body-secondary mb-2">
              Applications métier, interfaces web et bases de données.
            </p>
            <ul class="liste-marquee small mb-4">
              <li>Java — POO, Hibernate 6, JDBC</li>
              <li>JavaScript / TypeScript, Vue 3</li>
              <li>HTML / CSS, intégration responsive</li>
              <li>SQL et Oracle — requêtes avancées, PL/SQL, XML</li>
              <li>Architecture logicielle et design patterns</li>
              <li>Conception d'interface et expérience utilisateur</li>
            </ul>

            <h3 class="h6 mb-1">Infrastructure et sécurité</h3>
            <p class="small text-body-secondary mb-2">
              Déployer, faire tourner et protéger ce qui est en production.
            </p>
            <ul class="liste-marquee small mb-4">
              <li>Détection et réponse (XDR / EDR) en environnement client</li>
              <li>Gouvernance de la sécurité des SI</li>
              <li>Docker — images, volumes, réseaux, multi-stage builds</li>
              <li>Windows 10 / 11 et Linux</li>
              <li>Réseaux locaux et infrastructure</li>
              <li>Virtualisation (VMware, VirtualBox), notions Kubernetes / K3s</li>
            </ul>

            <h3 class="h6 mb-1">Conformité et cadre légal</h3>
            <p class="small text-body-secondary mb-2">
              Utile dès qu'un site ou une application traite des données de clients.
            </p>
            <ul class="liste-marquee small mb-0">
              <li>Protection des données : nLPD et RGPD</li>
              <li>Numérique responsable et éthique des technologies</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="section section--surface">
    <div class="container">
      <div class="row">
        <div class="col-lg-7">
          <h2 class="mb-3">Aller plus loin</h2>
          <p class="text-body-secondary mb-4">
            Pour une version détaillée avec références et coordonnées complètes,
            écrivez-moi.
          </p>
          <div class="d-flex flex-wrap gap-3">
            <router-link to="/contact" class="btn btn-primary">Me contacter</router-link>
            <a
              href="https://www.linkedin.com/in/loic-barthoulot/"
              class="btn btn-outline-light"
              target="_blank"
              rel="noopener noreferrer"
            >LinkedIn</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { usePageMeta } from '@/composables/usePageMeta'
usePageMeta(
  'Mon CV | Loïc Barthoulot',
  'Parcours, compétences et expériences de Loïc Barthoulot : développement web, sécurité opérationnelle et support informatique pour PME romandes.',
  { path: '/cv', type: 'profile' }
)
</script>
