var randomId = require('random-id');

// Note:
// membersID:
// Priority --> 1: high, 2: medium, 3: low

const TasksData = [
    {
        id: randomId(5, "aA0"),
        name: "Soạn ReactJS",
        labelArr: ["Frontend", "Backend"],
        priority: 1,
        memberIDArr: ["user_2"],
        status: 2,
        description: "Phải soạn ReactJS kèm với NodeJS và Redux"
    },
    {
        id: randomId(5, "aA0"),
        name: "Dạy Angular",
        labelArr: ["Issue", "API"],
        priority: 2,
        memberIDArr: ["user_4", "user_5"],
        status: 1,
        description: "Nội dung của Angular rất dài và khó"
    },
    {
        id: randomId(5, "aA0"),
        name: "Dạy NodeJS",
        labelArr: ["API", "Backend"],
        priority: 1,
        memberIDArr: ["user_1"],
        status: 1,
        description: "Lorem is sum"
    },
    {
        id: randomId(5, "aA0"),
        name: "Soạn VueJS",
        labelArr: ["Frontend", "Issue"],
        priority: 3,
        memberIDArr: ["user_3"],
        status: 2,
        description: "Lưu ý so sánh VueJS với ReactJS và Angular"
    },
]

export default TasksData;