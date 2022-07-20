function sakura() {
    
    let message = '';
    let sakura = Math.floor(Math.random() *4);

if (sakura === 0) {
    message = 'レインボー階段'
} else if (sakura === 1) {
    message = '雪柳の道'
} else if (sakura === 2) {
    message = '桜花の道'    
} else {
    message = 'しだれ桜'
}

const result = document.querySelector('#result');
result.innerHTML = `最初に行くべき場所は<br>${message}です！`;

}

function tohyo(vote) {
        
        let message = '';

    if (vote === 1) {
        message = 'いいセンスしてるね！';
    } else if (vote === 2) {
        message = 'わかってるじゃん！';
    } else if (vote === 3) {
        message = 'いい目をしている。';
    } else {
        message = 'やるじゃん！';
    }

    alert(message);
}