const subjects = [
    {
      title: 'Mathematics',
      levels: 'GCSE, AS Level, A Level',
      description:
        'Structured lessons focused on confidence building, exam preparation, and conceptual understanding.',
    },
    {
      title: 'Economics',
      levels: 'GCSE, A Level, Undergraduate Degree',
      description:
        'Clear explanations of economic theory, data analysis, and real-world application.',
    },
  ];
  
  const reviews = [
    {
      name: 'Sophie M.',
      course: 'A Level Mathematics',
      review:
        'My confidence improved massively after just a few lessons. Everything was explained clearly and patiently.',
    },
    {
      name: 'Daniel R.',
      course: 'University Economics',
      review:
        'Excellent support with macroeconomics and econometrics. Difficult topics became much easier to understand.',
    },
    {
      name: 'Amelia T.',
      course: 'GCSE Maths',
      review:
        'Very supportive and organised lessons. I achieved a much better result than expected.',
    },
    {
      name: 'James L.',
      course: 'AS Level Mathematics',
      review:
        'The lessons were structured really well and helped me improve my exam technique significantly.',
    },
    {
      name: 'Olivia H.',
      course: 'Undergraduate Economics',
      review:
        'Fantastic support with essays and economic analysis. I felt much more confident before exams.',
    },
    {
      name: 'Ethan P.',
      course: 'GCSE Maths',
      review:
        'Patient teaching style and very encouraging throughout every session.',
    },
    {
      name: 'Grace W.',
      course: 'A Level Economics',
      review:
        'Complex diagrams and theories were explained in a simple and memorable way.',
    },
    {
      name: 'Noah C.',
      course: 'University Economics',
      review:
        'Very knowledgeable tutor who helped me improve both coursework and exam performance.',
    },
    {
      name: 'Charlotte B.',
      course: 'A Level Mathematics',
      review:
        'Clear explanations and excellent preparation for difficult topics like calculus and statistics.',
    },
    {
      name: 'Henry D.',
      course: 'GCSE Maths',
      review:
        'I became much more confident solving problems independently after a few weeks of lessons.',
    },
  ];
  
  function renderSubjects() {
    const container = document.getElementById('subjects-container');
  
    subjects.forEach((subject) => {
      const card = document.createElement('article');
      card.className = 'subject-card';
  
      card.innerHTML = `
        <p class="subject-level">${subject.levels}</p>
        <h3>${subject.title}</h3>
        <p>${subject.description}</p>
      `;
  
      container.appendChild(card);
    });
  }
  
  let showingAllReviews = false;
  
  function renderReviews() {
    const container = document.getElementById('reviews-container');
    container.innerHTML = '';
  
    const reviewsToRender = showingAllReviews
      ? reviews
      : reviews.slice(0, 4);
  
    reviewsToRender.forEach((review) => {
      const card = document.createElement('article');
      card.className = 'review-card';
  
      card.innerHTML = `
        <p>"${review.review}"</p>
  
        <div class="review-author">
          <strong>${review.name}</strong>
          <p>${review.course}</p>
        </div>
      `;
  
      container.appendChild(card);
    });
  
    const toggleButton = document.getElementById('toggleReviewsBtn');
  
    toggleButton.textContent = showingAllReviews
      ? 'Show Fewer Reviews'
      : 'Show More Reviews';
  }
  
  function initialiseReviewToggle() {
    const toggleButton = document.getElementById('toggleReviewsBtn');
  
    toggleButton.addEventListener('click', () => {
      showingAllReviews = !showingAllReviews;
      renderReviews();
    });
  }
  
  function initialiseWebsite() {
    renderSubjects();
    renderReviews();
    initialiseReviewToggle();
  }
  
  initialiseWebsite();