<template>
  <!-- Le CV ouvre sur un bloc, puis reste calme : c'est la page la plus
       dense du site, le contenu doit y respirer. -->
  <section class="bloc bloc--cv">
    <div class="contenu">
      <h1 class="bloc__titre cv__titre">Mon parcours</h1>
      <p class="bloc__texte">
        Applications métier, sites web et infrastructure pour PME romandes
      </p>
    </div>
  </section>

  <section class="section">
    <div class="contenu cv">

      <!-- Profil -->
      <section class="cv__bloc">
        <h2 class="cv__rubrique">À propos</h2>
        <div class="pile">
          <p>
            Je suis en dernière année de Bachelor HES-SO en informatique de gestion
            à la HE-Arc, à Neuchâtel. Mon travail consiste à comprendre comment une
            entreprise fonctionne, puis à construire l'outil qui lui fait gagner du
            temps : application métier, automatisation d'un processus, site web ou
            reprise d'une infrastructure existante.
          </p>
          <p>
            Mon parcours est passé par un CFC d'employé de commerce avant l'informatique.
            C'est ce qui me permet de parler comptabilité, processus et contraintes
            d'organisation avec un client, pas seulement technique.
          </p>
          <p>
            En parallèle de mes études, j'interviens en prestation indépendante pour
            PC-Shop Informatique sur la sécurité opérationnelle de leur parc client,
            et je réalise des mandats de développement web pour mes propres clients.
          </p>
        </div>
      </section>

      <!-- Expériences -->
      <section class="cv__bloc">
        <h2 class="cv__rubrique">Expérience</h2>

        <article class="entree">
          <div class="entree__tete">
            <h3 class="entree__titre">Développement web &amp; prestations informatiques</h3>
            <p class="entree__date">2023 – aujourd'hui</p>
          </div>
          <p class="entree__lieu">Activité indépendante — loicbarthoulot.ch</p>
          <ul class="liste">
            <li>Conception et développement de sites web sur mesure (Vue 3 / TypeScript, WordPress)</li>
            <li>Analyse du besoin client et cadrage avant développement</li>
            <li>Assemblage, diagnostic et remise en état de postes de travail</li>
            <li>Conseil en choix de matériel et accompagnement des utilisateurs</li>
          </ul>
        </article>

        <article class="entree">
          <div class="entree__tete">
            <h3 class="entree__titre">Prestataire IT — sécurité opérationnelle</h3>
            <p class="entree__date">07/2023 – aujourd'hui</p>
          </div>
          <p class="entree__lieu">PC-Shop Informatique, Corcelles-Cormondrèche — mandat indépendant</p>
          <ul class="liste">
            <li>Administration de la console XDR (Trend Micro) sur le parc client de l'entreprise</li>
            <li>Surveillance des détections, qualification et traitement des alertes</li>
            <li>Suivi de l'état de protection des postes et remontée des cas nécessitant une intervention</li>
          </ul>
        </article>

        <article class="entree">
          <div class="entree__tete">
            <h3 class="entree__titre">Hotline — service informatique</h3>
            <p class="entree__date">Année académique 2026 – 2027</p>
          </div>
          <p class="entree__lieu">
            HE-Arc, Neuchâtel — support de premier niveau aux étudiants et au personnel,
            en parallèle du cursus.
          </p>
        </article>

        <article class="entree">
          <div class="entree__tete">
            <h3 class="entree__titre">Stagiaire en informatique</h3>
            <p class="entree__date entree__date--passe">08/2020 – 08/2021</p>
          </div>
          <p class="entree__lieu">PC-Shop Informatique, Corcelles-Cormondrèche</p>
          <ul class="liste">
            <li>Installation et configuration de postes de travail</li>
            <li>Diagnostic et réparation matérielle et logicielle</li>
            <li>Support utilisateur et suivi des interventions</li>
          </ul>
        </article>
      </section>

      <!-- Compétences -->
      <section class="cv__bloc">
        <h2 class="cv__rubrique">Compétences</h2>

        <div class="entree">
          <h3 class="entree__titre">Analyse et processus métier</h3>
          <p class="entree__lieu">Traduire un fonctionnement d'entreprise en système utilisable.</p>
          <ul class="liste colonnes colonnes--2">
            <li>Analyse des besoins et des processus métiers</li>
            <li>Conception de données : MERISE, MCD / MLD / MPD</li>
            <li>Modélisation BPMN et UML</li>
            <li>Progiciels de gestion intégrés (ERP)</li>
            <li>Gestion documentaire (GED)</li>
            <li>Conduite de projet et méthodes agiles</li>
          </ul>
        </div>

        <div class="entree">
          <h3 class="entree__titre">Développement</h3>
          <p class="entree__lieu">Applications métier, interfaces web et bases de données.</p>
          <ul class="liste colonnes colonnes--2">
            <li>Java — POO, Hibernate 6, JDBC</li>
            <li>SQL et Oracle — requêtes avancées, PL/SQL, XML</li>
            <li>JavaScript / TypeScript, Vue 3</li>
            <li>Architecture logicielle et design patterns</li>
            <li>HTML / CSS, intégration responsive</li>
            <li>Conception d'interface et expérience utilisateur</li>
          </ul>
        </div>

        <div class="entree">
          <h3 class="entree__titre">Infrastructure et sécurité</h3>
          <p class="entree__lieu">Déployer, faire tourner et protéger ce qui est en production.</p>
          <ul class="liste colonnes colonnes--2">
            <li>Détection et réponse (XDR / EDR) en environnement client</li>
            <li>Windows 10 / 11 et Linux</li>
            <li>Gouvernance de la sécurité des SI</li>
            <li>Réseaux locaux et infrastructure</li>
            <li>Docker — images, volumes, réseaux, multi-stage builds</li>
            <li>Virtualisation (VMware, VirtualBox), notions Kubernetes / K3s</li>
          </ul>
        </div>

        <div class="entree">
          <h3 class="entree__titre">Conformité et cadre légal</h3>
          <p class="entree__lieu">Utile dès qu'un site ou une application traite des données de clients.</p>
          <ul class="liste colonnes colonnes--2">
            <li>Protection des données : nLPD et RGPD</li>
            <li>Numérique responsable et éthique des technologies</li>
          </ul>
        </div>
      </section>

      <!-- Formation -->
      <section class="cv__bloc">
        <h2 class="cv__rubrique">Formation</h2>

        <article class="entree">
          <div class="entree__tete">
            <h3 class="entree__titre">Bachelor of Science HES-SO en informatique de gestion</h3>
            <p class="entree__date">2023 – 2027</p>
          </div>
          <p class="entree__lieu">HE-Arc Gestion, Neuchâtel — cursus à temps partiel, dernière année en cours</p>
          <div class="colonnes colonnes--2">
            <div>
              <p class="cv__sous-titre">Axes principaux</p>
              <ul class="liste petit">
                <li>Développement logiciel et technologies web</li>
                <li>Bases de données et modélisation</li>
                <li>Analyse métier et urbanisation des SI</li>
              </ul>
            </div>
            <div>
              <p class="cv__sous-titre">Également étudiés</p>
              <ul class="liste petit">
                <li>Sécurité informatique et gouvernance des SI</li>
                <li>Gestion de projet et conduite d'équipe</li>
                <li>Comptabilité, marketing et organisation d'entreprise</li>
              </ul>
            </div>
          </div>
        </article>

        <article class="entree">
          <div class="entree__tete">
            <h3 class="entree__titre">Bachelor HES-SO en ingénierie logicielle</h3>
            <p class="entree__date entree__date--passe">2021 – 2023</p>
          </div>
          <p class="entree__lieu">
            HE-Arc, Neuchâtel — deux ans validés, puis réorientation vers l'informatique
            de gestion pour rapprocher la technique des enjeux d'entreprise.
          </p>
        </article>

        <article class="entree">
          <div class="entree__tete">
            <h3 class="entree__titre">CFC d'employé de commerce et maturité professionnelle</h3>
            <p class="entree__date entree__date--passe">2012 – 2015</p>
          </div>
          <p class="entree__lieu">CIFOM ESTER, La Chaux-de-Fonds</p>
        </article>
      </section>

    </div>
  </section>

  <!-- Aller plus loin -->
  <section class="section section--net">
    <div class="contenu">
      <h2>Aller plus loin</h2>
      <p class="conclusion">
        Pour une version détaillée avec références et coordonnées complètes,
        écrivez-moi.
      </p>
      <div class="actions">
        <router-link to="/contact" class="bouton">Me contacter</router-link>
        <a
          href="https://www.linkedin.com/in/loic-barthoulot/"
          class="bouton bouton--discret"
          target="_blank"
          rel="noopener noreferrer"
        >LinkedIn</a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { usePageMeta } from '@/composables/usePageMeta'
usePageMeta(
  'Mon CV | Loïc Barthoulot',
  'Parcours, compétences et expériences de Loïc Barthoulot : applications métier, développement web et sécurité opérationnelle pour PME romandes.',
  { path: '/cv', type: 'profile' }
)
</script>

<style scoped>
.bloc--cv {
  padding-block: var(--e-8);
}

.cv__titre {
  font-size: clamp(2.5rem, 6vw, 4.5rem);
  max-width: none;
}

.bloc--cv .bloc__texte {
  margin-top: var(--e-4);
}

.cv__bloc + .cv__bloc {
  margin-top: var(--e-9);
}

.cv__rubrique {
  font-size: var(--pas-2);
  padding-bottom: var(--e-3);
  border-bottom: 2px solid var(--accent);
  margin-bottom: var(--e-6);
}

.entree__tete {
  display: flex;
  flex-wrap: wrap;
  gap: var(--e-2) var(--e-5);
  align-items: baseline;
  justify-content: space-between;
  margin-bottom: var(--e-2);
}

.entree__tete .entree__titre {
  margin-bottom: 0;
  font-size: var(--pas-1);
}

.entree__date--passe {
  opacity: 0.75;
}

.entree__lieu + .liste,
.entree__lieu + .colonnes {
  margin-top: var(--e-4);
}

.cv__sous-titre {
  font-size: var(--pas-0);
  font-weight: 500;
  margin-bottom: var(--e-2);
}

.section--net {
  background-color: var(--blanc);
  border-top: 1px solid var(--trait);
}

.conclusion {
  margin-block: var(--e-4) var(--e-6);
  color: var(--texte-faible);
}

.actions {
  display: flex;
  flex-wrap: wrap;
  gap: var(--e-4);
}
</style>
