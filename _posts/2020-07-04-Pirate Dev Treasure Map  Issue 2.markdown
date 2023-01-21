---
layout: post
title: 'Pirate Dev Treasure Map - Issue #2'
date: '2020-08-06 13:00:01 UTC'
---
¡Hola! Bienvenido a la segunda edición de Pirate Dev Treasure Map. La edición de este mes con varios links interesantes de varios tópicos.

Gracias por su paciencia cada mes con un nuevo episodio!

Esperamos que este boletín les ayude con su crecimiento profesional y se puedan enriquecer con el contenido así como complementar cada episodio de @PirateDevRadio.

### PirateDevRadio - S01E11 - Terminos Prestados de Otras Carreras y Psicologia Organizacional
<iframe
    width="560" 
    height="315" 
    src="https://www.youtube.com/embed/Qj8mgk7ZneY"
    title="YouTube video player" 
    frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; 
    encrypted-media; gyroscope; picture-in-picture; web-share" 
    allowfullscreen>
</iframe>

Nuestro onceavo episodio. Gracias por escucharnos!

## Topicos

## Flossbank

* [Sitio Web](https://flossbank.com/)

## Infrastructura Oceanica & Terminos Nauticos Aplicados A Desarrollo De Software

* [Announcing the Grace Hopper subsea cable, linking the U.S., U.K. and Spain](https://cloud.google.com/blog/products/infrastructure/announcing-googles-grace-hopper-subsea-cable-system)
* [Microsoft Project Natick Gen 3 Undersea Azure AZ](https://www.servethehome.com/microsoft-project-natick-gen-3-undersea-azure-az/)
* [Google Stadia](https://stadia.google.com/)
* [Glosario de Terminos Nauticos](https://en.wikipedia.org/wiki/Glossary_of_nautical_terms)

## Psicologia En Desarrollo de Software

* [Journal Of Occupational And Organizational Psychology](https://onlinelibrary.wiley.com/journal/20448325)
* [Ley De Conway](https://en.wikipedia.org/wiki/Conway%27s_law)

Para los desarrolladores de infraestructura, esto podría o no gustarles, pero Terraform ahora soporta TypeScript y Python para crear infraestructura. Muchas veces escuche que Hashicorp decía que no quería tener lenguajes “turing complete” para crear infraestructura por la complejidad pero ahora parece que con la presión que herramientas como Pulumi ha ejercido parece que los hizo cambiar de opinión.
### CDK for Terraform: Enabling Python & TypeScript Support
[![Developers are accustomed to using their own tooling and writing in familiar languages.](undefined)](https://www.hashicorp.com/blog/cdk-for-terraform-enabling-python-and-typescript-support)

Para los que están interesados en Haskell, la Typeclassopedia es un recurso buenísimo para entender muchas de las type classes que Haskell introduce en el preludio y otras que son siempre de utilidad como functores, monadas, etc.
### Typeclassopedia
[![Originally published 12 March 2009 in issue 13 of the Monad.Reader. Ported to the Haskell wiki in November 2011 by Geheimdienst. This is now the official version of the Typeclassopedia and supersedes the version published in the Monad.Reader.](https://s3.amazonaws.com/revue/items/images/006/343/490/web/Typeclassopedia-diagram.png?1596699648)](https://wiki.haskell.org/Typeclassopedia)


Esta colección de papers de Leslie Lamport, muchos sobre sistemas distribuidos, es bastante extensa y hace poco la descubrí!
### The Writings of Leslie Lamport
[![This document is a sort of scientific
autobiography.  It not only lists the papers I have written, but also
describes them and explains how I came to write some of them.  I have
included almost all my technical papers and electronic versions
of many of them for downloading.  Omitted are some papers for which I
no longer have copies and papers that are incomplete.  I have also
omitted early versions of some of these papers--even in cases where
the title changed.  Included are some initial drafts of papers that I
abandoned before fixing errors or other problems in them.  A table of
contents precedes the descriptions.  I also include a brief
curriculum vitae.  A printable version of this document
is available as a pdf file. 

](undefined)](https://lamport.azurewebsites.net/pubs/pubs.html)

No un artículo como tal, pero ACM abrirá su Biblioteca Digital paulatinamente en los próximos 5 años. ACM es un gran recurso para desarrolladores para artículos académicos.
Good news! @TheOfficialACM Council met yesterday and passed a major open access resolution: "Council adopts the goal of opening the Digital Library within five years given that this can be achieved in a way that is sustainable for ACM... 1/5

Hace poco Uber compartió en su blog de ingeniería un artículo sobre la forma en que organizan sus microservicios. En el momento de redactar esta entrada, el artículo por alguna razón fue borrado así que dejo un link en Wayback Machine.
### Introducing Domain-Oriented Microservice Architecture | Uber Engineering Blog
[![<p>Introduction Recently there has been substantial discussion around the downsides of service oriented architectures and microservice architectures in particular. While only a few years ago, many people readily adopted microservice architectures due to the numerous benefits they provide such as flexibility in the form of independent deployments, clear ownership, improvements in system stability, and better separation of concerns, in recent years people have begun to decry microservices for their tendency to greatly increase complexity, sometimes making even trivial features difficult to build. As Uber has grown to around 2,200 critical microservices, we experienced these tradeoffs first hand. Over the last</p>](https://s3.amazonaws.com/revue/items/images/006/343/588/web/unnamed.png?1596700472)](https://web.archive.org/web/20200803012939/https://eng.uber.com/microservice-architecture/)

Batuhan Tozun de Trendyol Tech escribio este articulo mostrando su arquitectura que usa Microfrontends. La parte mas interesante en nuestra opinión es como dividieron su frontend monolitico.
### Micro Frontends: How It Changed Our Development Process
[![All the frontend applications are monolithic in nature. However, the “micro frontends” keyword is very popular in these days. But what’s wrong with traditional-monolithic frontend applications?](https://s3.amazonaws.com/revue/items/images/006/343/536/web/1*Y88y00w33EyXLf4WIIC7TA.png?1596700247)](https://medium.com/trendyol-tech/micro-frontends-how-it-changed-our-development-process-a5cf667356da)


Miguel ha trabajado recientemente con tecnologías de Microsoft y también trabajado desde casa debido a la pandemia del COVID19. Este whitepaper de Microsoft es un material interesante para todos los que se encuentran en esta situación, especialmente para las personas en posiciones de liderazgo.
### 7 Tips to Optimize Remote Dev Team Productivity | Microsoft Azure
[![Read this e-book to learn how to empower your distributed developer team to code, collaborate, and ship efficiently and securely from any location. ](https://s3.amazonaws.com/revue/items/images/006/343/674/web/azure-icon-250x250.png?1596701643)](https://azure.microsoft.com/en-us/resources/7-tips-to-optimize-remote-developer-team-productivity/?utm_campaign=Level+Up&utm_medium=email&utm_source=Revue+newsletter)


En este episodio de "The Dojo MX", Agustin Ramos ([@machinesareus](https://twitter.com/machinesareus)) habla de arquitectura de software. Sin duda Agustín tiene muchísima experiencia (y una colección de libros sobre arquitectura bastante amplia!).
### Arquitectura de Software: qué aprender y cómo practicar
[![Hablaremos con Agustín Ramos (@machinesareus) sobre qué es la arquitectura de software, qué tienes que aprender y cómo puedes practicar.](https://s3.amazonaws.com/revue/items/images/006/343/495/web/maxresdefault.jpg?1596699653)](https://www.youtube.com/watch?v=vfu5PsSH7us&feature=youtu.be)

Si tienen 6 horas libres, esta conversación entre Enrique Zamudio (chochosmx) y Norberto Ortigoza (@hiphoox) en Twitch esta excelente. Me tocó estar en vivo por al menos 3 horas de la discusión y los rants fueron muy buenos. La experiencia de ambos desarrolladores es muy amplia y por supuesto que se deja ver.
### Twitch
[![Twitch is the world's leading video platform and community for gamers.](https://s3.amazonaws.com/revue/items/images/006/343/516/web/twitch_logo3.jpg?1596700031)](https://www.twitch.tv/videos/689811891)


2020: Libraries are the reason for software bloat. 1993: Lack of libraries are the reason for software bloat. https://t.co/0P0u6s7B6a

Google comenzará a expedir certificados para ciertos trabajos.
### Google Career Certificates
[![User experience (UX) designers make technology easier and more enjoyable to use. They create or refine products and interfaces to make them useful, usable, and accessible to users.](https://s3.amazonaws.com/revue/items/images/006/343/573/web/og-image.png?1596700404)](https://grow.google/certificates/)

Si te gusto esta edición del boletín o tienes algo que mencionar, ¡Por favor mándanos tus comentarios y comparte con la comunidad! Esto lo puedes hacer [mandando un correo](mailto:sftwr.mael@gmail.com?subject=PirateDevNews%20-%20Feedback&body=Tu%20feedback%20aqui.).

Gracias por llegar hasta el fin del boletín 💌 ¡Levanten su Jolly Roger!
        