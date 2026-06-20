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
      name: 'Maria Esmeralda.',
      course: 'A Level Mathematics',
      review:
        'Fantastic tutor. Punctual and reliable. My son, who needed help with Y12 maths, is finding his lessons really helpful.',
    },
    {
      name: 'Monika',
      course: 'A Level Mathematics and Economics',
      review:
        '"Great tutor! Haroon was very thorough, straightforward and to the point. He was great at explaining and my son has learnt a lot. He has helped him to enhance his skills and because of his help he achieved an A* in his latest economics mock exam. Highly recommended. Monika&Oli',
    },
    {
      name: 'Nicola',
      course: 'A Level Economics',
      review:
        "Haroon is a great tutor who has the ability to go beyond a textbook answer really explaining evaluative points well. It is clear he is passionate about his subject which is important in a tutor! My son went from getting D's in the middle of Lower Sixth to achieving A's and B's by the end of Lower 6th with the help of Haroon. I would highly recommend him as a tutor.",
    },
    {
      name: 'Aljawharah',
      course: 'Degree level Economics (Masters)',
      review:
        "Haroon is an excellent tutor who is very knowledgeable and conveys his knowledge of complex material in a manner easily understandable. I'm doing a master's in Economics at the Queen Mary University of London. He helped me enormously in preparing for my exams specifically Microeconomics. I would recommend Haroon to anyone who is looking for an amiable, intelligent, and respectful teacher.",
    },
    {
      name: 'Tony',
      course: 'Degree level Economics (Undergraduate)',
      review:
        "Haroon provided superb support to my microeconomics studies at university. In all honesty, his teaching is of a higher standard than the teaching at my own university , the London School of Economics . Haroon is a first class economist and actuarial scientist as well as a talented and generous tutor. After just one lesson with him , you will feel a weight lifted off your shoulders as far as questions that have been troubling you all week. He makes sure to answer all your questions so that you may build fundamental understanding to tackle any problem thrown at you in an exam. He is thoughtful, rigorous and intelligent. In my experience, these traits rub off on his students which is greatly motivating. I highly recommend Haroon as economics tutor at any level.",
    },
    {
      name: 'Joanna',
      course: 'A Level Mathematics',
      review:
        "Haroon is an excellent tutor who has helped my daughter enormously with her 'A' Level Maths course. He has been able to explain complex Maths topics in a way which has enabled her to understand things she had previously really struggled with. His teaching style is very thorough. He is helping her far more than her ordinary Maths lessons at school and in the topics he has taught her she has achieved 100% marks. He is extremely pleasant and very reliable too and spends a great deal of time and effort during his tutoring sessions. He is the best tutor we have ever had for Maths.",
    },
    {
      name: 'Hannah',
      course: 'Degree level Economics (Undergraduate)',
      review:
        "Haroon is brilliant at explaining different concepts and is very patient. Without his help, I could not have passed my degree.",
    },
    {
      name: 'Sabrina',
      course: 'GCSE Mathematics and Additional Mathematics',
      review:
        "Haroon was an exceptional tutor for my daughter, teaching her both GCSE Maths and Additional Maths. His excellent teaching played a huge part in her achieving a Grade 9 in GCSE Maths and an A in Additional Maths. He is reliable, flexible, and always explains difficult concepts in a clear and easy-to-understand way, giving her the confidence to succeed. His patience, dedication, and supportive approach made every lesson worthwhile. I highly recommend Haroon to anyone looking for an outstanding maths tutor.",
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