<template>
  <section class="section">
    <div class="container">
      <header class="mb-5 mesure-texte">
        <h1>Politique de confidentialité</h1>
        <p class="lead text-body-secondary">
          Ce site ne dépose aucun cookie, n'utilise aucun outil de mesure
          d'audience et ne fait aucune requête vers un service tiers au
          chargement des pages.
        </p>
        <p class="small text-body-secondary">Dernière mise à jour : 8 septembre 2026</p>
      </header>

      <div class="mesure-texte">
        <section class="panneau mb-4">
          <h2 class="h5 mb-3">Responsable du traitement</h2>
          <p>
            Loïc Barthoulot, canton de Neuchâtel, Suisse.
            <a href="mailto:contact@loicbarthoulot.ch">contact@loicbarthoulot.ch</a>
          </p>
          <p>
            Le traitement relève de la loi fédérale sur la protection des
            données (nLPD). Le règlement européen (RGPD) s'applique en outre
            aux personnes situées dans l'Union européenne.
          </p>
        </section>

        <section class="panneau mb-4">
          <h2 class="h5 mb-3">Données que vous transmettez</h2>
          <p>
            Le formulaire de contact collecte quatre éléments, plus votre
            message :
          </p>
          <ul class="liste-marquee mb-3">
            <li>Prénom et nom</li>
            <li>Adresse électronique</li>
            <li>Sujet choisi dans la liste</li>
            <li>Contenu du message</li>
          </ul>
          <p>
            Ces données servent uniquement à répondre à votre demande et, le
            cas échéant, à préparer une prestation. Elles ne sont ni vendues,
            ni utilisées à des fins publicitaires, ni transmises à des tiers
            en dehors des prestataires techniques décrits ci-dessous.
          </p>
        </section>

        <section class="panneau mb-4">
          <h2 class="h5 mb-3">Prestataires techniques</h2>
          <p>
            <strong>Envoi du formulaire.</strong> Le message est transmis par
            EmailJS Pte. Ltd., société établie à Singapour, dont les serveurs
            sont situés aux États-Unis et exploités par Amazon Web Services.
            Le message transite par ce service avant d'arriver dans ma
            messagerie.
          </p>
          <p>
            <strong>Hébergement.</strong> Le site est hébergé par GitHub
            Pages, service de GitHub, Inc., aux États-Unis. Comme tout
            hébergeur, GitHub enregistre des journaux techniques lors de la
            consultation des pages, dont votre adresse IP.
          </p>
          <p>
            Ces deux prestataires impliquent un transfert de données hors de
            Suisse. Les États-Unis n'offrent pas un niveau de protection
            équivalent au droit suisse. Si vous préférez l'éviter, écrivez-moi
            directement à
            <a href="mailto:contact@loicbarthoulot.ch">contact@loicbarthoulot.ch</a>
            plutôt que d'utiliser le formulaire : votre message ne passera
            alors pas par EmailJS.
          </p>
        </section>

        <section class="panneau mb-4">
          <h2 class="h5 mb-3">Durée de conservation</h2>
          <p>
            Les messages sont conservés dans ma messagerie aussi longtemps que
            nécessaire au traitement de la demande et au suivi d'une éventuelle
            prestation. Vous pouvez demander leur suppression à tout moment.
          </p>
        </section>

        <section class="panneau mb-4">
          <h2 class="h5 mb-3">Cookies et stockage local</h2>
          <p>
            Le site ne dépose aucun cookie et n'utilise aucun outil de mesure
            d'audience.
          </p>
          <p>
            Un seul élément est écrit dans le stockage de session de votre
            navigateur, sous le nom <span>spa-redirect</span>. Il sert à vous
            ramener sur la page demandée après une redirection, ne contient
            aucune donnée personnelle, et disparaît à la fermeture de
            l'onglet.
          </p>
        </section>

        <section class="panneau mb-4">
          <h2 class="h5 mb-3">Requêtes vers des tiers</h2>
          <p>
            Les polices de caractères, les images et les scripts sont servis
            depuis ce site. Aucune requête n'est adressée à un service tiers
            au chargement d'une page, et votre adresse IP n'est donc
            communiquée à personne d'autre que l'hébergeur.
          </p>
          <p>
            Une seule exception, à votre initiative : l'envoi du formulaire
            de contact, qui appelle EmailJS.
          </p>
        </section>

        <section class="panneau mb-4">
          <h2 class="h5 mb-3">Vos droits</h2>
          <p>
            Vous pouvez demander l'accès à vos données, leur rectification,
            leur effacement, ou vous opposer à leur traitement. Une demande à
            <a href="mailto:contact@loicbarthoulot.ch">contact@loicbarthoulot.ch</a>
            suffit, et je réponds dans les trente jours.
          </p>
          <p>
            Vous pouvez aussi saisir le Préposé fédéral à la protection des
            données et à la transparence.
          </p>
        </section>

        <section class="panneau mb-4">
          <h2 class="h5 mb-3">Sécurité</h2>
          <p>
            Le site est servi exclusivement en HTTPS. L'envoi du formulaire
            est chiffré en transit.
          </p>
        </section>

        <section class="panneau mb-4">
          <h2 class="h5 mb-3">Modifications</h2>
          <p>
            Cette politique peut évoluer si les outils du site changent. La
            date de mise à jour figure en haut de cette page.
          </p>
        </section>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { usePageMeta } from '@/composables/usePageMeta'
usePageMeta(
  'Politique de confidentialité | Loïc Barthoulot',
  'Aucun cookie, aucune mesure d\'audience, aucune requête tierce au chargement. Ce qui est collecté par le formulaire de contact et ce qui en est fait.',
  { path: '/confidentialite' }
)
</script>
