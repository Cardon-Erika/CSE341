exports.getProfessional = (req, res, next) => {
    res.status(200).json({
        professionalName: "Erika",
        nameLink: {firstName: "Erika ", url: "https://www.instagram.com/ecardon29/"},
        primaryDescription: "Web Development Major",
        workDescription1: "Front End Development",
        workDescription2: "Business Management",
        linkTitleText: "Find Me Online",
        linkedInLink: {text: "LinkedIn", link: "https://www.linkedin.com/in/erikacardon/"},
        githubLink: {text: "GitHub", link: "https://github.com/Cardon-Erika/CSE341"}
    });
};

// exports.createPost = (req, res, next) => {
//     const title = req.body.title;
//     const content = req.body.content;
//     //Create post in db
//     res.status(201).json({
//         message: 'Post created successfully!',
//         post: { id: new Date().toISOString(), title: title, content: content }
//     });
// };
