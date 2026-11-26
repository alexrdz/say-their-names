(function () {
  'use strict';

  var ENTRIES = [
    {
      name: 'Hind Rajab',
      age: '5 years old',
      category: 'Gaza',
      paragraphs: [
        'A 5-year-old Palestinian girl killed in Gaza City in January 2024 after being trapped in a car under fire and making a widely publicized, hours-long emergency call to the Palestinian Red Crescent.',
        'She was honored by Houston Texans linebacker Azeez Al-Shaair on his eye black in September 2026.'
      ],
      sources: [
        {
          publication: 'Arab News',
          title: 'NFL star fined for displaying name of slain Palestinian girl',
          url: 'https://www.arabnews.com/sport/nfl-star-fined-for-displaying-name-of-slain-palestinian-girl-3002000'
        }
      ]
    },
    {
      name: 'Fatima Al-Bayook',
      age: '8 years old',
      category: 'Gaza',
      paragraphs: [
        'An 8-year-old Palestinian girl who survived an earlier airstrike that killed her family in 2023 before later being killed in Gaza.',
        'She was honored by Houston Texans linebacker Azeez Al-Shaair on his eye black in October 2026.'
      ],
      sources: []
    },
    {
      name: 'Khaled Nabhan',
      age: null,
      category: 'Gaza',
      paragraphs: [
        'A Palestinian grandfather who became widely known internationally as the \u201csoul of my soul\u201d grandfather after footage of him mourning his 3-year-old granddaughter Reem\u2014killed in an Israeli attack in November 2023\u2014went viral.',
        'Khaled Nabhan himself was killed in an Israeli strike in December 2024.'
      ],
      sources: [
        {
          publication: 'The New Arab',
          title: '\u2018Soul of my soul\u2019: Israeli army kills iconic Gaza grandfather',
          url: 'https://www.newarab.com/news/soul-my-soul-israeli-army-kills-iconic-gaza-grandfather'
        },
        {
          publication: 'Al Jazeera (YouTube)',
          title: 'Israeli strike kills Palestinian grandfather Khaled Nabhan',
          url: 'https://www.youtube.com/shorts/YE6xG8ZIpmQ'
        }
      ]
    },
    {
      name: 'Reem Nabhan',
      age: '3 years old',
      category: 'Gaza',
      paragraphs: [
        'The 3-year-old granddaughter of Khaled Nabhan, killed in an Israeli attack in Gaza in November 2023.',
        'Footage of her grandfather mourning her as the \u201csoul of my soul\u201d reached audiences around the world. Khaled Nabhan himself was killed in an Israeli strike in December 2024.'
      ],
      sources: [
        {
          publication: 'The New Arab',
          title: '\u2018Soul of my soul\u2019: Israeli army kills iconic Gaza grandfather',
          url: 'https://www.newarab.com/news/soul-my-soul-israeli-army-kills-iconic-gaza-grandfather'
        },
        {
          publication: 'Al Jazeera (YouTube)',
          title: 'Israeli strike kills Palestinian grandfather Khaled Nabhan',
          url: 'https://www.youtube.com/shorts/YE6xG8ZIpmQ'
        }
      ]
    },
    {
      name: 'Refaat Alareer',
      age: '44 years old',
      category: 'Gaza',
      paragraphs: [
        'A prominent Palestinian poet, writer, and professor of English literature at the Islamic University of Gaza, best known for his poem <em>\u201cIf I must die.\u201d</em>',
        'He was killed in an Israeli airstrike in Gaza City on December 6, 2023, alongside several members of his family.'
      ],
      sources: [
        {
          publication: 'Edinburgh University Press',
          title: 'A Biographical Narrative of the Israeli Assassination of Dr Refaat',
          url: 'https://www.euppublishing.com/doi/10.3366/hlps.2025.0362'
        }
      ]
    },
    {
      name: "Sha\u2019ban al-Dalou",
      age: '19 years old',
      category: 'Gaza',
      paragraphs: [
        'A 19-year-old software engineering student who burned to death on October 14, 2024, after an Israeli strike hit a tent encampment at Shuhada al-Aqsa Hospital in Deir al-Balah.',
        'Video footage of him trapped in the fire drew widespread international coverage; his mother and two younger siblings also died from the attack.'
      ],
      sources: [
        {
          publication: 'Wikipedia',
          title: 'Killing of Shaban al-Dalou',
          url: 'https://en.wikipedia.org/wiki/Killing_of_Shaban_al-Dalou'
        }
      ]
    },
    {
      name: 'Hamza Al-Dahdouh',
      age: null,
      category: 'Gaza',
      paragraphs: [
        'An Al Jazeera journalist and the son of Al Jazeera\u2019s Gaza bureau chief Wael Al-Dahdouh.',
        'He was killed in an Israeli airstrike in southern Gaza on January 7, 2024, alongside freelance journalist Mustafa Thuria, becoming the fifth member of Wael Al-Dahdouh\u2019s immediate family killed during the war.'
      ],
      sources: [
        {
          publication: 'AP News',
          title: 'An Al Jazeera journalist is the fifth member of his family killed',
          url: 'https://apnews.com/article/israel-hamas-war-journalist-killed-jazeera-86db4604dde19caa9c29366225a6648e'
        }
      ]
    },
    {
      name: 'Mustafa Thuria',
      age: null,
      category: 'Gaza',
      paragraphs: [
        'A freelance journalist killed in an Israeli airstrike in southern Gaza on January 7, 2024, alongside Al Jazeera journalist Hamza Al-Dahdouh.'
      ],
      sources: [
        {
          publication: 'AP News',
          title: 'An Al Jazeera journalist is the fifth member of his family killed',
          url: 'https://apnews.com/article/israel-hamas-war-journalist-killed-jazeera-86db4604dde19caa9c29366225a6648e'
        }
      ]
    },
    {
      name: 'Ren\u00e9e Nicole Good',
      age: null,
      category: 'ICE Enforcement',
      paragraphs: [
        'A U.S. citizen and mother shot and killed by a masked ICE agent in Minneapolis on January 7, 2026, while behind the wheel of her vehicle.',
        'Agents claimed she attempted to ram them, while eyewitness accounts and video footage sparked nationwide protests and calls for a federal investigation.'
      ],
      sources: [
        {
          publication: 'Prism Reports',
          title: 'The identities of Renee Good and DHS\u2019s victims matter',
          url: 'https://www.prismreports.org/renee-good-identity/'
        },
        {
          publication: 'Capitol News Illinois',
          title: '\u2018My own government attempted to execute me,\u2019 Chicago woman shot',
          url: 'https://capitolnewsillinois.com/news/my-own-government-attempted-to-execute-me/'
        }
      ]
    },
    {
      name: 'Keith Porter Jr.',
      age: '43 years old',
      category: 'ICE Enforcement',
      paragraphs: [
        'A 43-year-old U.S. citizen and father of two shot and killed by an off-duty ICE agent outside his home in Northridge, Los Angeles, on New Year\u2019s Eve 2025.',
        'The agent alleged Porter fired at him, while Porter\u2019s family stated he was firing celebratory shots and posed no threat.'
      ],
      sources: [
        {
          publication: 'Capitol News Illinois',
          title: '\u2018My own government attempted to execute me,\u2019 Chicago woman shot',
          url: 'https://capitolnewsillinois.com/news/my-own-government-attempted-to-execute-me/'
        }
      ]
    },
    {
      name: 'Silverio Villegas Gonz\u00e1lez',
      age: '38 years old',
      category: 'ICE Enforcement',
      paragraphs: [
        'A 38-year-old Mexican national, cook, and father of two shot and killed by an ICE agent during a traffic stop in the Chicago suburb of Franklin Park on September 12, 2025.',
        'DHS claimed he hit and dragged an officer with his car, though video analysis by <em>The New York Times</em> and footage obtained by the <em>Chicago Sun-Times</em> contradicted the agency\u2019s account.'
      ],
      sources: [
        {
          publication: 'PBS News',
          title: 'Shooting deaths climb in Trump\u2019s mass deportation effort',
          url: 'https://www.pbs.org/newshour/nation/a-look-at-shootings-by-federal-immigration-officers'
        },
        {
          publication: 'Capitol News Illinois',
          title: '\u2018My own government attempted to execute me,\u2019 Chicago woman shot',
          url: 'https://capitolnewsillinois.com/news/my-own-government-attempted-to-execute-me/'
        }
      ]
    },
    {
      name: 'Lorenzo Salgado Araujo',
      age: null,
      category: 'ICE Enforcement',
      paragraphs: [
        'A Mexican national shot and killed by ICE agents after a traffic stop.',
        'ICE alleged he tried to ram agents with his car, a claim contradicted by three witnesses.'
      ],
      sources: []
    },
    {
      name: 'Joan Sebastian Guerrero',
      age: '26 years old',
      category: 'ICE Enforcement',
      paragraphs: [
        'A 26-year-old Colombian national shot and killed by an ICE agent on July 10, 2026, with ICE stating the agent opened fire as Guerrero attempted to drive away.'
      ],
      sources: []
    },
    {
      name: 'Mr. Lunas Campos',
      age: null,
      category: 'ICE Custody',
      paragraphs: [
        'Died in ICE custody at Camp East Montana in El Paso, Texas, in January 2026. ICE initially cited a medical emergency, but the El Paso County Medical Examiner ruled his death a homicide resulting from asphyxia due to neck and torso compression.',
        'Beyond fatal shootings, human rights monitors and news outlets have documented a sharp rise in deaths inside ICE detention facilities. The American Immigration Lawyers Association (AILA) maintains a public log of all reported ICE custody deaths.'
      ],
      sources: [
        {
          publication: 'American Immigration Council',
          title: '6 Deaths in ICE Custody and 2 Fatal Shootings: A Horrific Start to 2026',
          url: 'https://www.americanimmigrationcouncil.org/blog/ice-deaths-shootings-2026/'
        }
      ]
    }
  ];

  /* Contemplative pacing (ms) */
  var reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  function getTimings() {
    if (reducedMotionQuery.matches) {
      return { fadeIn: 150, hold: 6000, fadeOut: 150, gap: 400, resumeHold: 2400, dialogFade: 10 };
    }
    return { fadeIn: 1500, hold: 4500, fadeOut: 1500, gap: 600, resumeHold: 2000, dialogFade: 280 };
  }

  /* DOM references */
  var presenceEl = document.getElementById('name-presence');
  var nameEl = document.getElementById('name-display');
  var contextTrigger = document.getElementById('context-trigger');
  var playbackToggle = document.getElementById('playback-toggle');
  var playbackLabel = document.getElementById('playback-label');
  var themeToggle = document.getElementById('theme-toggle');

  var dialogEl = document.getElementById('context-dialog');
  var dialogMetaEl = document.getElementById('dialog-meta');
  var dialogNameEl = document.getElementById('dialog-name');
  var dialogBodyEl = document.getElementById('dialog-body');
  var dialogSourcesSection = document.getElementById('dialog-sources');
  var dialogSourcesList = document.getElementById('dialog-sources-list');
  var dialogCloseX = document.getElementById('dialog-close-x');
  var dialogContinue = document.getElementById('dialog-continue');

  /* State */
  var queue = [];
  var queueIndex = -1;
  var currentEntry = null;
  var phase = 'hidden'; // 'hidden' | 'fading-in' | 'holding' | 'fading-out' | 'gap' | 'paused'
  var isPaused = false;
  var isDialogOpen = false;
  var isDialogClosing = false;
  var timerId = null;

  function shuffle(items, avoidFirst) {
    var copy = items.slice();
    for (var i = copy.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = copy[i];
      copy[i] = copy[j];
      copy[j] = tmp;
    }
    if (avoidFirst && copy.length > 1 && copy[0].name === avoidFirst.name) {
      var swapIdx = 1 + Math.floor(Math.random() * (copy.length - 1));
      var first = copy[0];
      copy[0] = copy[swapIdx];
      copy[swapIdx] = first;
    }
    return copy;
  }

  function nextEntry() {
    queueIndex += 1;
    if (queueIndex >= queue.length) {
      queue = shuffle(ENTRIES, currentEntry);
      queueIndex = 0;
    }
    return queue[queueIndex];
  }

  function clearTimer() {
    if (timerId !== null) {
      window.clearTimeout(timerId);
      timerId = null;
    }
  }

  function syncPlaybackUI() {
    var pausedVisual = isPaused || isDialogOpen;
    playbackToggle.setAttribute('aria-pressed', String(pausedVisual));
    playbackToggle.setAttribute(
      'aria-label',
      pausedVisual ? 'Continue displaying names' : 'Pause name display'
    );
    playbackLabel.textContent = pausedVisual ? 'Continue' : 'Pause';
  }

  function renderEntry(entry) {
    currentEntry = entry;
    nameEl.textContent = entry.name;
    contextTrigger.setAttribute('aria-label', 'Read context for ' + entry.name);
  }

  function showNextName() {
    clearTimer();
    var entry = nextEntry();
    var t = getTimings();

    renderEntry(entry);
    phase = 'hidden';
    presenceEl.dataset.phase = 'hidden';
    contextTrigger.disabled = false;

    /* Force style flush so opacity cleanly transitions from 0 -> 1 */
    void presenceEl.offsetWidth;

    phase = 'fading-in';
    presenceEl.dataset.phase = 'visible';

    timerId = window.setTimeout(function () {
      phase = 'holding';
      timerId = window.setTimeout(beginFadeOut, t.hold);
    }, t.fadeIn);
  }

  function beginFadeOut() {
    clearTimer();
    if (isPaused || isDialogOpen) return;

    var t = getTimings();
    phase = 'fading-out';
    presenceEl.dataset.phase = 'fading-out';

    timerId = window.setTimeout(function () {
      phase = 'gap';
      presenceEl.dataset.phase = 'hidden';
      contextTrigger.disabled = true;

      timerId = window.setTimeout(function () {
        if (!isPaused && !isDialogOpen) {
          showNextName();
        }
      }, t.gap);
    }, t.fadeOut);
  }

  function pauseCycle() {
    clearTimer();
    isPaused = true;

    if (!currentEntry || phase === 'gap' || phase === 'hidden') {
      renderEntry(nextEntry());
    }

    phase = 'paused';
    contextTrigger.disabled = false;
    presenceEl.dataset.phase = 'paused';
    syncPlaybackUI();
  }

  function resumeCycle() {
    clearTimer();
    isPaused = false;
    syncPlaybackUI();

    if (!currentEntry) {
      showNextName();
      return;
    }

    var t = getTimings();
    phase = 'holding';
    contextTrigger.disabled = false;
    presenceEl.dataset.phase = 'visible';

    /* Give a calm moment before gently fading out to the next name */
    timerId = window.setTimeout(beginFadeOut, t.resumeHold);
  }

  /* Populate and open context dialog */
  function openContext() {
    if (!currentEntry || isDialogOpen) return;

    pauseCycle();
    isDialogOpen = true;
    isDialogClosing = false;
    syncPlaybackUI();

    /* Metadata */
    dialogMetaEl.innerHTML = '';
    var catSpan = document.createElement('span');
    catSpan.textContent = currentEntry.category;
    dialogMetaEl.appendChild(catSpan);

    if (currentEntry.age) {
      var sep = document.createElement('span');
      sep.className = 'dialog-meta__sep';
      sep.setAttribute('aria-hidden', 'true');
      sep.textContent = '\u00b7';
      dialogMetaEl.appendChild(sep);

      var ageSpan = document.createElement('span');
      ageSpan.textContent = currentEntry.age;
      dialogMetaEl.appendChild(ageSpan);
    }

    dialogNameEl.textContent = currentEntry.name;

    /* Body paragraphs (entries are static, authored here) */
    dialogBodyEl.innerHTML = '';
    currentEntry.paragraphs.forEach(function (htmlText) {
      var p = document.createElement('p');
      p.innerHTML = htmlText;
      dialogBodyEl.appendChild(p);
    });

    /* Reporting sources */
    dialogSourcesList.innerHTML = '';
    if (currentEntry.sources && currentEntry.sources.length > 0) {
      dialogSourcesSection.hidden = false;
      currentEntry.sources.forEach(function (src) {
        var li = document.createElement('li');
        var a = document.createElement('a');
        a.className = 'dialog-source-link';
        a.href = src.url;
        a.target = '_blank';
        a.rel = 'noopener noreferrer';

        var textWrap = document.createElement('span');
        textWrap.className = 'dialog-source-link__text';

        var pub = document.createElement('span');
        pub.className = 'dialog-source-link__pub';
        pub.textContent = src.publication;

        var title = document.createElement('span');
        title.className = 'dialog-source-link__title';
        title.textContent = src.title;

        textWrap.appendChild(pub);
        textWrap.appendChild(title);
        a.appendChild(textWrap);
        a.insertAdjacentHTML(
          'beforeend',
          '<svg class="dialog-source-link__icon" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>'
        );

        li.appendChild(a);
        dialogSourcesList.appendChild(li);
      });
    } else {
      dialogSourcesSection.hidden = true;
    }

    dialogEl.scrollTop = 0;
    dialogEl.showModal();
    window.requestAnimationFrame(function () {
      dialogEl.classList.add('is-open');
    });
  }

  function closeContextAndContinue() {
    if (!isDialogOpen || isDialogClosing) return;
    isDialogClosing = true;

    var t = getTimings();
    dialogEl.classList.remove('is-open');

    window.setTimeout(function () {
      if (dialogEl.open) {
        dialogEl.close();
      }
      isDialogOpen = false;
      isDialogClosing = false;
      resumeCycle();
    }, t.dialogFade);
  }

  /* Theme management */
  function syncThemeUI() {
    var isDark = document.documentElement.getAttribute('data-theme') !== 'light';
    var nextLabel = isDark ? 'Switch to light theme' : 'Switch to dark theme';
    themeToggle.setAttribute('aria-label', nextLabel);
    themeToggle.setAttribute('title', nextLabel);
  }

  function toggleTheme() {
    var current = document.documentElement.getAttribute('data-theme');
    var next = current === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', next);
    try {
      localStorage.setItem('stn-theme', next);
    } catch (_) {}
    syncThemeUI();
  }

  /* Event Listeners */
  contextTrigger.addEventListener('click', openContext);

  playbackToggle.addEventListener('click', function () {
    if (isDialogOpen) {
      closeContextAndContinue();
      return;
    }
    if (isPaused) {
      resumeCycle();
    } else {
      pauseCycle();
    }
  });

  dialogCloseX.addEventListener('click', closeContextAndContinue);
  dialogContinue.addEventListener('click', closeContextAndContinue);

  /* Clicking backdrop closes dialog and resumes */
  dialogEl.addEventListener('click', function (event) {
    if (event.target === dialogEl) {
      closeContextAndContinue();
    }
  });

  /* Intercept native Escape to fade out cleanly and continue */
  dialogEl.addEventListener('cancel', function (event) {
    event.preventDefault();
    closeContextAndContinue();
  });

  /* Space bar toggles pause/continue when not inside the dialog or on a button */
  document.addEventListener('keydown', function (event) {
    if (isDialogOpen) return;
    if (event.code === 'Space' && event.target === document.body) {
      event.preventDefault();
      if (isPaused) {
        resumeCycle();
      } else {
        pauseCycle();
      }
    }
  });

  themeToggle.addEventListener('click', toggleTheme);

  /* Pause cleanly when tab is hidden so timers stay crisp */
  var hiddenWhileRunning = false;
  document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
      if (!isPaused && !isDialogOpen) {
        hiddenWhileRunning = true;
        clearTimer();
      }
    } else if (hiddenWhileRunning) {
      hiddenWhileRunning = false;
      if (!isPaused && !isDialogOpen) {
        showNextName();
      }
    }
  });

  /* Initialize */
  syncThemeUI();
  syncPlaybackUI();
  queue = shuffle(ENTRIES, null);
  queueIndex = -1;
  showNextName();
})();
