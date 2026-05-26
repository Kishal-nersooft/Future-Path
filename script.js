(() => {
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const navbar = document.querySelector(".fp-navbar");
  const navbarCollapse = document.querySelector("#mainNavbar");

  const setNavbarState = () => {
    if (!navbar) return;
    navbar.classList.toggle("scrolled", window.scrollY > 12);
  };

  setNavbarState();
  window.addEventListener("scroll", setNavbarState, { passive: true });

  if (navbarCollapse && navbar) {
    navbarCollapse.addEventListener("show.bs.collapse", () => navbar.classList.add("nav-open"));
    navbarCollapse.addEventListener("hide.bs.collapse", () => navbar.classList.remove("nav-open"));
  }

  const navbarToggler = document.querySelector(".navbar-toggler");
  if (navbarToggler && navbarCollapse && !window.bootstrap) {
    navbarToggler.addEventListener("click", () => {
      const isOpen = navbarCollapse.classList.toggle("show");
      navbarToggler.setAttribute("aria-expanded", String(isOpen));
      navbar?.classList.toggle("nav-open", isOpen);
    });
  }

  if (window.AOS) {
    document.body.classList.add("aos-enabled");
    window.AOS.init({
      duration: 850,
      easing: "ease-out-cubic",
      once: true,
      offset: 80,
      disable: prefersReducedMotion
    });
  }

  const articlePosts = {
    "why-us-colleges": {
      title: "Why US colleges want international students?",
      category: "College insight",
      date: "May 29, 2025",
      datetime: "2025-05-29",
      excerpt:
        "U.S. colleges want students to succeed because student success strengthens campus life, outcomes, and global reach.",
      image:
        "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1400&q=85",
      imageAlt: "Graduates celebrating on a university campus",
      sections: [
        {
          heading: "Students succeed, colleges succeed",
          paragraphs: [
            "U.S. colleges want international students because successful students make the entire campus stronger. When students arrive with different experiences, languages, goals, and perspectives, classrooms become more active and communities become more globally aware.",
            "For colleges, student success is not only a good outcome. It is also how they build reputation, improve retention, strengthen alumni networks, and show the world that their education prepares people for real opportunity."
          ]
        },
        {
          heading: "International students bring more than enrollment",
          paragraphs: [
            "International students bring ambition, resilience, family commitment, and new ways of thinking. They help domestic students understand the world beyond their own region, and they help faculty create richer conversations around business, technology, science, culture, and leadership.",
            "Many U.S. colleges are looking for students who will participate fully in campus life. That means students who will join clubs, lead projects, share their culture, volunteer, build friendships, and contribute to the energy of the institution."
          ]
        },
        {
          heading: "The challenge is visibility",
          paragraphs: [
            "The problem is not that global talent is missing. The problem is that many students are hard for colleges to discover. A student may have strong potential, but if their achievements, story, interests, and goals are hidden inside scattered documents, colleges may never understand the full picture.",
            "Future Path is built around this visibility gap. A clear profile helps students present more than grades. It gives colleges a fuller view of who the student is, what they care about, and how they may contribute to a campus community."
          ]
        },
        {
          heading: "A better path for everyone",
          paragraphs: [
            "When international students can show their complete story, colleges can make better matches. Families can make more informed decisions. Students can focus on fit instead of guessing where they might belong.",
            "That is why U.S. colleges want international students: not just to fill seats, but to build stronger campuses, wider perspectives, and better futures for students who are ready to grow."
          ]
        }
      ]
    },
    "invisible-millions": {
      title: "The Invisible Millions: Why US Colleges Are Missing Out on Global Talent",
      category: "Global talent",
      date: "May 27, 2025",
      datetime: "2025-05-27",
      excerpt:
        "Millions of bright high school students around the world dream of studying in the United States, but many never become visible to the colleges that could be right for them.",
      image:
        "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=1400&q=85",
      imageAlt: "International students collaborating outdoors",
      sections: [
        {
          heading: "The talent is already there",
          paragraphs: [
            "Every year, millions of bright, ambitious high school students around the world dream of studying in the United States. They want strong academics, practical opportunities, global friendships, and a degree that can open doors.",
            "Many of these students are capable of thriving at U.S. colleges, but they are never seen clearly. Their potential may be spread across transcripts, certificates, activities, family stories, local competitions, and personal experiences that do not fit neatly into a standard application process."
          ]
        },
        {
          heading: "Parents are searching for clarity",
          paragraphs: [
            "As a parent, you want the best for your child: the best education, the best opportunities, and the best chance to build a secure future. But the U.S. college system can feel difficult to understand from far away.",
            "Families often wonder which colleges are realistic, what scholarships are possible, how to compare programs, and whether a student will be supported after arrival. Without clear information, many families assume the dream is too expensive or too complicated."
          ]
        },
        {
          heading: "Colleges are missing students they would value",
          paragraphs: [
            "U.S. colleges also face a challenge. They want talented, motivated, globally minded students, but they cannot recruit every school, city, or country directly. Even strong students may remain invisible if there is no simple way for colleges to discover and understand them.",
            "This creates a gap on both sides. Students need access and visibility. Colleges need better discovery and context. The right match may exist, but without a bridge, it never happens."
          ]
        },
        {
          heading: "Future Path makes potential easier to see",
          paragraphs: [
            "Future Path exists to help close that gap. By helping students build rich profiles and explore colleges earlier, the platform gives families more confidence and gives colleges a clearer view of global talent.",
            "The invisible millions do not lack ability. They lack visibility, guidance, and a direct path to the institutions that may be looking for exactly what they bring."
          ]
        }
      ]
    },
    "us-higher-education": {
      title: "Why the U.S. Higher Education System is the Best in the World",
      category: "Higher education",
      date: "May 27, 2025",
      datetime: "2025-05-27",
      excerpt:
        "The U.S. higher education system attracts students from every corner of the world because it offers choice, flexibility, research, and career opportunity.",
      image:
        "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1400&q=85",
      imageAlt: "Historic U.S. university building",
      sections: [
        {
          heading: "Choice is the foundation",
          paragraphs: [
            "The United States has long been considered a leader in global education, attracting students from every corner of the world. One reason is choice. Students can explore large research universities, liberal arts colleges, community colleges, specialized institutes, public universities, and private campuses.",
            "This variety matters because no two students are the same. A student interested in engineering may need research labs and internships. A student interested in business may need entrepreneurship programs. A student still exploring may need flexibility before choosing a major."
          ]
        },
        {
          heading: "Flexibility helps students grow",
          paragraphs: [
            "Many education systems require students to choose a narrow path very early. The U.S. system often gives students room to explore subjects, change direction, combine interests, and build a more complete academic identity.",
            "That flexibility can be powerful for international students. It allows them to discover strengths, improve communication skills, build confidence, and connect classroom learning to real-world goals."
          ]
        },
        {
          heading: "Campuses connect learning with opportunity",
          paragraphs: [
            "U.S. colleges are known for combining academics with campus life, internships, research, student organizations, career services, and alumni networks. Education is not limited to lectures. Students are encouraged to participate, lead, collaborate, and apply what they learn.",
            "This environment helps students build skills that employers and graduate schools value: communication, problem solving, leadership, adaptability, teamwork, and initiative."
          ]
        },
        {
          heading: "Finding the right fit is the real advantage",
          paragraphs: [
            "The U.S. system is strong because it offers many pathways, but that can also make it overwhelming. The best college is not always the most famous college. It is the college where a student can grow, afford the journey, find support, and build toward a meaningful future.",
            "Future Path helps students and families navigate that choice with more structure, better information, and a stronger way to tell the student's full story."
          ]
        }
      ]
    }
  };

  const articlePage = document.querySelector("[data-article-page]");
  if (articlePage) {
    const params = new URLSearchParams(window.location.search);
    const postKey = params.get("post") || "why-us-colleges";
    const post = articlePosts[postKey] || articlePosts["why-us-colleges"];
    const title = articlePage.querySelector("#articleTitle");
    const category = articlePage.querySelector("#articleCategory");
    const excerpt = articlePage.querySelector("#articleExcerpt");
    const date = articlePage.querySelector("#articleDate");
    const hero = articlePage.querySelector(".article-hero");
    const body = articlePage.querySelector("#articleBody");
    const metaDescription = document.querySelector('meta[name="description"]');

    document.title = `${post.title} | Future Path`;
    hero?.style.setProperty("--article-hero-image", `url("${post.image}")`);
    if (metaDescription) metaDescription.content = post.excerpt;
    if (title) title.textContent = post.title;
    if (category) category.textContent = post.category;
    if (excerpt) excerpt.textContent = post.excerpt;
    if (date) {
      date.textContent = post.date;
      date.dateTime = post.datetime;
    }
    if (body) {
      body.replaceChildren();
      post.sections.forEach((section) => {
        const sectionElement = document.createElement("section");
        const heading = document.createElement("h2");
        heading.textContent = section.heading;
        sectionElement.append(heading);

        section.paragraphs.forEach((paragraphText) => {
          const paragraph = document.createElement("p");
          paragraph.textContent = paragraphText;
          sectionElement.append(paragraph);
        });

        body.append(sectionElement);
      });
    }
  }

  if (window.Swiper) {
    new window.Swiper(".testimonial-swiper", {
      slidesPerView: 1,
      spaceBetween: 20,
      loop: true,
      speed: 800,
      autoplay: prefersReducedMotion
        ? false
        : {
            delay: 3600,
            disableOnInteraction: false
          },
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
      breakpoints: {
        768: {
          slidesPerView: 2
        },
        1200: {
          slidesPerView: 3
        }
      }
    });
  }

  const counters = document.querySelectorAll(".counter");
  const animateCounter = (counter) => {
    const target = Number(counter.dataset.target || 0);
    const duration = 1400;
    const start = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      counter.textContent = Math.floor(target * eased).toLocaleString();

      if (progress < 1) {
        requestAnimationFrame(tick);
      } else {
        counter.textContent = target.toLocaleString();
      }
    };

    requestAnimationFrame(tick);
  };

  if (counters.length) {
    const counterObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          animateCounter(entry.target);
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.45 }
    );

    counters.forEach((counter) => counterObserver.observe(counter));
  }

  const billingButtons = document.querySelectorAll(".pricing-toggle button");
  const prices = document.querySelectorAll(".price");

  billingButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const billing = button.dataset.billing;

      billingButtons.forEach((toggleButton) => {
        toggleButton.classList.toggle("active", toggleButton === button);
      });

      prices.forEach((price) => {
        const nextPrice = price.dataset[billing];
        if (!nextPrice) return;
        price.style.transform = "translateY(8px)";
        price.style.opacity = "0";

        window.setTimeout(() => {
          price.textContent = nextPrice;
          price.style.transform = "translateY(0)";
          price.style.opacity = "1";
        }, 150);
      });
    });
  });

  prices.forEach((price) => {
    price.style.transition = "opacity 0.2s ease, transform 0.2s ease";
  });

  document.querySelectorAll(".tilt-card").forEach((card) => {
    if (prefersReducedMotion) return;

    card.addEventListener("pointermove", (event) => {
      const rect = card.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 100;
      const y = ((event.clientY - rect.top) / rect.height) * 100;
      const rotateX = ((event.clientY - rect.top) / rect.height - 0.5) * -5;
      const rotateY = ((event.clientX - rect.left) / rect.width - 0.5) * 5;

      card.style.setProperty("--tilt-x", `${x}%`);
      card.style.setProperty("--tilt-y", `${y}%`);
      card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
    });

    card.addEventListener("pointerleave", () => {
      card.style.transform = "";
    });
  });

  const heroScene = document.querySelector(".parallax-scene");
  const parallaxLayers = document.querySelectorAll(".parallax-scene .layer");

  if (heroScene && parallaxLayers.length && !prefersReducedMotion) {
    heroScene.addEventListener("pointermove", (event) => {
      const rect = heroScene.getBoundingClientRect();
      const x = event.clientX - rect.left - rect.width / 2;
      const y = event.clientY - rect.top - rect.height / 2;

      parallaxLayers.forEach((layer) => {
        const depth = Number(layer.dataset.depth || 0.05);
        layer.style.transform = `translate3d(${x * depth}px, ${y * depth}px, 0)`;
      });
    });

    heroScene.addEventListener("pointerleave", () => {
      parallaxLayers.forEach((layer) => {
        layer.style.transform = "";
      });
    });
  }

  if (!prefersReducedMotion) {
    window.addEventListener(
      "pointermove",
      (event) => {
        document.documentElement.style.setProperty("--cursor-x", `${event.clientX}px`);
        document.documentElement.style.setProperty("--cursor-y", `${event.clientY}px`);
      },
      { passive: true }
    );
  }

  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
  const sections = [...navLinks]
    .map((link) => {
      const href = link.getAttribute("href") || "";
      return href.startsWith("#") ? document.querySelector(href) : null;
    })
    .filter(Boolean);

  if (sections.length) {
    const activeObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          navLinks.forEach((link) => {
            link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`);
          });
        });
      },
      {
        rootMargin: "-45% 0px -45% 0px",
        threshold: 0
      }
    );

    sections.forEach((section) => activeObserver.observe(section));
  }

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (!navbarCollapse) return;

      if (window.bootstrap) {
        const collapse = window.bootstrap.Collapse.getInstance(navbarCollapse);
        if (collapse) collapse.hide();
        return;
      }

      navbarCollapse.classList.remove("show");
      navbarToggler?.setAttribute("aria-expanded", "false");
      navbar?.classList.remove("nav-open");
    });
  });

  const universityFinder = document.querySelector(".university-finder");
  if (universityFinder) {
    const searchInput = universityFinder.querySelector('input[type="search"]');
    const filterButtons = universityFinder.querySelectorAll("[data-rate-filter]");
    const universityCards = universityFinder.querySelectorAll(".finder-university-card");
    const emptyMessage = universityFinder.querySelector(".finder-empty-message");
    let activeFilter = "all";

    const isInRateRange = (price) => {
      if (activeFilter === "up-to-15000") return price <= 15000;
      if (activeFilter === "15000-30000") return price > 15000 && price <= 30000;
      if (activeFilter === "over-30000") return price > 30000;
      return true;
    };

    const updateUniversityResults = () => {
      const query = (searchInput?.value || "").trim().toLowerCase();
      let visibleCount = 0;

      universityCards.forEach((card) => {
        const price = Number(card.dataset.price || 0);
        const haystack = `${card.dataset.name || ""} ${card.textContent || ""}`.toLowerCase();
        const isVisible = isInRateRange(price) && haystack.includes(query);

        card.hidden = !isVisible;
        if (isVisible) visibleCount += 1;
      });

      if (emptyMessage) {
        emptyMessage.hidden = visibleCount > 0;
      }
    };

    filterButtons.forEach((button) => {
      button.addEventListener("click", () => {
        activeFilter = button.dataset.rateFilter || "all";
        filterButtons.forEach((filterButton) => {
          filterButton.classList.toggle("active", filterButton === button);
        });
        updateUniversityResults();
      });
    });

    searchInput?.addEventListener("input", updateUniversityResults);
    updateUniversityResults();
  }

  const resourcesPage = document.querySelector(".resources-page");
  if (resourcesPage) {
    const searchInput = resourcesPage.querySelector('.resources-search input[type="search"]');
    const resourceCards = resourcesPage.querySelectorAll("[data-resource-card]");
    const emptyMessage = resourcesPage.querySelector(".resources-empty-message");

    const updateResourceResults = () => {
      const query = (searchInput?.value || "").trim().toLowerCase();
      let visibleCount = 0;

      resourceCards.forEach((card) => {
        const haystack = [
          card.dataset.title,
          card.dataset.date,
          card.dataset.category,
          card.dataset.excerpt,
          card.textContent
        ]
          .join(" ")
          .toLowerCase();
        const isVisible = !query || haystack.includes(query);

        card.hidden = !isVisible;
        if (isVisible) visibleCount += 1;
      });

      if (emptyMessage) {
        emptyMessage.hidden = visibleCount > 0;
      }
    };

    searchInput?.addEventListener("input", updateResourceResults);
    updateResourceResults();
  }

  const newsletterForm = document.querySelector(".newsletter-form");
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const input = newsletterForm.querySelector("input");
      if (!input) return;

      const previousPlaceholder = input.placeholder;
      input.value = "";
      input.placeholder = "Thanks for joining";
      newsletterForm.classList.add("subscribed");

      window.setTimeout(() => {
        input.placeholder = previousPlaceholder;
        newsletterForm.classList.remove("subscribed");
      }, 2200);
    });
  }
})();
