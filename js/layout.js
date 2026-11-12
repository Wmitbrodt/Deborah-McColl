(() => {
  function normalizeBasePath(rawBasePath) {
    const basePath = (rawBasePath || "").trim();
    if (!basePath || basePath === ".") {
      return "";
    }
    return basePath.replace(/\/+$/, "");
  }

  function joinPath(basePath, targetPath) {
    if (!basePath) {
      return targetPath;
    }
    return `${basePath}/${targetPath}`;
  }

  function renderNav(el) {
    const basePath = normalizeBasePath(el.getAttribute("data-base-path"));
    const active = (el.getAttribute("data-active-nav") || "").trim();
    const isDrawingsActive = active === "drawings";
    const isPaintingsActive = active === "paintings";
    const isEventsActive = active === "events";
    const isCvActive = active === "cv";
    const isInquireActive = active === "inquire";

    el.innerHTML = `
<nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
  <div class="container">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="${joinPath(basePath, "index.html")}"><span class="hidden-xs">DEBORAH McCOLL</span><span class="visible-xs">Deborah McColl</span></a>
    </div>
    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul class="nav navbar-nav navbar-right">
        <li${isDrawingsActive ? " class='active'" : ""}><a href="${joinPath(basePath, "index.html")}" title="Deborah McColl Drawings">DRAWINGS</a></li>
        <li class="dropdown${isPaintingsActive ? " active" : ""}">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Paintings <span class="caret"></span></a>
          <ul class="dropdown-menu">
            <li><a href="${joinPath(basePath, "oil-paintings.html")}" title="Deborah McColl Paintings">Oils</a></li>
            <li><a href="${joinPath(basePath, "watercolour-paintings.html")}" title="Deborah McColl Paintings">Watercolour</a></li>
          </ul>
        </li>
        <li${isEventsActive ? " class='active'" : ""}><a href="${joinPath(basePath, "events.html")}" title="Deborah McColl Events, Shows, Artworks.">EVENTS</a></li>
        <li${isCvActive ? " class='active'" : ""}><a href="${joinPath(basePath, "cv.html")}" title="Deborah McColl Cover letter, CV">CV</a></li>
        <li${isInquireActive ? " class='active'" : ""}><a href="${joinPath(basePath, "inquire.html")}" title="Contact Deborah McColl. Inquire.">INQUIRE</a></li>
      </ul>
    </div>
  </div>
</nav> <!-- nav end -->
`;
  }

  function renderFooter(el) {
    const marginTop = (el.getAttribute("data-margin-top") || "").trim();
    const containerStyle = marginTop ? ` style="margin-top: ${marginTop}px;"` : "";

    el.innerHTML = `
<div class="container"${containerStyle}>
  <div class="footer">
    <div class="row">
      <div class="col-xs-12">
        <a target="_blank" href="https://www.instagram.com/joydiversionceramics"><i class="fa-brands fa-instagram fa-xl"></i></a><span class="spacer">
        <br><br>
        <h5>ALL ARTWORK &copy; <span data-current-year></span> BY DEBORAH McCOLL</h5>
        <h5>SITE DESIGNED BY <a href="https://www.linkedin.com/in/willmitbrodt/" target="_blank" style="color: #333333;">WILL MITBRODT</a></h5>
      </div> <!-- col-xs-12 -->
    </div> <!-- row -->
  </div> <!-- footer -->
</div> <!-- container -->
`;
  }

  function setCurrentYear() {
    const year = String(new Date().getFullYear());
    const nodes = document.querySelectorAll("[data-current-year]");
    nodes.forEach((node) => {
      node.textContent = year;
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    const navNodes = document.querySelectorAll("[data-site-nav]");
    navNodes.forEach(renderNav);

    const footerNodes = document.querySelectorAll("[data-site-footer]");
    footerNodes.forEach(renderFooter);

    setCurrentYear();
  });
})();
