## Install

* install gulp
* npm install


## Preprocesing sass

* gulp sass -> crea en css/style.css con todo
* gulp sass:watch
* gulp sass --prod -> saca el css minificado
* gulp sass --component nombre-componente -> busca dentro de la carpeta sass nombre-componente/nombre-componente y genera el css en css/nombre-componente.css
* gulp sass --component path/loquesea -> busca dentro de la carpeta sass la ruta dada y lo preprocesa en la carpeta css del siguiente modo css/loquesea.css
* gulp sass --component -> procesa todo el contenido de scss en css con la misma esctructura de directorios
