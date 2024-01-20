var data = {
    my_name: "John Doe",
    designation: "Frontend Developer",
    experience: "3+ years",
    education: "B.Sc. Bachelors Degree",
    projects: "12 completed projects",
    clients: "3 active clients",
    linkedin: "https://www.linkedin.com/in/m-nadeem-asghar-82268478/",
    github: "https://github.com/mnadeemasghar",
    email: "m.nadeem.asghar@hotmail.com",
    experienceData: [
        {
            title: "Frontend Development",
            skills: [
                { name: "HTML", level: "Experienced" },
                { name: "CSS", level: "Experienced" },
                { name: "SASS", level: "Intermediate" },
                { name: "JavaScript", level: "Basic" },
                { name: "TypeScript", level: "Basic" },
                { name: "Material UI", level: "Intermediate" },
            ],
        },
        {
            title: "Backend Development",
            skills: [
                { name: "Node JS", level: "Intermediate" },
                { name: "Express JS", level: "Intermediate" },
                { name: "Git", level: "Intermediate" },
                { name: "Laravel", level: "Experienced" },
                { name: "Payment Gateways", level: "Intermediate" },
                { name: "Firebase Notifications", level: "Experienced" },
            ],
        },
    ],
};

function renderDataToClass(data) {
    for (var key in data) {
        if (data.hasOwnProperty(key)) {
            var variable = data[key];
            var class_name = key;

            const elements = document.getElementsByClassName(class_name);

            for (var i = 0; i < elements.length; i++) {
                if (elements[i].tagName.toLowerCase() === "a") {
                    // If the element is an anchor (a) tag, set the href attribute
                    if (class_name === 'email') {
                        elements[i].href = "mailto:" + variable;
                        elements[i].innerHTML = variable;
                    } else {
                        elements[i].href = variable;
                    }
                } else {
                    elements[i].innerHTML = variable;
                }
            }
        }
    }

    // Additional logic for generating experience HTML
    var section = document.getElementById("experience");

    // Clear existing content
    section.innerHTML = "";

    // Add new content
    var titleParagraph = document.createElement("p");
    titleParagraph.className = "section__text__p1";
    titleParagraph.textContent = "Explore My";
    section.appendChild(titleParagraph);

    var titleHeading = document.createElement("h1");
    titleHeading.className = "title";
    titleHeading.textContent = "Experience";
    section.appendChild(titleHeading);

    var detailsContainer = document.createElement("div");
    detailsContainer.className = "experience-details-container";
    section.appendChild(detailsContainer);

    data.experienceData.forEach((category) => {
        var categoryContainer = document.createElement("div");
        categoryContainer.className = "about-containers";
        detailsContainer.appendChild(categoryContainer);

        var detailsContainerTitle = document.createElement("h2");
        detailsContainerTitle.className = "experience-sub-title";
        detailsContainerTitle.textContent = category.title;
        categoryContainer.appendChild(detailsContainerTitle);

        var articleContainer = document.createElement("div");
        articleContainer.className = "article-container";
        categoryContainer.appendChild(articleContainer);

        category.skills.forEach((skill) => {
            var article = document.createElement("article");

            var icon = document.createElement("img");
            icon.src = "./assets/checkmark.png";
            icon.alt = "Experience icon";
            icon.className = "icon";
            article.appendChild(icon);

            var skillDetails = document.createElement("div");

            var skillName = document.createElement("h3");
            skillName.textContent = skill.name;

            var skillLevel = document.createElement("p");
            skillLevel.textContent = skill.level;

            skillDetails.appendChild(skillName);
            skillDetails.appendChild(skillLevel);
            article.appendChild(skillDetails);

            articleContainer.appendChild(article);
        });
    });
}

// Call the function with your data
renderDataToClass(data);
