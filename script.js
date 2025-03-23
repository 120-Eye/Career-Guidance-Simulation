function generateParagraph() {
    // Get user inputs
    const hobby = document.getElementById('hobby').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const dreamJob = document.getElementById('dreamJob').value.trim();

    // Validate inputs
    if (!hobby || !subject || !dreamJob) {
        document.getElementById('output').innerText = "Please fill in all fields.";
        return;
    }

    // Generate deeper analysis and meaningful paragraph
    let insights = "";

    // Hobby analysis
    const creativeHobbies = ["painting", "writing", "music", "acting", "designing"];
    const technicalHobbies = ["coding", "robotics", "gaming", "electronics", "3D modeling"];
    const socialHobbies = ["debating", "public speaking", "volunteering", "teaching", "networking"];

    if (creativeHobbies.includes(hobby.toLowerCase())) {
        insights += `Your passion for ${hobby} reveals a strong inclination towards creativity and artistic expression. `;
    } else if (technicalHobbies.includes(hobby.toLowerCase())) {
        insights += `Your interest in ${hobby} suggests that you enjoy analytical problem-solving and technology-driven fields. `;
    } else if (socialHobbies.includes(hobby.toLowerCase())) {
        insights += `Since you love ${hobby}, it shows that you excel in communication and leadership skills. `;
    } else {
        insights += `Your interest in ${hobby} is unique and could open doors to unconventional career paths. `;
    }

    // Subject analysis
    const scienceSubjects = ["physics", "chemistry", "biology", "mathematics", "computer science"];
    const commerceSubjects = ["economics", "accounting", "business studies", "finance"];
    const humanitiesSubjects = ["history", "philosophy", "sociology", "psychology", "literature"];

    if (scienceSubjects.includes(subject.toLowerCase())) {
        insights += `Excelling in ${subject} indicates that you have a logical and scientific mindset, which aligns well with research, engineering, and innovation-based careers. `;
    } else if (commerceSubjects.includes(subject.toLowerCase())) {
        insights += `Your proficiency in ${subject} highlights your analytical abilities, making finance, entrepreneurship, and business management promising career paths. `;
    } else if (humanitiesSubjects.includes(subject.toLowerCase())) {
        insights += `Being skilled in ${subject} suggests a deep understanding of human behavior and society, which can be beneficial in journalism, counseling, or academia. `;
    } else {
        insights += `Your excellence in ${subject} sets you apart and provides a foundation for interdisciplinary opportunities. `;
    }

    // Career alignment
    insights += `Considering your aspiration to become a ${dreamJob}, your combined skills and interests indicate that you would thrive in a career that blends `;
    
    if (creativeHobbies.includes(hobby.toLowerCase()) && scienceSubjects.includes(subject.toLowerCase())) {
        insights += `art and technology, such as UX design, game development, or digital media. `;
    } else if (technicalHobbies.includes(hobby.toLowerCase()) && scienceSubjects.includes(subject.toLowerCase())) {
        insights += `engineering, artificial intelligence, or software development. `;
    } else if (socialHobbies.includes(hobby.toLowerCase()) && commerceSubjects.includes(subject.toLowerCase())) {
        insights += `marketing, business leadership, or public relations. `;
    } else {
        insights += `various fields, ranging from traditional to emerging professions, where you can apply both your knowledge and passion effectively. `;
    }

    // Final output
    const paragraph = `You enjoy ${hobby}, excel at ${subject}, and dream of becoming a ${dreamJob}. ${insights} Keep exploring and refining your skills to turn this vision into reality!`;

    // Display the paragraph on the webpage
    document.getElementById('output').innerText = paragraph;
}

// Function to generate random input using Faker.js
function generateRandomData() {
    document.getElementById('hobby').value = faker.random.arrayElement([
        "painting", "coding", "robotics", "acting", "volunteering", "music", "gaming", "3D modeling"
    ]);

    document.getElementById('subject').value = faker.random.arrayElement([
        "physics", "chemistry", "biology", "mathematics", "computer science",
        "economics", "business studies", "finance", "history", "psychology"
    ]);

    document.getElementById('dreamJob').value = faker.random.arrayElement([
        "scientist", "engineer", "artist", "game developer", "entrepreneur",
        "actor", "data analyst", "writer", "doctor", "teacher"
    ]);
}
