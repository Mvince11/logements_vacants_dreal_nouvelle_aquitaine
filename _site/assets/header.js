document.addEventListener("DOMContentLoaded", function() {
  const brand = document.querySelector(".navbar-brand");
  if (!brand) return;

  const offsetMeta = document.querySelector('meta[name="quarto:offset"]');
  const root = offsetMeta ? offsetMeta.getAttribute("content") : "./";

  brand.innerHTML = `
    <div style="display:flex; align-items:center;" class="navbar-logo">
      <div style="gap:16px; display:flex;">
        <a href="https://www.cerema.fr/fr">
          <img src="${root}images/logos/logo_cerema.PNG" style="height:74px;">
        </a>
        <a href="https://www.nouvelle-aquitaine.developpement-durable.gouv.fr/">
          <img src="${root}images/logos/DREAL_2023.jpg" style="height:80px;">
        </a>
      </div>
      <div style="display:flex; flex-direction:column; line-height:1.1;" class="dreal_texte">
        <span style="font-size:18px; font-weight:600;">DREAL Nouvelle-Aquitaine</span>
        <span style="font-size:14px; font-weight:400;" class="brand-subtitle">Direction régionale de l'environnement, de l'aménagement et du logement</span>
      </div>
    </div>
  `;
});