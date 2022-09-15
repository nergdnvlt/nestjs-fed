const fetch = require('node-fetch');

exports.helloPubSub = (event, context) => {
    async function fetchAll(randomClient, randomVersion) {
        const response = await fetch('URL', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'apollographql-client-name': randomClient,
                'apollographql-client-version': randomVersion
            },
            body:JSON.stringify({ query: `query getAllPosts {
                posts {
                    id
                    title
                    user {
                        name
                    }
                }
            }`})
        })
        .then((res) => res.json())
        .then((result) => {
            console.log(result.data)
            return result.data
        });
        return response
    };

    async function fetchUser(randomClient, randomVersion, randomUser) {
        const response = await fetch('URL', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'apollographql-client-name': randomClient,
                'apollographql-client-version': randomVersion
            },
            body:JSON.stringify({ 
                query: `query getUserInfo($userId: ID!) {
                    getUser(id: $userId) {
                        name
                        age
                        email
                    }
                }`,
                variables: {
                    userId: randomUser
                }
            })
        })
        .then((res) => res.json())
        .then((result) => {
            console.log(result.data)
            return result.data
        });
        return response
    }; 

    async function legacyUser(randomUser) {
        const response = await fetch('URL', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'apollographql-client-name': 'iOS',
                'apollographql-client-version': '0.8-legacy'
            },
            body:JSON.stringify({ 
                query: `query getLegacyUser($userId: ID!) {
                    user(id: $userId) {
                        name
                        username
                    }
                }`,
                variables: {
                    userId: randomUser
                }
            })
        })
        .then((res) => res.json())
        .then((result) => {
            console.log(result.data)
            return result.data
        });
        return response
    }; 



    let clients = [
        'iOS',
        'Web',
        'Admin',
        'Android'
    ]

    let randomClient = clients[Math.floor(Math.random() * clients.length)];
    let versions = [
        '1.0',
        '2.0'
    ]
    let randomVersion = null;

    if(randomClient == 'iOS' | 'Android'){
        randomVersion = versions[Math.floor(Math.random() * versions.length)];
    }

    let oddsArray = [1, 1, 1, 1, 1, 2, 2, 2, 2, 3 ]

    let random = oddsArray[Math.floor(Math.random() * oddsArray.length)];

    let randomUser = Math.floor(Math.random() * 8 + 1);

    let possibleTimes = [...Array(10).keys()].map(x => x + 2 )
    let times = possibleTimes[Math.floor(Math.random() * possibleTimes.length)];

    if(random === 1) {
        for (let i = 0; i < times; i++) {
            fetchAll(randomClient, randomVersion);
        }
    } else if (random === 2) {
        for (let i = 0; i < times; i++) {
            fetchUser(randomClient, randomVersion, randomUser);
        } 
    } else {
        for (let i = 0; i < 4; i++) {
            legacyUser(randomUser);
        }
    };
};