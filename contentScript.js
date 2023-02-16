const divsToHide = [".ultimo_minuto",".tipsComentarios",".cont_tit_publicar", ".cont_login"]; 

for (const classToHide of divsToHide) {
  const divToHide = document.querySelector(classToHide);

  if (divToHide) {
    divToHide.style.display = "none";
  }
}

const divIdsToHide = ["divShow_more_btn", "comentarios", "cajaMasValorados", "cuDetalle_ucColumnista_cont_caja_columnista", "cuDetalle_cuBarraSocial_redesSociales"];

for (const idToHide of divIdsToHide) {
  const divToHide = document.getElementById(idToHide);

  if (divToHide) {
    divToHide.style.display = "none";
  }
}

const spans = document.querySelectorAll(".cont_contador_comentarios");
for (let i = 0; i < spans.length; i++) {
  const span = spans[i];
  span.style.display = "none";
}
const spansComments = document.querySelectorAll("#numComentarios");
for (let i = 0; i < spansComments.length; i++) {
  const span1 = spansComments[i];
  span1.style.display = "none";
}

const links = document.getElementsByTagName("a");
for (let i = 0; i < links.length; i++) {
  const link = links[i];
  if (link.href.includes("#comentarios")) {
    const newUrl = link.href.replace("#comentarios", "");
    link.href = newUrl;
  }
}
