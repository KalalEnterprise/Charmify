document.addEventListener('DOMContentLoaded', () => {
    const charmScores = [
        { date: '2025-03-20', score: 85 },
        { date: '2025-03-21', score: 90 },
        { date: '2025-03-22', score: 88 },
        { date: '2025-03-23', score: 92 },
    ];

    const mostUsedLines = [
        'Hello, how are you?',
        'What’s your favorite hobby?',
        'Do you like traveling?',
        'What’s your favorite book?',
    ];

    const userProgress = {
        completedChallenges: [1, 2, 3, 4, 5],
        badges: ['5 Challenges Completed'],
    };

    const charmScoresList = document.getElementById('charm-scores');
    charmScores.forEach(score => {
        const li = document.createElement('li');
        li.textContent = `${score.date}: ${score.score}`;
        charmScoresList.appendChild(li);
    });

    const mostUsedLinesList = document.getElementById('most-used-lines');
    mostUsedLines.forEach(line => {
        const li = document.createElement('li');
        li.textContent = line;
        mostUsedLinesList.appendChild(li);
    });

    const completedChallengesList = document.createElement('ul');
    userProgress.completedChallenges.forEach(challengeId => {
        const li = document.createElement('li');
        li.textContent = `Challenge ${challengeId} completed`;
        completedChallengesList.appendChild(li);
    });

    const badgesList = document.createElement('ul');
    userProgress.badges.forEach(badge => {
        const li = document.createElement('li');
        li.textContent = badge;
        badgesList.appendChild(li);
    });

    const progressSection = document.createElement('div');
    progressSection.classList.add('stat');
    progressSection.innerHTML = '<h2>Completed Challenges</h2>';
    progressSection.appendChild(completedChallengesList);

    const badgesSection = document.createElement('div');
    badgesSection.classList.add('stat');
    badgesSection.innerHTML = '<h2>Badges</h2>';
    badgesSection.appendChild(badgesList);

    document.querySelector('.stats').appendChild(progressSection);
    document.querySelector('.stats').appendChild(badgesSection);

    const ctx = document.getElementById('progress-chart').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: charmScores.map(score => score.date),
            datasets: [{
                label: 'Charm Score',
                data: charmScores.map(score => score.score),
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                fill: true,
            }]
        },
        options: {
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Date'
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Charm Score'
                    },
                    beginAtZero: true
                }
            }
        }
    });
});