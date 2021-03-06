const boardData =
    [
        {
            "_id": "b101",
            "title": "Robot dev proj",
            "createdAt": 1589983468418,
            "createdBy": {
                "_id": "u101",
                "fullname": "MosheDabush",
                "imgUrl": "http://some-img"
            },
            "style": {
            },
            "labels": [
                {
                    "id": "l101",
                    "title": "Done",
                    "color": "#61bd4f"
                }
            ],
            "members": [
                {
                    "_id": "u103",
                    "fullname": "DanKatorza",
                    "imgUrl": "https://www.google.com"
                }
            ],
            "groups": [
                {
                    "id": "g101",
                    "title": "Group 1",
                    "tasks": [
                        {
                            "id": "c101",
                            "title": "Replace logo",
                            "description": "description",
                        },
                        {
                            "id": "c102",
                            "title": "Add Samples",
                            "description": "description",
                        }
                    ],
                    "style": {}
                },
                {
                    "id": "g102",
                    "title": "Group 2",
                    "tasks": [
                        {
                            "id": "c103",
                            "title": "Do that",
                            "description": "description",
                        },
                        {
                            "id": "c104",
                            "title": "Help me",
                            "description": "description",
                            "comments": [
                                {
                                    "id": "ZdPnm",
                                    "txt": "also @yaronb please CR this",
                                    "createdAt": 1590999817436.0,
                                    "byMember": {
                                        "_id": "u103",
                                        "fullname": "DanKatorza",
                                        "imgUrl": "http://res.cloudinary.com/shaishar9/image/upload/v1590850482/j1glw3c9jsoz2py0miol.jpg"
                                    }
                                }
                            ],
                            "checklists": [
                                {
                                    "id": "YEhmF",
                                    "title": "Checklist",
                                    "todos": [
                                        {
                                            "id": "212jX",
                                            "title": "To Do 1",
                                            "isDone": false
                                        }
                                    ]
                                }
                            ],
                            "members": [
                                {
                                    "_id": "u103",
                                    "username": "DanKatorza",
                                    "fullname": "Dan Katorza",
                                    "imgUrl": "http://res.cloudinary.com/shaishar9/image/upload/v1590850482/j1glw3c9jsoz2py0miol.jpg"
                                }
                            ],
                            "labelIds": ["l101", "l102"],
                            "createdAt": 1590999730348,
                            "dueDate": 16156215211,
                            "byMember": {
                                "_id": "u103",
                                "username": "DanKatorza",
                                "fullname": "Dan Katorza",
                                "imgUrl": "http://res.cloudinary.com/shaishar9/image/upload/v1590850482/j1glw3c9jsoz2py0miol.jpg"
                            },
                            "style": {
                                "bgColor": "#26de81"
                            }
                        }
                    ],
                    "style": {}
                },
                {
                    "id": "g103",
                    "title": "Group 3",
                    "tasks": [
                        {
                            "id": "c105",
                            "title": "setup server",
                            "description": "description",
                        },
                        {
                            "id": "c106",
                            "title": "conver css to scss",
                            "description": "description",
                        }
                    ],
                    "style": {}
                },
            ],
            "activities": [
                {
                    "id": "a101",
                    "txt": "Changed Color",
                    "createdAt": 154514,
                    "byMember": {
                        "_id": "u102",
                        "fullname": "Moshe Dabush",
                        "imgUrl": "http://some-img"
                    },
                    "task": {
                        "id": "c101",
                        "title": "Replace Logo",

                    }
                }
            ],
        }

    ]

export default boardData;
